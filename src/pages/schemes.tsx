import { schemes } from '../data/schemes'

export const schemesPage = () => {
  const schemesJson = JSON.stringify(schemes);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Government Schemes – SheLaunch AI</title>
<meta name="description" content="Explore central and state government schemes, grants, and subsidies tailored for women-led startups in India.">
<meta name="theme-color" content="#7c3aed">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="Government Schemes Aggregator – SheLaunch AI">
<meta property="og:description" content="Instant search & eligibility overview for women entrepreneur schemes.">
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Inter', sans-serif; }
  .gradient-text { background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .scheme-card { transition: all 0.3s; border: 2px solid #e5e7eb; }
  .scheme-card:hover { border-color: #7c3aed; box-shadow: 0 10px 30px rgba(124,58,237,0.1); transform: translateY(-2px); }
  .filter-btn { transition: all 0.2s; border: 2px solid #e5e7eb; }
  .filter-btn.active { border-color: #7c3aed; background: #f5f3ff; color: #7c3aed; }
  .badge-central { background: #dbeafe; color: #1e40af; }
  .badge-state { background: #dcfce7; color: #166534; }
  .badge-sector { background: #fef9c3; color: #854d0e; }
  .expand-content { display: none; }
  .expand-content.open { display: block; }
  .search-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,0.1); outline: none; }
</style>
</head>
<body class="bg-gray-50 min-h-screen">

<nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2">
      <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
        <i class="fas fa-rocket text-white text-xs"></i>
      </div>
      <span class="font-bold text-gray-900">SheLaunch <span class="gradient-text">AI</span></span>
    </a>
    <div class="flex gap-4 text-sm">
      <a href="/assessment" class="text-gray-500 hover:text-purple-700">Assessment</a>
      <a href="/funding" class="text-gray-500 hover:text-purple-700">Funding</a>
      <a href="/incubators" class="text-gray-500 hover:text-purple-700">Incubators</a>
      <a href="/mentor" class="text-gray-500 hover:text-purple-700">AI Mentor</a>
    </div>
  </div>
</nav>

<div class="max-w-7xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="text-center mb-8">
    <div class="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-3">
      <i class="fas fa-landmark text-blue-600 text-xs"></i>
      <span class="text-blue-700 text-xs font-semibold">VERIFIED GOVERNMENT DATABASE · TRUST-FIRST</span>
    </div>
    <h1 class="text-3xl font-black text-gray-900 mb-2">Government <span class="gradient-text">Scheme Aggregator</span></h1>
    <p class="text-gray-500">12+ curated, verified government schemes for women entrepreneurs. No AI hallucination — structured data only.</p>
  </div>

  <!-- Stats Bar -->
  <div class="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
    <div class="bg-white rounded-xl p-3 text-center border border-gray-100">
      <div class="text-xl font-black text-blue-600" id="totalCount">12</div>
      <div class="text-xs text-gray-500">Total Schemes</div>
    </div>
    <div class="bg-white rounded-xl p-3 text-center border border-gray-100">
      <div class="text-xl font-black text-purple-600">9</div>
      <div class="text-xs text-gray-500">Central Govt</div>
    </div>
    <div class="bg-white rounded-xl p-3 text-center border border-gray-100">
      <div class="text-xl font-black text-green-600">3</div>
      <div class="text-xs text-gray-500">State Govt</div>
    </div>
    <div class="bg-white rounded-xl p-3 text-center border border-gray-100">
      <div class="text-xl font-black text-orange-600">₹50K+</div>
      <div class="text-xs text-gray-500">Min Funding</div>
    </div>
    <div class="bg-white rounded-xl p-3 text-center border border-gray-100">
      <div class="text-xl font-black text-pink-600">1 Cr+</div>
      <div class="text-xs text-gray-500">Max Funding</div>
    </div>
  </div>

  <!-- Search + Filters -->
  <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
    <div class="mb-4">
      <div class="relative">
        <i class="fas fa-search absolute left-3 top-3.5 text-gray-400 text-sm"></i>
        <input type="text" class="search-input w-full border-2 border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-800 text-sm" placeholder="Search schemes by name, sector, or eligibility..." id="searchInput" oninput="filterSchemes()">
      </div>
    </div>
    <div class="flex flex-wrap gap-3">
      <div>
        <div class="text-xs text-gray-500 font-semibold mb-2">CATEGORY</div>
        <div class="flex flex-wrap gap-2">
          <button class="filter-btn active px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="category" data-val="all" onclick="setFilter('category','all',this)">All</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="category" data-val="Central Government" onclick="setFilter('category','Central Government',this)">Central Govt</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="category" data-val="State Government" onclick="setFilter('category','State Government',this)">State Govt</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="category" data-val="Sector-Specific Grant" onclick="setFilter('category','Sector-Specific Grant',this)">Sector Grant</button>
        </div>
      </div>
      <div>
        <div class="text-xs text-gray-500 font-semibold mb-2">STAGE</div>
        <div class="flex flex-wrap gap-2">
          <button class="filter-btn active px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="stage" data-val="all" onclick="setFilter('stage','all',this)">All Stages</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="stage" data-val="Idea" onclick="setFilter('stage','Idea',this)">Idea Stage</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="stage" data-val="MVP" onclick="setFilter('stage','MVP',this)">MVP Stage</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="stage" data-val="Revenue" onclick="setFilter('stage','Revenue',this)">Revenue Stage</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="flex items-center justify-between mb-4">
    <span class="text-sm text-gray-600 font-medium" id="resultsCount">Showing 12 schemes</span>
    <span class="text-xs text-gray-400 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
      <i class="fas fa-shield-check text-green-500 mr-1"></i> All data verified from official sources
    </span>
  </div>

  <!-- Schemes Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="schemesGrid">
    <!-- Rendered by JS -->
  </div>

  <!-- Empty State -->
  <div id="emptyState" class="hidden text-center py-16">
    <div class="text-6xl mb-4">🔍</div>
    <h3 class="text-xl font-bold text-gray-700 mb-2">No schemes found</h3>
    <p class="text-gray-500">Try adjusting your filters or search terms</p>
  </div>

</div>

<script>
const SCHEMES = ${schemesJson};
let filters = { category: 'all', stage: 'all' };
let searchQuery = '';

function setFilter(type, val, el) {
  filters[type] = val;
  document.querySelectorAll('[data-filter="' + type + '"]').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  filterSchemes();
}

function filterSchemes() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  
  const filtered = SCHEMES.filter(s => {
    const catMatch = filters.category === 'all' || s.category === filters.category;
    const stageMatch = filters.stage === 'all' || s.stage.includes(filters.stage);
    const searchMatch = !searchQuery || 
      s.name.toLowerCase().includes(searchQuery) || 
      s.description.toLowerCase().includes(searchQuery) ||
      s.eligibility.toLowerCase().includes(searchQuery) ||
      s.ministry.toLowerCase().includes(searchQuery) ||
      s.sector.some(sec => sec.toLowerCase().includes(searchQuery));
    return catMatch && stageMatch && searchMatch;
  });
  
  document.getElementById('resultsCount').textContent = 'Showing ' + filtered.length + ' scheme' + (filtered.length !== 1 ? 's' : '');
  
  if (filtered.length === 0) {
    document.getElementById('schemesGrid').innerHTML = '';
    document.getElementById('emptyState').classList.remove('hidden');
  } else {
    document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('schemesGrid').innerHTML = filtered.map(renderScheme).join('');
  }
}

function getBadgeClass(cat) {
  if (cat === 'Central Government') return 'badge-central';
  if (cat === 'State Government') return 'badge-state';
  return 'badge-sector';
}

function getStageColor(stage) {
  const map = { 'Idea': 'bg-yellow-100 text-yellow-700', 'MVP': 'bg-blue-100 text-blue-700', 'Revenue': 'bg-green-100 text-green-700' };
  return map[stage] || 'bg-gray-100 text-gray-700';
}

function renderScheme(s) {
  const badgeClass = getBadgeClass(s.category);
  const stageHtml = s.stage.map(st => '<span class="' + getStageColor(st) + ' text-xs px-2 py-0.5 rounded-full font-medium">' + st + '</span>').join(' ');
  const docsHtml = s.documents.map(d => '<li class="flex items-center gap-1.5 text-xs text-gray-600"><i class="fas fa-file-alt text-gray-400 text-xs w-3"></i>' + d + '</li>').join('');
  const sectorHtml = s.sector.slice(0,3).map(sec => '<span class="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">' + sec + '</span>').join(' ');
  
  return \`
    <div class="scheme-card bg-white rounded-2xl overflow-hidden">
      <div class="p-5">
        <div class="flex items-start justify-between mb-3">
          <span class="\${badgeClass} text-xs font-semibold px-2.5 py-1 rounded-full">\${s.category}</span>
          <span class="text-xs text-gray-400"><i class="far fa-clock mr-1"></i>\${s.deadline}</span>
        </div>
        <h3 class="font-bold text-gray-900 text-sm mb-1 leading-snug">\${s.name}</h3>
        <p class="text-xs text-gray-500 mb-3 font-medium">\${s.ministry}</p>
        <p class="text-sm text-gray-700 mb-3 leading-relaxed">\${s.description}</p>
        
        <div class="flex flex-wrap gap-1.5 mb-3">
          \${stageHtml}
        </div>
        <div class="flex flex-wrap gap-1 mb-3">
          \${sectorHtml}
        </div>
        
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 mb-4">
          <div class="flex items-center gap-2">
            <i class="fas fa-indian-rupee-sign text-purple-600 text-sm"></i>
            <div>
              <div class="text-xs text-gray-500">Funding Amount</div>
              <div class="font-bold text-purple-700 text-sm">\${s.fundingAmount}</div>
            </div>
          </div>
        </div>
        
        <!-- Expandable Details -->
        <button onclick="toggleExpand('\${s.id}')" class="w-full text-left text-xs text-purple-600 font-semibold flex items-center justify-between mb-2">
          <span>View Requirements & Details</span>
          <i class="fas fa-chevron-down text-xs" id="arrow-\${s.id}"></i>
        </button>
        <div class="expand-content" id="expand-\${s.id}">
          <div class="border-t border-gray-100 pt-3 space-y-3">
            <div>
              <div class="text-xs font-semibold text-gray-500 mb-1">ELIGIBILITY</div>
              <p class="text-xs text-gray-700">\${s.eligibility}</p>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 mb-1">KEY BENEFIT</div>
              <p class="text-xs text-gray-700">\${s.benefit}</p>
            </div>
            <div>
              <div class="text-xs font-semibold text-gray-500 mb-1">REQUIRED DOCUMENTS</div>
              <ul class="space-y-1">\${docsHtml}</ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="px-5 pb-5">
        <a href="\${s.applicationLink}" target="_blank" rel="noopener" class="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
          <i class="fas fa-external-link-alt mr-2"></i>Apply Now
        </a>
      </div>
    </div>
  \`;
}

function toggleExpand(id) {
  const el = document.getElementById('expand-' + id);
  const arrow = document.getElementById('arrow-' + id);
  el.classList.toggle('open');
  arrow.style.transform = el.classList.contains('open') ? 'rotate(180deg)' : '';
  arrow.style.transition = 'transform 0.2s';
}

// Initial render
filterSchemes();
</script>
</body>
</html>
`;
}
