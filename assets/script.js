
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>{const item=b.closest('.faq-item');document.querySelectorAll('.faq-item.open').forEach(x=>{if(x!==item)x.classList.remove('open')});item.classList.toggle('open')}));
const io=('IntersectionObserver'in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('visible'));
const banner=document.querySelector('#cookie-banner');if(banner&&!localStorage.getItem('ty-cookie'))banner.hidden=false;
document.querySelectorAll('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('ty-cookie','accepted');if(banner)banner.hidden=true}));
const form=document.querySelector('#quote-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),lines=[];for(const [k,v] of d.entries())if(String(v).trim())lines.push(k+': '+v);const subject=encodeURIComponent('Freight quote request - '+(d.get('company')||d.get('name')||'Website lead'));window.location.href='mailto:xieguining04@gmail.com?subject='+subject+'&body='+encodeURIComponent(lines.join('\n'));document.querySelector('.notice')?.classList.add('show')})}
