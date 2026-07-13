export default {
  async fetch(request) {
    if (request.method !== "POST") {
      return Response.json(
        { error: "الطريقة غير مسموحة" },
        { status: 405 }
      );
    }

    try {
      if (!process.env.OPENAI_API_KEY) {
        return Response.json(
          { error: "مفتاح OpenAI غير موجود في إعدادات Vercel" },
          { status: 500 }
        );
      }

      const body = await request.json();
      const message =
        typeof body.message === "string" ? body.message.trim() : "";

      if (!message) {
        return Response.json(
          { error: "اكتب طلبك أولًا" },
          { status: 400 }
        );
      }

      if (message.length > 5000) {
        return Response.json(
          { error: "الطلب طويل جدًا، اختصره قليلًا" },
          { status: 400 }
        );
      }

      const openAIResponse = await fetch(
        "https://api.openai.com/v1/responses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-5.5",
            instructions: `
أنت المهندس الذكي الرسمي لمنصة DARCOM.

تتحدث باللغة العربية بوضوح واحتراف، وتساعد المستخدم في تخطيط وتصميم المشاريع المعمارية، ومنها:
- الفلل والقصور والشقق والاستراحات.
- محطات الوقود والمعارض والمولات والمطاعم.
- الفنادق والمستشفيات والمدارس والمساجد.
- المصانع والمستودعات والحدائق والمسابح.

عند استلام طلب المستخدم:
1. حلّل نوع المشروع ومساحة الأرض والمتطلبات.
2. اسأل عن المعلومات الناقصة المهمة فقط.
3. اقترح توزيعًا معماريًا أوليًا عمليًا.
4. اذكر المساحات التقريبية عند توفر الأبعاد.
5. اقترح الواجهة والتصميم الداخلي واللاندسكيب.
6. راعِ الخصوصية والعادات السعودية.
7. نبّه أن التحقق من الكود السعودي مبدئي، وأن الاعتماد النهائي يحتاج مكتبًا هندسيًا مرخصًا.
8. لا تدّعِ أن مخططًا تنفيذيًا أو هندسيًا معتمدًا قد تم إنشاؤه إذا لم يكن موجودًا فعلًا.
9. نظّم الرد بعناوين قصيرة وواضحة، ولا تكثر من الكلام غير الضروري.
            `.trim(),
            input: message,
          }),
        }
      );

      const data = await openAIResponse.json();

      if (!openAIResponse.ok) {
        console.error("OpenAI API error:", data);

        return Response.json(
          {
            error:
              data?.error?.message ||
              "تعذر الحصول على رد من المهندس الذكي",
          },
          { status: openAIResponse.status }
        );
      }

      const reply =
        data.output
          ?.flatMap((item) => item.content || [])
          ?.filter((item) => item.type === "output_text")
          ?.map((item) => item.text)
          ?.join("\n")
          ?.trim() || "لم أتمكن من إعداد الرد، حاول مرة أخرى.";

      return Response.json(
        { reply },
        {
          status: 200,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    } catch (error) {
      console.error("DARCOM chat error:", error);

      return Response.json(
        {
          error: "حدث خطأ أثناء تشغيل المهندس الذكي",
        },
        { status: 500 }
      );
    }
  },
};
