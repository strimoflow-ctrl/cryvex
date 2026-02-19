// =============================================================================
// CRYVEX - Vibe Coder Portfolio Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// =============================================================================
// CENTRALIZED IMAGE CONFIGURATION
// Replace these placeholder URLs with your own hosted images
// =============================================================================
export const imageConfig = {
  // Hero Section Images
  hero: {
    background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80", // Cyberpunk city/neon background
  },
  
  // About Section Images
  about: {
    creatorPortrait: "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@6bd2ad61e68be5ff179ca91e92b3db45575a90a8/uploads/2026-02-19T04-36-39-834Z-zwvvwk3tw.png", // Developer portrait
    backgroundGlow: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80", // Abstract tech background
  },
  
  // Tech Stack Section (3D Cube Textures - 6 faces required)
  techStack: {
    cubeTextures: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80", // Face 1: React/Frontend
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80", // Face 2: JavaScript
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80", // Face 3: Code/Tech
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // Face 4: AI/Automation
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", // Face 5: Server/Backend
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", // Face 6: Quantum/Tech
    ],
  },
  
  // Featured Projects Images
  projects: {
    // Parallax strip images (top row)
    parallaxTop: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@1614248df20c2e2862ce72ca055aeab4863c5e0a/uploads/2026-02-19T04-40-47-657Z-my209ok26.png",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    ],
    // Parallax strip images (bottom row)
    parallaxBottom: [
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@540fe54b8c063bc94a233a96892b90f1a0724596/uploads/2026-02-19T06-01-11-451Z-jz2gbz1vw.png",
      "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@ca50ecf1af6648770d3d2076c6b8ab9150637593/uploads/2026-02-19T05-14-33-694Z-jx8nkx45w.png",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    ],
    // Project cards
    project1: "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@5d0ee8454a71cf215bb92feff09e4364392df081/uploads/2026-02-19T08-30-16-652Z-1bogr7dxl.png", // AI Automation Project
    project2: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80", // Mobile App Project
    project3: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80", // Web Platform
    project4: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80", // Cybersecurity/Tech
    project5: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80", // Code Editor
    project6: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", // Laptop Coding
  },
  
  // Footer Section
  footer: {
    portrait: "https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@ffeb27c259c22fe338d9fd0e97db14e8ee34a23f/uploads/2026-02-19T04-45-03-789Z-qmukld3ee.png", // Professional portrait
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
    ],
  },
};

// =============================================================================
// SITE CONFIGURATION
// =============================================================================
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "CRYVEX | Full Stack Developer & Vibe Coder",
  description: "Portfolio of Pankaj Kushwaha - Full Stack Developer, Vibe Coder, and AI Automation Specialist. Building the future with AI & Automation.",
  language: "en",
};

// =============================================================================
// HERO SECTION
// =============================================================================
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music" | "code" | "user" | "briefcase" | "mail";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  tagline: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: imageConfig.hero.background,
  brandName: "CRYVEX",
  decodeText: "CRYVEX",
  decodeChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  subtitle: "Full Stack Developer | Vibe Coder",
  tagline: "Building the future with AI & Automation",
  ctaPrimary: "View Projects",
  ctaPrimaryTarget: "projects",
  ctaSecondary: "Get in Touch",
  ctaSecondaryTarget: "contact",
  cornerLabel: "Available for Work",
  cornerDetail: "Open to Collaborations",
  navItems: [
    { label: "About", sectionId: "about", icon: "user" },
    { label: "Tech Stack", sectionId: "techstack", icon: "code" },
    { label: "Projects", sectionId: "projects", icon: "briefcase" },
    { label: "Contact", sectionId: "contact", icon: "mail" },
  ],
};

// =============================================================================
// ABOUT SECTION - About the Creator
// =============================================================================
export interface AboutConfig {
  sectionLabel: string;
  sectionTitle: string;
  creatorName: string;
  creatorTitle: string;
  bioText: string;
  portraitImage: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const aboutConfig: AboutConfig = {
  sectionLabel: "About the Creator",
  sectionTitle: "Pankaj Kushwaha",
  creatorName: "Pankaj Kushwaha",
  creatorTitle: "Full Stack Developer | Vibe Coder",
  bioText: "I am a next-gen developer who bridges the gap between imagination and reality using AI. I don't just write code; I orchestrate AI tools to build stunning websites, complex apps, and powerful automation systems. It's not just about syntax; it's about the vibe and the result.",
  portraitImage: imageConfig.about.creatorPortrait,
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "10+" },
    { label: "Happy Clients", value: "10+" },
  ],
};

// =============================================================================
// TECH STACK SECTION (Repurposed from AlbumCube)
// =============================================================================
export interface TechStack {
  id: number;
  name: string;
  category: string;
  icon: string;
}

export interface TechStackConfig {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  cubeTextures: string[];
  scrollHint: string;
  techStacks: TechStack[];
}

export const techStackConfig: TechStackConfig = {
  sectionLabel: "My Expertise",
  sectionTitle: "Tech Stack",
  sectionSubtitle: "Technologies I work with",
  cubeTextures: imageConfig.techStack.cubeTextures,
  scrollHint: "Scroll to explore",
  techStacks: [
    { id: 1, name: "AI Automation", category: "Core Skill", icon: "brain" },
    { id: 2, name: "Full Stack Development", category: "Core Skill", icon: "layers" },
    { id: 3, name: "App Development", category: "Core Skill", icon: "smartphone" },
    { id: 4, name: "Cloud & DevOps", category: "Infrastructure", icon: "cloud" },
  ],
};

// =============================================================================
// FEATURED PROJECTS SECTION (Repurposed from ParallaxGallery)
// =============================================================================
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProjectsConfig {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  projects: Project[];
}

export const projectsConfig: ProjectsConfig = {
  sectionLabel: "Portfolio",
  sectionTitle: "Featured Projects",
  sectionSubtitle: "Selected works showcasing my expertise",
  marqueeTexts: ["AI Automation", "Full Stack", "Web Apps", "Mobile Apps", "Cloud Solutions"],
  endCtaText: "Get in Touch",
  parallaxImagesTop: imageConfig.projects.parallaxTop.map((src, i) => ({
    id: i + 1,
    src,
    alt: `Project showcase ${i + 1}`,
  })),
  parallaxImagesBottom: imageConfig.projects.parallaxBottom.map((src, i) => ({
    id: i + 1,
    src,
    alt: `Project showcase ${i + 7}`,
  })),
  projects: [
    {
      id: 1,
      title: "Ott Platgorm For Naino Academy",
      description: "Ott Platgorm For Naino Academy made for students.",
      image: imageConfig.projects.project1,
      tags: ["html", "js", "Video PLayer", "Telegram Hosting"],
      link: "https://nainoacademy.netlify.app/",
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Full-featured cross-platform mobile application with real-time inventory and AI-powered recommendations.",
      image: imageConfig.projects.project2,
      tags: ["React Native", "Node.js", "Firebase", "Stripe"],
      link: "#",
    },
    {
      id: 3,
      title: "SaaS Dashboard Platform",
      description: "Modern analytics dashboard with real-time data visualization and collaborative features.",
      image: imageConfig.projects.project3,
      tags: ["React", "TypeScript", "PostgreSQL", "WebSocket"],
      link: "#",
    },
    {
      id: 4,
      title: "Cybersecurity Toolkit",
      description: "Comprehensive security analysis tool for penetration testing and vulnerability assessment.",
      image: imageConfig.projects.project4,
      tags: ["Python", "Docker", "Kubernetes", "Security"],
      link: "#",
    },
    {
      id: 5,
      title: "Code Collaboration Platform",
      description: "Real-time collaborative coding environment with AI-assisted code completion and review.",
      image: imageConfig.projects.project5,
      tags: ["Next.js", "WebRTC", "Redis", "AI"],
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Generator",
      description: "AI-powered tool that generates stunning developer portfolios from GitHub profiles.",
      image: imageConfig.projects.project6,
      tags: ["Vue.js", "GraphQL", "Tailwind", "OpenAI"],
      link: "#",
    },
  ],
};

// =============================================================================
// TOUR SCHEDULE SECTION - DISABLED (Empty config)
// =============================================================================
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

// Empty config to disable this section
export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "",
  sectionTitle: "",
  vinylImage: "",
  buyButtonText: "",
  detailsButtonText: "",
  bottomNote: "",
  bottomCtaText: "",
  statusLabels: {
    onSale: "",
    soldOut: "",
    comingSoon: "",
    default: "",
  },
  tourDates: [],
};

// =============================================================================
// FOOTER / CONTACT SECTION
// =============================================================================
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music" | "github" | "linkedin" | "telegram";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  telegramLabel: string;
  telegram: string;
  telegramLink: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: imageConfig.footer.portrait,
  portraitAlt: "Pankaj Kushwaha - Full Stack Developer",
  heroTitle: "CRYVEX",
  heroSubtitle: "Let's Build Something Amazing",
  artistLabel: "Developer",
  artistName: "Pankaj Kushwaha",
  artistSubtitle: "Full Stack | Vibe Coder | AI Specialist",
  brandName: "CRYVEX",
  brandDescription: "Next-gen developer bridging imagination and reality using AI. Building stunning websites, complex apps, and powerful automation systems.",
  quickLinksTitle: "Quick Links",
  quickLinks: ["About", "Tech Stack", "Projects", "Contact"],
  contactTitle: "Get in Touch",
  emailLabel: "Email",
  email: "pankajkushwaha20093@gmail.com",
  phoneLabel: "Phone",
  phone: "Available on Request",
  addressLabel: "Location",
  address: "Remote / Worldwide",
  telegramLabel: "Telegram",
  telegram: "@cryvex4",
  telegramLink: "https://t.me/cryvex4",
  newsletterTitle: "Stay Updated",
  newsletterDescription: "Subscribe to get updates on new projects and tech insights.",
  newsletterButtonText: "Subscribe",
  subscribeAlertMessage: "Thanks for subscribing! You'll receive updates on new projects.",
  copyrightText: "© 2024 CRYVEX. All rights reserved. Built with AI & Vibes.",
  bottomLinks: ["Privacy Policy", "Terms of Service"],
  socialLinks: [
    { icon: "github", label: "GitHub", href: "https://github.com" },
    { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "telegram", label: "Telegram", href: "https://t.me/cryvex4" },
  ],
  galleryImages: imageConfig.footer.gallery.map((src, i) => ({
    id: i + 1,
    src,
  })),
};
