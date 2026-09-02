/**
 * ===================================================================
 * KRISHNA SAHU - STUDENT PORTFOLIO JAVASCRIPT
 * Optimized with Ponytail YAGNI Principles: Lean, Fast & Zero Dependencies
 * ===================================================================
 */

const portfolio = {
  name: "Krishna Sahu",
  role: "BCA Student & Aspiring Full-Stack Developer",
  location: "Uttar Pradesh, India",
  email: "krishnasahu.dev@example.com",

  social: {
    github: "https://github.com/krishna-sahu-ji",
    linkedin: "https://linkedin.com/in/krishna-sahu",
    emailLink: "mailto:krishnasahu.dev@example.com",
  },

  typingPhrases: [
    "Full-Stack Web Applications",
    "Clean & Accessible Interfaces",
    "Fast & Reliable Backend APIs",
    "Modern JavaScript Solutions",
  ],

  skillCategories: [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "DOM API", "Tailwind CSS", "Flexbox & Grid"],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JSON", "Server-Side Logic", "Authentication Basics"],
    },
    {
      title: "Databases & Tools",
      icon: "🗄️",
      skills: ["MongoDB", "SQL / MySQL", "Git & GitHub", "VS Code", "Postman", "Chrome DevTools"],
    },
    {
      title: "Computer Science Core",
      icon: "🧠",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS Concepts", "Operating Systems Basics"],
    },
  ],

  projects: [
    {
      id: "project-1",
      title: "Full-Stack E-Commerce Store",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      description: "A functional online shopping application featuring dynamic product listings, category filters, interactive shopping cart, and mock checkout flow.",
      image: "assets/images/project-ecommerce.svg",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "CSS3"],
      github: "https://github.com/krishna-sahu-ji/ecommerce-store",
      liveDemo: "https://krishna-sahu-ji.github.io/ecommerce-store",
      features: [
        "Product catalog with search, price filtering, and pagination",
        "Persistent shopping cart using browser storage and REST API",
        "Responsive checkout interface with client-side validation",
        "Clean MVC folder architecture on the backend",
      ],
    },
    {
      id: "project-2",
      title: "Kanban Task Management App",
      category: "frontend",
      categoryLabel: "Frontend",
      description: "A drag-and-drop productivity dashboard designed to organize tasks across 'To-Do', 'In Progress', and 'Completed' columns with local persistence.",
      image: "assets/images/project-taskmanager.svg",
      technologies: ["JavaScript (ES6)", "HTML5 Drag & Drop", "CSS Grid", "LocalStorage"],
      github: "https://github.com/krishna-sahu-ji/task-manager",
      liveDemo: "https://krishna-sahu-ji.github.io/task-manager",
      features: [
        "Drag and drop task cards between custom status columns",
        "Auto-saves all board states seamlessly to localStorage",
        "Color-coded priority tags and due date indicators",
        "Accessible keyboard shortcuts for creating and editing tasks",
      ],
    },
    {
      id: "project-3",
      title: "Live Weather & Forecast Dashboard",
      category: "javascript",
      categoryLabel: "JavaScript API",
      description: "A clean, responsive weather application fetching real-time meteorological data, temperature metrics, humidity, and 5-day forecasts by city.",
      image: "assets/images/project-weather.svg",
      technologies: ["Vanilla JavaScript", "OpenWeather API", "CSS3 Flexbox", "Fetch API"],
      github: "https://github.com/krishna-sahu-ji/weather-dashboard",
      liveDemo: "https://krishna-sahu-ji.github.io/weather-dashboard",
      features: [
        "Instant city search with error handling for invalid locations",
        "Dynamic background changes reflecting live weather conditions",
        "Metrics display: Humidity, wind speed, pressure, and UV index",
        "Clean asynchronous code using modern async/await patterns",
      ],
    },
    {
      id: "project-4",
      title: "Interactive CS Quiz Platform",
      category: "javascript",
      categoryLabel: "JavaScript Tool",
      description: "An educational quiz web app testing computer science concepts, data structures, and web fundamentals with instant scoring and explanations.",
      image: "assets/images/project-quiz.svg",
      technologies: ["HTML5", "CSS3", "JavaScript", "JSON"],
      github: "https://github.com/krishna-sahu-ji/cs-quiz-app",
      liveDemo: "https://krishna-sahu-ji.github.io/cs-quiz-app",
      features: [
        "Timed quiz mode with randomized question pools",
        "Real-time score calculation and detailed answers review",
        "Customizable difficulty categories (Easy, Intermediate, Hard)",
        "Mobile-optimized touch layout for quick question answering",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 - 2026",
      institution: "Affiliated University / College • Uttar Pradesh, India",
      details: "Pursuing undergraduate degree focusing on software development, database administration, web technologies, and computational foundations.",
      coursework: ["Data Structures & Algorithms", "Web Technologies", "DBMS", "OOP", "Software Engineering", "Computer Networks"],
    },
    {
      degree: "Senior Secondary (Class XII - Science & Math)",
      period: "2021 - 2023",
      institution: "State / CBSE Board • Uttar Pradesh, India",
      details: "Completed higher secondary education with strong fundamentals in Mathematics, Computer Science, and Physics.",
      coursework: ["Mathematics", "Computer Science Basics", "Physics", "English"],
    },
  ],

  certificates: [
    {
      title: "Full-Stack Web Development Bootcamp",
      issuer: "Online Learning Academy",
      year: "2024",
      icon: "🏆",
      link: "https://example.com/certificate/fullstack",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "FreeCodeCamp / Coursera",
      year: "2024",
      icon: "📜",
      link: "https://example.com/certificate/javascript",
    },
    {
      title: "Git & GitHub Version Control Essentials",
      issuer: "Open Source Certification",
      year: "2023",
      icon: "🛠️",
      link: "https://example.com/certificate/git",
    },
  ],

  journey: [
    {
      phase: "Phase 1 • Foundations",
      title: "Discovered Coding & CS Fundamentals",
      description: "Started learning computer science concepts, problem-solving, logic building, C/C++, and foundational algorithms.",
    },
    {
      phase: "Phase 2 • Web Development",
      title: "Mastered Modern Frontend Engineering",
      description: "Built responsive websites using semantic HTML5, modern CSS3 (Flexbox/Grid), and Vanilla JavaScript (ES6+).",
    },
    {
      phase: "Phase 3 • Full-Stack Exploration",
      title: "Node.js, Databases & REST APIs",
      description: "Expanded into server-side programming, creating RESTful endpoints with Express, and working with MongoDB and SQL databases.",
    },
    {
      phase: "Phase 4 • Current Focus & Roadmap",
      title: "DSA Mastery, Open Source & Internship Ready",
      description: "Currently refining Data Structures & Algorithms, building production-ready projects, and seeking developer internship opportunities.",
    },
  ],
};

// ===================================================================
// APPLICATION LOGIC
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initTypingEffect();
  renderHeroSocials();
  renderSkills();
  renderProjects("all");
  initProjectFilter();
  initProjectModal();
  renderEducation();
  renderCertificates();
  renderJourney();
  renderContactDetails();
  initContactForm();
  initScrollSpy();
  initBackToTop();
  updateCurrentYear();
});

/** 1. Theme Toggle (Dark / Light) */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", initialTheme);

  toggleBtn.addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}

/** 2. Mobile Menu Navigation */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (!toggleBtn || !navMenu) return;

  const toggle = (closeOnly = false) => {
    const isOpen = closeOnly ? false : !navMenu.classList.contains("open");
    navMenu.classList.toggle("open", isOpen);
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  };

  toggleBtn.addEventListener("click", () => toggle());
  document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", () => toggle(true)));

  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains("open")) {
      toggle(true);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      toggle(true);
      toggleBtn.focus();
    }
  });
}

/** 3. Hero Typing Animation */
function initTypingEffect() {
  const target = document.getElementById("typing-text");
  if (!target || !portfolio.typingPhrases.length) return;

  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function tick() {
    const phrase = portfolio.typingPhrases[phraseIdx];
    target.textContent = phrase.substring(0, isDeleting ? charIdx - 1 : charIdx + 1);
    charIdx += isDeleting ? -1 : 1;

    let delay = isDeleting ? 40 : 80;
    if (!isDeleting && charIdx === phrase.length) {
      isDeleting = true;
      delay = 1800;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % portfolio.typingPhrases.length;
      delay = 400;
    }
    setTimeout(tick, delay);
  }
  tick();
}

/** 4. Render Hero Socials */
function renderHeroSocials() {
  const container = document.getElementById("hero-socials");
  if (!container) return;

  const links = [
    { name: "GitHub", url: portfolio.social.github, icon: "🐙" },
    { name: "LinkedIn", url: portfolio.social.linkedin, icon: "💼" },
    { name: "Email", url: portfolio.social.emailLink, icon: "✉️" },
  ];

  container.innerHTML = links
    .map(
      (l) => `<a href="${l.url}" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="${l.name}" title="${l.name}">
        <span aria-hidden="true">${l.icon}</span>
      </a>`
    )
    .join("");
}

/** 5. Render Skills */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = portfolio.skillCategories
    .map(
      (cat) => `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <span class="skill-category-icon" aria-hidden="true">${cat.icon}</span>
          <h3 class="skill-category-title">${cat.title}</h3>
        </div>
        <div class="skill-pills-list">
          ${cat.skills.map((s) => `<span class="skill-pill">${s}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

/** 6. Render Projects */
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = portfolio.projects.filter((p) => filter === "all" || p.category === filter);
  if (!filtered.length) {
    container.innerHTML = `<p class="text-muted">No projects found in this category.</p>`;
    return;
  }

  container.innerHTML = filtered
    .map(
      (p) => `
      <article class="project-card">
        <div class="project-card-img-wrap">
          <img src="${p.image}" alt="${p.title} preview" class="project-card-img" loading="lazy" />
          <span class="project-card-category">${p.categoryLabel}</span>
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-desc">${p.description}</p>
          <div class="project-tech-tags">
            ${p.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-card-actions">
            <button type="button" class="btn btn-outline btn-sm" data-modal-id="${p.id}">Details</button>
            <a href="${p.github}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="${p.liveDemo}" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </article>`
    )
    .join("");

  // Attach modal trigger listeners
  container.querySelectorAll("[data-modal-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const proj = portfolio.projects.find((p) => p.id === btn.dataset.modalId);
      if (proj) openProjectModal(proj);
    });
  });
}

/** 7. Project Category Filter */
function initProjectFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderProjects(btn.dataset.filter || "all");
    });
  });
}

/** 8. Accessible Project Modal */
let lastFocusedEl = null;

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");
  if (!modal || !closeBtn) return;

  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  };

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) close();
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  lastFocusedEl = document.activeElement;
  document.getElementById("modal-category").textContent = project.categoryLabel;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.description;

  const img = document.getElementById("modal-image");
  img.src = project.image;
  img.alt = `${project.title} screenshot`;

  document.getElementById("modal-features").innerHTML = project.features.map((f) => `<li>${f}</li>`).join("");
  document.getElementById("modal-tech").innerHTML = project.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("");

  document.getElementById("modal-github").href = project.github;
  document.getElementById("modal-demo").href = project.liveDemo;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

/** 9. Render Education */
function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container) return;

  container.innerHTML = portfolio.education
    .map(
      (edu) => `
      <div class="edu-card">
        <div class="edu-header">
          <h3 class="edu-degree">${edu.degree}</h3>
          <span class="edu-period">${edu.period}</span>
        </div>
        <p class="edu-institution">${edu.institution}</p>
        <p class="edu-details">${edu.details}</p>
        <p class="edu-coursework-title">Key Coursework:</p>
        <div class="edu-courses">
          ${edu.coursework.map((c) => `<span class="course-pill">${c}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

/** 10. Render Certificates */
function renderCertificates() {
  const container = document.getElementById("certificates-container");
  if (!container) return;

  container.innerHTML = portfolio.certificates
    .map(
      (cert) => `
      <div class="cert-card">
        <div class="cert-top">
          <span class="cert-icon">${cert.icon}</span>
          <span class="cert-issuer">${cert.issuer}</span>
        </div>
        <h3 class="cert-title">${cert.title}</h3>
        <div class="cert-meta">
          <span class="cert-year">Completed: ${cert.year}</span>
          <a href="${cert.link}" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">View Credential</a>
        </div>
      </div>`
    )
    .join("");
}

/** 11. Render Learning Journey */
function renderJourney() {
  const container = document.getElementById("journey-container");
  if (!container) return;

  container.innerHTML = portfolio.journey
    .map(
      (item, idx) => `
      <div class="journey-item">
        <div class="journey-marker">${idx + 1}</div>
        <div class="journey-content">
          <span class="journey-phase">${item.phase}</span>
          <h3 class="journey-title">${item.title}</h3>
          <p class="journey-desc">${item.description}</p>
        </div>
      </div>`
    )
    .join("");
}

/** 12. Render Contact Details */
function renderContactDetails() {
  const container = document.getElementById("contact-details");
  if (!container) return;

  const items = [
    { type: "Email", val: portfolio.email, link: `mailto:${portfolio.email}`, icon: "✉️" },
    { type: "Location", val: portfolio.location, link: "#contact", icon: "📍" },
    { type: "GitHub", val: "github.com/krishna-sahu-ji", link: portfolio.social.github, icon: "🐙" },
    { type: "LinkedIn", val: "linkedin.com/in/krishna-sahu", link: portfolio.social.linkedin, icon: "💼" },
  ];

  container.innerHTML = items
    .map(
      (it) => `
      <a href="${it.link}" class="contact-method-card" ${it.link.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        <span class="contact-method-icon">${it.icon}</span>
        <div>
          <span class="contact-method-type">${it.type}</span>
          <p class="contact-method-value">${it.val}</p>
        </div>
      </a>`
    )
    .join("");
}

/** 13. Accessible Contact Form with Formspree Submission */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");
  const charCounter = document.getElementById("char-counter");
  const submitBtn = document.getElementById("submit-btn");
  const statusDiv = document.getElementById("form-status");

  if (!form || !nameInput || !emailInput || !messageInput) return;

  messageInput.addEventListener("input", () => {
    charCounter.textContent = `${messageInput.value.length} / 1000`;
  });

  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => {
      input.classList.remove("is-invalid");
      const err = document.getElementById(`${input.name}-error`);
      if (err) err.textContent = "";
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot check
    const honeypot = document.getElementById("form-website");
    if (honeypot && honeypot.value.trim() !== "") return;

    let valid = true;
    const setError = (name, msg) => {
      valid = false;
      const f = document.getElementById(`contact-${name}`);
      const err = document.getElementById(`${name}-error`);
      if (f) f.classList.add("is-invalid");
      if (err) err.textContent = msg;
    };

    if (nameInput.value.trim().length < 2) setError("name", "Please enter your name (at least 2 characters).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) setError("email", "Please enter a valid email.");
    if (subjectInput && subjectInput.value.trim().length < 3) setError("subject", "Subject must be at least 3 characters.");
    if (messageInput.value.trim().length < 10) setError("message", "Message must be at least 10 characters.");

    if (!valid) return;

    submitBtn.disabled = true;
    const btnText = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");
    if (btnText) btnText.textContent = "Sending...";
    if (btnSpinner) btnSpinner.style.display = "inline";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        statusDiv.className = "form-status success";
        statusDiv.style.display = "block";
        statusDiv.textContent = "✅ Message sent successfully! I will get back to you soon.";
        form.reset();
        charCounter.textContent = "0 / 1000";
      } else {
        throw new Error();
      }
    } catch {
      statusDiv.className = "form-status error";
      statusDiv.style.display = "block";
      statusDiv.textContent = "❌ Message could not be sent. Please try again or reach out via email.";
    } finally {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = "Send Message";
      if (btnSpinner) btnSpinner.style.display = "none";
    }
  });
}

/** 14. Scroll Spy */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link");
  if (!sections.length || !links.length) return;

  window.addEventListener(
    "scroll",
    () => {
      const scrollPos = window.scrollY + 140;
      sections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          links.forEach((l) => {
            l.classList.toggle("active", l.getAttribute("href") === `#${sec.id}`);
          });
        }
      });
    },
    { passive: true }
  );
}

/** 15. Back to Top */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/** 16. Dynamic Footer Year */
function updateCurrentYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}
