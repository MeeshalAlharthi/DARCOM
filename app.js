const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const SUPABASE_URL="https://jvdhsxkvyotyfviiihij.supabase.co";
const SUPABASE_KEY="sb_publishable_Xo4YBHiPtjZpJz-s1yxPrw_Pmi1Rp-b";
const supabaseClient=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

const tr={
ar:{brandSub:"داركم للتصميم المعماري",navDesigns:"تصاميمنا",navTypes:"أنواع المشاريع",navLand:"هات مقاسات أرضك",navPlans:"الاشتراكات",navCode:"الكود السعودي",login:"دخول",signup:"سجل مجاناً",heroBadge:"✦ منصة معمارية مدعومة بالذكاء الاصطناعي",heroTitle1:"صمّم أي مشروع",heroTitle2:"من الفكرة إلى التصور",heroText:"تصفح أعمالنا مجاناً، ثم أدخل مقاسات الأرض أو ارفع المخطط وابدأ التصميم.",browse:"تصفح تصاميمنا",start:"ابدأ تصميم مشروعك",stat1:"نوع مشروع",stat2:"تصور متكامل",stat3:"مهندس ذكي",allProjects:"كل المشاريع في مكان واحد",whatDesign:"ماذا تريد أن تصمم؟",residential:"سكني",residentialText:"فلل، قصور، شقق واستراحات.",commercial:"تجاري",commercialText:"مولات، معارض، مطاعم ومكاتب.",stations:"محطات الوقود",stationsShort:"محطات",stationsText:"مضخات، متجر وخدمات.",industrial:"صناعي",industrialText:"مصانع ومستودعات وورش.",ourDesigns:"من تصاميم DARCOM",galleryTitle:"تصفح أولاً ثم اشترك عندما تبدأ التصميم",all:"الكل",favorites:"♡ المفضلة",villaTitle:"فيلا مودرن فاخرة",villaText:"واجهة حديثة وحديقة ومسبح.",showroomTitle:"معرض سيارات متكامل",showroomText:"صالة عرض وتسليم VIP ومكاتب.",stationTitle:"محطة وقود ذكية",stationText:"مضخات ومتجر وشواحن كهربائية.",save:"♡ حفظ",saved:"♥ محفوظ",use:"استخدم هذا التصميم",fromScratch:"ابدأ من الصفر",landTitle:"هات مقاسات أرضك… ونحن نتكفل بالباقي",landText:"أدخل الأبعاد ونوع المشروع وسنجهز الموجز الأولي.",length:"طول الأرض",width:"عرض الأرض",projectType:"نوع المشروع",villa:"فيلا سكنية",fuelStation:"محطة وقود",carShowroom:"معرض سيارات",commercialProject:"مشروع تجاري",streets:"عدد الشوارع",needs:"الاحتياجات",needsPlaceholder:"مثال: دورين، 5 غرف، مجلس، مسبح...",showBrief:"اعرض الموجز الأولي",codeAwareness:"وعي تنظيمي",codeTitle:"مراعاة متطلبات الكود السعودي",codeText:"الفحوصات أولية، والاعتماد النهائي يحتاج مكتباً هندسياً مرخصاً.",code1:"✓ الارتدادات ونسب البناء",code2:"✓ الحركة والسلامة",code3:"✓ المواقف والخدمات",plans:"باقات البداية",pricingTitle:"تصفح مجاناً وادفع عندما تبدأ التصميم",visitor:"زائر",free:"مجاني",createAccount:"إنشاء حساب",oneProject:"مشروع واحد",later:"يحدد لاحقاً",professional:"احترافي",waitlist:"انضم لقائمة الانتظار",brandShort:"داركم",footer:"© 2026 DARCOM — نسخة تجريبية",name:"الاسم",namePlaceholder:"اسمك",email:"البريد الإلكتروني",password:"كلمة المرور",passwordPlaceholder:"6 أحرف على الأقل",payText:"تصفح المعرض مجاني. لفتح الاستوديو يجب التسجيل.",register:"تسجيل وفتح الباقات",preview:"معاينة الاستوديو",loginTitle:"تسجيل الدخول",signupTitle:"إنشاء حساب",loginButton:"دخول",signupButton:"إنشاء الحساب",loginNotice:"أدخل بريدك وكلمة المرور للدخول.",signupNotice:"سيتم إنشاء الحساب عبر Supabase.",enterEmail:"أدخل البريد الإلكتروني",shortPassword:"كلمة المرور يجب ألا تقل عن 6 أحرف",working:"جارٍ التنفيذ...",loginSuccess:"تم تسجيل الدخول بنجاح",signupSuccess:"تم إنشاء الحساب بنجاح",confirm:"تم إنشاء الحساب. تحقق من بريدك.",invalid:"البريد أو كلمة المرور غير صحيحة",error:"حدث خطأ، حاول مرة أخرى",added:"أضيف للمفضلة",removed:"حُذف من المفضلة",showing:"عرض المفضلة",noFav:"لا توجد مفضلة بعد",dimensions:"أدخل الطول والعرض",brief:"مساحة الأرض",briefSaved:"تم حفظ الموجز.",smartStartPill:"ابدأ بالطريقة التي تناسبك",smartStartTitle:"كيف تريد أن تبدأ مشروعك؟",smartStartText:"اختر المسار المناسب، ويمكنك تغيير التفاصيل لاحقًا دون أن يتوقف المشروع.",surpriseTitle:"فاجئني بتصميم",surpriseText:"أدخل نوع المشروع والمساحة فقط، واترك الباقي على DARCOM.",customTitle:"تصميم احترافي مخصص",customText:"تحكم في التفاصيل واختيار الخدمات والمرافق.",planTitle:"لدي مخطط",planText:"ارفع صورة أو PDF للمخطط، وسنكمل عليه.",existingTitle:"مشروع قائم",existingText:"تطوير أو إعادة تصميم مشروع موجود.",country:"الدولة",saudiArabia:"السعودية",uae:"الإمارات",qatar:"قطر",kuwait:"الكويت",bahrain:"البحرين",oman:"عُمان",otherCountry:"دولة أخرى",cityOptional:"المدينة (اختياري)",cityPlaceholder:"مثال: الرياض",areaOnly:"مساحة الأرض بالمتر المربع",areaPlaceholder:"مثال: 600",lengthOptional:"الطول (اختياري)",widthOptional:"العرض (اختياري)",palace:"قصر",duplex:"دوبلكس",resthouse:"استراحة",chalet:"شاليه",mall:"مول تجاري",restaurant:"مطعم",cafe:"مقهى",hotel:"فندق",factory:"مصنع",warehouse:"مستودع",workshop:"ورشة",mosque:"مسجد",school:"مدرسة",hospital:"مستشفى",weddingHall:"قصر أفراح",resort:"منتجع",suggestedSaudiFeatures:"مرافق مقترحة للمشاريع السعودية",featuresHint:"اختر ما تريده، أو اتركها لـ DARCOM ليقترح الأنسب حسب المساحة.",externalAnnex:"ملحق خارجي",majlis:"مجلس مستقل",garage:"كراج سيارات",driverRoom:"غرفة سائق",maidRoom:"غرفة خادمة",guardRoom:"غرفة حارس",indoorGarden:"حديقة داخلية",outdoorGarden:"حديقة خارجية",indoorPool:"مسبح داخلي",outdoorPool:"مسبح خارجي",bbq:"منطقة شواء",playArea:"منطقة ألعاب",extraNotes:"ملاحظات إضافية (اختياري)",extraNotesPlaceholder:"اكتب أي تعديل أو رغبة خاصة...",uploadComing:"رفع المخطط أو صورة المشروع",uploadComingText:"هذه الخطوة جاهزة في الواجهة، وسيتم ربط الرفع والتحليل في المرحلة التالية.",generateIdeas:"✨ أنشئ لي 3 أفكار",suggestBest:"اقترح الأفضل",skipDetails:"تخطي التفاصيل",chooseArea:"أدخل مساحة الأرض أو الطول والعرض",briefReady:"تم تجهيز موجز المشروع. افتح الاستوديو لمتابعة التصميم.",smartMode:"تصميم ذكي سريع",customMode:"تصميم مخصص",planMode:"تحليل مخطط",existingMode:"تطوير مشروع قائم"},
en:{brandSub:"AI Architectural Design",navDesigns:"Our Designs",navTypes:"Project Types",navLand:"Enter Lot Size",navPlans:"Plans",navCode:"Saudi Building Code",login:"Login",signup:"Sign Up Free",heroBadge:"✦ AI-powered architectural platform",heroTitle1:"Design any project",heroTitle2:"From idea to visualization",heroText:"Browse our work for free, then enter your lot dimensions or upload a plan and start designing.",browse:"Browse Designs",start:"Start Your Project",stat1:"Project Types",stat2:"Complete Vision",stat3:"AI Engineer",allProjects:"Every project in one place",whatDesign:"What would you like to design?",residential:"Residential",residentialText:"Villas, palaces, apartments and retreats.",commercial:"Commercial",commercialText:"Malls, showrooms, restaurants and offices.",stations:"Fuel Stations",stationsShort:"Stations",stationsText:"Pumps, retail and services.",industrial:"Industrial",industrialText:"Factories, warehouses and workshops.",ourDesigns:"DARCOM Designs",galleryTitle:"Browse first, subscribe when you start designing",all:"All",favorites:"♡ Favorites",villaTitle:"Luxury Modern Villa",villaText:"Modern façade, garden and pool.",showroomTitle:"Integrated Car Showroom",showroomText:"Show floor, VIP delivery and offices.",stationTitle:"Smart Fuel Station",stationText:"Pumps, retail and EV charging.",save:"♡ Save",saved:"♥ Saved",use:"Use This Design",fromScratch:"Start from scratch",landTitle:"Give us your lot dimensions… we handle the rest",landText:"Enter dimensions and project type and we will prepare the initial brief.",length:"Lot Length",width:"Lot Width",projectType:"Project Type",villa:"Residential Villa",fuelStation:"Fuel Station",carShowroom:"Car Showroom",commercialProject:"Commercial Project",streets:"Street Frontages",needs:"Requirements",needsPlaceholder:"Example: two floors, 5 rooms, majlis, pool...",showBrief:"Show Initial Brief",codeAwareness:"Regulatory Awareness",codeTitle:"Saudi Building Code Awareness",codeText:"Checks are preliminary; final approval requires a licensed engineering office.",code1:"✓ Setbacks and building ratios",code2:"✓ Circulation and safety",code3:"✓ Parking and services",plans:"Starter Plans",pricingTitle:"Browse free and pay when you start designing",visitor:"Visitor",free:"Free",createAccount:"Create Account",oneProject:"One Project",later:"Coming Soon",professional:"Professional",waitlist:"Join Waitlist",brandShort:"DARCOM",footer:"© 2026 DARCOM — Demo",name:"Name",namePlaceholder:"Your name",email:"Email",password:"Password",passwordPlaceholder:"At least 6 characters",payText:"Browsing is free. Register to open the studio.",register:"Register & View Plans",preview:"Preview Studio",loginTitle:"Login",signupTitle:"Create Account",loginButton:"Login",signupButton:"Create Account",loginNotice:"Enter your email and password.",signupNotice:"Your account will be created through Supabase.",enterEmail:"Enter your email",shortPassword:"Password must be at least 6 characters",working:"Working...",loginSuccess:"Logged in successfully",signupSuccess:"Account created successfully",confirm:"Account created. Check your email.",invalid:"Incorrect email or password",error:"Something went wrong",added:"Added to favorites",removed:"Removed from favorites",showing:"Showing favorites",noFav:"No favorites yet",dimensions:"Enter length and width",brief:"Lot area",briefSaved:"Brief saved.",smartStartPill:"Start the way that suits you",smartStartTitle:"How would you like to begin?",smartStartText:"Choose a path and change details later without blocking the project.",surpriseTitle:"Surprise Me",surpriseText:"Enter only project type and area, and let DARCOM handle the rest.",customTitle:"Custom Professional Design",customText:"Control details, facilities and services.",planTitle:"I Have a Plan",planText:"Upload a plan image or PDF and continue from it.",existingTitle:"Existing Project",existingText:"Develop or redesign an existing project.",country:"Country",saudiArabia:"Saudi Arabia",uae:"United Arab Emirates",qatar:"Qatar",kuwait:"Kuwait",bahrain:"Bahrain",oman:"Oman",otherCountry:"Other Country",cityOptional:"City (optional)",cityPlaceholder:"Example: Riyadh",areaOnly:"Lot area in square meters",areaPlaceholder:"Example: 600",lengthOptional:"Length (optional)",widthOptional:"Width (optional)",palace:"Palace",duplex:"Duplex",resthouse:"Rest House",chalet:"Chalet",mall:"Shopping Mall",restaurant:"Restaurant",cafe:"Café",hotel:"Hotel",factory:"Factory",warehouse:"Warehouse",workshop:"Workshop",mosque:"Mosque",school:"School",hospital:"Hospital",weddingHall:"Wedding Hall",resort:"Resort",suggestedSaudiFeatures:"Suggested facilities for Saudi projects",featuresHint:"Choose what you need, or let DARCOM suggest the best combination for the lot.",externalAnnex:"External Annex",majlis:"Independent Majlis",garage:"Car Garage",driverRoom:"Driver Room",maidRoom:"Maid Room",guardRoom:"Guard Room",indoorGarden:"Indoor Garden",outdoorGarden:"Outdoor Garden",indoorPool:"Indoor Pool",outdoorPool:"Outdoor Pool",bbq:"BBQ Area",playArea:"Play Area",extraNotes:"Extra notes (optional)",extraNotesPlaceholder:"Write any special request or modification...",uploadComing:"Upload a plan or project image",uploadComingText:"The upload interface is ready; file analysis will be connected in the next stage.",generateIdeas:"✨ Generate 3 Ideas",suggestBest:"Suggest the Best",skipDetails:"Skip Details",chooseArea:"Enter the lot area or both length and width",briefReady:"Project brief prepared. Open the studio to continue.",smartMode:"Smart Quick Design",customMode:"Custom Design",planMode:"Plan Analysis",existingMode:"Existing Project Redesign"}};

let lang=localStorage.getItem("darcom-language")||"ar",authMode="signup",favs=JSON.parse(localStorage.getItem("darcom-favs")||"[]");
const t=k=>tr[lang][k]||k;
function applyLanguage(l){lang=l==="en"?"en":"ar";localStorage.setItem("darcom-language",lang);document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";$$("[data-i18n]").forEach(e=>{const k=e.dataset.i18n;if(tr[lang][k])e.textContent=tr[lang][k]});$$("[data-i18n-placeholder]").forEach(e=>{const k=e.dataset.i18nPlaceholder;if(tr[lang][k])e.placeholder=tr[lang][k]});$("#languageSwitch").textContent=lang==="ar"?"English":"العربية";refreshFav();refreshAuth()}
const toast=m=>{const e=$("#toast");if(!e)return;e.textContent=m;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),2400)};
const auth=$("#authModal"),pay=$("#payModal"),authTitle=$("#authTitle"),authSubmit=$("#authSubmit"),authNotice=$("#authNotice"),nameInput=$("#name"),emailInput=$("#email"),passwordInput=$("#password");
function refreshAuth(){if(!authTitle)return;authTitle.textContent=authMode==="login"?t("loginTitle"):t("signupTitle");authSubmit.textContent=authMode==="login"?t("loginButton"):t("signupButton");nameInput.closest(".field").style.display=authMode==="login"?"none":"block";authNotice.textContent=authMode==="login"?t("loginNotice"):t("signupNotice")}
function openAuth(m){authMode=m;auth.classList.add("show");refreshAuth()}
$("#languageSwitch").onclick=()=>applyLanguage(lang==="ar"?"en":"ar");
$$("[data-open]").forEach(b=>b.onclick=()=>openAuth(b.dataset.open==="login"?"login":"signup"));
$$("[data-paywall]").forEach(b=>b.onclick=()=>pay.classList.add("show"));
$$(".close").forEach(b=>b.onclick=()=>b.closest(".modal").classList.remove("show"));
$$(".modal").forEach(m=>m.onclick=e=>{if(e.target===m)m.classList.remove("show")});
authSubmit.onclick=async()=>{const email=emailInput.value.trim(),password=passwordInput.value,name=nameInput.value.trim();if(!email)return toast(t("enterEmail"));if(password.length<6)return toast(t("shortPassword"));authSubmit.disabled=true;authSubmit.textContent=t("working");try{if(authMode==="login"){const{error}=await supabaseClient.auth.signInWithPassword({email,password});if(error)throw error;toast(t("loginSuccess"));setTimeout(()=>location.href="/studio.html",600)}else{const{data,error}=await supabaseClient.auth.signUp({email,password,options:{data:{full_name:name,preferred_language:lang}}});if(error)throw error;if(data.session){toast(t("signupSuccess"));setTimeout(()=>location.href="/studio.html",600)}else toast(t("confirm"))}}catch(e){toast(e?.message==="Invalid login credentials"?t("invalid"):e?.message||t("error"))}finally{authSubmit.disabled=false;refreshAuth()}};
$("#goSubscribe").onclick=()=>{pay.classList.remove("show");openAuth("signup")};
$$(".filter").forEach(b=>b.onclick=()=>{$$(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");const f=b.dataset.filter;$$(".project").forEach(p=>p.style.display=f==="all"||p.dataset.type===f?"block":"none")});
$$(".category").forEach(c=>c.onclick=()=>{location.hash="gallery";$$(".project").forEach(p=>p.style.display=p.dataset.type===c.dataset.cat?"block":"none")});
function refreshFav(){$$(".project").forEach(p=>{const b=p.querySelector(".fav");if(b)b.textContent=favs.includes(p.dataset.id)?t("saved"):t("save")})}
$$(".project").forEach(p=>{const id=p.dataset.id;p.querySelector(".fav").onclick=()=>{favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];localStorage.setItem("darcom-favs",JSON.stringify(favs));refreshFav();toast(favs.includes(id)?t("added"):t("removed"))};p.querySelector(".use").onclick=()=>pay.classList.add("show")});
$("#showFav").onclick=()=>{$$(".project").forEach(p=>p.style.display=favs.includes(p.dataset.id)?"block":"none");toast(favs.length?t("showing"):t("noFav"))};


let selectedStartMode="surprise";

function setStartMode(mode){
  selectedStartMode=mode;
  $$(".start-mode").forEach(button=>button.classList.toggle("active",button.dataset.mode===mode));
  $("#customOptions")?.classList.toggle("show",mode==="custom");
  $("#uploadPanel")?.classList.toggle("show",mode==="plan"||mode==="existing");
}

$$(".start-mode").forEach(button=>{
  button.onclick=()=>setStartMode(button.dataset.mode);
});

function selectedFeatures(){
  return [...$$('#customOptions input[type="checkbox"]:checked')].map(input=>input.value);
}

function createSmartBrief(autoSuggest=false){
  const areaInput=Number($("#landArea")?.value||0);
  const length=Number($("#length")?.value||0);
  const width=Number($("#width")?.value||0);
  const area=areaInput||(length&&width?length*width:0);

  if(!area)return toast(t("chooseArea"));

  const projectSelect=$("#projectType");
  const projectLabel=projectSelect?.options[projectSelect.selectedIndex]?.textContent||"";
  const country=$("#country")?.value||"SA";

  let features=selectedFeatures();

  if((autoSuggest||selectedStartMode==="surprise")&&country==="SA"&&["villa","palace","resthouse","chalet","duplex"].includes(projectSelect?.value)){
    features=[...new Set([...features,"external_annex","majlis","garage","driver_room","maid_room","outdoor_garden"])];
    if(area>=600)features.push("outdoor_pool");
    if(area>=900)features.push("guard_room","bbq","play_area");
  }

  const brief={
    mode:selectedStartMode,
    country,
    city:$("#city")?.value.trim()||"",
    projectType:projectSelect?.value||"",
    type:projectLabel,
    area,
    length:length||null,
    width:width||null,
    features:[...new Set(features)],
    needs:$("#needs")?.value.trim()||"",
    language:lang,
    createdAt:new Date().toISOString()
  };

  localStorage.setItem("darcom-brief",JSON.stringify(brief));

  const modeKey=selectedStartMode==="custom"?"customMode":selectedStartMode==="plan"?"planMode":selectedStartMode==="existing"?"existingMode":"smartMode";
  $("#brief").innerHTML=`<b>${t(modeKey)}</b> — ${projectLabel} — ${area} m². ${t("briefReady")}`;

  return brief;
}

$("#generateIdeas")?.addEventListener("click",()=>{
  const brief=createSmartBrief(true);
  if(!brief)return;
  localStorage.setItem("darcom-ai-first-message",JSON.stringify({
    language:lang,
    message:lang==="ar"
      ? `أنشئ لي 3 أفكار مختلفة لمشروع ${brief.type} بمساحة أرض ${brief.area} م² في ${brief.country==="SA"?"السعودية":brief.country}. راعِ الخصوصية والمتطلبات المحلية، واقترح المرافق المناسبة تلقائيًا.`
      : `Create 3 different concepts for a ${brief.type} on a ${brief.area} m² lot in ${brief.country}. Respect local culture and automatically suggest suitable facilities.`
  }));
  openAuth("signup");
});

$("#suggestBest")?.addEventListener("click",()=>createSmartBrief(true));
$("#skipDetails")?.addEventListener("click",()=>createSmartBrief(false));

setStartMode("surprise");
applyLanguage(lang);
