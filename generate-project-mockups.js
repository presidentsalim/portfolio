const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ensure directories exist
const projects = [
  'online-food-delivery-system',
  'fastapi-movie-recommendation',
  'asp-net-identity-auth',
  'aspnet-razor-todo-app',
  'textutils-react-toolkit',
  'mvc-portfolio-architecture',
];

projects.forEach((proj) => {
  const dir = path.join(__dirname, 'public', 'projects', proj);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper for browser window frame
function createBrowserChrome(url, title, badge = "ACTIVE") {
  return `
    <rect x="0" y="0" width="1600" height="1000" fill="#0d0e12" />
    <rect x="20" y="20" width="1560" height="960" rx="16" fill="#13141a" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
    <!-- Window topbar -->
    <rect x="20" y="20" width="1560" height="64" rx="16" fill="#181a22" />
    <rect x="20" y="68" width="1560" height="16" fill="#181a22" />
    <line x1="20" y1="84" x2="1580" y2="84" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    <!-- Traffic lights -->
    <circle cx="56" cy="52" r="7" fill="#ff5f56" />
    <circle cx="80" cy="52" r="7" fill="#ffbd2e" />
    <circle cx="104" cy="52" r="7" fill="#27c93f" />
    <!-- URL Bar -->
    <rect x="140" y="36" width="620" height="32" rx="8" fill="#0e0f14" stroke="rgba(255,255,255,0.06)" />
    <circle cx="160" cy="52" r="4" fill="#27c93f" />
    <text x="176" y="57" fill="#8e92a4" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="500">${url}</text>
    <!-- Title / Badge -->
    <text x="1420" y="57" fill="#8e92a4" font-family="monospace" font-size="12" text-anchor="end">${title}</text>
    <rect x="1440" y="40" width="100" height="24" rx="6" fill="rgba(198,255,61,0.12)" stroke="rgba(198,255,61,0.3)" />
    <text x="1490" y="56" fill="#c6ff3d" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle">${badge}</text>
  `;
}

// 1. Online Food Delivery System
const foodDelivery1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  ${createBrowserChrome("https://eats.salimpresident.dev/menu", "FOOD DISPATCH // ORDERING PORTAL", "LIVE")}
  <!-- Left Sidebar -->
  <rect x="40" y="104" width="240" height="856" rx="12" fill="#161822" stroke="rgba(255,255,255,0.06)" />
  <text x="70" y="150" fill="#c6ff3d" font-family="monospace" font-size="16" font-weight="700">FASTBITE EATS</text>
  <text x="70" y="172" fill="#8e92a4" font-family="sans-serif" font-size="12">Restaurant &amp; Ordering</text>

  <!-- Nav Items -->
  <rect x="56" y="200" width="208" height="40" rx="8" fill="rgba(198,255,61,0.15)" stroke="rgba(198,255,61,0.3)" />
  <text x="80" y="225" fill="#c6ff3d" font-family="sans-serif" font-size="13" font-weight="600">🍕 Food Menu</text>
  <text x="80" y="275" fill="#8e92a4" font-family="sans-serif" font-size="13">📦 Active Orders</text>
  <text x="80" y="325" fill="#8e92a4" font-family="sans-serif" font-size="13">🏷️ Offers &amp; Deals</text>
  <text x="80" y="375" fill="#8e92a4" font-family="sans-serif" font-size="13">📊 Restaurant Stats</text>

  <!-- Categories Tab -->
  <text x="310" y="145" fill="#ffffff" font-family="sans-serif" font-size="24" font-weight="700">Popular Dishes &amp; Fast Delivery</text>
  <text x="310" y="170" fill="#8e92a4" font-family="sans-serif" font-size="14">Estimated delivery to your table: 18-25 mins</text>

  <!-- Food Card 1 -->
  <rect x="310" y="200" width="280" height="340" rx="14" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <rect x="325" y="215" width="250" height="170" rx="10" fill="#242736" />
  <circle cx="450" cy="300" r="45" fill="#e25822" opacity="0.8" />
  <text x="450" y="308" fill="#ffffff" font-family="sans-serif" font-size="32" text-anchor="middle">🍔</text>
  <text x="330" y="415" fill="#ffffff" font-family="sans-serif" font-size="17" font-weight="700">Truffle Beef Burger</text>
  <text x="330" y="438" fill="#8e92a4" font-family="sans-serif" font-size="12">Angus beef patty, brioche bun, cheese</text>
  <text x="330" y="485" fill="#c6ff3d" font-family="monospace" font-size="20" font-weight="700">$14.99</text>
  <rect x="470" y="460" width="105" height="36" rx="8" fill="#c6ff3d" />
  <text x="522" y="483" fill="#0d0e12" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle">+ Add</text>

  <!-- Food Card 2 -->
  <rect x="615" y="200" width="280" height="340" rx="14" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <rect x="630" y="215" width="250" height="170" rx="10" fill="#242736" />
  <circle cx="755" cy="300" r="45" fill="#d97706" opacity="0.8" />
  <text x="755" y="308" fill="#ffffff" font-family="sans-serif" font-size="32" text-anchor="middle">🍕</text>
  <text x="635" y="415" fill="#ffffff" font-family="sans-serif" font-size="17" font-weight="700">Artisan Woodfired Pizza</text>
  <text x="635" y="438" fill="#8e92a4" font-family="sans-serif" font-size="12">San Marzano sauce, fresh basil, mozzarella</text>
  <text x="635" y="485" fill="#c6ff3d" font-family="monospace" font-size="20" font-weight="700">$18.50</text>
  <rect x="775" y="460" width="105" height="36" rx="8" fill="#c6ff3d" />
  <text x="827" y="483" fill="#0d0e12" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle">+ Add</text>

  <!-- Food Card 3 -->
  <rect x="920" y="200" width="280" height="340" rx="14" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <rect x="935" y="215" width="250" height="170" rx="10" fill="#242736" />
  <circle cx="1060" cy="300" r="45" fill="#059669" opacity="0.8" />
  <text x="1060" y="308" fill="#ffffff" font-family="sans-serif" font-size="32" text-anchor="middle">🍜</text>
  <text x="940" y="415" fill="#ffffff" font-family="sans-serif" font-size="17" font-weight="700">Spicy Tonkotsu Ramen</text>
  <text x="940" y="438" fill="#8e92a4" font-family="sans-serif" font-size="12">Rich broth, chashu pork, seasoned egg</text>
  <text x="940" y="485" fill="#c6ff3d" font-family="monospace" font-size="20" font-weight="700">$16.20</text>
  <rect x="1080" y="460" width="105" height="36" rx="8" fill="#c6ff3d" />
  <text x="1132" y="483" fill="#0d0e12" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle">+ Add</text>

  <!-- Right Order Summary Sidebar -->
  <rect x="1225" y="104" width="335" height="856" rx="14" fill="#161822" stroke="rgba(255,255,255,0.08)" />
  <text x="1255" y="150" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="700">Order Summary</text>
  <text x="1255" y="172" fill="#8e92a4" font-family="sans-serif" font-size="12">3 items in active cart</text>

  <rect x="1250" y="200" width="285" height="70" rx="10" fill="#1e202d" />
  <text x="1265" y="230" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="600">1x Truffle Beef Burger</text>
  <text x="1265" y="252" fill="#8e92a4" font-family="monospace" font-size="12">Extra cheddar cheese</text>
  <text x="1515" y="240" fill="#c6ff3d" font-family="monospace" font-size="14" text-anchor="end">$14.99</text>

  <rect x="1250" y="285" width="285" height="70" rx="10" fill="#1e202d" />
  <text x="1265" y="315" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="600">1x Artisan Woodfired Pizza</text>
  <text x="1265" y="337" fill="#8e92a4" font-family="monospace" font-size="12">Crispy thin crust</text>
  <text x="1515" y="325" fill="#c6ff3d" font-family="monospace" font-size="14" text-anchor="end">$18.50</text>

  <!-- Pricing Details -->
  <line x1="1250" y1="400" x2="1535" y2="400" stroke="rgba(255,255,255,0.08)" />
  <text x="1255" y="440" fill="#8e92a4" font-family="sans-serif" font-size="13">Subtotal</text>
  <text x="1535" y="440" fill="#ffffff" font-family="monospace" font-size="13" text-anchor="end">$33.49</text>
  <text x="1255" y="475" fill="#8e92a4" font-family="sans-serif" font-size="13">Delivery Fee</text>
  <text x="1535" y="475" fill="#27c93f" font-family="monospace" font-size="13" text-anchor="end">FREE</text>
  <text x="1255" y="510" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="700">Total Price</text>
  <text x="1535" y="510" fill="#c6ff3d" font-family="monospace" font-size="20" font-weight="700" text-anchor="end">$33.49</text>

  <rect x="1250" y="540" width="285" height="48" rx="10" fill="#c6ff3d" />
  <text x="1392" y="570" fill="#0d0e12" font-family="sans-serif" font-size="15" font-weight="700" text-anchor="middle">Proceed to Checkout →</text>
</svg>
`;

// 2. FastAPI Movie Recommendation Engine
const movieRecommendation1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  ${createBrowserChrome("https://cinematch.salimpresident.dev/discover", "FASTAPI NEURAL RECOMMENDATION ENGINE", "38ms LATENCY")}
  <!-- Left Nav -->
  <rect x="40" y="104" width="220" height="856" rx="12" fill="#13141d" stroke="rgba(255,255,255,0.06)" />
  <text x="65" y="150" fill="#c6ff3d" font-family="monospace" font-size="16" font-weight="700">CINEMATCH AI</text>
  <text x="65" y="172" fill="#8e92a4" font-family="sans-serif" font-size="11">FastAPI Vector Scoring</text>

  <rect x="52" y="200" width="196" height="38" rx="8" fill="rgba(198,255,61,0.15)" stroke="rgba(198,255,61,0.3)" />
  <text x="75" y="225" fill="#c6ff3d" font-family="sans-serif" font-size="13" font-weight="600">⚡ Top Matches</text>
  <text x="75" y="270" fill="#8e92a4" font-family="sans-serif" font-size="13">🧬 Similarity Graph</text>
  <text x="75" y="315" fill="#8e92a4" font-family="sans-serif" font-size="13">📡 REST Endpoints</text>
  <text x="75" y="360" fill="#8e92a4" font-family="sans-serif" font-size="13">⚙️ Vector Embeddings</text>

  <!-- Hero Header in Discovery -->
  <rect x="285" y="104" width="1275" height="240" rx="14" fill="#171926" stroke="rgba(255,255,255,0.08)" />
  <rect x="315" y="130" width="130" height="26" rx="6" fill="#c6ff3d" />
  <text x="380" y="148" fill="#0d0e12" font-family="monospace" font-size="12" font-weight="700" text-anchor="middle">98.6% SIMILARITY</text>
  <text x="315" y="195" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="800">Interstellar: Singularity &amp; Time</text>
  <text x="315" y="230" fill="#8e92a4" font-family="sans-serif" font-size="14" max-width="800">Recommended based on your interest in Sci-Fi, Theoretical Physics, Christopher Nolan, and High-Tension Orchestral Score.</text>

  <rect x="315" y="260" width="150" height="42" rx="8" fill="#c6ff3d" />
  <text x="390" y="286" fill="#0d0e12" font-family="sans-serif" font-size="14" font-weight="700" text-anchor="middle">▶ Watch Trailer</text>
  <rect x="480" y="260" width="160" height="42" rx="8" fill="#222536" stroke="rgba(255,255,255,0.1)" />
  <text x="560" y="286" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="600" text-anchor="middle">+ Add to Watchlist</text>

  <!-- Recommended Row -->
  <text x="285" y="390" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">Neural Network Top Recommendations</text>

  <!-- Movie Card 1 -->
  <rect x="285" y="420" width="295" height="430" rx="12" fill="#181a26" stroke="rgba(255,255,255,0.08)" />
  <rect x="300" y="435" width="265" height="260" rx="8" fill="#25283b" />
  <text x="432" y="575" fill="#c6ff3d" font-family="sans-serif" font-size="44" text-anchor="middle">🌌</text>
  <rect x="310" y="445" width="90" height="24" rx="4" fill="#000000" opacity="0.75" />
  <text x="355" y="461" fill="#c6ff3d" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle">98% Match</text>
  <text x="300" y="725" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="700">Blade Runner 2049</text>
  <text x="300" y="750" fill="#8e92a4" font-family="sans-serif" font-size="13">Sci-Fi • Cyberpunk • Denis Villeneuve</text>

  <!-- Movie Card 2 -->
  <rect x="610" y="420" width="295" height="430" rx="12" fill="#181a26" stroke="rgba(255,255,255,0.08)" />
  <rect x="625" y="435" width="265" height="260" rx="8" fill="#25283b" />
  <text x="757" y="575" fill="#c6ff3d" font-family="sans-serif" font-size="44" text-anchor="middle">⏳</text>
  <rect x="635" y="445" width="90" height="24" rx="4" fill="#000000" opacity="0.75" />
  <text x="680" y="461" fill="#c6ff3d" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle">96% Match</text>
  <text x="625" y="725" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="700">Arrival</text>
  <text x="625" y="750" fill="#8e92a4" font-family="sans-serif" font-size="13">Drama • Sci-Fi • Linguistics</text>

  <!-- Movie Card 3 -->
  <rect x="935" y="420" width="295" height="430" rx="12" fill="#181a26" stroke="rgba(255,255,255,0.08)" />
  <rect x="950" y="435" width="265" height="260" rx="8" fill="#25283b" />
  <text x="1082" y="575" fill="#c6ff3d" font-family="sans-serif" font-size="44" text-anchor="middle">🧠</text>
  <rect x="960" y="445" width="90" height="24" rx="4" fill="#000000" opacity="0.75" />
  <text x="1005" y="461" fill="#c6ff3d" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle">94% Match</text>
  <text x="950" y="725" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="700">Inception</text>
  <text x="950" y="750" fill="#8e92a4" font-family="sans-serif" font-size="13">Action • Sci-Fi • Mind-Bending</text>

  <!-- Movie Card 4 -->
  <rect x="1260" y="420" width="295" height="430" rx="12" fill="#181a26" stroke="rgba(255,255,255,0.08)" />
  <rect x="1275" y="435" width="265" height="260" rx="8" fill="#25283b" />
  <text x="1407" y="575" fill="#c6ff3d" font-family="sans-serif" font-size="44" text-anchor="middle">🚀</text>
  <rect x="1285" y="445" width="90" height="24" rx="4" fill="#000000" opacity="0.75" />
  <text x="1330" y="461" fill="#c6ff3d" font-family="monospace" font-size="11" font-weight="700" text-anchor="middle">92% Match</text>
  <text x="1275" y="725" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="700">The Martian</text>
  <text x="1275" y="750" fill="#8e92a4" font-family="sans-serif" font-size="13">Adventure • Sci-Fi • Survival</text>
</svg>
`;

// 3. ASP.NET Core Identity &amp; Role Authentication
const aspnetAuth1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  ${createBrowserChrome("https://admin.salimpresident.dev/security/roles", "ASP.NET CORE IDENTITY // IAM SUITE", "RBAC ACTIVE")}
  <!-- Left Nav -->
  <rect x="40" y="104" width="240" height="856" rx="12" fill="#14151e" stroke="rgba(255,255,255,0.06)" />
  <text x="70" y="150" fill="#c6ff3d" font-family="monospace" font-size="16" font-weight="700">NET CORE AUTH</text>
  <text x="70" y="172" fill="#8e92a4" font-family="sans-serif" font-size="12">Security &amp; Identity Admin</text>

  <rect x="56" y="200" width="208" height="40" rx="8" fill="rgba(198,255,61,0.15)" stroke="rgba(198,255,61,0.3)" />
  <text x="80" y="225" fill="#c6ff3d" font-family="sans-serif" font-size="13" font-weight="600">🛡️ Role Policy Matrix</text>
  <text x="80" y="275" fill="#8e92a4" font-family="sans-serif" font-size="13">👥 Users Directory (1,480)</text>
  <text x="80" y="325" fill="#8e92a4" font-family="sans-serif" font-size="13">🔑 2FA &amp; Passkey Tokens</text>
  <text x="80" y="375" fill="#8e92a4" font-family="sans-serif" font-size="13">📋 Security Audit Logs</text>

  <!-- Metric Badges -->
  <rect x="310" y="104" width="380" height="110" rx="12" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <text x="335" y="140" fill="#8e92a4" font-family="monospace" font-size="12">AUTHENTICATION PROTOCOL</text>
  <text x="335" y="175" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">ASP.NET Identity + JWT</text>
  <text x="335" y="198" fill="#27c93f" font-family="monospace" font-size="12">● Zero Security Breaches</text>

  <rect x="720" y="104" width="380" height="110" rx="12" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <text x="745" y="140" fill="#8e92a4" font-family="monospace" font-size="12">ACTIVE USER SESSIONS</text>
  <text x="745" y="175" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">342 Valid Sessions</text>
  <text x="745" y="198" fill="#c6ff3d" font-family="monospace" font-size="12">● Strict Session Isolation</text>

  <rect x="1130" y="104" width="430" height="110" rx="12" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <text x="1155" y="140" fill="#8e92a4" font-family="monospace" font-size="12">POLICY GATES</text>
  <text x="1155" y="175" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">Claims-Based Authorization</text>
  <text x="1155" y="198" fill="#27c93f" font-family="monospace" font-size="12">● Granular Controller Policies</text>

  <!-- Role Matrix Table -->
  <rect x="310" y="240" width="1250" height="520" rx="14" fill="#161822" stroke="rgba(255,255,255,0.08)" />
  <text x="340" y="285" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">Role &amp; Permission Policy Matrix</text>
  <text x="340" y="310" fill="#8e92a4" font-family="sans-serif" font-size="13">Controller endpoints protected with [Authorize(Policy = "...")] attributes</text>

  <!-- Table Header -->
  <rect x="340" y="340" width="1190" height="44" rx="8" fill="#1e202d" />
  <text x="360" y="367" fill="#8e92a4" font-family="monospace" font-size="12" font-weight="600">ROLE NAME</text>
  <text x="560" y="367" fill="#8e92a4" font-family="monospace" font-size="12" font-weight="600">ASSIGNED USERS</text>
  <text x="760" y="367" fill="#8e92a4" font-family="monospace" font-size="12" font-weight="600">DATABASE READ</text>
  <text x="960" y="367" fill="#8e92a4" font-family="monospace" font-size="12" font-weight="600">WRITE / MODIFY</text>
  <text x="1160" y="367" fill="#8e92a4" font-family="monospace" font-size="12" font-weight="600">DELETE RECORDS</text>
  <text x="1360" y="367" fill="#8e92a4" font-family="monospace" font-size="12" font-weight="600">SYSTEM AUDIT</text>

  <!-- Row 1: System Administrator -->
  <line x1="340" y1="440" x2="1530" y2="440" stroke="rgba(255,255,255,0.06)" />
  <text x="360" y="420" fill="#c6ff3d" font-family="sans-serif" font-size="15" font-weight="700">System Administrator</text>
  <text x="560" y="420" fill="#ffffff" font-family="monospace" font-size="14">4 Accounts</text>
  <text x="760" y="420" fill="#27c93f" font-family="sans-serif" font-size="16">✔ ALLOWED</text>
  <text x="960" y="420" fill="#27c93f" font-family="sans-serif" font-size="16">✔ ALLOWED</text>
  <text x="1160" y="420" fill="#27c93f" font-family="sans-serif" font-size="16">✔ ALLOWED</text>
  <text x="1360" y="420" fill="#27c93f" font-family="sans-serif" font-size="16">✔ ALLOWED</text>

  <!-- Row 2: Compliance Officer -->
  <line x1="340" y1="510" x2="1530" y2="510" stroke="rgba(255,255,255,0.06)" />
  <text x="360" y="485" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="700">Compliance &amp; Auditor</text>
  <text x="560" y="485" fill="#ffffff" font-family="monospace" font-size="14">18 Accounts</text>
  <text x="760" y="485" fill="#27c93f" font-family="sans-serif" font-size="16">✔ ALLOWED</text>
  <text x="960" y="485" fill="#ff5f56" font-family="sans-serif" font-size="16">✖ DENIED</text>
  <text x="1160" y="485" fill="#ff5f56" font-family="sans-serif" font-size="16">✖ DENIED</text>
  <text x="1360" y="485" fill="#27c93f" font-family="sans-serif" font-size="16">✔ ALLOWED</text>

  <!-- Row 3: Standard Member -->
  <line x1="340" y1="580" x2="1530" y2="580" stroke="rgba(255,255,255,0.06)" />
  <text x="360" y="550" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="700">Standard User</text>
  <text x="560" y="550" fill="#ffffff" font-family="monospace" font-size="14">1,458 Accounts</text>
  <text x="760" y="550" fill="#27c93f" font-family="sans-serif" font-size="16">✔ ALLOWED</text>
  <text x="960" y="550" fill="#27c93f" font-family="sans-serif" font-size="16">✔ OWN ONLY</text>
  <text x="1160" y="550" fill="#ff5f56" font-family="sans-serif" font-size="16">✖ DENIED</text>
  <text x="1360" y="550" fill="#ff5f56" font-family="sans-serif" font-size="16">✖ DENIED</text>
</svg>
`;

// 4. ASP.NET Core Task Management (Razor Pages)
const todoApp1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  ${createBrowserChrome("https://tasks.salimpresident.dev/board", "ASP.NET CORE RAZOR PAGES // KANBAN", "EF CORE")}
  <!-- Left Sidebar -->
  <rect x="40" y="104" width="220" height="856" rx="12" fill="#14151e" stroke="rgba(255,255,255,0.06)" />
  <text x="65" y="150" fill="#c6ff3d" font-family="monospace" font-size="16" font-weight="700">TASKSTUDIO</text>
  <text x="65" y="172" fill="#8e92a4" font-family="sans-serif" font-size="12">Razor Pages &amp; SQLite</text>

  <rect x="52" y="200" width="196" height="38" rx="8" fill="rgba(198,255,61,0.15)" stroke="rgba(198,255,61,0.3)" />
  <text x="75" y="225" fill="#c6ff3d" font-family="sans-serif" font-size="13" font-weight="600">📋 Kanban Board</text>
  <text x="75" y="270" fill="#8e92a4" font-family="sans-serif" font-size="13">📅 Sprint Calendar</text>
  <text x="75" y="315" fill="#8e92a4" font-family="sans-serif" font-size="13">📈 Velocity Charts</text>
  <text x="75" y="360" fill="#8e92a4" font-family="sans-serif" font-size="13">🏷️ Priority Tags</text>

  <!-- Kanban Column 1: Backlog -->
  <rect x="285" y="104" width="300" height="856" rx="12" fill="#161824" stroke="rgba(255,255,255,0.06)" />
  <text x="305" y="145" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="700">To Do</text>
  <rect x="525" y="130" width="40" height="20" rx="10" fill="#222536" />
  <text x="545" y="144" fill="#8e92a4" font-family="monospace" font-size="11" text-anchor="middle">3</text>

  <rect x="300" y="175" width="270" height="120" rx="10" fill="#1c1f2e" stroke="rgba(255,255,255,0.08)" />
  <rect x="315" y="190" width="70" height="20" rx="4" fill="rgba(239,68,68,0.2)" />
  <text x="350" y="204" fill="#ef4444" font-family="monospace" font-size="10" font-weight="700" text-anchor="middle">URGENT</text>
  <text x="315" y="235" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="600">Integrate Razor ViewModels</text>
  <text x="315" y="258" fill="#8e92a4" font-family="sans-serif" font-size="12">Bind model validations with data annotations</text>

  <!-- Kanban Column 2: In Progress -->
  <rect x="610" y="104" width="300" height="856" rx="12" fill="#161824" stroke="rgba(255,255,255,0.06)" />
  <text x="630" y="145" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="700">In Progress</text>
  <rect x="850" y="130" width="40" height="20" rx="10" fill="rgba(198,255,61,0.2)" />
  <text x="870" y="144" fill="#c6ff3d" font-family="monospace" font-size="11" text-anchor="middle">2</text>

  <rect x="625" y="175" width="270" height="130" rx="10" fill="#1c1f2e" stroke="rgba(198,255,61,0.3)" />
  <rect x="640" y="190" width="75" height="20" rx="4" fill="rgba(198,255,61,0.2)" />
  <text x="677" y="204" fill="#c6ff3d" font-family="monospace" font-size="10" font-weight="700" text-anchor="middle">SPRINT 04</text>
  <text x="640" y="235" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="600">SQLite Offline Sync</text>
  <text x="640" y="258" fill="#8e92a4" font-family="sans-serif" font-size="12">Guarantee local state caching with zero dropouts</text>

  <!-- Kanban Column 3: In Review -->
  <rect x="935" y="104" width="300" height="856" rx="12" fill="#161824" stroke="rgba(255,255,255,0.06)" />
  <text x="955" y="145" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="700">Under Review</text>
  <rect x="1175" y="130" width="40" height="20" rx="10" fill="#222536" />
  <text x="1195" y="144" fill="#8e92a4" font-family="monospace" font-size="11" text-anchor="middle">1</text>

  <!-- Kanban Column 4: Completed -->
  <rect x="1260" y="104" width="300" height="856" rx="12" fill="#161824" stroke="rgba(255,255,255,0.06)" />
  <text x="1280" y="145" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="700">Completed (Done)</text>
  <rect x="1500" y="130" width="40" height="20" rx="10" fill="rgba(39,201,63,0.2)" />
  <text x="1520" y="144" fill="#27c93f" font-family="monospace" font-size="11" text-anchor="middle">8</text>
</svg>
`;

// 5. TextUtils React Utility Suite
const textUtils1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  ${createBrowserChrome("https://textutils.salimpresident.dev", "TEXTUTILS REACT WORKBENCH", "INSTANT WASM")}
  <!-- Metric Tiles -->
  <rect x="40" y="104" width="360" height="90" rx="12" fill="#161824" stroke="rgba(255,255,255,0.08)" />
  <text x="65" y="135" fill="#8e92a4" font-family="monospace" font-size="12">WORD COUNT</text>
  <text x="65" y="172" fill="#c6ff3d" font-family="monospace" font-size="30" font-weight="700">1,482</text>
  <text x="260" y="165" fill="#8e92a4" font-family="sans-serif" font-size="12">avg reading pace</text>

  <rect x="430" y="104" width="360" height="90" rx="12" fill="#161824" stroke="rgba(255,255,255,0.08)" />
  <text x="455" y="135" fill="#8e92a4" font-family="monospace" font-size="12">CHARACTER COUNT</text>
  <text x="455" y="172" fill="#ffffff" font-family="monospace" font-size="30" font-weight="700">9,340</text>
  <text x="650" y="165" fill="#8e92a4" font-family="sans-serif" font-size="12">incl. whitespace</text>

  <rect x="820" y="104" width="360" height="90" rx="12" fill="#161824" stroke="rgba(255,255,255,0.08)" />
  <text x="845" y="135" fill="#8e92a4" font-family="monospace" font-size="12">ESTIMATED READING TIME</text>
  <text x="845" y="172" fill="#27c93f" font-family="monospace" font-size="30" font-weight="700">5.9 Mins</text>
  <text x="1040" y="165" fill="#8e92a4" font-family="sans-serif" font-size="12">250 wpm</text>

  <rect x="1210" y="104" width="350" height="90" rx="12" fill="#161824" stroke="rgba(255,255,255,0.08)" />
  <text x="1235" y="135" fill="#8e92a4" font-family="monospace" font-size="12">PARAGRAPHS &amp; LINES</text>
  <text x="1235" y="172" fill="#ffffff" font-family="monospace" font-size="30" font-weight="700">24 / 148</text>
  <text x="1430" y="165" fill="#8e92a4" font-family="sans-serif" font-size="12">structured doc</text>

  <!-- Action Toolbar Buttons -->
  <rect x="40" y="215" width="1520" height="54" rx="10" fill="#191c2b" stroke="rgba(255,255,255,0.08)" />
  <rect x="55" y="225" width="140" height="34" rx="6" fill="#c6ff3d" />
  <text x="125" y="247" fill="#0d0e12" font-family="sans-serif" font-size="13" font-weight="700" text-anchor="middle">UPPERCASE</text>

  <rect x="210" y="225" width="140" height="34" rx="6" fill="#26293d" stroke="rgba(255,255,255,0.1)" />
  <text x="280" y="247" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="600" text-anchor="middle">lowercase</text>

  <rect x="365" y="225" width="170" height="34" rx="6" fill="#26293d" stroke="rgba(255,255,255,0.1)" />
  <text x="450" y="247" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="600" text-anchor="middle">Remove Extra Spaces</text>

  <rect x="550" y="225" width="140" height="34" rx="6" fill="#26293d" stroke="rgba(255,255,255,0.1)" />
  <text x="620" y="247" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="600" text-anchor="middle">JSON Prettify</text>

  <rect x="705" y="225" width="140" height="34" rx="6" fill="#26293d" stroke="rgba(255,255,255,0.1)" />
  <text x="775" y="247" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="600" text-anchor="middle">Base64 Encode</text>

  <!-- Text Editor Window -->
  <rect x="40" y="290" width="1520" height="650" rx="14" fill="#14151f" stroke="rgba(255,255,255,0.08)" />
  <text x="70" y="340" fill="#ffffff" font-family="monospace" font-size="16"># Comprehensive Production Documentation</text>
  <text x="70" y="380" fill="#8e92a4" font-family="monospace" font-size="15">The system executes reactive text transformations strictly on client-side threads,</text>
  <text x="70" y="415" fill="#8e92a4" font-family="monospace" font-size="15">guaranteeing zero telemetry, zero latency, and absolute privacy for proprietary codebases.</text>
  <text x="70" y="465" fill="#c6ff3d" font-family="monospace" font-size="15">> Live regex matching active: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i</text>
  <text x="70" y="505" fill="#27c93f" font-family="monospace" font-size="15">✔ 14 matches identified across input stream in 0.4ms</text>
</svg>
`;

// 6. ASP.NET MVC Portfolio Application
const mvcPortfolio1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  ${createBrowserChrome("https://mvc.salimpresident.dev/admin", "ASP.NET MVC // CMS STUDIO", "C# / RAZOR")}
  <!-- Left Sidebar -->
  <rect x="40" y="104" width="240" height="856" rx="12" fill="#14151e" stroke="rgba(255,255,255,0.06)" />
  <text x="70" y="150" fill="#c6ff3d" font-family="monospace" font-size="16" font-weight="700">SALIM MVC CMS</text>
  <text x="70" y="172" fill="#8e92a4" font-family="sans-serif" font-size="12">Enterprise Model-View-Controller</text>

  <rect x="56" y="200" width="208" height="40" rx="8" fill="rgba(198,255,61,0.15)" stroke="rgba(198,255,61,0.3)" />
  <text x="80" y="225" fill="#c6ff3d" font-family="sans-serif" font-size="13" font-weight="600">📊 Overview Metrics</text>
  <text x="80" y="275" fill="#8e92a4" font-family="sans-serif" font-size="13">📁 Project Case Studies</text>
  <text x="80" y="325" fill="#8e92a4" font-family="sans-serif" font-size="13">📬 Contact Inquiries (28)</text>
  <text x="80" y="375" fill="#8e92a4" font-family="sans-serif" font-size="13">📄 Resume Downloads (412)</text>

  <!-- Metric row -->
  <rect x="310" y="104" width="380" height="110" rx="12" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <text x="335" y="140" fill="#8e92a4" font-family="monospace" font-size="12">PAGE VIEWS &amp; TRAFFIC</text>
  <text x="335" y="175" fill="#ffffff" font-family="sans-serif" font-size="24" font-weight="700">18,420 Unique</text>
  <text x="335" y="198" fill="#c6ff3d" font-family="monospace" font-size="12">↑ 24% from last month</text>

  <rect x="720" y="104" width="380" height="110" rx="12" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <text x="745" y="140" fill="#8e92a4" font-family="monospace" font-size="12">CONTROLLER RESPONSE SPEED</text>
  <text x="745" y="175" fill="#ffffff" font-family="sans-serif" font-size="24" font-weight="700">22ms Latency</text>
  <text x="745" y="198" fill="#27c93f" font-family="monospace" font-size="12">● Razor View Compilation</text>

  <rect x="1130" y="104" width="430" height="110" rx="12" fill="#181a24" stroke="rgba(255,255,255,0.08)" />
  <text x="1155" y="140" fill="#8e92a4" font-family="monospace" font-size="12">PORTFOLIO INQUIRIES</text>
  <text x="1155" y="175" fill="#ffffff" font-family="sans-serif" font-size="24" font-weight="700">28 New Messages</text>
  <text x="1155" y="198" fill="#c6ff3d" font-family="monospace" font-size="12">● Response Rate 100%</text>

  <!-- MVC Architecture Pipeline Diagram Box -->
  <rect x="310" y="240" width="1250" height="520" rx="14" fill="#161822" stroke="rgba(255,255,255,0.08)" />
  <text x="340" y="285" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">Model-View-Controller Architectural Flow</text>
  <text x="340" y="310" fill="#8e92a4" font-family="sans-serif" font-size="13">Clean decoupling between HTTP endpoints, data models, and server-rendered views</text>

  <rect x="340" y="350" width="350" height="180" rx="12" fill="#1e202d" stroke="rgba(198,255,61,0.2)" />
  <text x="370" y="390" fill="#c6ff3d" font-family="monospace" font-size="14" font-weight="700">CONTROLLERS // C#</text>
  <text x="370" y="425" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="600">HomeController.cs</text>
  <text x="370" y="455" fill="#8e92a4" font-family="sans-serif" font-size="13">Handles routing, dependency injection, and asynchronous database queries.</text>

  <rect x="740" y="350" width="350" height="180" rx="12" fill="#1e202d" stroke="rgba(255,255,255,0.1)" />
  <text x="770" y="390" fill="#c6ff3d" font-family="monospace" font-size="14" font-weight="700">MODELS // ENTITY</text>
  <text x="770" y="425" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="600">ProjectViewModel.cs</text>
  <text x="770" y="455" fill="#8e92a4" font-family="sans-serif" font-size="13">Typed records with validation annotations and domain state.</text>

  <rect x="1140" y="350" width="350" height="180" rx="12" fill="#1e202d" stroke="rgba(39,201,63,0.2)" />
  <text x="1170" y="390" fill="#27c93f" font-family="monospace" font-size="14" font-weight="700">VIEWS // RAZOR</text>
  <text x="1170" y="425" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="600">Index.cshtml &amp; Partials</text>
  <text x="1170" y="455" fill="#8e92a4" font-family="sans-serif" font-size="13">Semantic HTML5 with server-side tag helpers and caching.</text>
</svg>
`;

async function convertAndSave(svgContent, targetDir) {
  const svgBuffer = Buffer.from(svgContent);
  // Save 1.png, 2.png, 3.png
  await sharp(svgBuffer).png().toFile(path.join(targetDir, '1.png'));
  await sharp(svgBuffer).png().toFile(path.join(targetDir, '2.png'));
  await sharp(svgBuffer).png().toFile(path.join(targetDir, '3.png'));
}

async function main() {
  console.log('Generating high-res PNG mockups for all projects...');

  await convertAndSave(foodDelivery1, path.join(__dirname, 'public', 'projects', 'online-food-delivery-system'));
  console.log('✔ Food delivery system photos done');

  await convertAndSave(movieRecommendation1, path.join(__dirname, 'public', 'projects', 'fastapi-movie-recommendation'));
  console.log('✔ FastAPI Movie Recommendation photos done');

  await convertAndSave(aspnetAuth1, path.join(__dirname, 'public', 'projects', 'asp-net-identity-auth'));
  console.log('✔ ASP.NET Auth photos done');

  await convertAndSave(todoApp1, path.join(__dirname, 'public', 'projects', 'aspnet-razor-todo-app'));
  console.log('✔ Todo App photos done');

  await convertAndSave(textUtils1, path.join(__dirname, 'public', 'projects', 'textutils-react-toolkit'));
  console.log('✔ TextUtils photos done');

  await convertAndSave(mvcPortfolio1, path.join(__dirname, 'public', 'projects', 'mvc-portfolio-architecture'));
  console.log('✔ MVC Portfolio photos done');

  console.log('All project photos generated successfully!');
}

main().catch(console.error);
