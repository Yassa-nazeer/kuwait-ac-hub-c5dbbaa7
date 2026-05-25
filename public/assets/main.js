// Lightweight scripts — mobile-first
(function(){
  // Scroll progress + back to top
  const sp=document.querySelector('.scroll-progress');
  const topBtn=document.querySelector('.fab-top');
  let ticking=false;
  window.addEventListener('scroll',()=>{
    if(ticking) return;
    ticking=true;
    requestAnimationFrame(()=>{
      const h=document.documentElement;
      const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
      if(sp) sp.style.width=pct+'%';
      if(topBtn) topBtn.classList.toggle('show',h.scrollTop>500);
      ticking=false;
    });
  },{passive:true});
  topBtn && topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  // Reveal on scroll
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>{
      es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    // Counters
    const cio=new IntersectionObserver(es=>{
      es.forEach(e=>{
        if(!e.isIntersecting) return;
        const el=e.target;
        const target=+el.dataset.count;
        const dur=1200; const start=performance.now();
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
  } else {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
  }

  // Mobile nav
  const tog=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  tog && tog.addEventListener('click',()=>links && links.classList.toggle('open'));
  links && links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
})();
