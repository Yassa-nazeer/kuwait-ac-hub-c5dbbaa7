// Loader
window.addEventListener('load',()=>{
  const l=document.querySelector('.loader');
  if(l) setTimeout(()=>l.classList.add('hidden'),500);
});

// Particles
(function(){
  const p=document.querySelector('.particles');
  if(!p) return;
  for(let i=0;i<28;i++){
    const s=document.createElement('span');
    s.style.left=Math.random()*100+'%';
    s.style.animationDuration=(8+Math.random()*14)+'s';
    s.style.animationDelay=(Math.random()*10)+'s';
    s.style.transform=`scale(${.4+Math.random()*1.2})`;
    p.appendChild(s);
  }
})();

// Scroll progress + back to top
const sp=document.querySelector('.scroll-progress');
const topBtn=document.querySelector('.fab-top');
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
  if(sp) sp.style.width=pct+'%';
  if(topBtn) topBtn.classList.toggle('show',h.scrollTop>500);
});
topBtn && topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Reveal on scroll
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Counters
const cio=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el=e.target;
    const target=+el.dataset.count;
    const dur=1600; const start=performance.now();
    function tick(t){
      const p=Math.min(1,(t-start)/dur);
      const v=Math.floor(target*(1-Math.pow(1-p,3)));
      el.textContent=v.toLocaleString('ar-EG')+(el.dataset.suffix||'');
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    cio.unobserve(el);
  });
},{threshold:.4});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));

// Card cursor light
document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('mousemove',e=>{
    const r=c.getBoundingClientRect();
    c.style.setProperty('--mx',(e.clientX-r.left)+'px');
    c.style.setProperty('--my',(e.clientY-r.top)+'px');
  });
});

// Mobile nav
const tog=document.querySelector('.nav-toggle');
tog && tog.addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));

// Parallax hero
const heroCard=document.querySelector('.hero-card');
if(heroCard){
  window.addEventListener('mousemove',e=>{
    const x=(e.clientX/window.innerWidth-.5)*10;
    const y=(e.clientY/window.innerHeight-.5)*10;
    heroCard.style.transform=`rotateY(${-8+x}deg) rotateX(${4-y}deg)`;
  });
}
