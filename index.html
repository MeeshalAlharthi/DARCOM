
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const toast=(m)=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)};
const auth=$('#authModal'), pay=$('#payModal');
$$('[data-open]').forEach(b=>b.onclick=()=>{auth.classList.add('show');$('#authTitle').textContent=b.dataset.open==='login'?'تسجيل الدخول':'إنشاء حساب مجاني'});
$$('[data-paywall]').forEach(b=>b.onclick=()=>pay.classList.add('show'));
$$('.close').forEach(b=>b.onclick=()=>b.closest('.modal').classList.remove('show'));
$$('.modal').forEach(m=>m.onclick=e=>{if(e.target===m)m.classList.remove('show')});
$('#authSubmit').onclick=()=>{const email=$('#email').value.trim();if(!email)return toast('أدخل البريد الإلكتروني');localStorage.setItem('darcom-user',JSON.stringify({name:$('#name').value,email}));auth.classList.remove('show');toast('تم حفظ الحساب التجريبي');};
$('#goSubscribe').onclick=()=>{pay.classList.remove('show');auth.classList.add('show');$('#authTitle').textContent='سجل للانتقال إلى الاشتراك'};
$$('.filter').forEach(f=>f.onclick=()=>{$$('.filter').forEach(x=>x.classList.remove('active'));f.classList.add('active');const v=f.dataset.filter;$$('.project').forEach(p=>p.style.display=v==='الكل'||p.dataset.type===v?'block':'none')});
$$('.category').forEach(c=>c.onclick=()=>{location.hash='gallery';const v=c.dataset.cat;$$('.project').forEach(p=>p.style.display=p.dataset.type===v||v==='الكل'?'block':'none')});
let favs=JSON.parse(localStorage.getItem('darcom-favs')||'[]');
$$('.project').forEach(p=>{const id=p.dataset.id,btn=p.querySelector('.fav');if(favs.includes(id))btn.textContent='♥ محفوظ';btn.onclick=()=>{favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];localStorage.setItem('darcom-favs',JSON.stringify(favs));btn.textContent=favs.includes(id)?'♥ محفوظ':'♡ حفظ';toast(favs.includes(id)?'أضيف للمفضلة':'حذف من المفضلة')};p.querySelector('.use').onclick=()=>{localStorage.setItem('darcom-reference-project',id);pay.classList.add('show')}});
$('#showFav').onclick=()=>{$$('.project').forEach(p=>p.style.display=favs.includes(p.dataset.id)?'block':'none');toast(favs.length?'عرض المفضلة':'لا توجد مفضلة بعد')};
$('#previewBtn').onclick=()=>{const l=+$('#length').value,w=+$('#width').value;if(!l||!w)return toast('أدخل الطول والعرض');const brief={length:l,width:w,area:l*w,type:$('#projectType').value,needs:$('#needs').value};localStorage.setItem('darcom-brief',JSON.stringify(brief));$('#brief').innerHTML=`مساحة الأرض <b>${brief.area} م²</b> — ${brief.type}. تم حفظ الموجز، ولإكمال التصميم افتح الاستوديو واختر الباقة.`;};
