export interface Project {
  slug: string;
  title: string;
  category: "Full-Stack" | "Backend" | "Frontend" | "Architecture";
  year: string;
  role: string;
  tech: string[];
  problem: string;
  solution: string;
  outcome: string;
  liveUrl: string | null;
  githubUrl: string;
  screenshots: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  institution: string;
  description: string;
}

export const OWNER = {
  name: "Salim President",
  role: "Full-Stack Developer",
  city: "Gujarat, India",
  timezone: "Asia/Kolkata",
  headline: "Full-stack developer building robust web applications from architecture to deployment.",
  bio: "Master of Computer Applications student at Uka Tarsadia University with a foundation in full-stack architecture. Focused on building responsive, accessible web applications and high-throughput backend services using Next.js, React, Node.js, and ASP.NET Core.",
  email: "presidentsalim379@gmail.com",
  phone: "+91 97250 28042",
  github: "https://github.com/presidentsalim",
  linkedin: "https://www.linkedin.com/in/salim-president-14384836a",
  x: "https://x.com/PresidentSalim",
  instagram: "https://www.instagram.com/salim_president",
  availabilityText: "Available for select freelance and engineering roles",
  profileImage: "/profile.jpg",
  badgeFrontImage: "/profile-card.jpg",
  badgeBackImage: "/profile-back.jpg",
  resumePath: "/resume.pdf",
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026 to Present",
    role: "Master of Computer Applications (MCA)",
    institution: "Uka Tarsadia University (UTU), Gujarat",
    description: "Deepening focus in enterprise software engineering, distributed web architecture, cloud systems, and database optimization.",
  },
  {
    year: "2023 to 2026",
    role: "Bachelor of Computer Applications (BCA)",
    institution: "Uka Tarsadia University (UTU), Gujarat",
    description: "Established core competence in computer science fundamentals, data structures, algorithms, object-oriented design, and relational databases.",
  },
];

export const SKILL_GROUPS = [
  {
    category: "Languages",
    number: "01",
    skills: ["JavaScript (ES6+)", "TypeScript", "C#", "Python", "PHP", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    number: "02",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    number: "03",
    skills: ["Node.js", "Express", "ASP.NET Core", "ASP.NET MVC", "FastAPI", "RESTful APIs"],
  },
  {
    category: "Database & Cloud",
    number: "04",
    skills: ["MongoDB", "Entity Framework Core", "MySQL", "Git", "GitHub", "Vercel"],
  },
  {
    category: "Motion & Tools",
    number: "05",
    skills: ["Postman", "VS Code", "Responsive Web Design", "Performance Auditing", "Semantic HTML"],
  },
];

export const SERVICES: Service[] = [
  {
    id: "full-stack",
    number: "01",
    title: "Full-Stack Web Development",
    subtitle: "Modern React and Next.js applications",
    description: "Engineering end-to-end web applications with clean component architecture, server-side rendering, and responsive design systems.",
  },
  {
    id: "api-backend",
    number: "02",
    title: "REST API & Backend Engineering",
    subtitle: "ASP.NET Core, Node.js, and FastAPI services",
    description: "Designing secure, role-authenticated backend APIs with schema validation, connection pooling, and resilient error handling.",
  },
  {
    id: "frontend-perf",
    number: "03",
    title: "Frontend Engineering & Design Systems",
    subtitle: "Tailwind CSS, clean typography, and accessibility",
    description: "Translating mockups into production-grade interfaces with semantic markup, mobile-first responsiveness, and WCAG AA contrast.",
  },
  {
    id: "database-architecture",
    number: "04",
    title: "Database Modeling & Integration",
    subtitle: "MongoDB, EF Core, and MySQL structures",
    description: "Designing normalized schemas, query pipelines, and object-relational mappings to guarantee data consistency and quick retrieval.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "recruitpro-automation-suite",
    title: "RecruitPro: Recruitment Portal & Selenium Test Automation",
    category: "Full-Stack",
    year: "2026",
    role: "Full-Stack Developer & QA Engineer",
    tech: ["PHP", "MySQL", "Selenium WebDriver", "Python", "Bootstrap", "JavaScript"],
    problem: "Recruitment platforms handle critical applicant onboarding where regression bugs in registration, credential handling, and role authorization cause candidate loss.",
    solution: "Developed an end-to-end recruitment management web portal integrated with a comprehensive Selenium WebDriver automated test suite covering multi-browser signup workflows and test metrics.",
    outcome: "100% automated test coverage on signup pipelines with automated test reports and verified relational data integrity.",
    liveUrl: null,
    githubUrl: "https://github.com/presidentsalim/RecruitPro-Automation",
    screenshots: [
      "/projects/recruitpro-automation-suite/1.png",
      "/projects/recruitpro-automation-suite/2.png",
      "/projects/recruitpro-automation-suite/3.png",
    ],
  },
  {
    slug: "asp-net-identity-auth",
    title: "ASP.NET Core Identity & Role Authentication",
    category: "Backend",
    year: "2025",
    role: "Backend Developer",
    tech: ["ASP.NET Core", "C#", "Entity Framework Core", "Identity", "Razor Pages", "SQL Server"],
    problem: "Enterprise web platforms require resilient authentication and granular role segregation to prevent unauthorized access and privilege escalation.",
    solution: "Engineered a centralized authentication suite utilizing ASP.NET Core Identity. Configured secure password hashing, session tokens, custom claims, and role-based policy gates across controllers.",
    outcome: "Eliminated unauthorized route access across test scenarios and established clean modular authorization templates for future microservices.",
    liveUrl: null,
    githubUrl: "https://github.com/presidentsalim/asp-net-p3-auth",
    screenshots: [
      "/projects/asp-net-identity-auth/1.png",
      "/projects/asp-net-identity-auth/2.png",
      "/projects/asp-net-identity-auth/3.png",
    ],
  },
  {
    slug: "fastapi-movie-recommendation",
    title: "FastAPI Movie Recommendation Engine",
    category: "Full-Stack",
    year: "2025",
    role: "Full-Stack Developer",
    tech: ["Python", "FastAPI", "Pandas", "REST APIs", "JSON", "JavaScript"],
    problem: "Catalog exploration across extensive film libraries struggles when users face slow recommendation latency and imprecise genre matching.",
    solution: "Constructed a high-throughput recommendation service in Python using FastAPI. Implemented vectorized genre scoring to compute similarity metrics and deliver contextual title rankings.",
    outcome: "Delivered sub-50ms query response latency across catalog batches, verified with local benchmark suites.",
    liveUrl: null,
    githubUrl: "https://github.com/presidentsalim/movie-recommendation-system",
    screenshots: [
      "/projects/fastapi-movie-recommendation/1.png",
      "/projects/fastapi-movie-recommendation/2.png",
      "/projects/fastapi-movie-recommendation/3.png",
    ],
  },
  {
    slug: "online-food-delivery-system",
    title: "Food Ordering & Dispatch Platform",
    category: "Full-Stack",
    year: "2025",
    role: "Full-Stack Developer",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    problem: "Local dining establishments require an accessible online menu and order dispatch pipeline without paying punitive marketplace aggregator fees.",
    solution: "Designed and implemented a full-stack ordering portal featuring real-time cart calculations, customer profile histories, menu categories, and a kitchen dispatch queue.",
    outcome: "Processed multi-item customer orders seamlessly with relational data integrity across users, meals, and order timestamps.",
    liveUrl: null,
    githubUrl: "https://github.com/presidentsalim/online-food-delivery",
    screenshots: [
      "/projects/online-food-delivery-system/1.png",
      "/projects/online-food-delivery-system/2.png",
      "/projects/online-food-delivery-system/3.png",
    ],
  },
  {
    slug: "aspnet-razor-todo-app",
    title: "ASP.NET Core Task Management Suite",
    category: "Backend",
    year: "2025",
    role: "Backend Developer",
    tech: ["ASP.NET Core", "Razor Pages", "EF Core", "C#", "SQLite"],
    problem: "Users need lightweight, responsive task organizers that guarantee offline-tolerant persistence and validation without bloated client bundles.",
    solution: "Implemented server-rendered Razor Pages backed by Entity Framework Core. Created full CRUD endpoints with strongly typed view models and data annotation validations.",
    outcome: "Maintained instant page render times under 40ms with zero client runtime script dependencies.",
    liveUrl: null,
    githubUrl: "https://github.com/presidentsalim/TodoApp",
    screenshots: [
      "/projects/aspnet-razor-todo-app/1.png",
      "/projects/aspnet-razor-todo-app/2.png",
      "/projects/aspnet-razor-todo-app/3.png",
    ],
  },
  {
    slug: "textutils-react-toolkit",
    title: "TextUtils React Utility Suite",
    category: "Frontend",
    year: "2025",
    role: "Frontend Developer",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    problem: "Writers, programmers, and students often require instant text transformation, whitespace sanitization, and metric analysis without exposing private copy to third-party web scrapers.",
    solution: "Built a reactive text utility application in React. Provided instant character counting, word density metrics, reading time calculations, case conversions, and clipboard synchronization.",
    outcome: "Achieved instant client-side execution with 0 bytes transmitted over the wire for text transformations.",
    liveUrl: null,
    githubUrl: "https://github.com/presidentsalim/TextUtils-React",
    screenshots: [
      "/projects/textutils-react-toolkit/1.png",
      "/projects/textutils-react-toolkit/2.png",
      "/projects/textutils-react-toolkit/3.png",
    ],
  },
  {
    slug: "mvc-portfolio-architecture",
    title: "ASP.NET MVC Portfolio Application",
    category: "Architecture",
    year: "2025",
    role: "Full-Stack Developer",
    tech: ["ASP.NET MVC", "C#", "Razor Views", "CSS3", "JavaScript"],
    problem: "Academic portfolios often suffer from monolithic page layouts that make maintaining project lists and resume credentials cumbersome.",
    solution: "Architected a classic Model-View-Controller web application in C# with decoupled controller actions, typed ViewModels, and reusable Razor partial components.",
    outcome: "Enabled modular updates to project listings and credentials with clear separation of business logic and presentation.",
    liveUrl: null,
    githubUrl: "https://github.com/presidentsalim/PortfolioMVC",
    screenshots: [
      "/projects/mvc-portfolio-architecture/1.png",
      "/projects/mvc-portfolio-architecture/2.png",
      "/projects/mvc-portfolio-architecture/3.png",
    ],
  },
];
