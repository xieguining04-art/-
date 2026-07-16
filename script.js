
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{
e.preventDefault();alert('演示表单：上线前请接入 Formspree、HubSpot 或您的 CRM。');}));
