/**
 * ============================================================
 * PORTFOLIO ENGINE — Data-Driven Architecture
 * ============================================================
 * All project content, metrics, and mockup states are defined
 * in the configuration arrays below. To add a new project,
 * simply append a new object to PROJECTS_DATA with the required
 * shape. The UI will automatically render tabs, metrics, tags,
 * and mockup components via .map() over the data.
 * ============================================================
 */

/* ─────────────────────────────────────────────────────────────
   SKILLS DATA — Populates the hero badge grid
   ───────────────────────────────────────────────────────────── */
const SKILLS = [
  "Node.js", "Python", "Flask", "Express",
  "Firebase Firestore", "PyTorch", "OpenCV",
  "Cloudinary", "HTML5", "CSS3", "JavaScript"
];

/* ─────────────────────────────────────────────────────────────
   SQA DATA — ISO/IEC 25010 Evaluation Matrix
   ───────────────────────────────────────────────────────────── */
const SQA_DATA = [
  { attribute: "Functional Suitability",  verifyUsers: "Strongly Agree", verifyExperts: "Strongly Agree", canteenUsers: "Strongly Agree", canteenExperts: "Strongly Agree" },
  { attribute: "Performance Efficiency",  verifyUsers: "Strongly Agree", verifyExperts: "Agree",        canteenUsers: "Strongly Agree", canteenExperts: "Strongly Agree" },
  { attribute: "Usability",              verifyUsers: "Strongly Agree", verifyExperts: "Strongly Agree", canteenUsers: "Agree",          canteenExperts: "Strongly Agree" },
  { attribute: "Reliability",            verifyUsers: "Agree",          verifyExperts: "Strongly Agree", canteenUsers: "Agree",          canteenExperts: "Agree" },
  { attribute: "Security",               verifyUsers: "Strongly Agree", verifyExperts: "Strongly Agree", canteenUsers: "Strongly Agree", canteenExperts: "Strongly Agree" },
  { attribute: "Maintainability",        verifyUsers: "Agree",          verifyExperts: "Strongly Agree", canteenUsers: "Agree",          canteenExperts: "Strongly Agree" },
  { attribute: "Portability",            verifyUsers: "Agree",          verifyExperts: "Agree",          canteenUsers: "Agree",          canteenExperts: "Agree" },
];

/* ─────────────────────────────────────────────────────────────
   PROJECTS_DATA — Central configuration array
   ─────────────────────────────────────────────────────────────
   Each object defines a project tab. The UI maps over this
   array to render tab buttons, metric grids, tag bars, and
   the mockup display container. Add new projects by appending
   objects with the same shape.
   ───────────────────────────────────────────────────────────── */
const PROJECTS_DATA = [
  {
    /* --- PROJECT 1: Verify AI Deepfake Forensics --- */
    id: "verify-forensics",
    tabLabel: "Verify — AI Deepfake Forensics",
    title: "Verify: An Ensemble Deep Learning Web Platform for Video Forensics",
    descriptionTitle: "Deepfake Detection Using Temporal Consistency Analysis",
    description: "This research explores advanced deep learning techniques for detecting AI-generated video content. By analyzing temporal inconsistencies and frame-level artifacts, our system identifies manipulated media with high precision. Developed as part of a Computer Science thesis, this prototype demonstrates the practical application of computer vision and machine learning in combating digital misinformation.",
    authors: "Lee Russell B. Mejares | Romulo Ian L. Nacion | Genesis Paul A. Mellomida | Jhergen M. Sevilla",
    year: "2026",
    department: "College of Informatics — Computer Science",
    howItWorks: [
      {
        step: "01",
        title: "Upload Video",
        text: "Drag and drop your video file or select from your device. We support MP4, MOV, and AVI formats up to 100MB."
      },
      {
        step: "02",
        title: "AI Analysis",
        text: "Our algorithms analyze temporal artifacts, facial inconsistencies, and deepfake signatures frame by frame."
      },
      {
        step: "03",
        title: "Get Results",
        text: "Receive a detailed authenticity report with confidence scores and visual markers highlighting detected manipulations."
      }
    ],
    /* Languages & frameworks used */
    tags: ["Python", "Flask", "PyTorch", "ConvNeXt", "Vision Transformers (ViT)", "LSTM", "OpenCV", "HTML5/CSS3/JavaScript", "Firebase Firestore", "Grad-CAM"],
    metrics: [
      { label: "Detection Accuracy",  value: "67.1%",              colorClass: "" },
      { label: "Avg. Analysis Time",  value: "47.0s",              colorClass: "metric--green" },
      { label: "Videos Analyzed",     value: "62",                 colorClass: "metric--purple" },
      { label: "True Positive Rate",  value: "62.9%",              colorClass: "metric--amber" },
    ],
    layoutProfile: "forensic-dashboard",

    /**
     * renderMockup — Generates the Verify project screenshot gallery.
     * All 9 screenshots from D:\Website-profile-screenshots\.
     */
    renderMockup: function () {
      var screenshots = [
        { src: "images/Video-Input.png",                  label: "Video Input — Upload Screen" },
        { src: "images/Video-Input-2.png",                label: "Video Input — Selection" },
        { src: "images/Video-Input-3-loading-screen.png", label: "Video Input — Loading Screen" },
        { src: "images/How-it-Works.png",                 label: "How It Works" },
        { src: "images/Accuracy-&-Performance.png",       label: "Accuracy & Performance Metrics" },
        { src: "images/About-the-Project.png",            label: "About the Project" },
        { src: "images/Result-page-1.png",                label: "Detection Result Page" },
        { src: "images/In-depth-analysis-1.png",          label: "In-Depth Analysis" },
        { src: "images/Professional-depth-analysis.png",  label: "Professional Depth Analysis" },
      ];

      var galleryItems = screenshots.map(function (img, i) {
        return '<div class="verify-gallery__item" data-lightbox-trigger="' + i + '">' +
          '<div class="verify-gallery__label">' + img.label + '</div>' +
          '<div class="verify-gallery__frame">' +
            '<img src="' + img.src + '" alt="' + img.label + '" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
            '<div class="verify-gallery__placeholder" style="display:none;">' +
              '<span class="verify-gallery__placeholder-icon">&#128247;</span>' +
              '<span>Screenshot not found<br><code>' + img.src + '</code></span>' +
            '</div>' +
            '<div class="verify-gallery__zoom-hint">&#x1F50D; Click to enlarge</div>' +
          '</div>' +
        '</div>';
      }).join('');

      return '<div class="verify-gallery">' + galleryItems + '</div>';
    }
  },

  {
    /* --- PROJECT 2: PCU Canteen Cloud Infrastructure --- */
    id: "pcu-canteen",
    tabLabel: "PCU Canteen — Cloud Infrastructure",
    title: "PCU Canteen: Pre-Order & Management System",
    descriptionTitle: "PCU Canteen Pre-Order & Management System",
    description: "The PCU Canteen Pre‑Order and Management System transforms the traditional cash‑and‑carry canteen into a modern, efficient digital service. Students can browse the menu, customize orders, schedule pick‑up times, earn loyalty points, and reorder from history—all without waiting in long lines. Kitchen staff gain a real‑time dashboard to manage products, track inventory, upload promo images via Cloudinary, and view analytics (top items, daily revenue, peak hours). A super admin oversees user roles and access permissions. The system is built with a responsive web frontend (HTML5/CSS3/JavaScript) and a backend powered by Firebase Firestore for real‑time data sync, Node.js/Express for API endpoints, and Cloudinary for cloud‑based image hosting. Agile Scrum methodology guided iterative development.",
    authors: "Lee Russell B. Mejares | Joaquin Eivan N. Martelino | Mark Joseph Paule",
    year: "2026",
    department: "College of Informatics — Computer Science",
    howItWorks: [
      {
        step: "01",
        title: "Student registers for an account",
        details: [
          "Go to the web application's registration page.",
          "Enter your student email address (must end with @pcu.edu.ph).",
          "Create a password and complete the registration form.",
          "The system verifies the email domain and activates your account."
        ]
      },
      {
        step: "02",
        title: "Student logs in and browses the menu",
        details: [
          "Log in with your registered email and password.",
          "View the real‑time canteen menu showing available items, prices, and current stock levels.",
          "See any ongoing promotions or banners (set by kitchen staff)."
        ]
      },
      {
        step: "03",
        title: "Student customizes and pre-orders",
        details: [
          "Select the desired food item.",
          "Choose add‑ons or special instructions if available (e.g., extra rice, no sauce).",
          "Specify a preferred pickup time (e.g., during lunch break).",
          "Add the item to your cart and confirm the order."
        ]
      },
      {
        step: "04",
        title: "System updates inventory in real time",
        details: [
          "Once the order is placed, Firebase Firestore automatically deducts the ordered quantity from the inventory.",
          "The kitchen staff dashboard instantly shows the new order and updated stock levels."
        ]
      },
      {
        step: "05",
        title: "Student earns loyalty points",
        details: [
          "After successful order placement, the system adds loyalty points to the student's account.",
          "Points can be redeemed for future discounts or incentives."
        ]
      },
      {
        step: "06",
        title: "Kitchen staff receives and processes the order",
        details: [
          "Log in to the kitchen staff dashboard.",
          "View incoming orders in a queue with pickup times and order details.",
          "Prepare the meals and mark orders as \"Ready for Pickup\" when done."
        ]
      },
      {
        step: "07",
        title: "Student collects the order and views history",
        details: [
          "Arrive at the canteen at the scheduled pickup time.",
          "Show your order confirmation (or give your name) to the kitchen staff.",
          "Receive your pre‑ordered meal.",
          "The order is saved to your history, allowing you to re‑order the same items with one click."
        ]
      },
      {
        step: "08",
        title: "Kitchen staff manages products and inventory",
        details: [
          "Use the dashboard to add, edit, or remove menu items.",
          "Upload product images to Cloudinary for display.",
          "Adjust stock quantities manually or rely on real‑time automatic updates from orders.",
          "Create promotional banners that appear on the student's menu page."
        ]
      },
      {
        step: "09",
        title: "Kitchen staff reviews analytics",
        details: [
          "Access the analytics dashboard to see: Most ordered items, Daily revenue totals, Peak order hours.",
          "Use this data to plan future menu rotations and stock replenishment."
        ]
      },
      {
        step: "10",
        title: "Super Admin manages user roles",
        details: [
          "Log in as Super Admin.",
          "View all registered users.",
          "Assign or change roles (Student, Kitchen Staff, Super Admin).",
          "Enable or disable dashboard access for specific users."
        ]
      }
    ],
    tags: ["Node.js", "Express", "HTML5/CSS3/JavaScript", "Firebase Firestore", "Cloudinary", "Agile-Scrum"],
    metrics: [],
    layoutProfile: "transactional-analytics",

    /**
     * renderMockup — Generates the PCU Canteen screenshot gallery.
     */
    renderMockup: function () {
      var screenshots = [
        { src: "images/Log-in-form.png",        label: "Log-In Form" },
        { src: "images/Register-form.png",      label: "Register Form" },
        { src: "images/home-page.png",          label: "Home Page" },
        { src: "images/Menu-page.png",          label: "Menu Page" },
        { src: "images/Order-history-page.png", label: "Order History Page" },
        { src: "images/Dashboard-page.png",     label: "Dashboard Page" },
        { src: "images/Kitchen-staff-page.png", label: "Kitchen Staff Page" },
        { src: "images/Admin-page.png",         label: "Admin Page" },
      ];

      var galleryItems = screenshots.map(function (img, i) {
        return '<div class="verify-gallery__item" data-lightbox-trigger="' + i + '">' +
          '<div class="verify-gallery__label">' + img.label + '</div>' +
          '<div class="verify-gallery__frame">' +
            '<img src="' + img.src + '" alt="' + img.label + '" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
            '<div class="verify-gallery__placeholder" style="display:none;">' +
              '<span class="verify-gallery__placeholder-icon">&#128247;</span>' +
              '<span>Add your screenshot to<br><code>' + img.src + '</code></span>' +
            '</div>' +
            '<div class="verify-gallery__zoom-hint">&#x1F50D; Click to enlarge</div>' +
          '</div>' +
        '</div>';
      }).join('');

      return '<div class="verify-gallery">' + galleryItems + '</div>';
    }
  },

  {
    /* --- PROJECT 3: Future System Placeholder --- */
    id: "future-placeholder",
    tabLabel: "[Upcoming] System Integration",
    title: "System Integration Project [Upcoming]",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    metrics: [
      { label: "Status",     value: "In Architecture Phase", colorClass: "" },
      { label: "Scope",      value: "Scalable Microservices", colorClass: "metric--purple" },
      { label: "Dev Cycle",  value: "Sprint 0",              colorClass: "metric--green" },
      { label: "Target",     value: "Q4 2026",               colorClass: "metric--amber" },
    ],
    layoutProfile: "blueprint-placeholder",

    renderMockup: function () {
      // Blueprint grid cells — some randomly marked as "filled" to simulate layout wireframes
      var filledIndices = [1, 3, 5, 8, 10, 12, 14, 17, 19, 21];
      return `
        <div class="placeholder-display">
          <div class="placeholder-blueprint">
            <div class="placeholder-blueprint__grid">
              ${Array.from({ length: 24 }, function (_, i) {
                var cls = filledIndices.includes(i)
                  ? 'placeholder-blueprint__cell filled'
                  : 'placeholder-blueprint__cell';
                return '<div class="' + cls + '"></div>';
              }).join('')}
            </div>
            <div class="placeholder-code-snippet">
              <span class="kw">const</span> <span class="fn">app</span> = <span class="fn">createMicroservice</span>({<br>
              &nbsp;&nbsp;module: <span class="str">"order-service"</span>,<br>
              &nbsp;&nbsp;transport: <span class="str">"gRPC"</span><br>
              });
            </div>
          </div>
          <span class="placeholder-label">In Architecture Phase</span>
          <span class="placeholder-sub">Sprint 0 — Active design and scaffolding underway</span>
          <div class="placeholder-pulse"></div>
        </div>`;
    }
  },
];


/* ============================================================
   RENDER ENGINE
   ============================================================ */

/**
 * renderHeroSkills — Maps over SKILLS array to generate badge elements
 */
function renderHeroSkills() {
  var container = document.getElementById('hero-skills');
  if (!container) return;

  container.innerHTML = SKILLS.map(function (skill) {
    return '<span class="project-tag">' + skill + '</span>';
  }).join('');
}


/**
 * renderTabs — Maps over PROJECTS_DATA to generate tab buttons
 * @param {number} activeIndex — Index of the currently active tab
 */
function renderTabs(activeIndex) {
  var tabContainer = document.getElementById('project-tabs');
  if (!tabContainer) return;

  tabContainer.innerHTML = PROJECTS_DATA.map(function (project, index) {
    var activeClass = index === activeIndex ? ' active' : '';
    return '<button class="tab-btn' + activeClass + '" data-project-index="' + index + '" role="tab" aria-selected="' + (index === activeIndex) + '">' + project.tabLabel + '</button>';
  }).join('');

  // Attach click listeners to each tab
  var buttons = tabContainer.querySelectorAll('.tab-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var idx = parseInt(this.getAttribute('data-project-index'), 10);
      switchProject(idx);
    });
  });
}


/**
 * renderProjectStage — Renders the full project display for the given index
 * Maps over metrics, tags, and calls the project's renderMockup() function
 * @param {number} index — Index into PROJECTS_DATA
 */
function renderProjectStage(index) {
  var stage = document.getElementById('project-stage');
  if (!stage || !PROJECTS_DATA[index]) return;

  var project = PROJECTS_DATA[index];

  // Build metrics grid
  var metricsHTML = project.metrics.map(function (m) {
    return '<div class="metric-card">' +
      '<div class="metric-card__label">' + m.label + '</div>' +
      '<div class="metric-card__value ' + m.colorClass + '">' + m.value + '</div>' +
    '</div>';
  }).join('');

  // Build tags
  var tagsHTML = project.tags.map(function (tag) {
    return '<span class="project-tag">' + tag + '</span>';
  }).join('');

  // Build description (if present) — includes optional title, authors, year, department
  var descriptionHTML = '';
  if (project.description) {
    var descTitleHTML = project.descriptionTitle
      ? '<h4 class="project-description__title">' + project.descriptionTitle + '</h4>'
      : '';
    var metaItems = [];
    if (project.authors) metaItems.push('<span class="project-meta__item"><strong>Authors:</strong> ' + project.authors + '</span>');
    if (project.year)     metaItems.push('<span class="project-meta__item"><strong>Year:</strong> ' + project.year + '</span>');
    if (project.department) metaItems.push('<span class="project-meta__item"><strong>Department:</strong> ' + project.department + '</span>');
    var metaHTML = metaItems.length
      ? '<div class="project-meta">' + metaItems.join('') + '</div>'
      : '';
    descriptionHTML =
      '<div class="project-description">' +
        descTitleHTML +
        '<p>' + project.description + '</p>' +
        metaHTML +
      '</div>';
  }

  // Build How it Works (if present)
  var howItWorksHTML = '';
  if (project.howItWorks && project.howItWorks.length) {
    var stepsHTML = project.howItWorks.map(function (step) {
      var detailsHTML = '';
      if (step.details && step.details.length) {
        var lis = step.details.map(function (d) { return '<li>' + d + '</li>'; }).join('');
        detailsHTML = '<ul class="hiw-step__details">' + lis + '</ul>';
      }
      return '<div class="hiw-step">' +
        '<div class="hiw-step__number">' + step.step + '</div>' +
        '<div class="hiw-step__content">' +
          '<h4 class="hiw-step__title">' + step.title + '</h4>' +
          (step.text ? '<p class="hiw-step__text">' + step.text + '</p>' : '') +
          detailsHTML +
        '</div>' +
      '</div>';
    }).join('');
    howItWorksHTML = '<div class="hiw-section"><h4 class="hiw-heading">How It Works</h4><div class="hiw-grid">' + stepsHTML + '</div></div>';
  }

  // Compose full stage HTML
  stage.innerHTML =
    '<div class="project-header">' +
      '<h3>' + project.title + '</h3>' +
      '<div class="project-tags">' + tagsHTML + '</div>' +
    '</div>' +
    descriptionHTML +
    '<div class="metric-grid">' + metricsHTML + '</div>' +
    howItWorksHTML +
    '<div class="mockup-display">' + project.renderMockup() + '</div>';

  // Re-trigger animation
  stage.style.animation = 'none';
  stage.offsetHeight; // force reflow
  stage.style.animation = '';

  // Bind any toggle switches inside the newly rendered content
  bindToggles();

  // Bind lightbox triggers for gallery images
  bindLightboxTriggers();
}


/**
 * switchProject — Orchestrates tab highlight + content re-render
 * @param {number} index — Index of the project to activate
 */
function switchProject(index) {
  renderTabs(index);
  renderProjectStage(index);
}


/**
 * renderSQATable — Maps over SQA_DATA to populate the evaluation matrix rows
 */
function renderSQATable() {
  var tbody = document.querySelector('#sqa-table tbody');
  if (!tbody) return;

  tbody.innerHTML = SQA_DATA.map(function (row) {
    return '<tr>' +
      '<td><strong>' + row.attribute + '</strong></td>' +
      '<td>' + renderRatingBadge(row.verifyUsers) + '</td>' +
      '<td>' + renderRatingBadge(row.verifyExperts) + '</td>' +
      '<td>' + renderRatingBadge(row.canteenUsers) + '</td>' +
      '<td>' + renderRatingBadge(row.canteenExperts) + '</td>' +
    '</tr>';
  }).join('');
}


/**
 * renderRatingBadge — Returns styled rating HTML based on Likert value
 * @param {string} rating — "Strongly Agree" | "Agree" | "Fair" etc.
 * @returns {string} HTML string
 */
function renderRatingBadge(rating) {
  var badgeClass = 'sqa-rating__badge--fair';
  if (rating === 'Strongly Agree') badgeClass = 'sqa-rating__badge--strong';
  else if (rating === 'Agree') badgeClass = 'sqa-rating__badge--good';

  return '<span class="sqa-rating">' +
    '<span class="sqa-rating__badge ' + badgeClass + '"></span>' +
    rating +
  '</span>';
}


/**
 * bindToggles — Attaches click handlers to toggle switches in the canteen mockup
 */
function bindToggles() {
  var toggles = document.querySelectorAll('[data-toggle]');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
}


/* ============================================================
   NAVIGATION
   ============================================================ */

/**
 * initMobileNav — Sets up hamburger toggle and overlay close behavior
 */
function initMobileNav() {
  var hamburger = document.getElementById('nav-hamburger');
  var navLinks = document.getElementById('nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('nav__links--open');
  });

  // Close mobile nav when any link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navLinks.classList.remove('nav__links--open');
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('nav__links--open');
    }
  });
}


/**
 * initContactForm — Simple form handler with feedback
 */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('.terminal-submit');
    var originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>Message Sent</span> <span class="btn-icon">&#10003;</span>';
    btn.style.background = 'var(--green)';
    btn.style.borderColor = 'var(--green)';

    setTimeout(function () {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.borderColor = '';
      form.reset();
    }, 2500);
  });
}


/* ============================================================
   LIGHTBOX — Fullscreen image viewer for gallery screenshots
   ============================================================ */
var Lightbox = {
  el: null,
  imgEl: null,
  captionEl: null,
  counterEl: null,
  items: [],
  current: 0,

  /** Initialize lightbox references and event listeners */
  init: function () {
    this.el         = document.getElementById('lightbox');
    this.imgEl      = document.getElementById('lightbox-img');
    this.captionEl  = document.getElementById('lightbox-caption');
    this.counterEl  = document.getElementById('lightbox-counter');

    var self = this;

    // Close button
    document.getElementById('lightbox-close').addEventListener('click', function () { self.close(); });

    // Backdrop click to close
    document.getElementById('lightbox-backdrop').addEventListener('click', function () { self.close(); });

    // Prev / Next buttons
    document.getElementById('lightbox-prev').addEventListener('click', function () { self.navigate(-1); });
    document.getElementById('lightbox-next').addEventListener('click', function (e) { e.stopPropagation(); self.navigate(1); });

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
      if (!self.el.classList.contains('active')) return;
      if (e.key === 'Escape')     self.close();
      if (e.key === 'ArrowLeft')  self.navigate(-1);
      if (e.key === 'ArrowRight') self.navigate(1);
    });
  },

  /**
   * Open the lightbox at a given index
   * @param {number} index — Position in the items array
   */
  open: function (index) {
    this.items = this.collectItems();
    if (!this.items.length || !this.items[index]) return;

    this.current = index;
    this.render();
    this.el.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  /** Close the lightbox and restore scroll */
  close: function () {
    this.el.classList.remove('active');
    document.body.style.overflow = '';
  },

  /**
   * Navigate by direction (-1 = prev, +1 = next)
   * Wraps around at both ends
   */
  navigate: function (direction) {
    this.current += direction;
    if (this.current < 0) this.current = this.items.length - 1;
    if (this.current >= this.items.length) this.current = 0;
    this.render();
  },

  /** Render the current image, caption, and counter */
  render: function () {
    var item = this.items[this.current];
    if (!item) return;
    this.imgEl.src = item.src;
    this.imgEl.alt = item.label;
    this.captionEl.textContent = item.label;
    this.counterEl.textContent = (this.current + 1) + ' / ' + this.items.length;
  },

  /**
   * Collect all gallery items from the currently rendered project stage.
   * Returns an array of { src, label } objects.
   */
  collectItems: function () {
    var triggers = document.querySelectorAll('[data-lightbox-trigger]');
    var result = [];
    triggers.forEach(function (trigger) {
      var img = trigger.querySelector('.verify-gallery__frame img');
      var label = trigger.querySelector('.verify-gallery__label');
      if (img && img.src) {
        result.push({
          src: img.src,
          label: label ? label.textContent : ''
        });
      }
    });
    return result;
  }
};


/** Bind click handlers on gallery items to open the lightbox */
function bindLightboxTriggers() {
  var triggers = document.querySelectorAll('[data-lightbox-trigger]');
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var index = parseInt(this.getAttribute('data-lightbox-trigger'), 10);
      Lightbox.open(index);
    });
  });
}


/* ============================================================
   INITIALIZATION — Boot the application
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  // 1. Render hero skill badges from SKILLS array
  renderHeroSkills();

  // 2. Render project workspace (default to first project)
  switchProject(0);

  // 3. Render SQA evaluation matrix from SQA_DATA array
  renderSQATable();

  // 4. Initialize navigation
  initMobileNav();

  // 5. Initialize contact form
  initContactForm();

  // 6. Initialize lightbox and bind gallery triggers
  Lightbox.init();
  bindLightboxTriggers();
});
