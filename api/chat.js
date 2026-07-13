export default {
  async fetch(request) {
    if (request.method !== "POST") return Response.json({error:"Method not allowed"},{status:405});
    try {
      const body=await request.json();
      const message=typeof body.message==="string"?body.message.trim():"";
      const language=body.language==="en"?"en":"ar";
      if(!message)return Response.json({error:language==="ar"?"اكتب طلبك أولًا":"Write your request first"},{status:400});
      const response=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.OPENAI_API_KEY}`},body:JSON.stringify({model:"gpt-5.5",instructions:`You are the official DARCOM AI Architect. ${language==="ar"?"Reply in Arabic only.":"Reply in English only."} Help users plan villas, fuel stations, showrooms, hotels, factories, interiors, landscapes and pools. Ask only essential missing questions, provide practical space planning, respect Saudi privacy and clarify that final approval requires a licensed engineering office.`,input:message})});
      const data=await response.json();
      if(!response.ok)return Response.json({error:data?.error?.message||"OpenAI error"},{status:response.status});
      const reply=data.output?.flatMap(i=>i.content||[])?.filter(i=>i.type==="output_text")?.map(i=>i.text)?.join("\n")?.trim()||"No response";
      return Response.json({reply},{status:200,headers:{"Cache-Control":"no-store"}});
    } catch(e) {
      return Response.json({error:"DARCOM AI server error"},{status:500});
    }
  }
};