/* ════════════════════════════════════════
   RESEARCHIUM — MAIN JAVASCRIPT
   ════════════════════════════════════════ */

// ── Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));

// ── Animate progress bar (hero)
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.dca-fill')?.style.setProperty('width', '68%');
  }, 1200);
});

// ── Course data
const COURSES = [
  { id:1, emoji:'⚛️', bg:'linear-gradient(135deg,#0d1f3c,#1a5a9a)', tag:'JEE Advanced 2025', subj:'Physics', title:'Complete Wave Optics & Modern Physics for JEE', desc:'280+ lectures · Chapter-wise PYQs · Doubt forum included', rating:'4.9', students:'1.4M', price:'₹2,799', orig:'₹9,999', free:false },
  { id:2, emoji:'🧬', bg:'linear-gradient(135deg,#0d2a1a,#1a7a3a)', tag:'NEET 2025', subj:'Biology', title:'NEET Biology Complete — Botany, Zoology & Genetics', desc:'NCERT-aligned · 400+ videos · Previous 10 year PYQs', rating:'4.9', students:'1.1M', price:'₹1,999', orig:'₹6,999', free:false },
  { id:3, emoji:'💻', bg:'linear-gradient(135deg,#1a0d2e,#5a2a8a)', tag:'FREE', subj:'Coding & DSA', title:'Data Structures & Algorithms — Zero to FAANG', desc:'180+ problems · Mock interviews · Certificate', rating:'4.9', students:'2.2M', price:'FREE', orig:null, free:true },
  { id:4, emoji:'🏛️', bg:'linear-gradient(135deg,#1f1500,#7a5a00)', tag:'UPSC CSE 2025', subj:'General Studies', title:'UPSC Prelims + Mains — Complete Integrated Course', desc:'GS 1–4 · Essay · CSAT · Current Affairs daily updates', rating:'4.8', students:'480K', price:'₹3,999', orig:'₹12,000', free:false },
  { id:5, emoji:'📊', bg:'linear-gradient(135deg,#0d1f2e,#1a4a6a)', tag:'CAT 2025', subj:'MBA Entrance', title:'CAT Quant, VARC & LRDI Mastery Program', desc:'60 full mocks · 2000+ practice questions · Topic videos', rating:'4.7', students:'360K', price:'₹2,499', orig:'₹7,999', free:false },
  { id:6, emoji:'🔬', bg:'linear-gradient(135deg,#1f0d0d,#7a2a2a)', tag:'FREE', subj:'Research Skills', title:'Introduction to Academic Research & Paper Writing', desc:'Literature review · Methodology · Citation · Peer review', rating:'4.8', students:'620K', price:'FREE', orig:null, free:true },
];

// ── Render courses on homepage
const grid = document.getElementById('coursesGrid');
if (grid) {
  COURSES.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'course-card reveal';
    el.style.transitionDelay = `${i * 0.08}s`;
    el.innerHTML = `
      <div class="cc-thumb" style="background:${c.bg}">
        <span>${c.emoji}</span>
        <div class="cc-tag ${c.free ? 'free-tag' : ''}">${c.tag}</div>
      </div>
      <div class="cc-body">
        <div class="cc-subject">${c.subj}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="cc-footer">
          <div class="cc-meta">
            <span>⭐ ${c.rating}</span>
            <span>👥 ${c.students}</span>
          </div>
          <div class="cc-price ${c.free ? 'free-price' : ''}">
            ${c.orig ? `<small>${c.orig}</small>` : ''}${c.price}
          </div>
        </div>
      </div>`;
    el.addEventListener('click', () => location.href = 'pages/courses.html');
    grid.appendChild(el);
  });
}

// ── Intersection Observer (scroll reveal)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.reveal, .cat-card, .step-card, .edu-card, .plan-card, .testi-card, .bp-card, .bp-featured, .live-cls-card'
).forEach(el => revealObserver.observe(el));

// ── Courses page: full listing + search/filter
const allCoursesGrid = document.getElementById('allCoursesGrid');
const searchBox      = document.getElementById('searchBox');
const filterCheckboxes = document.querySelectorAll('.filter-cb');

const ALL_COURSES = [
  ...COURSES,
  { id:7, emoji:'🔢', bg:'linear-gradient(135deg,#1a0d3a,#6a3acf)', tag:'JEE', subj:'Mathematics', title:'Integral Calculus & Differential Equations Masterclass', desc:'200+ solved examples · trick-based shortcuts', rating:'4.9', students:'870K', price:'₹1,499', orig:'₹4,999', free:false },
  { id:8, emoji:'🌐', bg:'linear-gradient(135deg,#001a2e,#005a8a)', tag:'FREE', subj:'Web Dev', title:'Full Stack Web Dev: HTML → React → Node.js → MongoDB', desc:'8 real projects · deployment guide · certificate', rating:'4.9', students:'1.6M', price:'FREE', orig:null, free:true },
  { id:9, emoji:'📝', bg:'linear-gradient(135deg,#1f1000,#8a5000)', tag:'SSC CGL', subj:'SSC & Govt Jobs', title:'SSC CGL 2025 — Tier I & II Complete Batch', desc:'Quant · English · Reasoning · GK · 35 mocks', rating:'4.6', students:'290K', price:'₹999', orig:'₹3,499', free:false },
  { id:10, emoji:'🏦', bg:'linear-gradient(135deg,#001500,#005500)', tag:'Banking', subj:'Bank Exams', title:'IBPS PO & Clerk 2025 Complete Course', desc:'Prelims + Mains · Interview prep · 30 full mocks', rating:'4.7', students:'400K', price:'₹1,299', orig:'₹4,999', free:false },
  { id:11, emoji:'🎨', bg:'linear-gradient(135deg,#200024,#8a006a)', tag:'FREE', subj:'UI/UX Design', title:'UI/UX Design with Figma — Beginner to Pro', desc:'10 real projects · design system · job-ready portfolio', rating:'4.8', students:'580K', price:'FREE', orig:null, free:true },
  { id:12, emoji:'📈', bg:'linear-gradient(135deg,#001820,#005a6a)', tag:'CFA Level 1', subj:'Finance', title:'CFA Level 1 — Complete Exam Prep with Practice Tests', desc:'Ethics · Quant · Econ · Corp Finance · 2000+ MCQs', rating:'4.7', students:'220K', price:'₹3,499', orig:'₹9,999', free:false },
];

function renderAllCourses(data) {
  if (!allCoursesGrid) return;
  allCoursesGrid.innerHTML = '';
  const count = document.getElementById('resultsCount');
  if (count) count.textContent = `Showing ${data.length} courses`;
  data.forEach(c => {
    allCoursesGrid.innerHTML += `
      <div class="course-card reveal">
        <div class="cc-thumb" style="background:${c.bg}">
          <span>${c.emoji}</span>
          <div class="cc-tag ${c.free?'free-tag':''}">${c.tag}</div>
        </div>
        <div class="cc-body">
          <div class="cc-subject">${c.subj}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <div class="cc-footer">
            <div class="cc-meta"><span>⭐ ${c.rating}</span><span>👥 ${c.students}</span></div>
            <div class="cc-price ${c.free?'free-price':''}">
              ${c.orig?`<small>${c.orig}</small>`:''}${c.price}
            </div>
          </div>
        </div>
      </div>`;
  });
  document.querySelectorAll('#allCoursesGrid .reveal').forEach(el => revealObserver.observe(el));
}

if (allCoursesGrid) {
  renderAllCourses(ALL_COURSES);
  searchBox?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    renderAllCourses(ALL_COURSES.filter(c =>
      c.title.toLowerCase().includes(q) || c.subj.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)
    ));
  });
}

// ── FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Blog tag filter
document.querySelectorAll('.blog-tag-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.blog-tag-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── Pricing toggle
const billingToggle = document.getElementById('billingToggle');
let isAnnual = false;
billingToggle?.addEventListener('click', function() {
  isAnnual = !isAnnual;
  this.classList.toggle('annual', isAnnual);
  const proEl   = document.getElementById('proPrice');
  const eliteEl = document.getElementById('elitePrice');
  const proNote  = document.getElementById('proNote');
  const eliteNote = document.getElementById('eliteNote');
  if (proEl) proEl.innerHTML   = isAnnual ? '₹299 <span>/month</span>' : '₹499 <span>/month</span>';
  if (eliteEl) eliteEl.innerHTML = isAnnual ? '₹599 <span>/month</span>' : '₹999 <span>/month</span>';
  if (proNote)   proNote.textContent   = isAnnual ? 'Billed ₹3,588/year · Save 40%' : 'Billed monthly · Cancel anytime';
  if (eliteNote) eliteNote.textContent = isAnnual ? 'Billed ₹7,188/year · Save 40%' : 'Billed monthly · Cancel anytime';
});

// ── Schedule tabs (live page)
document.querySelectorAll('.sched-tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.sched-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  });
});

// ── Sort select (courses page)
document.getElementById('sortSelect')?.addEventListener('change', function() {
  let sorted = [...ALL_COURSES];
  if (this.value === 'rating') sorted.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating));
  if (this.value === 'price-asc') sorted.sort((a,b) => (a.free?0:parseInt(a.price.replace(/[^\d]/g,''))) - (b.free?0:parseInt(b.price.replace(/[^\d]/g,''))));
  renderAllCourses(sorted);
});
