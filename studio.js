<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>استوديو DARCOM</title><link rel="stylesheet" href="studio.css"></head>
<body>
<header><a class="brand" href="index.html"><img src="assets/darcom-logo.png"><b>DARCOM</b></a><div class="project-name">مشروع جديد — نسخة تجريبية</div><button id="saveProject">حفظ المشروع</button></header>
<main class="studio">
<section class="canvas">
<div class="canvas-toolbar"><button data-view="plan" class="active">المخطط</button><button data-view="3d">3D</button><button data-view="exterior">الواجهة</button><button data-view="interior">الداخلية</button><button data-view="landscape">الحديقة</button></div>
<div class="workarea" id="workarea">
<div class="empty-state"><img src="assets/studio-preview.png"><h2>مساحة عمل DARCOM</h2><p>اختر نوع العرض أو اطلب من المهندس الذكي إنشاء تصور.</p><div class="cards"><span>مخطط 2D</span><span>نموذج 3D</span><span>واجهة</span><span>تصميم داخلي</span></div></div>
</div>
<div class="bottom-tools"><button>↶ تراجع</button><button>↷ إعادة</button><button>＋ غرفة</button><button>▦ أثاث</button><button>◫ خامات</button><button>☀ إضاءة</button></div>
</section>
<aside class="chat">
<div class="chat-head"><div><b>👷 المهندس الذكي</b><small>متصل — نسخة أولية</small></div><button id="clearChat">مسح</button></div>
<div class="messages" id="messages"><div class="msg ai">السلام عليكم، أنا مهندس DARCOM. أخبرني: ما نوع المشروع ومساحة الأرض؟</div></div>
<div class="quick"><button>فيلا 20×30</button><button>محطة وقود</button><button>معرض سيارات</button><button>ارفع مخطط</button></div>
<div class="composer"><textarea id="message" placeholder="مثال: صمم فيلا دورين مع مجلس ومسبح..."></textarea><button id="send">إرسال</button></div>
</aside>
</main>
<div class="toast" id="toast"></div><script src="studio.js"></script></body></html>