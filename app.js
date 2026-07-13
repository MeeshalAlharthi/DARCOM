const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const toast = (message) => {
  const element = $("#toast");

  if (!element) return;

  element.textContent = message;
  element.classList.add("show");

  setTimeout(() => {
    element.classList.remove("show");
  }, 2200);
};

const auth = $("#authModal");
const pay = $("#payModal");

/* فتح نافذة الدخول أو التسجيل */
$$("[data-open]").forEach((button) => {
  button.onclick = () => {
    if (!auth) return;

    auth.classList.add("show");

    const title = $("#authTitle");

    if (title) {
      title.textContent =
        button.dataset.open === "login"
          ? "تسجيل الدخول"
          : "إنشاء حساب مجاني";
    }
  };
});

/* فتح نافذة الاشتراك */
$$("[data-paywall]").forEach((button) => {
  button.onclick = () => {
    if (pay) {
      pay.classList.add("show");
    }
  };
});

/* إغلاق النوافذ */
$$(".close").forEach((button) => {
  button.onclick = () => {
    const modal = button.closest(".modal");

    if (modal) {
      modal.classList.remove("show");
    }
  };
});

/* إغلاق النافذة عند الضغط خارجها */
$$(".modal").forEach((modal) => {
  modal.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  };
});

/* تسجيل المستخدم ثم فتح الاستوديو */
const authSubmit = $("#authSubmit");

if (authSubmit) {
  authSubmit.onclick = () => {
    const emailInput = $("#email");
    const nameInput = $("#name");

    const email = emailInput ? emailInput.value.trim() : "";
    const name = nameInput ? nameInput.value.trim() : "";

    if (!email) {
      toast("أدخل البريد الإلكتروني");
      return;
    }

    localStorage.setItem(
      "darcom-user",
      JSON.stringify({
        name,
        email,
        createdAt: new Date().toISOString(),
      })
    );

    if (auth) {
      auth.classList.remove("show");
    }

    toast("تم التسجيل بنجاح، جارٍ فتح الاستوديو...");

    setTimeout(() => {
      window.location.href = "/studio.html";
    }, 700);
  };
}

/* زر تسجيل وفتح الباقات */
const goSubscribe = $("#goSubscribe");

if (goSubscribe) {
  goSubscribe.onclick = () => {
    if (pay) {
      pay.classList.remove("show");
    }

    if (auth) {
      auth.classList.add("show");
    }

    const title = $("#authTitle");

    if (title) {
      title.textContent = "سجّل للانتقال إلى الاستوديو";
    }
  };
}

/* فلترة المشاريع */
$$(".filter").forEach((filterButton) => {
  filterButton.onclick = () => {
    $$(".filter").forEach((item) => {
      item.classList.remove("active");
    });

    filterButton.classList.add("active");

    const selected = filterButton.dataset.filter;

    $$(".project").forEach((project) => {
      project.style.display =
        selected === "الكل" || project.dataset.type === selected
          ? "block"
          : "none";
    });
  };
});

/* تصفية المشاريع من بطاقات الأقسام */
$$(".category").forEach((category) => {
  category.onclick = () => {
    location.hash = "gallery";

    const selected = category.dataset.cat;

    $$(".project").forEach((project) => {
      project.style.display =
        project.dataset.type === selected || selected === "الكل"
          ? "block"
          : "none";
    });
  };
});

/* المفضلة */
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

/* عرض المفضلة */
const showFav = $("#showFav");

if (showFav) {
  showFav.onclick = () => {
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
  };
}

/* موجز الأرض */
const previewButton = $("#previewBtn");

if (previewButton) {
  previewButton.onclick = () => {
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
  };
}
