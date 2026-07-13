
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const msgs=$('#messages'), input=$('#message'), toast=$('#toast');
const notify=m=>{toast.textContent=m;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2000)};
function add(text,type){const d=document.createElement('div');d.className='msg '+type;d.textContent=text;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight}
function reply(text){setTimeout(()=>{let r='ممتاز. سأحوّل طلبك إلى موجز مشروع، ثم أقترح المخطط والواجهة والتصميم الداخلي.';if(text.includes('محطة'))r='سأجمع بيانات مساحة الأرض، عدد المضخات، المداخل والمخارج، المتجر، المغسلة والشواحن الكهربائية.';if(text.includes('معرض'))r='سأقترح صالة العرض، منطقة التسليم، VIP، المكاتب والورشة مع مسار حركة واضح.';if(text.includes('فيلا'))r='سأبدأ بتوزيع المجالس والصالات والخدمات ثم أجهز 3 خيارات للمخطط.';add(r,'ai');},450)}
$('#send').onclick=()=>{const t=input.value.trim();if(!t)return;add(t,'user');input.value='';reply(t)};
input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('#send').click()}});
$$('.quick button').forEach(b=>b.onclick=()=>{input.value=b.textContent;$('#send').click()});
$$('.canvas-toolbar button').forEach(b=>b.onclick=()=>{$$('.canvas-toolbar button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#workarea h2').textContent='عرض '+b.textContent;notify('تم تغيير مساحة العرض')});
$('#saveProject').onclick=()=>{localStorage.setItem('darcom-studio-project',JSON.stringify({savedAt:new Date().toISOString(),messages:msgs.innerText}));notify('تم حفظ المشروع محلياً')};
$('#clearChat').onclick=()=>{msgs.innerHTML='<div class="msg ai">بدأنا محادثة جديدة. ما نوع المشروع؟</div>'};
const brief=JSON.parse(localStorage.getItem('darcom-brief')||'null');if(brief)add(`وجدت موجزاً محفوظاً: ${brief.type} على أرض ${brief.length}×${brief.width}م بمساحة ${brief.area}م².`,'ai');
