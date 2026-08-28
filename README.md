# 🎓 Krishna Sahu - Student Portfolio Website

A clean, modern, secure-by-default, and human-readable student portfolio website built using **pure HTML5, CSS3, and Vanilla JavaScript**.

Zero frameworks. Zero build steps. Zero bloated dependencies.

---

## 🚀 1. How to Run the Website

You don't need Node.js, npm, or any build tools to run this website!

### Option A: Direct Open (Easiest)
1. Navigate to the `student-portfolio` folder on your computer.
2. Double-click **`index.html`** to open it directly in your web browser (Chrome, Edge, Firefox, Safari).

### Option B: Using VS Code Live Server
1. Open the `student-portfolio` folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## ✏️ 2. How to Edit Personal Information

All personal details, skills, projects, and certificates are located in **one single place** at the top of **`script.js`** under the `portfolio` object:

```javascript
// ===== EDIT YOUR PERSONAL INFORMATION HERE =====
const portfolio = {
  name: "Krishna Sahu",
  role: "BCA Student & Aspiring Full-Stack Developer",
  location: "Uttar Pradesh, India",
  email: "your-email@example.com",
  
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    emailLink: "mailto:your-email@example.com"
  },
  // ...
};
```

Simply update the text inside the quotation marks `""` and save the file. Refresh your browser to see the changes immediately!

---

## 🎨 3. How to Change Theme Colors

Colors and font styles are organized at the top of **`style.css`** using CSS custom properties:

```css
/* ===== EDIT THEME COLORS & SETTINGS HERE ===== */
:root {
  --bg-primary: #0b0f19;       /* Dark background */
  --bg-secondary: #111827;     /* Header / Footer background */
  --bg-card: #1f2937;          /* Card background */
  --text-primary: #f9fafb;     /* Main text color */
  --accent-primary: #3b82f6;   /* Primary button / link color (Blue) */
  --accent-secondary: #06b6d4; /* Accent badge color (Cyan) */
}
```

To change the primary theme color from blue to purple or green, update `--accent-primary` with your favorite hex code (e.g. `#8b5cf6` for purple or `#10b981` for green).

---

## 💼 4. How to Add or Edit Projects

To add a new project card, open `script.js`, scroll to `portfolio.projects`, and add a new object to the array:

```javascript
{
  id: "project-5",
  title: "My Awesome Web App",
  category: "fullstack", // "fullstack", "frontend", or "javascript"
  categoryLabel: "Full-Stack",
  description: "A short summary of what the project does.",
  image: "assets/images/project-ecommerce.svg", // Or path to your screenshot
  technologies: ["JavaScript", "HTML5", "CSS3"],
  github: "https://github.com/your-username/my-project",
  liveDemo: "https://your-username.github.io/my-project",
  features: [
    "Key feature 1",
    "Key feature 2"
  ]
}
```

The website will automatically render the new project card, apply category filtering, and enable the details popup modal!

---

## 📜 5. How to Add or Edit Certificates

Open `script.js` and edit the `portfolio.certificates` array:

```javascript
{
  title: "JavaScript Algorithms & Data Structures",
  issuer: "FreeCodeCamp",
  year: "2024",
  icon: "📜",
  link: "https://example.com/your-certificate-url"
}
```

---

## 📄 6. How to Update Your Resume

1. Save your official resume PDF file as **`krishna-sahu-resume.pdf`**.
2. Copy and paste it into the `assets/resume/` folder, replacing the existing starter PDF.
3. The "Resume", "View Resume", and "Download Resume" buttons across the website will automatically link to your updated PDF.

---

## ✉️ 7. How to Connect the Contact Form to Real Emails

The contact form includes built-in client-side validation, anti-spam honeypot protection, character limits, and duplicate-click locking.

Because static frontend sites cannot securely send emails without a backend or service, here is how to connect it to free services:

### Option A: Using Formspree (Free & Easiest)
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your Formspree endpoint URL (e.g. `https://formspree.io/f/your_form_id`).
3. In `index.html`, set the form action:
   ```html
   <form id="contact-form" action="https://formspree.io/f/your_form_id" method="POST">
   ```
4. Update `script.js`'s form submit handler to submit via `fetch()` to your Formspree URL.

### Option B: Using EmailJS
1. Create an account at [emailjs.com](https://www.emailjs.com).
2. Follow EmailJS quickstart guide to send emails directly from client JavaScript using their safe public key.

---

## 🌐 8. How to Deploy Online for Free

### Deploying to GitHub Pages (Recommended)
1. Create a new repository on GitHub named `student-portfolio` (or `<your-username>.github.io`).
2. Push all the files (`index.html`, `style.css`, `script.js`, `assets/`, `README.md`) to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/student-portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository, go to **Settings** > **Pages**.
4. Under **Branch**, select `main` and `/ (root)` folder, then click **Save**.
5. Your portfolio will be live at `https://your-username.github.io/student-portfolio/`!

### Deploying to Netlify / Vercel
- Drag and drop the `student-portfolio` folder directly onto [Netlify Drop](https://app.netlify.com/drop) or import your GitHub repo on [Vercel](https://vercel.com).

---

## 🔒 9. Security Best Practices & Recommended Headers

### Frontend Security Rules Followed in this Codebase:
- **No Secrets in Frontend**: Zero API keys, passwords, or private tokens are stored in the client files.
- **Safe DOM Manipulation**: Uses `textContent` and `createElement()` rather than unsafe `innerHTML` on user input to protect against Cross-Site Scripting (XSS).
- **Safe External Links**: All external links include `target="_blank"` with `rel="noopener noreferrer"`.
- **Honeypot Anti-Spam**: Contact form contains an invisible honeypot field to filter basic automated bot spam.

### Recommended HTTP Security Headers (for Netlify / Vercel / Nginx):
When deploying to a custom domain or host that supports header configuration, include:

```http
# Content Security Policy (Allows Google Fonts and local assets)
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; script-src 'self';

# Prevent MIME-type sniffing
X-Content-Type-Options: nosniff

# Referrer Policy
Referrer-Policy: strict-origin-when-cross-origin

# Permissions Policy
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 📂 10. File Structure

```
student-portfolio/
│
├── index.html          # Semantic HTML5 skeleton and core sections
├── style.css           # Modern CSS styling with CSS variables and media queries
├── script.js           # Central configuration + clean modular JavaScript functions
├── README.md           # This documentation and setup guide
│
└── assets/
    ├── images/         # Profile avatar & project preview SVG graphics
    │   ├── avatar.svg
    │   ├── project-ecommerce.svg
    │   ├── project-taskmanager.svg
    │   ├── project-weather.svg
    │   └── project-quiz.svg
    └── resume/
        └── krishna-sahu-resume.pdf # Resume PDF document
```

---

## 📜 License & Credit

Created with ❤️ for **Krishna Sahu**. Free to customize and use under the MIT License.
