const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const SUPABASE_URL =
  "https://jvdhsxkvyotyfviiihij.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_Xo4YBHiPtjZpJz-s1yxPrw_Pmi1Rp-b";

let supabaseClient = null;
let isSending = false;

/* تحميل مكتبة Supabase */
function loadSupabaseLibrary() {
  return new Promise((resolve, reject) => {
    if (window.supabase) {
      resolve();
      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

    script.onload = resolve;

    script.onerror = () => {
      reject(new Error("تعذر تحميل مكتبة Supabase"));
    };

    document.head.appendChild(script);
  });
}

/* حماية الاستوديو */
async function protectStudio() {
  try {
    await loadSupabaseLibrary();

    supabaseClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

    const {
      data: { session },
      error,
    } = await supabaseClient.auth.getSession();

    if (error) {
      throw error;
    }

    if (!session) {
      window.location.replace("/index.html");
      return false;
    }

    addLogoutButton(session.user);

    return true;
  } catch (error) {
    console.error(
      "خطأ التحقق من تسجيل الدخول:",
      error
    );

    window.location.replace("/index.html");

    return false;
  }
}

/* إضافة زر تسجيل الخروج */
function addLogoutButton(user) {
  const header = document.querySelector("header");

  if (
    !header ||
    document.querySelector("#logoutButton")
  ) {
    return;
  }

  const logoutButton =
    document.createElement("button");

  logoutButton.id = "logoutButton";
  logoutButton.type = "button";
  logoutButton.textContent = "تسجيل الخروج";
  logoutButton.title = user?.email || "";

  logoutButton.style.cssText = `
    background: #ffffff;
    color: #101b45;
    border: 1px solid rgba(255,255,255,.45);
    border-radius: 10px;
    padding: 9px 15px;
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;
    margin-inline: 10px;
  `;

  logoutButton.onclick = async () => {
    logoutButton.disabled = true;
    logoutButton.textContent =
      "جارٍ الخروج...";

    try {
      const { error } =
        await supabaseClient.auth.signOut();

      if (error) {
        throw error;
      }

      localStorage.removeItem("darcom-user");

      window.location.replace(
        "/index.html"
      );
    } catch (error) {
      console.error(error);

      logoutButton.disabled = false;
      logoutButton.textContent =
        "تسجيل الخروج";

      notify(
        "تعذر تسجيل الخروج، حاول مرة أخرى"
      );
    }
  };

  header.appendChild(logoutButton);
}

const msgs = $("#messages");
const input = $("#message");
const toast = $("#toast");

/* رسالة تنبيه صغيرة */
const notify = (message) => {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
};

/* إضافة رسالة داخل المحادثة */
function add(text, type) {
  if (!msgs) return null;

  const message =
    document.createElement("div");

  message.className = `msg ${type}`;
  message.textContent = text;

  msgs.appendChild(message);
  msgs.scrollTop = msgs.scrollHeight;

  return message;
}

/* الاتصال بالمهندس الذكي الحقيقي */
async function reply(text) {
  if (isSending) {
    notify(
      "انتظر حتى يكتمل الرد الحالي"
    );
    return;
  }

  isSending = true;

  const sendButton = $("#send");

  if (sendButton) {
    sendButton.disabled = true;
    sendButton.textContent =
      "جارٍ التفكير...";
  }

  const thinkingMessage = add(
    "⏳ المهندس الذكي يدرس طلبك...",
    "ai"
  );

  try {
    const response = await fetch(
      "/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      }
    );

    let data = {};

    try {
      data = await response.json();
    } catch {
      throw new Error(
        "رد الخادم غير صالح"
      );
    }

    if (thinkingMessage) {
      thinkingMessage.remove();
    }

    if (!response.ok) {
      throw new Error(
        data.error ||
          "تعذر الحصول على رد من المهندس الذكي"
      );
    }

    const answer =
      typeof data.reply === "string"
        ? data.reply.trim()
        : "";

    if (!answer) {
      throw new Error(
        "لم يصل رد من المهندس الذكي"
      );
    }

    add(answer, "ai");
  } catch (error) {
    if (
      thinkingMessage &&
      thinkingMessage.isConnected
    ) {
      thinkingMessage.remove();
    }

    console.error(
      "خطأ الاتصال بالمهندس الذكي:",
      error
    );

    add(
      `❌ ${
        error.message ||
        "تعذر الاتصال بالمهندس الذكي"
      }`,
      "ai"
    );
  } finally {
    isSending = false;

    if (sendButton) {
      sendButton.disabled = false;
      sendButton.textContent = "إرسال";
    }

    if (input) {
      input.focus();
    }
  }
}

/* تشغيل الاستوديو */
async function initializeStudio() {
  const allowed = await protectStudio();

  if (!allowed) return;

  const sendButton = $("#send");

  if (sendButton && input) {
    sendButton.onclick = async () => {
      const text =
        input.value.trim();

      if (!text) {
        notify("اكتب طلبك أولًا");
        return;
      }

      if (isSending) {
        notify(
          "انتظر حتى يكتمل الرد الحالي"
        );
        return;
      }

      add(text, "user");
      input.value = "";

      await reply(text);
    };

    input.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key === "Enter" &&
          !event.shiftKey
        ) {
          event.preventDefault();
          sendButton.click();
        }
      }
    );
  }

  /* الأزرار السريعة */
  $$(".quick button").forEach(
    (button) => {
      button.onclick = () => {
        if (
          !input ||
          !sendButton ||
          isSending
        ) {
          return;
        }

        input.value =
          button.textContent.trim();

        sendButton.click();
      };
    }
  );

  /* أزرار المخطط والواجهة والداخلية */
  $$(".canvas-toolbar button").forEach(
    (button) => {
      button.onclick = () => {
        $$(".canvas-toolbar button").forEach(
          (item) => {
            item.classList.remove(
              "active"
            );
          }
        );

        button.classList.add("active");

        const title =
          $("#workarea h2");

        if (title) {
          title.textContent =
            `عرض ${button.textContent}`;
        }

        notify(
          "تم تغيير مساحة العرض"
        );
      };
    }
  );

  /* حفظ المشروع */
  const saveProject =
    $("#saveProject");

  if (saveProject) {
    saveProject.onclick = () => {
      localStorage.setItem(
        "darcom-studio-project",
        JSON.stringify({
          savedAt:
            new Date().toISOString(),
          messages:
            msgs?.innerText || "",
        })
      );

      notify(
        "تم حفظ المشروع محليًا"
      );
    };
  }

  /* مسح المحادثة */
  const clearChat =
    $("#clearChat");

  if (clearChat && msgs) {
    clearChat.onclick = () => {
      if (
        isSending &&
        !confirm(
          "المهندس الذكي يكتب ردًا الآن. هل تريد مسح المحادثة؟"
        )
      ) {
        return;
      }

      msgs.innerHTML = `
        <div class="msg ai">
          بدأنا محادثة جديدة.
          أخبرني: ما نوع المشروع ومساحة الأرض ومتطلباتك؟
        </div>
      `;

      notify("تم مسح المحادثة");
    };
  }

  /* قراءة موجز المشروع المحفوظ */
  try {
    const brief = JSON.parse(
      localStorage.getItem(
        "darcom-brief"
      ) || "null"
    );

    if (brief) {
      add(
        `وجدت موجزًا محفوظًا: ${
          brief.type || "مشروع"
        } على أرض ${
          brief.length || 0
        }×${
          brief.width || 0
        }م بمساحة ${
          brief.area || 0
        }م².`,
        "ai"
      );
    }
  } catch (error) {
    console.error(
      "تعذر قراءة موجز المشروع:",
      error
    );
  }
}

initializeStudio();
