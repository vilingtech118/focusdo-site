# Matrio — website

Public site for the Matrio iPhone app: landing page, privacy policy and support.
Plain HTML/CSS/JS, served by GitHub Pages. No build step, no tracking.

- `index.html` — landing page
- `privacy.html` — privacy policy (App Store “Privacy Policy URL”)
- `support.html` — FAQ + contact (App Store “Support URL”)
- `assets/site.js` — language switch (en / fr / zh-Hans), screenshots, contact

**Contact address:** set `CONTACT.email` at the top of `assets/site.js`; every page picks it up.

Preview locally: `python3 -m http.server` then open http://localhost:8000.
