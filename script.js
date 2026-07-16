const SITE_CONFIG={email:"xieguining04@gmail.com",whatsapp:"8618620244613",tiktok:"vinson300",instagram:"vinson08251"};
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
document.querySelectorAll('form[data-form="quote"]').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault();
 const data=new FormData(form),rows=[];
 for(const [k,v] of data.entries()) if(String(v).trim()) rows.push(`${k.replaceAll('_',' ').toUpperCase()}: ${v}`);
 const subject=encodeURIComponent('Freight Quote Request - GlobalShip Website');
 const body=encodeURIComponent(`Hello GlobalShip,

Please quote the following shipment:

${rows.join('\n')}

Thank you.`);
 window.location.href=`mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
}));
const observer=('IntersectionObserver' in window)?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12}):null;
document.querySelectorAll('.service-card,.steps>div,.route-card,.industry-card,.advantage-grid article,.testimonial-grid blockquote').forEach(el=>{el.classList.add('reveal');if(observer)observer.observe(el);else el.classList.add('is-visible');});
