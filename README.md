# Guru Tours & Travels

> **Explore • Experience • Together**  
> Premium Himalayan tour booking and travel agency website for Uttarakhand journeys (Kedarnath, Auli, Rishikesh, Chopta, Mussoorie, Nainital, Valley of Flowers, and Jim Corbett).

---

## 🌟 Overview

This project has been refactored into a **zero-dependency, production-ready static web bundle** designed for zero-conflict deployment on **GitHub Pages, Vercel, Netlify, Cloudflare Pages, or traditional Apache/Nginx web servers**.

### 📁 File Structure
```text
├── index.html        # Clean semantic HTML5 markup (no inline styles or onclick handlers)
├── style.css         # Complete responsive design system, variables, layouts, and animations
├── script.js         # Encapsulated ES6+ vanilla JavaScript (DOM events, modals, WhatsApp integration)
└── README.md         # Documentation & deployment guides
```

---

## 🚀 Deployment Instructions

### 1. GitHub Pages
1. Initialize git and push this repository to GitHub:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Deploy Guru Tours & Travels website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Set the branch to `main` and directory to `/ (root)`.
5. Click **Save**. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

---

### 2. Vercel
1. Install Vercel CLI or import directly from GitHub on [vercel.com](https://vercel.com).
2. For CLI deployment:
   ```bash
   npx vercel
   ```
3. When prompted, accept the default root directory `./` (no build command needed).
4. Your site will instantly be deployed with global CDN distribution.

---

### 3. Netlify
1. Log in to [netlify.com](https://www.netlify.com/).
2. Drag & drop the project folder directly into the Netlify Dashboard, or link your GitHub repository.
3. Keep the **Build command** empty and set the **Publish directory** to `./` or leave as default.
4. Click **Deploy Site**.

---

## 🛠️ Key Features Included
- **Animated Scroll Down Button**: Positioned at the bottom of the hero page with smooth-scrolling to `#packages`.
- **Integrated Himalayan Search Bar**: Quick search by destination, date, and traveler count with pre-filled enquiry generator.
- **8 Signature Tour Packages**: Dynamic filter tabs (Spiritual, Adventure, Trekking, Hill Stations, Wildlife) with pricing and day-by-day itineraries.
- **Package Detail Modal**: Day-wise schedules, inclusions, exclusions, and instant WhatsApp booking.
- **Interactive FAQs**: Animated accordions for rapid customer support.
- **Lead Capture & Direct WhatsApp API**: Pre-populated customer enquiries with transparent contact desk routing.
- **Mobile Responsive & Accessible**: Fluid typography, responsive grids, custom modal management, and screen-reader considerations.
