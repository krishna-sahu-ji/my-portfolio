/**
 * ===================================================================
 * KRISHNA SAHU - STUDENT PORTFOLIO JAVASCRIPT
 * 
 * Tech Stack: Pure Vanilla JavaScript (Zero dependencies)
 * Human-Readable, Modular, and Secure by Default
 * 
 * ===== EDIT YOUR PERSONAL INFORMATION HERE =====
 * ===================================================================
 */

const portfolio = {
  // --- Personal Information ---
  name: "Krishna Sahu",
  role: "BCA Student & Aspiring Full-Stack Developer",
  location: "Uttar Pradesh, India",
  email: "krishnasahu.dev@example.com", // Replace with your actual email
  
  // --- Social Profiles ---
  social: {
    github: "https://github.com/your-username", // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/your-username", // Replace with your LinkedIn URL
    emailLink: "mailto:krishnasahu.dev@example.com"
  },

  // --- Hero Section Typing Phrases ---
  typingPhrases: [
    "Full-Stack Web Applications",
    "Clean & Accessible Interfaces",
    "Fast & Reliable Backend APIs",
    "Modern JavaScript Solutions"
  ],

  // --- Skills Section (Categorized) ---
  skillCategories: [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "DOM API", "Tailwind CSS", "Flexbox & Grid"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JSON", "Server-Side Logic", "Authentication Basics"]
    },
    {
      title: "Databases & Tools",
      icon: "🗄️",
      skills: ["MongoDB", "SQL / MySQL", "Git & GitHub", "VS Code", "Postman", "Chrome DevTools"]
    },
    {
      title: "Computer Science Core",
      icon: "🧠",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "DBMS Concepts", "Operating Systems Basics"]
    }
  ],

  // --- Projects Section ---
  projects: [
    {
      id: "project-1",
      title: "Full-Stack E-Commerce Store",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      description: "A functional online shopping application featuring dynamic product listings, category filters, interactive shopping cart, and mock checkout flow.",
      image: "assets/images/project-ecommerce.svg",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "CSS3"],
      github: "https://github.com/your-username/ecommerce-store",
      liveDemo: "https://your-username.github.io/ecommerce-store",
      features: [
        "Product catalog with search, price filtering, and pagination",
        "Persistent shopping cart using browser storage and REST API",
        "Responsive checkout interface with client-side validation",
        "Clean MVC folder architecture on the backend"
      ]
    },
    {
      id: "project-2",
      title: "Kanban Task Management App",
      category: "frontend",
      categoryLabel: "Frontend",
      description: "A drag-and-drop productivity dashboard designed to organize tasks across 'To-Do', 'In Progress', and 'Completed' columns with local persistence.",
      image: "assets/images/project-taskmanager.svg",
      technologies: ["JavaScript (ES6)", "HTML5 Drag & Drop", "CSS Grid", "LocalStorage"],
      github: "https://github.com/your-username/task-manager",
      liveDemo: "https://your-username.github.io/task-manager",
      features: [
        "Drag and drop task cards between custom status columns",
        "Auto-saves all board states seamlessly to localStorage",
        "Color-coded priority tags and due date indicators",
        "Accessible keyboard shortcuts for creating and editing tasks"
      ]
    },
    {
      id: "project-3",
      title: "Live Weather & Forecast Dashboard",
      category: "javascript",
      categoryLabel: "JavaScript API",
      description: "A clean, responsive weather application fetching real-time meteorological data, temperature metrics, humidity, and 5-day forecasts by city.",
      image: "assets/images/project-weather.svg",
      technologies: ["Vanilla JavaScript", "OpenWeather API", "CSS3 Flexbox", "Fetch API"],
      github: "https://github.com/your-username/weather-dashboard",
      liveDemo: "https://your-username.github.io/weather-dashboard",
      features: [
        "Instant city search with error handling for invalid locations",
        "Dynamic background changes reflecting live weather conditions",
        "Metrics display: Humidity, wind speed, pressure, and UV index",
        "Clean asynchronous code using modern async/await patterns"
      ]
    },
    {
      id: "project-4",
      title: "Interactive CS Quiz Platform",
      category: "javascript",
      categoryLabel: "JavaScript Tool",
      description: "An educational quiz web app testing computer science concepts, data structures, and web fundamentals with instant scoring and explanations.",
      image: "assets/images/project-quiz.svg",
      technologies: ["HTML5", "CSS3", "JavaScript", "JSON"],
      github: "https://github.com/your-username/cs-quiz-app",
      liveDemo: "https://your-username.github.io/cs-quiz-app",
      features: [
        "Timed quiz mode with randomized question pools",
        "Real-time score calculation and detailed answers review",
        "Customizable difficulty categories (Easy, Intermediate, Hard)",
        "Mobile-optimized touch layout for quick question answering"
      ]
    }
  ],

  // --- Education Section ---
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 - 2026",
      institution: "Affiliated University / College • Uttar Pradesh, India",
      details: "Pursuing undergraduate degree focusing on software development, database administration, web technologies, and computational foundations.",
      coursework: [
        "Data Structures & Algorithms",
        "Web Technologies",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (OOP)",
        "Software Engineering",
        "Computer Networks"
      ]
    },
    {
      degree: "Senior Secondary (Class XII - Science & Math)",
      period: "2021 - 2023",
      institution: "State / CBSE Board • Uttar Pradesh, India",
      details: "Completed higher secondary education with strong fundamentals in Mathematics, Computer Science, and Physics.",
      coursework: ["Mathematics", "Computer Science Basics", "Physics", "English"]
    }
  ],

  // --- Certificates Section ---
  certificates: [
    {
      title: "Full-Stack Web Development Bootcamp",
      issuer: "Online Learning Academy",
      year: "2024",
      icon: "🏆",
      link: "https://example.com/certificate/fullstack"
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "FreeCodeCamp / Coursera",
      year: "2024",
      icon: "📜",
      link: "https://example.com/certificate/javascript"
    },
    {
      title: "Git & GitHub Version Control Essentials",
      issuer: "Open Source Certification",
      year: "2023",
      icon: "🛠️",
      link: "https://example.com/certificate/git"
    }
  ],

  // --- Learning Journey Section ---
  journey: [
    {
      phase: "Phase 1 • Foundations",
      title: "Discovered Coding & CS Fundamentals",
      description: "Started learning computer science concepts, problem-solving, logic building, C/C++, and foundational algorithms."
    },
    {
      phase: "Phase 2 • Web Development",
      title: "Mastered Modern Frontend Engineering",
      description: "Built responsive websites using semantic HTML5, modern CSS3 (Flexbox/Grid), and Vanilla JavaScript (ES6+)."
    },
    {
      phase: "Phase 3 • Full-Stack Exploration",
      title: "Node.js, Databases & REST APIs",
      description: "Expanded into server-side programming, creating RESTful endpoints with Express, and working with MongoDB and SQL databases."
    },
    {
      phase: "Phase 4 • Current Focus & Roadmap",
      title: "DSA Mastery, Open Source & Internship Ready",
      description: "Currently refining Data Structures & Algorithms, building production-ready projects, and seeking developer internship opportunities."
    }
  ]
};

// ===================================================================
// APPLICATION LOGIC & REUSABLE FUNCTIONS
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

/**
 * 1. THEME TOGGLE (Dark / Light Theme)
 * Respects localStorage and OS prefers-color-scheme.
 */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", initialTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  });
}

/**
 * 2. MOBILE MENU DRAWER
 * Accessible drawer with ARIA attributes, click-outside and Escape support.
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !navMenu.classList.contains("open");
    navMenu.classList.toggle("open", isOpen);
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  }

  toggleBtn.addEventListener("click", () => toggleMenu());

  // Close when clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(true));
  });

  // Close when clicking outside header
  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
      if (navMenu.classList.contains("open")) {
        toggleMenu(true);
      }
    }
  });

  // Close on Escape key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("open")) {
      toggleMenu(true);
      toggleBtn.focus();
    }
  });
}

/**
 * 3. HERO TYPING ANIMATION
 * Pure lightweight typewriter effect for hero subtitle.
 */
function initTypingEffect() {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  const phrases = portfolio.typingPhrases;
  if (!phrases || phrases.length === 0) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeStep() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at full phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before typing next
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();
}

/**
 * 4. RENDER HERO SOCIAL BUTTONS
 * Safe DOM rendering for GitHub, LinkedIn and Email.
 */
function renderHeroSocials() {
  const container = document.getElementById("hero-socials");
  if (!container) return;

  container.textContent = ""; // Clear safe

  const socialLinks = [
    { name: "GitHub", url: portfolio.social.github, icon: "🐙" },
    { name: "LinkedIn", url: portfolio.social.linkedin, icon: "💼" },
    { name: "Email", url: portfolio.social.emailLink, icon: "✉️" }
  ];

  socialLinks.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.className = "social-btn";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", item.name);
    link.title = item.name;

    const iconSpan = document.createElement("span");
    iconSpan.setAttribute("aria-hidden", "true");
    iconSpan.textContent = item.icon;

    link.appendChild(iconSpan);
    container.appendChild(link);
  });
}

/**
 * 5. RENDER SKILLS
 * Builds structured category cards with skills tags safely.
 */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.textContent = "";

  portfolio.skillCategories.forEach((category) => {
    const card = document.createElement("div");
    card.className = "skill-category-card";

    // Card Header
    const header = document.createElement("div");
    header.className = "skill-category-header";

    const icon = document.createElement("span");
    icon.className = "skill-category-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = category.icon;

    const title = document.createElement("h3");
    title.className = "skill-category-title";
    title.textContent = category.title;

    header.appendChild(icon);
    header.appendChild(title);

    // Pills List
    const pillsList = document.createElement("div");
    pillsList.className = "skill-pills-list";

    category.skills.forEach((skillName) => {
      const pill = document.createElement("span");
      pill.className = "skill-pill";
      pill.textContent = skillName;
      pillsList.appendChild(pill);
    });

    card.appendChild(header);
    card.appendChild(pillsList);
    container.appendChild(card);
  });
}

/**
 * 6. RENDER PROJECTS
 * Displays project cards based on selected category filter.
 */
function renderProjects(filterCategory = "all") {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.textContent = "";

  const filteredProjects = portfolio.projects.filter((project) => {
    if (filterCategory === "all") return true;
    return project.category === filterCategory;
  });

  if (filteredProjects.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "text-muted";
    emptyMsg.textContent = "No projects found in this category.";
    container.appendChild(emptyMsg);
    return;
  }

  filteredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    // Image Wrap
    const imgWrap = document.createElement("div");
    imgWrap.className = "project-card-img-wrap";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = `${project.title} preview screenshot`;
    img.className = "project-card-img";
    img.loading = "lazy";

    const categoryBadge = document.createElement("span");
    categoryBadge.className = "project-card-category";
    categoryBadge.textContent = project.categoryLabel;

    imgWrap.appendChild(img);
    imgWrap.appendChild(categoryBadge);

    // Card Body
    const body = document.createElement("div");
    body.className = "project-card-body";

    const title = document.createElement("h3");
    title.className = "project-card-title";
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "project-card-desc";
    desc.textContent = project.description;

    // Tech Tags
    const tagsContainer = document.createElement("div");
    tagsContainer.className = "project-tech-tags";

    project.technologies.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.textContent = tech;
      tagsContainer.appendChild(tag);
    });

    // Actions
    const actions = document.createElement("div");
    actions.className = "project-card-actions";

    // Details Modal Trigger Button
    const detailsBtn = document.createElement("button");
    detailsBtn.type = "button";
    detailsBtn.className = "btn btn-outline btn-sm";
    detailsBtn.textContent = "Details";
    detailsBtn.addEventListener("click", () => openProjectModal(project));

    // GitHub Link
    const githubLink = document.createElement("a");
    githubLink.href = project.github;
    githubLink.className = "btn btn-secondary btn-sm";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.textContent = "GitHub";

    // Live Demo Link
    const demoLink = document.createElement("a");
    demoLink.href = project.liveDemo;
    demoLink.className = "btn btn-primary btn-sm";
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
    demoLink.textContent = "Live Demo";

    actions.appendChild(detailsBtn);
    actions.appendChild(githubLink);
    actions.appendChild(demoLink);

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(tagsContainer);
    body.appendChild(actions);

    card.appendChild(imgWrap);
    card.appendChild(body);

    container.appendChild(card);
  });
}

/**
 * 7. PROJECT CATEGORY FILTER HANDLER
 */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filterValue = btn.getAttribute("data-filter") || "all";
      renderProjects(filterValue);
    });
  });
}

/**
 * 8. PROJECT MODAL (Accessible Dialog)
 */
let lastFocusedElement = null;

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) return;

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  closeBtn.addEventListener("click", closeModal);

  // Close when clicking modal backdrop
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  lastFocusedElement = document.activeElement;

  // Safe population
  document.getElementById("modal-category").textContent = project.categoryLabel;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.description;

  const modalImg = document.getElementById("modal-image");
  modalImg.src = project.image;
  modalImg.alt = `${project.title} screenshot`;

  // Render Features list safely
  const featuresList = document.getElementById("modal-features");
  featuresList.textContent = "";
  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Render Tech tags safely
  const techContainer = document.getElementById("modal-tech");
  techContainer.textContent = "";
  project.technologies.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tech-tag";
    span.textContent = t;
    techContainer.appendChild(span);
  });

  // Update Action Buttons
  const githubBtn = document.getElementById("modal-github");
  githubBtn.href = project.github;

  const demoBtn = document.getElementById("modal-demo");
  demoBtn.href = project.liveDemo;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background scroll

  document.getElementById("modal-close").focus();
}

/**
 * 9. RENDER EDUCATION
 */
function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container) return;

  container.textContent = "";

  portfolio.education.forEach((edu) => {
    const card = document.createElement("div");
    card.className = "edu-card";

    const header = document.createElement("div");
    header.className = "edu-header";

    const degree = document.createElement("h3");
    degree.className = "edu-degree";
    degree.textContent = edu.degree;

    const period = document.createElement("span");
    period.className = "edu-period";
    period.textContent = edu.period;

    header.appendChild(degree);
    header.appendChild(period);

    const inst = document.createElement("p");
    inst.className = "edu-institution";
    inst.textContent = edu.institution;

    const details = document.createElement("p");
    details.className = "edu-details";
    details.textContent = edu.details;

    const courseworkTitle = document.createElement("p");
    courseworkTitle.className = "edu-coursework-title";
    courseworkTitle.textContent = "Key Coursework:";

    const coursesList = document.createElement("div");
    coursesList.className = "edu-courses";

    edu.coursework.forEach((c) => {
      const pill = document.createElement("span");
      pill.className = "course-pill";
      pill.textContent = c;
      coursesList.appendChild(pill);
    });

    card.appendChild(header);
    card.appendChild(inst);
    card.appendChild(details);
    card.appendChild(courseworkTitle);
    card.appendChild(coursesList);

    container.appendChild(card);
  });
}

/**
 * 10. RENDER CERTIFICATES
 */
function renderCertificates() {
  const container = document.getElementById("certificates-container");
  if (!container) return;

  container.textContent = "";

  portfolio.certificates.forEach((cert) => {
    const card = document.createElement("div");
    card.className = "cert-card";

    const top = document.createElement("div");
    top.className = "cert-top";

    const icon = document.createElement("span");
    icon.className = "cert-icon";
    icon.textContent = cert.icon;

    const issuer = document.createElement("span");
    issuer.className = "cert-issuer";
    issuer.textContent = cert.issuer;

    top.appendChild(icon);
    top.appendChild(issuer);

    const title = document.createElement("h3");
    title.className = "cert-title";
    title.textContent = cert.title;

    const meta = document.createElement("div");
    meta.className = "cert-meta";

    const year = document.createElement("span");
    year.className = "cert-year";
    year.textContent = `Completed: ${cert.year}`;

    const link = document.createElement("a");
    link.href = cert.link;
    link.className = "btn btn-outline btn-sm";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View Credential";

    meta.appendChild(year);
    meta.appendChild(link);

    card.appendChild(top);
    card.appendChild(title);
    card.appendChild(meta);

    container.appendChild(card);
  });
}

/**
 * 11. RENDER LEARNING JOURNEY
 */
function renderJourney() {
  const container = document.getElementById("journey-container");
  if (!container) return;

  container.textContent = "";

  portfolio.journey.forEach((item, index) => {
    const journeyItem = document.createElement("div");
    journeyItem.className = "journey-item";

    const marker = document.createElement("div");
    marker.className = "journey-marker";
    marker.textContent = String(index + 1);

    const content = document.createElement("div");
    content.className = "journey-content";

    const phase = document.createElement("span");
    phase.className = "journey-phase";
    phase.textContent = item.phase;

    const title = document.createElement("h3");
    title.className = "journey-title";
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.className = "journey-desc";
    desc.textContent = item.description;

    content.appendChild(phase);
    content.appendChild(title);
    content.appendChild(desc);

    journeyItem.appendChild(marker);
    journeyItem.appendChild(content);

    container.appendChild(journeyItem);
  });
}

/**
 * 12. RENDER CONTACT INFO CARDS
 */
function renderContactDetails() {
  const container = document.getElementById("contact-details");
  if (!container) return;

  container.textContent = "";

  const items = [
    { type: "Email", value: portfolio.email, link: `mailto:${portfolio.email}`, icon: "✉️" },
    { type: "Location", value: portfolio.location, link: "#contact", icon: "📍" },
    { type: "GitHub", value: "github.com/your-username", link: portfolio.social.github, icon: "🐙" },
    { type: "LinkedIn", value: "linkedin.com/in/your-username", link: portfolio.social.linkedin, icon: "💼" }
  ];

  items.forEach((item) => {
    const card = document.createElement("a");
    card.href = item.link;
    card.className = "contact-method-card";
    if (item.link.startsWith("http")) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    const icon = document.createElement("span");
    icon.className = "contact-method-icon";
    icon.textContent = item.icon;

    const textWrap = document.createElement("div");

    const type = document.createElement("span");
    type.className = "contact-method-type";
    type.textContent = item.type;

    const val = document.createElement("p");
    val.className = "contact-method-value";
    val.textContent = item.value;

    textWrap.appendChild(type);
    textWrap.appendChild(val);

    card.appendChild(icon);
    card.appendChild(textWrap);

    container.appendChild(card);
  });
}

/**
 * 13. SECURE & ACCESSIBLE CONTACT FORM VALIDATION
 * - Anti-spam honeypot detection
 * - Client-side validation with clear, safe error feedback
 * - Duplicate submission prevention
 * - Safe feedback without fake "Email Sent" promises
 */
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

  // Real-time character counter
  messageInput.addEventListener("input", () => {
    const count = messageInput.value.length;
    charCounter.textContent = `${count} / 1000`;
  });

  // Clear errors on input
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => {
      input.classList.remove("is-invalid");
      const errorSpan = document.getElementById(`${input.name}-error`);
      if (errorSpan) errorSpan.textContent = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check Honeypot (bot detection)
    const honeypot = document.getElementById("form-website");
    if (honeypot && honeypot.value.trim() !== "") {
      console.warn("Spam detected.");
      return;
    }

    let isValid = true;

    // Validate Name
    const nameVal = nameInput.value.trim();
    if (nameVal.length < 2) {
      showFieldError("name", "Please enter your name (at least 2 characters).");
      isValid = false;
    } else if (nameVal.length > 60) {
      showFieldError("name", "Name cannot exceed 60 characters.");
      isValid = false;
    }

    // Validate Email
    const emailVal = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      showFieldError("email", "Please enter a valid email address.");
      isValid = false;
    }

    // Validate Subject
    const subjectVal = subjectInput ? subjectInput.value.trim() : "";
    if (subjectVal.length < 3) {
      showFieldError("subject", "Please enter a subject (at least 3 characters).");
      isValid = false;
    }

    // Validate Message
    const messageVal = messageInput.value.trim();
    if (messageVal.length < 10) {
      showFieldError("message", "Please enter a message of at least 10 characters.");
      isValid = false;
    } else if (messageVal.length > 1000) {
      showFieldError("message", "Message exceeds 1000 characters limit.");
      isValid = false;
    }

    if (!isValid) {
      statusDiv.style.display = "none";
      return;
    }

    // Prevent duplicate submissions and show loading state
    submitBtn.disabled = true;
    const btnText = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");
    if (btnText) btnText.textContent = "Validating...";
    if (btnSpinner) btnSpinner.style.display = "inline";

    // Simulate safe local handling & show clear instructions
    setTimeout(() => {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = "Send Message";
      if (btnSpinner) btnSpinner.style.display = "none";

      statusDiv.className = "form-status success";
      statusDiv.style.display = "block";
      statusDiv.textContent = "✅ Form validation successful! To send real emails, connect this form to Formspree or EmailJS as explained in README.md.";

      form.reset();
      charCounter.textContent = "0 / 1000";
    }, 600);
  });

  function showFieldError(fieldName, message) {
    const field = document.getElementById(`contact-${fieldName}`);
    const errorSpan = document.getElementById(`${fieldName}-error`);
    if (field) field.classList.add("is-invalid");
    if (errorSpan) errorSpan.textContent = message;
  }
}

/**
 * 14. ACTIVE LINK SCROLL SPY
 * Highlights active navigation link based on scroll section.
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (sections.length === 0 || navLinks.length === 0) return;

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
}

/**
 * 15. BACK TO TOP BUTTON
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * 16. CURRENT YEAR FOOTER UPDATE
 */
function updateCurrentYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }
}
