const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const SUPABASE_URL = "https://jvdhsxkvyotyfviiihij.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_Xo4YBHiPtjZpJz-s1yxPrw_Pmi1Rp-b";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

let authMode = "signup";

const toast = (message) => {
  const t = $("#toast");
  if (!t) return;

  t.textContent = message;
  t.classList.add("show");

  setTimeout(() => {
    t.classList.remove("show");
  }, 2600);
};

const auth = $("#authModal");
const pay = $("#payModal");
const authTitle = $("#authTitle");
const authNotice = $("#authNotice");
const authSubmit = $("#authSubmit");
const nameInput = $("#name");
const emailInput = $("#email");
const passwordInput = $("#password");

function openAuth(mode = "signup") {
  authMode = mode;

  if (!auth) return;

  auth.classList.add("show");

  if (authTitle) {
    authTitle.textContent =
      mode === "login" ? "تسجيل الدخول" : "إنشاء حساب";
  }

  if (authSubmit) {
    authSubmit.textContent =
      mode === "login" ? "دخول" : "إنشاء الحساب";
  }

  if (nameInput) {
    nameInput.closest(".field").style.display =
      mode === "login" ? "none" : "block";
  }

  if (authNotice) {
    authNotice.textContent =
      mode === "login"
        ? "أدخل بريدك وكلمة المرور للدخول."
        : "سيتم إنشاء حسابك عبر Supabase.";
  }
}

$$("[data-open]").forEach((button) => {
  button.onclick = () => {
    openAuth(
      button.dataset.open === "login" ? "login" : "signup"
    );
  };
});

$$("[data-paywall]").forEach((button) => {
  button.onclick = () => {
    if (pay) {
      pay.classList.add("show");
    }
  };
});

$$(".close").forEach((button) => {
  button.onclick = () => {
    const modal = button.closest(".modal");

    if (modal) {
      modal.classList.remove("show");
    }
  };
});

$$(".modal").forEach((modal) => {
  modal.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  };
});

if (authSubmit) {
  authSubmit.onclick = async () => {
    const email = emailInput?.value.trim() || "";
    const password = passwordInput?.value || "";
    const name = nameInput?.value.trim() || "";

    if (!email) {
      toast("أدخل البريد الإلكتروني");
      return;
    }

    if (password.length < 6) {
      toast("كلمة المرور يجب ألا تقل عن 6 أحرف");
      return;
    }

    authSubmit.disabled = true;
    authSubmit.textContent = "جارٍ التنفيذ...";

    try {
      if (authMode === "login") {
        const { error } =
          await supabaseClient.auth.signInWithPassword({
            email,
            password,
          });

        if (error) throw error;

        toast("تم تسجيل الدخول بنجاح");

        setTimeout(() => {
          window.location.href = "/studio.html";
        }, 700);
      } else {
        const { data, error } =
          await supabaseClient.auth.signUp({
            email,
            password,
            options: {
              data: {
                full_name: name,
              },
            },
          });

        if (error) throw error;

        if (data.session) {
          toast("تم إنشاء الحساب بنجاح");

          setTimeout(() => {
            window.location.href = "/studio.html";
          }, 700);
        } else {
          toast("تم إنشاء الحساب. تحقق من بريدك لتأكيده.");

          if (authNotice) {
            authNotice.textContent =
              "أرسلنا رسالة تأكيد إلى بريدك الإلكتروني.";
          }
        }
      }
    } catch (error) {
      const message =
        error?.message === "Invalid login credentials"
          ? "البريد أو كلمة المرور غير صحيحة"
          : error?.message || "حدث خطأ، حاول مرة أخرى";

      toast(message);
    } finally {
      authSubmit.disabled = false;
      authSubmit.textContent =
        authMode === "login" ? "دخول" : "إنشاء الحساب";
    }
  };
}

const goSubscribe = $("#goSubscribe");

if (goSubscribe) {
  goSubscribe.onclick = () => {
    if (pay) {
      pay.classList.remove("show");
    }

    openAuth("signup");
  };
}

$$(".filter").forEach((filterButton) => {
  filterButton.onclick = () => {
    $$(".filter").forEach((item) => {
      item.classList.remove("active");
    });

    filterButton.classList.add("active");

    const selected = filterButton.dataset.filter;

    $$(".project").forEach((project) => {
      project.style.display =
        selected === "الكل" ||
        project.dataset.type === selected
          ? "block"
          : "none";
    });
  };
});

$$(".category").forEach((category) => {
  category.onclick = () => {
    location.hash = "gallery";

    const selected = category.dataset.cat;

    $$(".project").forEach((project) => {
      project.style.display =
        project.dataset.type === selected ||
        selected === "الكل"
          ? "block"
          : "none";
    });
  };
});

let favs = JSON.parse(
  localStorage.getItem("darcom-favs") || "[]"
);

$$(".project").forEach((project) => {
  const id = project.dataset.id;
  const favoriteButton = project.querySelector(".fav");
  const useButton = project.querySelector(".use");

  if (favoriteButton) {
    if (favs.includes(id)) {
      favoriteButton.textContent = "♥ محفوظ";
    }

    favoriteButton.onclick = () => {
      favs = favs.includes(id)
        ? favs.filter((item) => item !== id)
        : [...favs, id];

      localStorage.setItem(
        "darcom-favs",
        JSON.stringify(favs)
      );

      favoriteButton.textContent = favs.includes(id)
        ? "♥ محفوظ"
        : "♡ حفظ";

      toast(
        favs.includes(id)
          ? "أضيف للمفضلة"
          : "حُذف من المفضلة"
      );
    };
  }

  if (useButton) {
    useButton.onclick = () => {
      localStorage.setItem(
        "darcom-reference-project",
        id
      );

      if (pay) {
        pay.classList.add("show");
      }
    };
  }
});

$("#showFav")?.addEventListener("click", () => {
  $$(".project").forEach((project) => {
    project.style.display = favs.includes(
      project.dataset.id
    )
      ? "block"
      : "none";
  });

  toast(
    favs.length
      ? "عرض المفضلة"
      : "لا توجد مفضلة بعد"
  );
});

$("#previewBtn")?.addEventListener("click", () => {
  const length = Number($("#length")?.value || 0);
  const width = Number($("#width")?.value || 0);

  if (!length || !width) {
    toast("أدخل الطول والعرض");
    return;
  }

  const brief = {
    length,
    width,
    area: length * width,
    type: $("#projectType")?.value || "",
    needs: $("#needs")?.value || "",
  };

  localStorage.setItem(
    "darcom-brief",
    JSON.stringify(brief)
  );

  const briefElement = $("#brief");

  if (briefElement) {
    briefElement.innerHTML = `
      مساحة الأرض
      <b>${brief.area} م²</b>
      — ${brief.type}.
      تم حفظ الموجز، ولإكمال التصميم افتح الاستوديو.
    `;
  }
});
