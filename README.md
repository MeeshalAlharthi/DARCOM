<!doctype html>
<html lang="ar" dir="rtl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>DARCOM | داركم للتصميم المعماري بالذكاء الاصطناعي</title>
<meta name="description" content="تصفح تصاميم DARCOM السكنية والتجارية، ثم اشترك لتصمم مشروعك من مقاسات الأرض أو المخطط.">
<link rel="stylesheet" href="styles.css"></head>
<body>
<header class="topbar"><div class="container nav">
  <a class="brand" href="#"><img src="assets/darcom-logo.png" alt="DARCOM"><span>DARCOM<small>داركم للتصميم المعماري</small></span></a>
  <nav class="links"><a href="#gallery">تصاميمنا</a><a href="#types">أنواع المشاريع</a><a href="#start">هات مقاسات أرضك</a><a href="#pricing">الاشتراكات</a><a href="#code">الكود السعودي</a></nav>
  <div class="nav-actions"><button class="btn btn-light" data-open="login">دخول</button><button class="btn btn-primary" data-open="signup">سجل مجاناً</button></div>
</div></header>

<main>
<section class="hero"><div class="container hero-grid">
  <div><span class="eyebrow">✦ منصة معمارية عربية مدعومة بالذكاء الاصطناعي</span>
  <h1>صمّم أي مشروع<br><span style="color:var(--gold2)">من الفكرة إلى التصور</span></h1>
  <p>تصفح أعمالنا السكنية والتجارية مجاناً. وعندما تقرر تصميم مشروعك، أدخل مقاسات الأرض أو ارفع المخطط واختر الهوية التي تعجبك.</p>
  <div class="hero-actions"><a class="btn btn-primary" href="#gallery">تصفح تصاميمنا</a><button class="btn btn-light" data-paywall>ابدأ تصميم مشروعك</button></div>
  <div class="hero-stats"><div><b>12+</b><span>نوع مشروع</span></div><div><b>360°</b><span>تصور متكامل</span></div><div><b>AI</b><span>مهندس ذكي</span></div></div>
  </div>
  <div class="hero-image"><img src="assets/hero-platform.png" alt="واجهة منصة DARCOM"><div class="floating f1">✓ سكني وتجاري وصناعي</div><div class="floating f2">✦ اختر تصميماً وطبّقه</div></div>
</div></section>

<section class="section" id="types"><div class="container"><div class="section-title"><span class="pill">كل المشاريع في مكان واحد</span><h2>ماذا تريد أن تصمم؟</h2><p>ليست DARCOM للمنازل فقط؛ بل لأي مشروع معماري، من الفيلا حتى محطة الوقود والمصنع والفندق.</p></div>
<div class="categories">
  <article class="category" data-cat="سكني"><div class="ico">🏡</div><h3>سكني</h3><p>فلل، قصور، شقق، استراحات وشاليهات.</p></article>
  <article class="category" data-cat="تجاري"><div class="ico">🏢</div><h3>تجاري</h3><p>مولات، معارض، مطاعم، كافيهات ومكاتب.</p></article>
  <article class="category" data-cat="محطات"><div class="ico">⛽</div><h3>محطات الوقود</h3><p>مسارات المركبات، المضخات، المتجر والخدمات.</p></article>
  <article class="category" data-cat="صناعي"><div class="ico">🏭</div><h3>صناعي</h3><p>مصانع، مستودعات، ورش وهنقرات.</p></article>
  <article class="category" data-cat="ضيافة"><div class="ico">🏨</div><h3>ضيافة</h3><p>فنادق، منتجعات وشقق فندقية.</p></article>
  <article class="category" data-cat="صحي"><div class="ico">🏥</div><h3>صحي</h3><p>عيادات، مراكز طبية ومستشفيات.</p></article>
  <article class="category" data-cat="تعليمي"><div class="ico">🎓</div><h3>تعليمي وديني</h3><p>مدارس، مراكز تدريب ومساجد.</p></article>
  <article class="category" data-cat="لاندسكيب"><div class="ico">🌳</div><h3>لاندسكيب</h3><p>حدائق، مسابح، منتزهات وساحات عامة.</p></article>
</div></div></section>

<section class="section" id="gallery" style="background:#eef2f6"><div class="container">
<div class="section-title"><span class="pill">من تصاميم DARCOM</span><h2>تصفح أولاً… ثم اشترك عندما تريد التصميم</h2><p>يمكن للزائر مشاهدة المشاريع وحفظ المفضلة. بدء مشروع خاص أو تطبيق تصميم مرجعي يتطلب حساباً وباقة مدفوعة.</p></div>
<div class="gallery-toolbar"><div class="filters">
<button class="filter active" data-filter="الكل">الكل</button><button class="filter" data-filter="سكني">سكني</button><button class="filter" data-filter="تجاري">تجاري</button><button class="filter" data-filter="محطات">محطات</button><button class="filter" data-filter="صناعي">صناعي</button>
</div><button class="btn btn-light" id="showFav">♡ المفضلة</button></div>
<div class="gallery" id="galleryGrid">
<article class="project" data-type="سكني" data-id="villa"><img src="assets/hero-platform.png"><div class="project-body"><div class="project-top"><h3>فيلا مودرن فاخرة</h3><span class="tag">سكني</span></div><p>واجهة حديثة، حديقة ومسبح، وهوية داخلية موحدة.</p><div class="project-actions"><button class="btn btn-light fav">♡ حفظ</button><button class="btn btn-primary use">استخدم هذا التصميم</button></div></div></article>
<article class="project" data-type="تجاري" data-id="showroom"><img src="assets/studio-preview.png"><div class="project-body"><div class="project-top"><h3>معرض سيارات متكامل</h3><span class="tag">تجاري</span></div><p>صالة عرض، تسليم VIP، مكاتب وورشة خلفية.</p><div class="project-actions"><button class="btn btn-light fav">♡ حفظ</button><button class="btn btn-primary use">استخدم هذا التصميم</button></div></div></article>
<article class="project" data-type="محطات" data-id="station"><img src="assets/dashboard-preview.png"><div class="project-body"><div class="project-top"><h3>محطة وقود ذكية</h3><span class="tag">محطات</span></div><p>مضخات، متجر، شواحن كهربائية ومسارات آمنة.</p><div class="project-actions"><button class="btn btn-light fav">♡ حفظ</button><button class="btn btn-primary use">استخدم هذا التصميم</button></div></div></article>
<article class="project" data-type="صناعي" data-id="factory"><img src="assets/studio-preview.png"><div class="project-body"><div class="project-top"><h3>مجمع مستودعات</h3><span class="tag">صناعي</span></div><p>حركة شاحنات، تحميل، تخزين ومكاتب إدارية.</p><div class="project-actions"><button class="btn btn-light fav">♡ حفظ</button><button class="btn btn-primary use">استخدم هذا التصميم</button></div></div></article>
<article class="project" data-type="سكني" data-id="majlis"><img src="assets/dashboard-preview.png"><div class="project-body"><div class="project-top"><h3>مجلس عربي معاصر</h3><span class="tag">سكني</span></div><p>ألوان هادئة، رخام وإضاءة دافئة.</p><div class="project-actions"><button class="btn btn-light fav">♡ حفظ</button><button class="btn btn-primary use">استخدم هذا التصميم</button></div></div></article>
<article class="project" data-type="تجاري" data-id="cafe"><img src="assets/hero-platform.png"><div class="project-body"><div class="project-top"><h3>كافيه بواجهة مميزة</h3><span class="tag">تجاري</span></div><p>هوية خارجية، جلسات ومسار تشغيل واضح.</p><div class="project-actions"><button class="btn btn-light fav">♡ حفظ</button><button class="btn btn-primary use">استخدم هذا التصميم</button></div></div></article>
</div></div></section>

<section class="section" id="start"><div class="container"><div class="cta">
<div><span class="eyebrow">ابدأ من الصفر</span><h2>هات مقاسات أرضك… ونحن نتكفل بالباقي</h2><p>أدخل الأبعاد ونوع المشروع، وسنجهز رحلة تصميم تبدأ بالمخطط الأولي وتنتهي بالواجهات والداخلية واللاندسكيب.</p><p class="notice" style="color:#b9c7d6">المعاينة مجانية. حفظ المشروع وتوليد التصاميم الكاملة يتطلب اشتراكاً.</p></div>
<div class="quick-form"><div class="grid2">
<div class="field"><label>طول الأرض</label><input id="length" type="number" placeholder="مثال 30"></div>
<div class="field"><label>عرض الأرض</label><input id="width" type="number" placeholder="مثال 20"></div>
<div class="field"><label>نوع المشروع</label><select id="projectType"><option>فيلا سكنية</option><option>محطة وقود</option><option>معرض سيارات</option><option>مشروع تجاري</option><option>مصنع أو مستودع</option><option>فندق أو منتجع</option><option>مشروع آخر</option></select></div>
<div class="field"><label>عدد الشوارع</label><select><option>شارع واحد</option><option>شارعان</option><option>ثلاثة شوارع</option><option>أربعة شوارع</option></select></div>
</div><div class="field" style="margin-top:14px"><label>الاحتياجات</label><textarea id="needs" placeholder="مثال: دورين، 5 غرف، مجلس مستقل، مصعد، مسبح..."></textarea></div>
<button class="btn btn-primary full" id="previewBtn">اعرض الموجز الأولي</button><div id="brief" class="notice" style="margin-top:12px"></div>
</div></div></div></section>

<section class="section" id="code"><div class="container"><div class="card" style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center">
<div><span class="pill">وعي تنظيمي</span><h2 style="font-size:38px">مراعاة متطلبات الكود السعودي</h2><p>تُستخدم بيانات الأرض والارتدادات ونوع الاستخدام لإظهار فحوصات وتنبيهات تصميمية أولية.</p><p class="notice">الاعتماد النهائي والتنفيذ يتطلبان مراجعة مكتب هندسي مرخّص والجهات المختصة.</p></div>
<div><p>✓ الارتدادات ونسب البناء</p><p>✓ مسارات الحركة والسلامة</p><p>✓ مواقف السيارات والخدمات</p><p>✓ تقرير قابل للمشاركة مع المكتب الهندسي</p></div>
</div></div></section>

<section class="section" id="pricing"><div class="container"><div class="section-title"><span class="pill">باقات البداية</span><h2>تصفح مجاناً وادفع عندما تبدأ التصميم</h2></div>
<div class="pricing">
<div class="card price"><h3>زائر</h3><div class="amount">مجاني</div><ul><li>تصفح جميع التصاميم</li><li>حفظ المفضلة</li><li>معاينة موجز الأرض</li></ul><button class="btn btn-light full" data-open="signup">إنشاء حساب</button></div>
<div class="card price featured"><span class="pill">الأكثر طلباً</span><h3>مشروع واحد</h3><div class="amount">يحدد لاحقاً</div><ul><li>استوديو DARCOM</li><li>المهندس الذكي</li><li>تطبيق تصميم مرجعي</li><li>حفظ وتنزيل النتائج</li></ul><button class="btn btn-primary full" data-paywall>ابدأ المشروع</button></div>
<div class="card price"><h3>احترافي</h3><div class="amount">يحدد لاحقاً</div><ul><li>مشاريع متعددة</li><li>للمكاتب والمطورين</li><li>صلاحيات فريق</li><li>أولوية المعالجة</li></ul><button class="btn btn-dark full" data-open="signup">انضم لقائمة الانتظار</button></div>
</div></div></section>
</main>

<footer><div class="container foot"><div class="brand"><img src="assets/darcom-logo.png"><span>DARCOM<small>داركم</small></span></div><div>© 2026 DARCOM — نسخة MVP تجريبية</div></div></footer>

<div class="modal" id="authModal"><div class="modal-box"><div class="modal-head"><h2 id="authTitle">إنشاء حساب</h2><button class="close">×</button></div>
<div class="field"><label>الاسم</label><input id="name" placeholder="اسمك"></div><div class="field" style="margin-top:12px"><label>البريد الإلكتروني</label><input id="email" type="email" placeholder="name@example.com"></div>
<button class="btn btn-primary full" id="authSubmit">متابعة</button><p class="notice">هذه نسخة تجريبية؛ يتم حفظ الحساب محلياً في المتصفح فقط.</p></div></div>

<div class="modal" id="payModal"><div class="modal-box"><div class="modal-head"><h2>ابدأ تصميم مشروعك</h2><button class="close">×</button></div>
<p>تصفح المعرض مجاني. لفتح استوديو التصميم يجب تسجيل البريد ثم اختيار باقة.</p>
<button class="btn btn-primary full" id="goSubscribe">تسجيل وفتح الباقات</button><button class="btn btn-light full" onclick="location.href='studio.html'">معاينة الاستوديو التجريبي</button></div></div>
<div class="toast" id="toast"></div>
<script src="app.js"></script></body></html>