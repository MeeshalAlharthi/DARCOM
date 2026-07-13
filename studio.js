const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const SUPABASE_URL="https://jvdhsxkvyotyfviiihij.supabase.co",SUPABASE_KEY="sb_publishable_Xo4YBHiPtjZpJz-s1yxPrw_Pmi1Rp-b";
let supabaseClient=null,isSending=false,lang=localStorage.getItem("darcom-language")||"ar";
const tr={ar:{logout:"تسجيل الخروج",out:"جارٍ الخروج...",save:"حفظ المشروع",clear:"مسح",send:"إرسال",thinking:"جارٍ التفكير...",wait:"انتظر حتى يكتمل الرد",write:"اكتب طلبك أولًا",ai:"⏳ المهندس الذكي يدرس طلبك...",error:"تعذر الاتصال بالمهندس الذكي",saved:"تم حفظ المشروع محليًا",cleared:"تم مسح المحادثة",newChat:"بدأنا محادثة جديدة. أخبرني بنوع المشروع ومساحة الأرض.",placeholder:"مثال: صمم فيلا دورين مع مجلس ومسبح...",online:"متصل — نسخة أولية",engineer:"👷 المهندس الذكي",project:"مشروع جديد — نسخة تجريبية"},en:{logout:"Logout",out:"Logging out...",save:"Save Project",clear:"Clear",send:"Send",thinking:"Thinking...",wait:"Please wait for the current response",write:"Write your request first",ai:"⏳ The AI engineer is studying your request...",error:"Could not connect to the AI engineer",saved:"Project saved locally",cleared:"Chat cleared",newChat:"New conversation started. Tell me the project type and lot size.",placeholder:"Example: Design a two-floor villa with a majlis and pool...",online:"Online — Preview",engineer:"👷 AI Engineer",project:"New Project — Demo"}};
const t=k=>tr[lang][k]||k, msgs=$("#messages"),input=$("#message"),toast=$("#toast");
const notify=m=>{if(!toast)return;toast.textContent=m;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2200)};
function add(text,type){const d=document.createElement("div");d.className=`msg ${type}`;d.textContent=text;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;return d}
function loadSupabase(){return new Promise((r,j)=>{if(window.supabase)return r();const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";s.onload=r;s.onerror=j;document.head.appendChild(s)})}
async function protect(){try{await loadSupabase();supabaseClient=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);const{data:{session}}=await supabaseClient.auth.getSession();if(!session){location.replace("/index.html");return false}addControls();return true}catch(e){location.replace("/index.html");return false}}
function addControls(){const h=document.querySelector("header");let box=$("#studioControls");if(!box){box=document.createElement("div");box.id="studioControls";box.className="studio-controls";const l=document.createElement("button");l.id="studioLang";l.onclick=()=>{lang=lang==="ar"?"en":"ar";localStorage.setItem("darcom-language",lang);applyLanguage();
    try{
      const first=JSON.parse(localStorage.getItem("darcom-ai-first-message")||"null");
      if(first?.message){
        localStorage.removeItem("darcom-ai-first-message");
        setTimeout(()=>{input.value=first.message;b.click()},500);
      }
    }catch(e){console.error(e)}
  };const o=document.createElement("button");o.id="logoutButton";o.onclick=async()=>{o.disabled=true;o.textContent=t("out");await supabaseClient.auth.signOut();location.replace("/index.html")};box.append(l,o);h.appendChild(box)}applyLanguage();
    try{
      const first=JSON.parse(localStorage.getItem("darcom-ai-first-message")||"null");
      if(first?.message){
        localStorage.removeItem("darcom-ai-first-message");
        setTimeout(()=>{input.value=first.message;b.click()},500);
      }
    }catch(e){console.error(e)}
  }
function applyLanguage(){document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";$("#studioLang").textContent=lang==="ar"?"English":"العربية";$("#logoutButton").textContent=t("logout");$(".project-name").textContent=t("project");$("#saveProject").textContent=t("save");$("#clearChat").textContent=t("clear");$("#send").textContent=t("send");input.placeholder=t("placeholder");$(".chat-head b").textContent=t("engineer");$(".chat-head small").textContent=t("online")}
async function reply(text){if(isSending)return notify(t("wait"));isSending=true;const b=$("#send");b.disabled=true;b.textContent=t("thinking");const think=add(t("ai"),"ai");try{const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:text,language:lang})});const data=await r.json();think.remove();if(!r.ok)throw new Error(data.error||t("error"));add(data.reply||t("error"),"ai")}catch(e){if(think.isConnected)think.remove();add(`❌ ${e.message||t("error")}`,"ai")}finally{isSending=false;b.disabled=false;b.textContent=t("send")}}
async function init(){if(!await protect())return;const b=$("#send");b.onclick=async()=>{const text=input.value.trim();if(!text)return notify(t("write"));add(text,"user");input.value="";await reply(text)};input.onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();b.click()}};$$(".quick button").forEach(x=>x.onclick=()=>{input.value=x.textContent;b.click()});$("#saveProject").onclick=()=>{localStorage.setItem("darcom-studio-project",JSON.stringify({savedAt:new Date().toISOString(),messages:msgs.innerText,language:lang}));notify(t("saved"))};$("#clearChat").onclick=()=>{msgs.innerHTML=`<div class="msg ai">${t("newChat")}</div>`;notify(t("cleared"))};applyLanguage();
    try{
      const first=JSON.parse(localStorage.getItem("darcom-ai-first-message")||"null");
      if(first?.message){
        localStorage.removeItem("darcom-ai-first-message");
        setTimeout(()=>{input.value=first.message;b.click()},500);
      }
    }catch(e){console.error(e)}
  }
init();