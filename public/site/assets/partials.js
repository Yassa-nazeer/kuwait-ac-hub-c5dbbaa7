// Shared header/footer markup injected into pages
const PHONE = '65954080';
const WA = 'https://wa.me/96565954080?text=' + encodeURIComponent('السلام عليكم، أرغب ببيع مكيفات مستعملة');

function navHTML(active){
  const links = [
    ['index.html','الرئيسية'],
    ['about.html','من نحن'],
    ['services.html','خدماتنا'],
    ['split.html','مكيفات سبليت'],
    ['window.html','مكيفات شباك'],
    ['scrap.html','سكراب المكيفات'],
    ['areas.html','مناطق الخدمة'],
    ['gallery.html','معرض الصور'],
    ['contact.html','اتصل بنا'],
  ];
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="brand">
        <div class="logo">❄</div>
        <div class="name">الكويت لشراء المكيفات<small>شراء فوري — دفع نقدي</small></div>
      </a>
      <div class="nav-links">
        ${links.map(([h,t])=>`<a href="${h}" class="${active===h?'active':''}">${t}</a>`).join('')}
      </div>
      <div class="nav-cta">
        <a href="${WA}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">واتساب</a>
        <a href="tel:${PHONE}" class="btn btn-sm btn-primary">📞 ${PHONE}</a>
        <button class="nav-toggle" aria-label="القائمة">☰</button>
      </div>
    </div>
  </nav>`;
}

function footerHTML(){
  return `
  <footer>
    <div class="foot-grid">
      <div>
        <div class="brand">
          <div class="logo">❄</div>
          <div class="name">الكويت لشراء المكيفات<small>الشريك الأول في الكويت</small></div>
        </div>
        <p style="margin-top:14px">نقوم بشراء جميع أنواع المكيفات المستعملة وسكراب المكيفات في جميع مناطق الكويت بأفضل الأسعار، مع خدمة فك ونقل مجانية ودفع نقدي فوري.</p>
        <div class="socials">
          <a href="${WA}" aria-label="واتساب">💬</a>
          <a href="tel:${PHONE}" aria-label="اتصال">📞</a>
          <a href="#" aria-label="انستغرام">📷</a>
          <a href="#" aria-label="تويتر">🐦</a>
        </div>
      </div>
      <div>
        <h4>روابط سريعة</h4>
        <a href="index.html">الرئيسية</a>
        <a href="about.html">من نحن</a>
        <a href="services.html">خدماتنا</a>
        <a href="gallery.html">معرض الصور</a>
        <a href="contact.html">اتصل بنا</a>
      </div>
      <div>
        <h4>خدماتنا</h4>
        <a href="split.html">شراء مكيفات سبليت</a>
        <a href="window.html">شراء مكيفات شباك</a>
        <a href="scrap.html">شراء سكراب المكيفات</a>
        <a href="services.html">شراء مكيفات مركزية</a>
        <a href="services.html">فك ونقل المكيفات</a>
      </div>
      <div>
        <h4>تواصل معنا</h4>
        <p>📞 <a href="tel:${PHONE}">${PHONE}</a></p>
        <p>💬 <a href="${WA}" target="_blank" rel="noopener">واتساب مباشر</a></p>
        <p>📍 جميع مناطق الكويت</p>
        <p>🕐 خدمة 24/7 طوال الأسبوع</p>
      </div>
    </div>
    <div class="foot-bot">© ${new Date().getFullYear()} الكويت لشراء المكيفات المستعملة — جميع الحقوق محفوظة</div>
  </footer>
  <a class="fab fab-call" href="tel:${PHONE}" aria-label="اتصال">📞</a>
  <a class="fab fab-wa" href="${WA}" target="_blank" rel="noopener" aria-label="واتساب">💬</a>
  <button class="fab-top" aria-label="الأعلى">↑</button>
  <div class="mobile-bar">
    <a class="mb-call" href="tel:${PHONE}">📞 اتصل الآن</a>
    <a class="mb-wa" href="${WA}" target="_blank" rel="noopener">💬 واتساب</a>
  </div>`;
}

function bgHTML(){
  return `<div class="bg-aurora"></div><div class="bg-grid"></div><div class="particles"></div><div class="scroll-progress"></div>`;
}

function inject(active){
  document.getElementById('nav-slot').outerHTML = navHTML(active);
  document.getElementById('footer-slot').outerHTML = footerHTML();
  document.getElementById('bg-slot').outerHTML = bgHTML();
}
