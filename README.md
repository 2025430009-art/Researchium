# ⬡ Researchium — Research-Grade Online Learning Platform

> A complete Unacademy-style educational website template built for **Researchium** — India's premier research-grade EdTech platform. Deep navy + gold academic aesthetic, fully responsive, zero dependencies.

---

## 🌐 Website Pages

| Page | File | Description |
|------|------|-------------|
| 🏠 Home | `index.html` | Hero, Courses, Live, Pricing, Blog, Testimonials, App |
| 📚 Courses | `pages/courses.html` | Full listing with search, filter sidebar, sort |
| 🔴 Live Classes | `pages/live.html` | Live sessions + upcoming schedule |
| 📝 Blog | `pages/blog.html` | Blog listing with sidebar, tags, popular posts |
| 📖 Blog Post | `pages/blog-post.html` | Full article template with sidebar |
| 💰 Pricing | `pages/pricing.html` | Plans + billing toggle + FAQ accordion |
| 👥 About | `pages/about.html` | Mission, impact stats, leadership team |
| 🔑 Login | `pages/login.html` | Split-layout sign-in page |
| ✍️ Sign Up | `pages/signup.html` | Registration with goal selector |

---

## 📁 Project Structure

```
Researchium/
├── index.html                  ← Homepage
├── css/
│   └── style.css               ← Full stylesheet (navy + gold theme)
├── js/
│   └── main.js                 ← All interactivity, course data, animations
├── pages/
│   ├── courses.html
│   ├── live.html
│   ├── blog.html
│   ├── blog-post.html
│   ├── pricing.html
│   ├── about.html
│   ├── login.html
│   └── signup.html
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions auto-deploy to GitHub Pages
├── .gitignore
└── README.md
```

---

## ✨ Features

### Design System
- 🎨 **Deep Navy + Gold** academic-premium color palette
- 🔤 **Playfair Display** (headings) + **Plus Jakarta Sans** (body) — distinctive font pairing
- ✨ **Scroll-reveal animations**, floating cards, gradient orbs
- 📱 Fully **mobile responsive** (1200px → 480px)
- 🚫 **Zero npm, zero build step** — open and run instantly

### Homepage
- Animated hero with live dashboard mockup
- 5 key stats bar (4.8M students, 3200+ courses, etc.)
- 8-category exploration grid
- Dynamic course cards (rendered via JavaScript)
- Live classes banner with real-time class cards
- 4-step learning journey section
- 4 star educators grid
- 3-tier pricing teaser
- Blog preview with featured layout
- Testimonials from real student archetypes
- App download section with rating badge
- Full footer with newsletter signup

### Courses Page
- Real-time search/filter by title, subject, tag
- Filter sidebar: category, level, price, rating, language
- Sortable dropdown (popular, rating, price)
- Pagination controls

### Live Classes
- Live sessions with viewer count + join CTA
- Upcoming sessions with reminder CTA
- Category schedule tabs

### Blog
- Article listing with thumbnail, category, author, views
- Sidebar: Popular posts, tag cloud, enroll CTA
- Individual blog post with callout boxes, related posts

### Pricing
- Monthly/Annual billing toggle (40% annual discount)
- Free / Pro Scholar (₹499) / Elite Researcher (₹999)
- Full feature comparison checklist
- FAQ accordion

### Auth Pages
- Split-screen login & signup
- Google / Facebook OAuth buttons (UI only)
- Goal selector dropdown for new users

---

## 🚀 Run Locally (3 methods)

### Method 1: Just Open (Simplest)
```bash
# Double-click index.html in your file manager
# OR open in any browser directly
```

### Method 2: Python Server (Recommended)
```bash
cd Researchium
python3 -m http.server 8080
# Visit: http://localhost:8080
```

### Method 3: Node.js
```bash
cd Researchium
npx serve .
# Visit: http://localhost:3000
```

### Method 4: VS Code Live Server
```
Install "Live Server" extension in VS Code
Right-click index.html → "Open with Live Server"
```

---

## 🐙 Deploy to GitHub Pages (Free Hosting)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "🎓 Launch Researchium platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/researchium.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repo
2. Click **Settings** → **Pages**
3. Source: **Deploy from branch**
4. Branch: **main** → **/ (root)**
5. Click **Save**

✅ Your site will be live at:
**`https://YOUR_USERNAME.github.io/researchium/`**

### Auto-Deploy (included)
The `.github/workflows/deploy.yml` file automatically deploys every time you push to `main`.

---

## 🎨 Customization

### Change Brand Colors
Edit `:root` in `css/style.css`:
```css
:root {
  --gold:    #c9a84c;  /* ← Change to your brand color */
  --navy:    #080e1e;  /* ← Change background dark color */
}
```

### Add/Edit Courses
Edit the `COURSES` array in `js/main.js`:
```javascript
const COURSES = [
  {
    id: 1,
    emoji: '⚛️',
    bg: 'linear-gradient(135deg, #0d1f3c, #1a5a9a)',
    tag: 'Your Tag',
    subj: 'Subject Name',
    title: 'Your Course Title Here',
    desc: 'Short course description · lectures count',
    rating: '4.9',
    students: '1.2M',
    price: '₹2,999',
    orig: '₹9,999',  // null if no strikethrough
    free: false
  },
  // ... add more
];
```

### Embed Real Videos
Replace emoji thumbnails with YouTube embeds:
```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
  frameborder="0" allowfullscreen
  style="width:100%;height:200px;border-radius:12px">
</iframe>
```

### Add Payment Integration (Razorpay)
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
var rzp = new Razorpay({
  key: 'YOUR_RAZORPAY_KEY',
  amount: 49900, // ₹499 in paise
  currency: 'INR',
  name: 'Researchium',
  description: 'Pro Scholar Plan',
  handler: function(response) { /* handle success */ }
});
rzp.open();
</script>
```

---

## 🔌 Backend Integration Suggestions

| Feature | Recommended Tool |
|---------|-----------------|
| Authentication | Firebase Auth / Supabase Auth |
| Database | Firebase Firestore / Supabase PostgreSQL |
| Video Hosting | Cloudinary / Bunny.net / Vimeo |
| Live Classes | Zoom SDK / Daily.co / 100ms |
| Payments | Razorpay / PayU |
| Email | SendGrid / Resend |
| Analytics | Mixpanel / Amplitude |

---

## 📱 Responsive Breakpoints

| Device | Width | Status |
|--------|-------|--------|
| Desktop | 1200px+ | ✅ Full layout |
| Laptop | 1024px | ✅ Adjusted grid |
| Tablet | 768px | ✅ Stacked layout |
| Mobile | 480px | ✅ Single column |

---

## 📄 License
MIT — Free for personal and commercial use.

---

**© 2025 Researchium Learning Pvt. Ltd.**
*Made with ❤️ in India 🇮🇳*
