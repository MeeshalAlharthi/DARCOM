const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const SUPABASE_URL =
  "https://jvdhsxkvyotyfviiihij.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_Xo4YBHiPtjZpJz-s1yxPrw_Pmi1Rp-b";

let supabaseClient = null;

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
    console.error("خطأ التحقق من تسجيل الدخول:", error);
    window.location.replace("/index.html");
    return false;
  }
}

function addLogoutButton(user) {
  const header = document.querySelector("header");

  if (!header || document.querySelector("#logoutButton")) {
    return;
  }

  const logoutButton = document.createElement("button");
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
    logoutButton.textContent = "جارٍ الخروج...";

    const { error } = await supabaseClient.auth.signOut();

    if (error) {
      console.error(error);
      logoutButton.disabled = false;
      logoutButton.textContent = "تسجيل الخروج";
      notify("تعذر تسجيل الخروج، حاول مرة أخرى");
      return;
    }

    localStorage.removeItem("darcom-user");
    window.location.replace("/index.html");
  };

  header.appendChild(logoutButton);
}

const msgs = $("#messages");
const input = $("#message");
const toast = $("#toast");

const notify = (message) => {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
};

function add(text, type) {
  if (!msgs) return;

  const message = document.createElement("div");
  message.className = `msg ${type}`;
  message.textContent = text;

  msgs.appendChild(message);
  msgs.scrollTop = msgs.scrollHeight;
}

function reply(text) {
  setTimeout(() => {
    let response =
      "ممتاز. سأحوّل طلبك إلى موجز مشروع، ثم أقترح المخطط والواجهة والتصميم الداخلي.";

    if (text.includes("محطة")) {
      response =
        "سأجمع بيانات مساحة الأرض، عدد المضخات، المداخل والمخارج، المتجر، المغسلة والشواحن الكهربائية.";
    }

    if (text.includes("معرض")) {
      response =
        "سأقترح صالة العرض، منطقة التسليم، VIP، المكاتب والورشة مع مسار حركة واضح.";
    }

    if (text.includes("فيلا")) {
      response =
        "سأبدأ بتوزيع المجالس والصالات والخدمات، ثم أجهز 3 خيارات للمخطط.";
    }

    add(response, "ai");
  }, 450);
}

async function initializeStudio() {
  const allowed = await protectStudio();

  if (!allowed) return;

  const sendButton = $("#send");

  if (sendButton && input) {
    sendButton.onclick = () => {
      const text = input.value.trim();

      if (!text) return;

      add(text, "user");
      input.value = "";
      reply(text);
    };

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendButton.click();
      }
    });
  }

  $$(".quick button").forEach((button) => {
    button.onclick = () => {
      if (!input || !sendButton) return;

      input.value = button.textContent;
      sendButton.click();
    };
  });

  $$(".canvas-toolbar button").forEach((button) => {
    button.onclick = () => {
      $$(".canvas-toolbar button").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const title = $("#workarea h2");

      if (title) {
        title.textContent = `عرض ${button.textContent}`;
      }

      notify("تم تغيير مساحة العرض");
    };
  });

  const saveProject = $("#saveProject");

  if (saveProject) {
    saveProject.onclick = () => {
      localStorage.setItem(
        "darcom-studio-project",
        JSON.stringify({
          savedAt: new Date().toISOString(),
          messages: msgs?.innerText || "",
        })
      );

      notify("تم حفظ المشروع محليًا");
    };
  }

  const clearChat = $("#clearChat");

  if (clearChat && msgs) {
    clearChat.onclick = () => {
      msgs.innerHTML =
        '<div class="msg ai">بدأنا محادثة جديدة. ما نوع المشروع؟</div>';
    };
  }

  const brief = JSON.parse(
    localStorage.getItem("darcom-brief") || "null"
  );

  if (brief) {
    add(
      `وجدت موجزًا محفوظًا: ${brief.type} على أرض ${brief.length}×${brief.width}م بمساحة ${brief.area}م².`,
      "ai"
    );
  }
}

initializeStudio();
