/**
 * =============================================================================
 * B.TECH FRESHER PORTFOLIO - JAVASCRIPT LOGIC & CONTENT CONFIGURATION
 * =============================================================================
 * 
 * INSTRUCTIONS FOR EDITING:
 * All portfolio information is centralized in the `portfolioData` object below.
 * You DO NOT need to touch index.html to customize your personal details,
 * projects, education, skills, or links!
 * 
 * Simply find the relevant section in `portfolioData`, replace the placeholder
 * values (marked with comments or square brackets like "[Your Name]"), and save.
 * =============================================================================
 */

/* =============================================================================
   1. PORTFOLIO DATA CONFIGURATION (EDIT YOUR DETAILS HERE)
   ============================================================================= */
const portfolioData = {
  // ---------------------------------------------------------------------------
  // A. PERSONAL & HERO DETAILS
  // ---------------------------------------------------------------------------
  personal: {
    // REPLACE WITH YOUR FULL NAME
    name: "Bala Anki Reddy Badam", 
    
    // Short nickname or brand name shown on the navbar and footer logo (<Alex />)
    brandName: "Bala Anki Reddy", 
    
    // Primary static title
    mainRole: "B.Tech Graduate", 
    
    // Animated typing roles (add, remove, or modify as needed)
    rolesForTyping: [
      "Aspiring Software Developer",
      "Frontend Developer",
      "MERN-Stack Developer",
      "Python Developer",
      "Full-Stack Enthusiast"
    ],
    
    // Professional tagline / elevator pitch (Hero Section)
    heroBio: "An ambitious engineering graduate equipped with strong fundamentals in Data Structures, Algorithms, and Object-Oriented Programming. Passionate about designing responsive web applications, writing clean code, and solving real-world challenges.",
    
    // Path or URL to your profile photo. 
    // To use a local image, save your image in an 'assets' folder and set: "assets/profile.jpg"
    profileImage: "assets/profile.jpg",
    
    // Availability badge text displayed at top of hero
    statusBadge: "Available for Full-time Roles & Immediate Joining",
    
    // Degree pill badge shown over profile picture
    degreePillText: "B.Tech CSE ",
    
    // Your current location (City, State, Country)
    location: "Hyderabad, Telengana, India",
    
    // Your professional contact email
    email: "balaankireddy5103@gmail.com",
    
    // Your contact phone number (include country code)
    phone: "+91 76720 68353"
  },

  // ---------------------------------------------------------------------------
  // B. SOCIAL MEDIA & CODING PROFILES
  // ---------------------------------------------------------------------------
  social: {
    // Add your profile URLs. Leave empty "" if you do not want an icon to display.
    linkedin: "https://www.linkedin.com/in/badambalaankireddy5103",
    github: "https://github.com/BalaAnkiReddy5103",
    leetcode: "https://leetcode.com/u/bala_5103/",
    hackerrank: "https://www.hackerrank.com/your-hackerrank-username",
    email: "mailto:balaankireddy5103@gmail.com"
  },

  // ---------------------------------------------------------------------------
  // C. ABOUT ME SECTION
  // ---------------------------------------------------------------------------
  about: {
    // Paragraphs displayed in the About Me section
    paragraphs: [
      "I recently graduated with a Bachelor of Technology (B.Tech) in Computer Science & Engineering. Throughout my academic journey, I have developed a strong passion for software engineering, focusing on core programming concepts, algorithm design, and modern web development architectures.",
      "I love bridging the gap between complex algorithmic logic and clean, intuitive user interfaces. With hands-on academic projects spanning full-stack web applications and database-backed management systems, I adhere to clean coding standards, version control best practices, and agile problem solving."
    ],
    
    // Career Objective statement
    careerObjective: "To secure a challenging entry-level Software Developer position in a growth-oriented technology organization where I can contribute to high-impact products, continuously hone my technical capabilities, and learn from industry engineering leaders.",
    
    // Professional traits/strengths highlighted as pills
    traits: [
      { label: "Problem Solver", icon: "fa-solid fa-puzzle-piece" },
      { label: "Quick Learner", icon: "fa-solid fa-bolt" },
      { label: "Team Player", icon: "fa-solid fa-users" },
      { label: "Adaptable", icon: "fa-solid fa-arrows-rotate" },
      { label: "Detail-Oriented", icon: "fa-solid fa-crosshairs" }
    ],

    // Quick statistics (displayed as animated counter cards)
    stats: [
      { number: 2, suffix: "+", label: "Projects Completed", icon: "fa-solid fa-diagram-project" },
      { number: 4, suffix: "+", label: "Certifications", icon: "fa-solid fa-certificate" },
      { number: 50, suffix: "+", label: "DSA Problems Solved", icon: "fa-solid fa-code" },
      { number: 12, suffix: "+", label: "Technologies Practiced", icon: "fa-solid fa-layer-group" }
    ]
  },

  // ---------------------------------------------------------------------------
  // D. TECHNICAL SKILLS
  // ---------------------------------------------------------------------------
  // Organize your skills into clean categories. You can add or remove items easily.
  skills: [
    {
      category: "Programming Languages",
      icon: "fa-solid fa-code",
      items: [
        // { name: "Java", icon: "fa-brands fa-java" },
        { name: "Python", icon: "fa-brands fa-python" },
        // { name: "C / C++", icon: "fa-solid fa-terminal" },
        { name: "JavaScript (ES6+)", icon: "fa-brands fa-js" }
      ]
    },
    {
      category: "Web Technologies",
      icon: "fa-solid fa-globe",
      items: [
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        { name: "Responsive Design", icon: "fa-solid fa-mobile-screen-button" },
        { name: "React Basics", icon: "fa-brands fa-react" },
        { name: "RESTful APIs", icon: "fa-solid fa-network-wired" }
      ]
    },
    {
      category: "Databases",
      icon: "fa-solid fa-database",
      items: [
        { name: "MySQL", icon: "fa-solid fa-database" },
        // { name: "PostgreSQL", icon: "fa-solid fa-server" },
        { name: "MongoDB Basics", icon: "fa-solid fa-leaf" },
        { name: "SQL Query Optimization", icon: "fa-solid fa-bolt" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "fa-solid fa-screwdriver-wrench",
      items: [
        { name: "Git & GitHub", icon: "fa-brands fa-github" },
        { name: "VS Code", icon: "fa-solid fa-laptop-code" },
        { name: "Postman", icon: "fa-solid fa-paper-plane" },
        { name: "Linux / Bash", icon: "fa-brands fa-linux" },
        { name: "MySQL Workbench", icon: "fa-solid fa-database" },
        { name: "AWS Basics", icon: "fa-brands fa-aws" },
        { name: "Docker", icon: "fa-brands fa-docker" },
        { name: "Figma", icon: "fa-brands fa-figma" },
        // { name: "Firebase", icon: "fa-solid fa-fire" },
        { name: "Vercel", icon: "fa-solid fa-cloud" },
        // { name: "Netlify", icon: "fa-solid fa-globe" },
        { name: "GitHub Actions", icon: "fa-solid fa-gears" }
      ]
    },
    {
      category: "Core CS Subjects",
      icon: "fa-solid fa-brain",
      items: [
        { name: "Data Structures & Algorithms", icon: "fa-solid fa-sitemap" },
        { name: "Object-Oriented Programming (OOP)", icon: "fa-solid fa-cubes" },
        { name: "Database Management Systems (DBMS)", icon: "fa-solid fa-database" },
        { name: "Operating Systems (OS)", icon: "fa-solid fa-microchip" },
        { name: "Computer Networks (CN)", icon: "fa-solid fa-circle-nodes" }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // E. EDUCATION DETAILS
  // ---------------------------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science & Engineering",
      institution: "JNTUA / [SVR Engineering College]",
      location: "Nandyal,Andhra Pradesh",
      duration: "2022 – 2026",
      score: "CGPA: 7.55 / 10.0",
      description: "Comprehensive coursework in algorithmic design, software engineering methodologies, web technologies, and database engineering. Active member of the University Coding Club and participant in inter-college tech hackathons.",
      coursework: [
        "Data Structures & Algorithms",
        "Design & Analysis of Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ]
    },
    {
      degree: "Senior Secondary (Class XII - Pre-University)",
      branch: "Science Stream (Physics, Chemistry, Mathematics)",
      institution: "NRI Junior College ",
      location: "Guntur, Andhra Pradesh",
      duration: "2020 – 2022",
      score: "Percentage: 81.3%",
      description: "Focused on advanced mathematics, physics fundamentals",
      coursework: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      branch: "General Science & Mathematics",
      institution: "Sri Adithya High School",
      location: "Vinukonda, Andhra Pradesh",
      duration: "2020",
      score: "CGPA: 9.6 / 10.0",
      description: "Graduated with distinction and academic honors; participated actively in regional science exhibitions and mathematics quizzes.",
      coursework: ["Mathematics", "Science", "Social Studies", "English"]
    }
  ],

  // ---------------------------------------------------------------------------
  // F. FEATURED PROJECTS
  // ---------------------------------------------------------------------------
  // Provide realistic fresher projects. Leave liveDemoUrl empty "" if not deployed.
  projects: [
    {
  title: "Online Recruitment Fraud Detection Using Deep Learning Approaches",
  category: "AI / Machine Learning / Deep Learning",

  problemStatement: "The increasing number of fraudulent job postings on online recruitment platforms creates risks for job seekers, including financial scams, identity theft, and misuse of personal information. Traditional fraud detection techniques struggle to identify sophisticated and misleading job advertisements.",

  description: "A web-based application designed to detect fraudulent job postings using Natural Language Processing (NLP) and deep learning techniques. The system analyzes job descriptions and textual information, applies preprocessing and feature extraction, and uses advanced models such as BERT, RoBERTa, and CNN to classify job postings as genuine or fraudulent. The application provides users with an interface to submit job details and view prediction results.",

  technologies: [
    "Python",
    "Flask",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "BERT",
    "RoBERTa",
    "CNN",
    "SMOTE",
    "HTML5",
    "CSS3",
    "JavaScript"
  ],

  keyFeatures: [
    "Automated detection and classification of fraudulent job postings",
    "NLP-based text preprocessing and feature extraction",
    "Deep learning models including BERT, RoBERTa, and CNN",
    "SMOTE technique to handle imbalanced datasets",
    "User-friendly web interface for submitting job descriptions",
    "Real-time prediction of job postings as genuine or fraudulent"
  ]
},
   
{
  title: "CampusCart - E-Commerce Web Storefront",
  category: "Web Application",
  problemStatement: "Traditional online shopping experiences can be complex for students looking for an accessible platform to browse, filter, and purchase essential products such as books, electronics, and stationery.",
  description: "Developed a responsive e-commerce web storefront that enables users to browse products, search by keywords, filter by categories, and sort items by price. Implemented interactive shopping cart functionality, including adding, removing, and updating product quantities with automatic price calculations. Integrated LocalStorage to preserve cart data across browser sessions. Designed a user-friendly interface with checkout simulation, form validation, and responsive layouts for a smooth shopping experience across desktop and mobile devices..",
  technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "LocalStorage"],
  keyFeatures: [
    "Dynamic product listing with category-based filtering",
    "Real-time product search using keyword matching",
    "Price-based sorting for improved product discovery",
    "Shopping cart management with add, remove, and quantity update functionality",
    "Automatic subtotal and total price calculations",
    "Persistent shopping cart data using browser LocalStorage",
    "Responsive user interface for desktop and mobile devices",
    "Checkout simulation with input validation"
  ],
      githubUrl: "https://github.com/BalaAnkiReddy5103/CampusCart-Ecommerce-Web-Storefront",
      liveDemoUrl: "https://balaankireddy5103.github.io/CampusCart-Ecommerce-Web-Storefront/"
    },
  ],

  // ---------------------------------------------------------------------------
  // G. CERTIFICATIONS & ACHIEVEMENTS
  // ---------------------------------------------------------------------------
  certifications: [
    {
      title: "UI Developer",
      issuer: "Infosys Foundation Finishing School of Employability Program",
      date: "December 2025",
      credentialUrl: "https://drive.google.com/file/d/1uB2ZRZt6_sx96o_LRLQgVjF7XhxD4BvA/view?usp=drive_link",
      credentialId: "C.No:G-2025-G5001-0046"
    },
    {
      title: "Python Full Stack Development",
      issuer: "AICTE-Eduskills",
      date: "March 2025",
      credentialUrl: "https://drive.google.com/file/d/1JvXVpEcILRHlLGenvkc6RqdjUjIC1m74/view?usp=drive_link",
      credentialId: ":aa2991e89574b22087e22a6252dc0b5e"
    },
    {
      title: "Full Stack Web Development with MERN",
      issuer: "BlackBuck Engineers",
      date: "july 2025",
      credentialUrl: "https://drive.google.com/file/d/1ENNWiEVY8yvnhahb6Y7xS0M-kLXLxx3t/view?usp=drive_link",
      credentialId: "BBST202503596"
    },
    {
      title: "AI-ML",
      issuer: "Google For Developers",
      date: "September 2024",
      credentialUrl: "https://drive.google.com/file/d/1tUjGYywqZcAIFm-tLAw5Xwe8Nf-jhrTC/view?usp=drive_link",
      credentialId: ":b4f9c258fa454b971df0e641d860973a"
    },
    {
      title: "Cloud Virtual Internship",
      issuer: "AWS Academy",
      date: "June 2024",
      credentialUrl: "https://drive.google.com/file/d/1XefiUcdJITn7qRNC2nDaB7qynzZde6r-/view?usp=drive_link",
      credentialId: ":a9e380a6a1777db9230dd3b0c3b6302d"
    }
  ],

  achievements: [
    {
      title: "Solved 50+ DSA Problems",
      organization: "LeetCode & HackerRank",
      description: "Consistently practiced data structures (Trees, Graphs, DP, Arrays) achieving a global ranking in weekly LeetCode contests.",
      badge: "Competitive Coding"
    },
    {
      title: "Automation Explorer",
      organization: "UI PATH Academy",
      description: "It is a tool used to explore, identify, and understand business processes that can be automated using Robotic Process Automation (RPA).",
      badge: "Automation Explorer"
    },
    {
      title: "Quantum Computing",
      organization: "Wiser",
      description: "Learn the basics of quantum computing, including qubits, superposition, and entanglement, and understand how quantum technology works and differs from classical computing.",
      badge: "Academic Merit"
    }
  ],

  // ---------------------------------------------------------------------------
  // H. RESUME SETTINGS
  // ---------------------------------------------------------------------------
  resume: {
    // Relative path or public link to your resume PDF.
    // e.g. "assets/Alex_Morgan_Resume.pdf" or a Google Drive direct download link.
    resumeUrl: "assets/resume.pdf", 
    
    // Suggested file download name
    downloadFileName: "Bala_Anki_Reddy_Resume.pdf",
    
    // Fallback notice shown to the recruiter if the PDF is not yet placed in assets
    fallbackMessage: "Notice: The resume file has not yet been linked. You can update the resume path in script.js under portfolioData.resume.resumeUrl."
  },

  // ---------------------------------------------------------------------------
  // I. CONTACT SETTINGS
  // ---------------------------------------------------------------------------
  contact: {
    // Work preference text shown in the contact section
    availabilityText: "Open for On-site, Hybrid, and Remote Roles across India & Worldwide. Ready for immediate onboarding.",
    
    // Method used for handling static form submissions:
    // 'mailto' creates a mailto link that opens the user's default email client.
    // Set to 'custom' if you want to plug in Formspree, EmailJS, or your own backend API.
    formHandler: "mailto"
  }
};


/* =============================================================================
   2. DOM POPULATION & DYNAMIC RENDERING ENGINE
   ============================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeroAndNavbar();
  renderAboutSection();
  renderSkillsSection();
  renderEducationSection();
  renderProjectsSection();
  renderCertificationsAndAchievements();
  renderResumeSection();
  renderContactSection();
  renderFooter();
  initTypingAnimation();
  initNavigationInteractions();
  initScrollSpy();
  initScrollReveal();
  initContactForm();
  initStatsCounter();
});

/**
 * Render Hero, Navbar Brand & Document Title
 */
function renderHeroAndNavbar() {
  const { personal, social } = portfolioData;

  // Document Title & Meta
  const titleEl = document.getElementById("page-title");
  if (titleEl) {
    titleEl.textContent = `${personal.name} | ${personal.mainRole}`;
  }

  // Navbar Brand
  const navBrandName = document.getElementById("nav-brand-name");
  if (navBrandName) navBrandName.textContent = personal.brandName || personal.name;

  // Hero Data
  const heroStatusBadge = document.getElementById("hero-status-badge");
  if (heroStatusBadge) heroStatusBadge.textContent = personal.statusBadge;

  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = personal.name;

  const heroMainRole = document.getElementById("hero-main-role");
  if (heroMainRole) heroMainRole.textContent = `${personal.mainRole} | `;

  const heroBio = document.getElementById("hero-bio");
  if (heroBio) heroBio.textContent = personal.heroBio;

  const heroDegreePill = document.getElementById("hero-degree-pill");
  if (heroDegreePill) heroDegreePill.textContent = personal.degreePillText;

  // Profile Image with Fallback Initials Avatar
  const heroProfileImg = document.getElementById("hero-profile-img");
  if (heroProfileImg) {
    heroProfileImg.src = personal.profileImage;
    heroProfileImg.alt = `Portrait of ${personal.name}`;
    
    // Fallback if image fails to load or link is invalid
    heroProfileImg.onerror = () => {
      heroProfileImg.onerror = null;
      // Generate clean SVG initials placeholder
      const initials = personal.name
        .split(" ")
        .map(n => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
      heroProfileImg.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><rect width='100%' height='100%' fill='%231e293b'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='180' font-weight='bold' fill='%2338bdf8'>${initials}</text></svg>`;
    };
  }

  // Hero Social Links
  const socialContainer = document.getElementById("hero-social-links");
  if (socialContainer) {
    socialContainer.innerHTML = buildSocialLinksHtml(social);
  }
}

/**
 * Build HTML for social links based on available URLs
 */
function buildSocialLinksHtml(social) {
  const links = [];

  if (social.linkedin) {
    links.push(`
      <a href="${escapeHtml(social.linkedin)}" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="LinkedIn Profile" title="LinkedIn Profile">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
    `);
  }
  if (social.github) {
    links.push(`
      <a href="${escapeHtml(social.github)}" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="GitHub Profile" title="GitHub Profile">
        <i class="fa-brands fa-github"></i>
      </a>
    `);
  }
  if (social.leetcode) {
    links.push(`
      <a href="${escapeHtml(social.leetcode)}" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="LeetCode Profile" title="LeetCode Profile">
        <i class="fa-solid fa-code"></i>
      </a>
    `);
  }
  if (social.hackerrank) {
    links.push(`
      <a href="${escapeHtml(social.hackerrank)}" target="_blank" rel="noopener noreferrer" class="social__link" aria-label="HackerRank Profile" title="HackerRank Profile">
        <i class="fa-brands fa-hackerrank"></i>
      </a>
    `);
  }
  if (social.email) {
    const mailUrl = social.email.startsWith("mailto:") ? social.email : `mailto:${social.email}`;
    links.push(`
      <a href="${escapeHtml(mailUrl)}" class="social__link" aria-label="Send Direct Email" title="Send Direct Email">
        <i class="fa-regular fa-envelope"></i>
      </a>
    `);
  }

  return links.join("");
}

/**
 * Render About Section
 */
function renderAboutSection() {
  const { about } = portfolioData;

  // Paragraphs
  const paragraphsContainer = document.getElementById("about-paragraphs");
  if (paragraphsContainer && about.paragraphs) {
    paragraphsContainer.innerHTML = about.paragraphs
      .map(p => `<p>${escapeHtml(p)}</p>`)
      .join("");
  }

  // Objective
  const objectiveEl = document.getElementById("about-objective-text");
  if (objectiveEl && about.careerObjective) {
    objectiveEl.textContent = about.careerObjective;
  }

  // Traits
  const traitsContainer = document.getElementById("about-traits");
  if (traitsContainer && about.traits) {
    traitsContainer.innerHTML = about.traits
      .map(t => `
        <span class="trait-badge">
          <i class="${escapeHtml(t.icon)}"></i> ${escapeHtml(t.label)}
        </span>
      `)
      .join("");
  }

  // Stats Grid
  const statsGrid = document.getElementById("about-stats-grid");
  if (statsGrid && about.stats) {
    statsGrid.innerHTML = about.stats
      .map(stat => `
        <div class="stat__card">
          <div class="stat__icon"><i class="${escapeHtml(stat.icon)}"></i></div>
          <div class="stat__number" data-target="${stat.number}">0</div>
          <div class="stat__label">${escapeHtml(stat.label)}</div>
        </div>
      `)
      .join("");
  }
}

/**
 * Render Skills Section
 */
function renderSkillsSection() {
  const container = document.getElementById("skills-container");
  if (!container || !portfolioData.skills) return;

  container.innerHTML = portfolioData.skills
    .map(category => `
      <div class="skill__category-card reveal">
        <div class="category__header">
          <div class="category__icon">
            <i class="${escapeHtml(category.icon)}"></i>
          </div>
          <h3 class="category__title">${escapeHtml(category.category)}</h3>
        </div>
        <div class="skill__tags">
          ${category.items
            .map(item => `
              <span class="skill__tag">
                <i class="${escapeHtml(item.icon)}"></i>
                <span>${escapeHtml(item.name)}</span>
              </span>
            `)
            .join("")}
        </div>
      </div>
    `)
    .join("");
}

/**
 * Render Education Section
 */
function renderEducationSection() {
  const container = document.getElementById("education-timeline");
  if (!container || !portfolioData.education) return;

  container.innerHTML = portfolioData.education
    .map(item => `
      <div class="timeline__item">
        <div class="timeline__marker"></div>
        <div class="timeline__card">
          <div class="timeline__header">
            <h3 class="timeline__degree">${escapeHtml(item.degree)}</h3>
            <span class="timeline__badge">${escapeHtml(item.score)}</span>
          </div>
          <div class="timeline__institution">
            ${escapeHtml(item.institution)} • ${escapeHtml(item.branch)}
          </div>
          <div class="timeline__meta">
            <span><i class="fa-regular fa-calendar"></i> ${escapeHtml(item.duration)}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(item.location)}</span>
          </div>
          <p class="timeline__description">${escapeHtml(item.description)}</p>
          ${item.coursework && item.coursework.length > 0 ? `
            <div class="timeline__coursework">
              ${item.coursework.map(c => `<span class="coursework__tag">${escapeHtml(c)}</span>`).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    `)
    .join("");
}

/**
 * Render Projects Section
 */
function renderProjectsSection() {
  const container = document.getElementById("projects-container");
  if (!container || !portfolioData.projects) return;

  container.innerHTML = portfolioData.projects
    .map(project => {
      // Determine Live Demo button behavior
      const hasLiveDemo = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);
      const liveDemoButtonHtml = hasLiveDemo
        ? `<a href="${escapeHtml(project.liveDemoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">
             <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
           </a>`
        : `<button class="btn btn--outline btn--sm btn--disabled" title="No live deployment hosted currently" disabled>
             <i class="fa-solid fa-lock"></i> Demo N/A
           </button>`;

      return `
        <article class="project__card reveal">
          <div class="project__body">
            <span class="project__category-badge">${escapeHtml(project.category)}</span>
            <h3 class="project__title">${escapeHtml(project.title)}</h3>
            
            <div class="project__problem-box">
              <strong>Problem Addressed:</strong>
              <p class="project__problem-text">${escapeHtml(project.problemStatement)}</p>
            </div>

            <p class="project__description">${escapeHtml(project.description)}</p>

            <div class="project__features">
              <h4 class="features__title">Key Highlights:</h4>
              <ul class="features__list">
                ${project.keyFeatures
                  .map(feat => `
                    <li><i class="fa-solid fa-check"></i> <span>${escapeHtml(feat)}</span></li>
                  `)
                  .join("")}
              </ul>
            </div>

            <div class="project__tech-tags">
              ${project.technologies
                .map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
                .join("")}
            </div>

            <div class="project__actions">
              <a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">
                <i class="fa-brands fa-github"></i> GitHub Repo
              </a>
              ${liveDemoButtonHtml}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

/**
 * Render Certifications & Achievements Section
 */
function renderCertificationsAndAchievements() {
  // Certifications
  const certContainer = document.getElementById("certifications-list");
  if (certContainer && portfolioData.certifications) {
    certContainer.innerHTML = portfolioData.certifications
      .map(cert => `
        <div class="cert__card">
          <div class="cert__icon">
            <i class="fa-solid fa-certificate"></i>
          </div>
          <div class="cert__content">
            <h4 class="cert__title">${escapeHtml(cert.title)}</h4>
            <div class="cert__issuer">${escapeHtml(cert.issuer)}</div>
            <div class="cert__meta">
              <span><i class="fa-regular fa-calendar-check"></i> ${escapeHtml(cert.date)}</span>
              ${cert.credentialId ? `<span>ID: ${escapeHtml(cert.credentialId)}</span>` : ""}
            </div>
            ${cert.credentialUrl ? `
              <a href="${escapeHtml(cert.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="cert__link">
                Verify Credential <i class="fa-solid fa-arrow-right"></i>
              </a>
            ` : ""}
          </div>
        </div>
      `)
      .join("");
  }

  // Achievements
  const achieveContainer = document.getElementById("achievements-list");
  if (achieveContainer && portfolioData.achievements) {
    achieveContainer.innerHTML = portfolioData.achievements
      .map(achieve => `
        <div class="achievement__card">
          <div class="achievement__icon">
            <i class="fa-solid fa-award"></i>
          </div>
          <div class="achievement__content">
            <h4 class="achievement__title">${escapeHtml(achieve.title)}</h4>
            <div class="achievement__organization">${escapeHtml(achieve.organization)}</div>
            <p class="achievement__description">${escapeHtml(achieve.description)}</p>
            ${achieve.badge ? `<span class="achievement__badge">${escapeHtml(achieve.badge)}</span>` : ""}
          </div>
        </div>
      `)
      .join("");
  }
}

/**
 * Render Resume Section & Handle Download Triggers
 */
function renderResumeSection() {
  const { personal, resume } = portfolioData;

  const previewName = document.getElementById("resume-preview-name");
  if (previewName) previewName.textContent = personal.name;

  const previewRole = document.getElementById("resume-preview-role");
  if (previewRole) previewRole.textContent = `${personal.mainRole} • ${personal.degreePillText}`;

  // Handle Download Button
  const downloadBtn = document.getElementById("download-resume-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleResumeAction(resume.resumeUrl, resume.downloadFileName, true);
    });
  }

  // Handle View Button
  const viewBtn = document.getElementById("view-resume-btn");
  if (viewBtn) {
    viewBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleResumeAction(resume.resumeUrl, resume.downloadFileName, false);
    });
  }

  // Also bind hero resume button
  const heroResumeBtn = document.getElementById("hero-resume-btn");
  if (heroResumeBtn) {
    heroResumeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleResumeAction(resume.resumeUrl, resume.downloadFileName, true);
    });
  }
}

/**
 * Handle resume download/view with graceful fallback notification
 */
function handleResumeAction(url, fileName, isDownload) {
  // If user hasn't added a real file path yet or file is missing
  if (!url || url === "#" || url === "assets/resume.pdf") {
    // Attempt download via anchor tag, but show helpful toast
    showToast(
      "Resume File Notice", 
      portfolioData.resume.fallbackMessage, 
      "info"
    );
  }

  // Create temporary link element to trigger browser download/tab view
  const tempLink = document.createElement("a");
  tempLink.href = url || "#";
  if (isDownload) {
    tempLink.setAttribute("download", fileName || "Resume.pdf");
  } else {
    tempLink.setAttribute("target", "_blank");
    tempLink.setAttribute("rel", "noopener noreferrer");
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
}

/**
 * Render Contact Section Info Cards
 */
function renderContactSection() {
  const { personal } = portfolioData;
  const cardsContainer = document.getElementById("contact-info-cards");

  if (!cardsContainer) return;

  cardsContainer.innerHTML = `
    <div class="contact__card">
      <div class="contact__card-icon">
        <i class="fa-regular fa-envelope"></i>
      </div>
      <div class="contact__card-details">
        <h4>Email Address</h4>
        <a href="mailto:${escapeHtml(personal.email)}">${escapeHtml(personal.email)}</a>
      </div>
    </div>

    <div class="contact__card">
      <div class="contact__card-icon">
        <i class="fa-solid fa-phone"></i>
      </div>
      <div class="contact__card-details">
        <h4>Phone / WhatsApp</h4>
        <a href="tel:${escapeHtml(personal.phone.replace(/\s+/g, ''))}">${escapeHtml(personal.phone)}</a>
      </div>
    </div>

    <div class="contact__card">
      <div class="contact__card-icon">
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <div class="contact__card-details">
        <h4>Location</h4>
        <p>${escapeHtml(personal.location)}</p>
      </div>
    </div>
  `;

  // Work preference text
  const availText = document.getElementById("contact-availability-text");
  if (availText && portfolioData.contact.availabilityText) {
    availText.textContent = portfolioData.contact.availabilityText;
  }
}

/**
 * Render Footer Details
 */
function renderFooter() {
  const { personal, social } = portfolioData;

  const currentYearEl = document.getElementById("current-year");
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

  const footerBrand = document.getElementById("footer-brand-name");
  if (footerBrand) footerBrand.textContent = personal.brandName || personal.name;

  const footerOwner = document.getElementById("footer-owner-name");
  if (footerOwner) footerOwner.textContent = personal.name;

  const footerTagline = document.getElementById("footer-tagline");
  if (footerTagline) footerTagline.textContent = `${personal.mainRole} passionate about problem-solving and software engineering.`;

  const footerSocials = document.getElementById("footer-social-links");
  if (footerSocials) {
    footerSocials.innerHTML = buildSocialLinksHtml(social);
  }
}


/* =============================================================================
   3. ANIMATED TYPING EFFECT (HERO SECTION)
   ============================================================================= */
function initTypingAnimation() {
  const typingTarget = document.getElementById("hero-typing-target");
  const words = portfolioData.personal.rolesForTyping;

  if (!typingTarget || !words || words.length === 0) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeStep() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingTarget.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Faster deleting speed
    } else {
      typingTarget.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word before starting to delete
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      // Move to next word after deleting
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(typeStep, typingSpeed);
  }

  // Start typing loop
  setTimeout(typeStep, 600);
}


/* =============================================================================
   4. THEME TOGGLE (DARK / LIGHT MODE WITH LOCALSTORAGE)
   ============================================================================= */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const savedTheme = localStorage.getItem("portfolio-theme");

  // Determine starting theme: saved preference -> system preference -> default dark
  let currentTheme = savedTheme;
  if (!currentTheme) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    currentTheme = prefersDark ? "dark" : "light";
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
      showToast("Theme Updated", `Switched to ${newTheme} mode`, "info");
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) {
      if (theme === "light") {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    }
  }
}


/* =============================================================================
   5. NAVIGATION INTERACTIONS (HAMBURGER, SCROLL SPY & STICKY HEADER)
   ============================================================================= */
function initNavigationInteractions() {
  const header = document.getElementById("header");
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navBackdrop = document.getElementById("nav-backdrop");
  const backToTopBtn = document.getElementById("back-to-top");
  const navLinks = document.querySelectorAll(".nav__link");

  // Mobile Menu Open
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
      if (navBackdrop) navBackdrop.classList.add("show");
      navToggle.setAttribute("aria-expanded", "true");
    });
  }

  // Mobile Menu Close Function
  const closeMenu = () => {
    if (navMenu) navMenu.classList.remove("show-menu");
    if (navBackdrop) navBackdrop.classList.remove("show");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  };

  if (navClose) navClose.addEventListener("click", closeMenu);
  if (navBackdrop) navBackdrop.addEventListener("click", closeMenu);

  // Close mobile drawer when clicking any link
  navLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Scroll listener for sticky header & back-to-top button
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Header shadow shrink effect
    if (header) {
      if (scrollY >= 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Back to top floating button
    if (backToTopBtn) {
      if (scrollY >= 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  // Back to top smooth scroll
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

/**
 * Active navigation item highlighting on scroll
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active-link");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigation);
}


/* =============================================================================
   6. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ============================================================================= */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target); // Animate once
      }
    });
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}


/* =============================================================================
   7. ANIMATED NUMBER COUNTERS (ABOUT SECTION STATS)
   ============================================================================= */
function initStatsCounter() {
  const statsSection = document.getElementById("about");
  const statNumbers = document.querySelectorAll(".stat__number");

  if (!statsSection || statNumbers.length === 0) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute("data-target"), 10);
          if (isNaN(target)) return;

          let current = 0;
          const duration = 1500;
          const stepTime = Math.max(Math.floor(duration / target), 20);

          const timer = setInterval(() => {
            current += Math.ceil(target / (duration / stepTime));
            if (current >= target) {
              num.textContent = target + "+";
              clearInterval(timer);
            } else {
              num.textContent = current + "+";
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}


/* =============================================================================
   8. CLIENT-SIDE FORM VALIDATION & MAILTO HANDLER
   ============================================================================= */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");

  // Validate single input field
  function validateField(input, errorEl, validatorFn, errorMessage) {
    const isValid = validatorFn(input.value.trim());
    if (!isValid) {
      input.classList.add("input-error");
      errorEl.textContent = errorMessage;
      errorEl.classList.add("show");
      input.setAttribute("aria-invalid", "true");
      return false;
    } else {
      input.classList.remove("input-error");
      errorEl.textContent = "";
      errorEl.classList.remove("show");
      input.removeAttribute("aria-invalid");
      return true;
    }
  }

  // Email regex validator
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Real-time input listeners to clear errors on correction
  if (nameInput) {
    nameInput.addEventListener("input", () => {
      if (nameInput.value.trim().length >= 2) {
        nameInput.classList.remove("input-error");
        document.getElementById("name-error").classList.remove("show");
      }
    });
  }

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      if (isValidEmail(emailInput.value.trim())) {
        emailInput.classList.remove("input-error");
        document.getElementById("email-error").classList.remove("show");
      }
    });
  }

  if (subjectInput) {
    subjectInput.addEventListener("input", () => {
      if (subjectInput.value.trim().length >= 3) {
        subjectInput.classList.remove("input-error");
        document.getElementById("subject-error").classList.remove("show");
      }
    });
  }

  if (messageInput) {
    messageInput.addEventListener("input", () => {
      if (messageInput.value.trim().length >= 10) {
        messageInput.classList.remove("input-error");
        document.getElementById("message-error").classList.remove("show");
      }
    });
  }

  // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateField(
      nameInput,
      document.getElementById("name-error"),
      val => val.length >= 2,
      "Please enter your full name (at least 2 characters)."
    );

    const isEmailValid = validateField(
      emailInput,
      document.getElementById("email-error"),
      isValidEmail,
      "Please enter a valid email address (e.g. name@domain.com)."
    );

    const isSubjectValid = validateField(
      subjectInput,
      document.getElementById("subject-error"),
      val => val.length >= 3,
      "Please provide a subject line (at least 3 characters)."
    );

    const isMessageValid = validateField(
      messageInput,
      document.getElementById("message-error"),
      val => val.length >= 10,
      "Please write a message with at least 10 characters."
    );

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      showToast("Validation Error", "Please review the highlighted fields.", "warning");
      return;
    }

    // Prepare message payload
    const senderName = nameInput.value.trim();
    const senderEmail = emailInput.value.trim();
    const mailSubject = subjectInput.value.trim();
    const mailBody = messageInput.value.trim();

    /**
     * NOTE FOR STATIC SITES:
     * A purely client-side static HTML/JS site has no backend server or SMTP
     * relay to send an email silently in the background.
     * 
     * By default, we open the visitor's default email program (Outlook, Apple Mail,
     * Gmail) via standard `mailto:` encoding with all fields pre-filled.
     * 
     * OPTIONAL THIRD-PARTY INTEGRATION:
     * To receive messages directly into your inbox without opening the user's
     * email client, you can connect Formspree (https://formspree.io) or EmailJS:
     * 1. Register a free account on Formspree.
     * 2. Replace this logic with a fetch() POST request to your Formspree endpoint.
     */
    const encodedSubject = encodeURIComponent(`[Portfolio Contact] ${mailSubject}`);
    const encodedBody = encodeURIComponent(
      `Hello ${portfolioData.personal.name},\n\n${mailBody}\n\n---\nSender: ${senderName}\nEmail: ${senderEmail}`
    );
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Show immediate user feedback
    showToast(
      "Preparing Email Client", 
      "Opening your default email application with your prefilled message...", 
      "success"
    );

    // Open mailto link
    window.location.href = mailtoUrl;

    // Reset the form
    form.reset();
  });
}


/* =============================================================================
   9. INTERACTIVE TOAST NOTIFICATION UTILITY
   ============================================================================= */
function showToast(title, message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const iconMap = {
    success: "fa-solid fa-circle-check",
    info: "fa-solid fa-circle-info",
    warning: "fa-solid fa-triangle-exclamation",
    danger: "fa-solid fa-circle-exclamation"
  };

  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <div class="toast__icon">
      <i class="${iconMap[type] || iconMap.info}"></i>
    </div>
    <div class="toast__content">
      <div class="toast__title">${escapeHtml(title)}</div>
      <div class="toast__message">${escapeHtml(message)}</div>
    </div>
    <button class="toast__close" aria-label="Close notification">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  const closeBtn = toast.querySelector(".toast__close");
  const removeToast = () => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-100%)";
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
  };

  closeBtn.addEventListener("click", removeToast);

  // Auto dismiss after 5 seconds
  setTimeout(removeToast, 5000);

  container.appendChild(toast);
}

/**
 * Simple HTML escaping helper for preventing XSS injection in user data
 */
function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
