(function(){
  const root=document.documentElement, theme=document.getElementById('theme'), search=document.getElementById('search');
  const saved=localStorage.getItem('ir-theme'); if(saved==='light') root.classList.add('light');
  function updateTheme(){if(!theme)return; theme.querySelector('span').textContent=root.classList.contains('light')?'Claro':'Oscuro';}
  updateTheme(); theme?.addEventListener('click',()=>{root.classList.toggle('light');localStorage.setItem('ir-theme',root.classList.contains('light')?'light':'dark');updateTheme();});
  search?.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll('.prose h2,.prose h3').forEach(h=>{h.style.display=!q||h.textContent.toLowerCase().includes(q)?'':'none';});});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==search){e.preventDefault();search?.focus();}});
  const links=[...document.querySelectorAll('.chapters a')]; const headings=[...document.querySelectorAll('.prose h2')];
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const id=e.target.id;links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')?.includes(id)));}}),{rootMargin:'-15% 0px -75%'});headings.forEach(h=>io.observe(h));}
})();
