/* TengYoda sitewide GA4 tracking */
(function(){
  const GA4_ID='G-G1G4DZNQ9P';
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};

  const existing=document.querySelector('script[src*="googletagmanager.com/gtag/js?id='+GA4_ID+'"]');
  if(!existing){
    window.gtag('js',new Date());
    window.gtag('config',GA4_ID);
    const tag=document.createElement('script');
    tag.async=true;
    tag.src='https://www.googletagmanager.com/gtag/js?id='+GA4_ID;
    document.head.appendChild(tag);
  }

  function track(name,params){
    if(typeof window.gtag==='function'){
      window.gtag('event',name,Object.assign({
        page_location:window.location.href,
        page_title:document.title
      },params||{}));
    }
  }

  document.addEventListener('click',function(e){
    const a=e.target.closest('a');
    if(!a)return;
    const href=(a.getAttribute('href')||'').trim();
    if(!href)return;

    if(/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)){
      track('whatsapp_click',{link_url:a.href,link_text:(a.textContent||'').trim()});
    }else if(/(^|\/)quote\.html(?:$|[?#])/i.test(href)){
      track('quote_click',{link_url:a.href,link_text:(a.textContent||'').trim()});
    }else if(/^mailto:/i.test(href)){
      track('email_click',{link_url:href});
    }else if(/^tel:/i.test(href)){
      track('phone_click',{link_url:href});
    }
  });
})();


const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>{const item=b.closest('.faq-item');document.querySelectorAll('.faq-item.open').forEach(x=>{if(x!==item)x.classList.remove('open')});item.classList.toggle('open')}));
const io=('IntersectionObserver'in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('visible'));
const banner=document.querySelector('#cookie-banner');if(banner&&!localStorage.getItem('ty-cookie'))banner.hidden=false;
document.querySelectorAll('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('ty-cookie','accepted');if(banner)banner.hidden=true}));
const form=document.querySelector('#quote-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();if(typeof window.gtag==='function')window.gtag('event','quote_form_submit',{page_location:window.location.href,page_title:document.title});const d=new FormData(form),lines=[];for(const [k,v] of d.entries())if(String(v).trim())lines.push(k+': '+v);const subject=encodeURIComponent('Freight quote request - '+(d.get('company')||d.get('name')||'Website lead'));window.location.href='mailto:xieguining04@gmail.com?subject='+subject+'&body='+encodeURIComponent(lines.join('\n'));document.querySelector('.notice')?.classList.add('show')})}
