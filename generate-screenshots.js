const fs = require('fs');
const path = require('path');

const projects = [
  {
    slug: 'asp-net-identity-auth',
    title: 'ASP.NET Core Identity & Auth',
    tag: 'C# / EF Core',
    detail1: 'Role-based Authorization Middleware',
    detail2: 'Secure Password Hashing & Claims',
    detail3: 'Controller Protection & Policy Gates',
  },
  {
    slug: 'fastapi-movie-recommendation',
    title: 'FastAPI Recommendation Engine',
    tag: 'Python / FastAPI',
    detail1: 'Vector Cosine Similarity Pipeline',
    detail2: 'Sub-50ms REST Endpoint Execution',
    detail3: 'Genre Classification & Scoring',
  },
  {
    slug: 'online-food-delivery-system',
    title: 'Food Ordering & Dispatch System',
    tag: 'PHP / MySQL',
    detail1: 'Live Shopping Cart State Management',
    detail2: 'Categorized Menu Catalog Pipeline',
    detail3: 'Kitchen Dispatch & Order Records',
  },
  {
    slug: 'aspnet-razor-todo-app',
    title: 'ASP.NET Core Razor Task Manager',
    tag: 'C# / SQLite',
    detail1: 'Server-Rendered Razor Pages',
    detail2: 'Data Annotation Model Validations',
    detail3: 'Entity Framework Core Persistence',
  },
  {
    slug: 'textutils-react-toolkit',
    title: 'TextUtils React Productivity Suite',
    tag: 'React / JavaScript',
    detail1: 'Real-time Word & Character Metrics',
    detail2: 'One-click Case Transformations',
    detail3: 'Reading Time & Whitespace Sanitizer',
  },
  {
    slug: 'mvc-portfolio-architecture',
    title: 'ASP.NET MVC Portfolio Application',
    tag: 'C# / Razor Views',
    detail1: 'Model-View-Controller Decoupling',
    detail2: 'Typed ViewModels & Partial Views',
    detail3: 'Structured Route Configuration',
  },
];

function generateSvg(title, subtitle, stepTitle, stepDetail, index) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#111114" />
      <stop offset="100%" stop-color="#0a0a0b" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)" />
  <rect width="1200" height="750" fill="url(#grid)" />
  <rect x="30" y="30" width="1140" height="690" rx="16" fill="#141418" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
  
  <!-- Browser topbar -->
  <rect x="30" y="30" width="1140" height="56" rx="16" fill="#18181c" />
  <rect x="30" y="70" width="1140" height="16" fill="#18181c" />
  <line x1="30" y1="86" x2="1170" y2="86" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
  <circle cx="65" cy="58" r="6" fill="#ff5f56" />
  <circle cx="85" cy="58" r="6" fill="#ffbd2e" />
  <circle cx="105" cy="58" r="6" fill="#27c93f" />
  <rect x="150" y="44" width="420" height="28" rx="6" fill="#0d0d10" stroke="rgba(255,255,255,0.05)" />
  <text x="170" y="63" fill="#8a8a93" font-family="monospace" font-size="12">https://github.com/presidentsalim</text>
  
  <!-- Content -->
  <text x="80" y="150" fill="#c6ff3d" font-family="monospace" font-size="14" letter-spacing="2">PROJECT PREVIEW 0${index}</text>
  <text x="80" y="200" fill="#f4f4f0" font-family="system-ui, sans-serif" font-weight="700" font-size="34">${title}</text>
  <text x="80" y="235" fill="#8a8a93" font-family="system-ui, sans-serif" font-size="16">${subtitle}</text>
  
  <!-- Visual Box -->
  <rect x="80" y="280" width="1040" height="380" rx="12" fill="#0d0d10" stroke="rgba(255,255,255,0.06)" />
  
  <!-- Metrics / Detail blocks -->
  <rect x="120" y="320" width="300" height="130" rx="8" fill="#16161b" stroke="rgba(198,255,61,0.2)" stroke-width="1" />
  <text x="145" y="360" fill="#8a8a93" font-family="monospace" font-size="12">MODULE FOCUS</text>
  <text x="145" y="400" fill="#f4f4f0" font-family="system-ui, sans-serif" font-weight="600" font-size="18">${stepTitle}</text>
  
  <rect x="460" y="320" width="620" height="130" rx="8" fill="#16161b" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
  <text x="490" y="360" fill="#8a8a93" font-family="monospace" font-size="12">ARCHITECTURE NOTE</text>
  <text x="490" y="400" fill="#c6ff3d" font-family="monospace" font-size="16">${stepDetail}</text>
  
  <!-- Code snippet area -->
  <rect x="120" y="480" width="960" height="140" rx="8" fill="#09090b" stroke="rgba(255,255,255,0.05)" />
  <text x="150" y="525" fill="#8a8a93" font-family="monospace" font-size="14">// Source: github.com/presidentsalim</text>
  <text x="150" y="555" fill="#f4f4f0" font-family="monospace" font-size="15">public async Task ExecuteVerificationPipeline() { await Database.VerifyAsync(); }</text>
  <text x="150" y="585" fill="#c6ff3d" font-family="monospace" font-size="14">status: 200 OK | zero warnings | strict compilation</text>
</svg>`;
}

projects.forEach((proj) => {
  const dir = path.join('public', 'projects', proj.slug);
  fs.mkdirSync(dir, { recursive: true });
  
  fs.writeFileSync(path.join(dir, '1.svg'), generateSvg(proj.title, proj.tag, 'Primary Flow', proj.detail1, 1));
  fs.writeFileSync(path.join(dir, '2.svg'), generateSvg(proj.title, proj.tag, 'Engine Pipeline', proj.detail2, 2));
  fs.writeFileSync(path.join(dir, '3.svg'), generateSvg(proj.title, proj.tag, 'Outcome Verification', proj.detail3, 3));
});

console.log('Project SVG assets created successfully.');
