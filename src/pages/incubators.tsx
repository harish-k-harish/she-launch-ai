import { incubators } from '../data/incubators'

export const incubatorsPage = () => {
  const incubatorsJson = JSON.stringify(incubators);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Incubator Aggregator – SheLaunch AI</title>
<meta name="description" content="Discover top incubator programs, equity-free grants, and accelerators supporting women founders.">
<meta name="theme-color" content="#f97316">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:title" content="Incubator Aggregator – SheLaunch AI">
<meta property="og:description" content="Match with premier incubators, cohorts, and accelerator networks.">
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Inter', sans-serif; }
  .gradient-text { background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .incubator-card { transition: all 0.3s; border: 2px solid #e5e7eb; }
  .incubator-card:hover { border-color: #f97316; box-shadow: 0 12px 35px rgba(249,115,22,0.1); transform: translateY(-3px); }
  .filter-btn { transition: all 0.2s; border: 2px solid #e5e7eb; cursor: pointer; }
  .filter-btn.active { border-color: #7c3aed; background: #f5f3ff; color: #7c3aed; }
  .match-ring { background: conic-gradient(from 0deg, #7c3aed var(--pct, 75%), #e5e7eb var(--pct, 75%)); }
  .women-badge { background: linear-gradient(135deg, #fce7f3, #f5f3ff); border: 1px solid #f0abfc; }
  .equity-free { background: #dcfce7; color: #166534; }
  .equity-based { background: #fef3c7; color: #92400e; }
  .equity-optional { background: #dbeafe; color: #1e40af; }
  .search-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,0.1); outline: none; }
  .profile-form { display: none; }
  .profile-form.open { display: block; }
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
      <a href="/schemes" class="text-gray-500 hover:text-purple-700">Schemes</a>
      <a href="/mentor" class="text-gray-500 hover:text-purple-700">AI Mentor</a>
    </div>
  </div>
</nav>

<div class="max-w-7xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="text-center mb-8">
    <div class="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-3">
      <i class="fas fa-building text-orange-600 text-xs"></i>
      <span class="text-orange-700 text-xs font-semibold">AI-POWERED MATCHING · EXPLAINABLE RECOMMENDATIONS</span>
    </div>
    <h1 class="text-3xl font-black text-gray-900 mb-2">Incubator <span class="gradient-text">Aggregator</span></h1>
    <p class="text-gray-500">Discover 12+ top incubators & accelerators. Use AI Match to get personalized recommendations with match scores and reasoning.</p>
  </div>

  <!-- AI Match Panel -->
  <div class="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 mb-6 text-white">
    <div class="flex items-center justify-between mb-4">
      <div>
        <h2 class="text-lg font-bold mb-1 flex items-center gap-2">
          <i class="fas fa-magic text-yellow-300"></i> AI Incubator Matching
        </h2>
        <p class="text-purple-200 text-sm">Tell us about your startup and get AI-matched incubators with percentage scores and reasoning.</p>
      </div>
      <button onclick="toggleMatchForm()" class="bg-white text-purple-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-purple-50 transition-colors" id="matchToggleBtn">
        <i class="fas fa-sliders-h mr-1"></i> Configure Match
      </button>
    </div>
    
    <div class="profile-form" id="matchForm">
      <div class="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label class="text-purple-200 text-xs font-semibold mb-1 block">STARTUP STAGE</label>
          <select id="mStage" class="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm">
            <option value="Idea">Idea Stage</option>
            <option value="MVP" selected>MVP Stage</option>
            <option value="Revenue">Early Revenue</option>
          </select>
        </div>
        <div>
          <label class="text-purple-200 text-xs font-semibold mb-1 block">SECTOR</label>
          <select id="mSector" class="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm">
            <option value="Technology">Technology / SaaS</option>
            <option value="FinTech">FinTech</option>
            <option value="HealthTech">HealthTech</option>
            <option value="AgriTech">AgriTech</option>
            <option value="CleanTech">CleanTech</option>
            <option value="Social Enterprise">Social Enterprise</option>
          </select>
        </div>
        <div>
          <label class="text-purple-200 text-xs font-semibold mb-1 block">EQUITY PREFERENCE</label>
          <select id="mEquity" class="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white text-sm">
            <option value="all">Any Equity Model</option>
            <option value="Equity-Free">Equity-Free Only</option>
            <option value="any-equity">Okay with Equity</option>
          </select>
        </div>
      </div>
      <button onclick="runAIMatch()" class="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity">
        <i class="fas fa-brain mr-2"></i>Run AI Match
      </button>
    </div>
  </div>

  <!-- Filters -->
  <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
    <div class="flex flex-wrap gap-4">
      <div>
        <div class="text-xs text-gray-500 font-semibold mb-2">EQUITY MODEL</div>
        <div class="flex flex-wrap gap-2">
          <button class="filter-btn active px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="equity" data-val="all" onclick="setFilter('equity','all',this)">All</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="equity" data-val="Equity-Free" onclick="setFilter('equity','Equity-Free',this)">Equity-Free</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="equity" data-val="Equity-Based" onclick="setFilter('equity','Equity-Based',this)">Equity-Based</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="equity" data-val="Optional Equity" onclick="setFilter('equity','Optional Equity',this)">Optional</button>
        </div>
      </div>
      <div>
        <div class="text-xs text-gray-500 font-semibold mb-2">FOCUS</div>
        <div class="flex flex-wrap gap-2">
          <button class="filter-btn active px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="women" data-val="all" onclick="setFilter('women','all',this)">All</button>
          <button class="filter-btn px-3 py-1.5 rounded-full text-xs font-semibold" data-filter="women" data-val="true" onclick="setFilter('women','true',this)">Women-Focused</button>
        </div>
      </div>
      <div class="ml-auto">
        <div class="text-xs text-gray-500 font-semibold mb-2">SEARCH</div>
        <input type="text" class="search-input border-2 border-gray-200 rounded-xl px-4 py-1.5 text-sm text-gray-800" placeholder="Search incubators..." id="searchInput" oninput="filterIncubators()">
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="flex items-center justify-between mb-4">
    <span class="text-sm text-gray-600 font-medium" id="resultsCount">Showing 12 incubators</span>
  </div>

  <!-- Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4" id="incubatorsGrid">
  </div>

  <div id="emptyState" class="hidden text-center py-16">
    <div class="text-6xl mb-4">🏢</div>
    <h3 class="text-xl font-bold text-gray-700 mb-2">No incubators found</h3>
    <p class="text-gray-500">Try adjusting filters or search terms</p>
  </div>
</div>

<script>
const INCUBATORS = ${incubatorsJson};
let filters = { equity: 'all', women: 'all' };
let searchQuery = '';
let matchScores = {};

function toggleMatchForm() {
  const form = document.getElementById('matchForm');
  const btn = document.getElementById('matchToggleBtn');
  form.classList.toggle('open');
  btn.textContent = form.classList.contains('open') ? '✕ Close' : '⚙ Configure Match';
}

function setFilter(type, val, el) {
  filters[type] = val;
  document.querySelectorAll('[data-filter="' + type + '"]').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  filterIncubators();
}

function runAIMatch() {
  const stage = document.getElementById('mStage').value;
  const sector = document.getElementById('mSector').value;
  const equity = document.getElementById('mEquity').value;
  
  matchScores = {};
  INCUBATORS.forEach(inc => {
    let score = 50;
    if (inc.stage.includes(stage)) score += 20;
    if (inc.sector.some(s => s.toLowerCase().includes(sector.toLowerCase()) || s === 'All' || s.includes('All'))) score += 15;
    if (equity === 'Equity-Free' && inc.equityModel === 'Equity-Free') score += 10;
    if (equity === 'any-equity' && inc.equityModel !== 'Equity-Free') score += 5;
    if (inc.focusOnWomen) score += 8;
    matchScores[inc.id] = Math.min(score, 98);
  });
  
  document.getElementById('matchForm').classList.remove('open');
  document.getElementById('matchToggleBtn').innerHTML = '<i class="fas fa-check mr-1 text-green-300"></i> AI Matched!';
  filterIncubators();
}

function filterIncubators() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  
  let filtered = INCUBATORS.filter(inc => {
    const equityMatch = filters.equity === 'all' || inc.equityModel === filters.equity;
    const womenMatch = filters.women === 'all' || (filters.women === 'true' && inc.focusOnWomen);
    const searchMatch = !searchQuery ||
      inc.name.toLowerCase().includes(searchQuery) ||
      inc.location.toLowerCase().includes(searchQuery) ||
      inc.sector.some(s => s.toLowerCase().includes(searchQuery));
    return equityMatch && womenMatch && searchMatch;
  });
  
  // Sort by match score if available
  if (Object.keys(matchScores).length > 0) {
    filtered.sort((a, b) => (matchScores[b.id] || 50) - (matchScores[a.id] || 50));
  }
  
  document.getElementById('resultsCount').textContent = 'Showing ' + filtered.length + ' incubator' + (filtered.length !== 1 ? 's' : '');
  
  if (filtered.length === 0) {
    document.getElementById('incubatorsGrid').innerHTML = '';
    document.getElementById('emptyState').classList.remove('hidden');
  } else {
    document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('incubatorsGrid').innerHTML = filtered.map(renderIncubator).join('');
  }
}

function getEquityBadge(model) {
  const map = { 'Equity-Free': 'equity-free', 'Equity-Based': 'equity-based', 'Optional Equity': 'equity-optional' };
  return map[model] || 'bg-gray-100 text-gray-700';
}

function renderIncubator(inc) {
  const matchPct = matchScores[inc.id] || null;
  const equityClass = getEquityBadge(inc.equityModel);
  const sectorHtml = inc.sector.slice(0,3).map(s => '<span class="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">' + s + '</span>').join(' ');
  const highlightsHtml = inc.highlights.slice(0,3).map(h => '<li class="flex items-start gap-1.5 text-xs text-gray-600"><i class="fas fa-check text-green-500 text-xs mt-0.5 flex-shrink-0"></i>' + h + '</li>').join('');
  const stageHtml = inc.stage.map(s => '<span class="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full">' + s + '</span>').join(' ');
  
  return \`
    <div class="incubator-card bg-white rounded-2xl overflow-hidden">
      <div class="p-5">
        <div class="flex items-start justify-between mb-3">
          <div class="flex-1">
            \${inc.focusOnWomen ? '<div class="women-badge inline-flex items-center gap-1 text-xs font-semibold text-pink-700 px-2 py-0.5 rounded-full mb-2"><i class="fas fa-venus text-xs"></i> Women-Focused</div>' : ''}
            <div class="flex flex-wrap gap-1">
              \${stageHtml}
            </div>
          </div>
          \${matchPct ? \`
          <div class="text-center ml-3">
            <div class="relative w-14 h-14">
              <svg class="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" stroke-width="10"/>
                <circle cx="50" cy="50" r="42" fill="none" stroke="url(#mg\${inc.id})" stroke-width="10" stroke-linecap="round"
                  stroke-dasharray="264" stroke-dashoffset="\${264 - (264 * matchPct/100)}"
                  style="transform: rotate(-90deg); transform-origin: 50% 50%;"/>
                <defs><linearGradient id="mg\${inc.id}" x1="0%" y1="0%" x2="100%"><stop offset="0%" style="stop-color:#7c3aed"/><stop offset="100%" style="stop-color:#db2777"/></linearGradient></defs>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-xs font-black text-purple-700">\${matchPct}%</span>
              </div>
            </div>
            <div class="text-xs text-gray-400 mt-0.5">Match</div>
          </div>
          \` : ''}
        </div>
        
        <h3 class="font-bold text-gray-900 text-base mb-0.5">\${inc.name}</h3>
        <div class="flex items-center gap-2 text-gray-500 text-xs mb-3">
          <i class="fas fa-map-marker-alt text-gray-400"></i>
          <span>\${inc.location}</span>
        </div>
        
        <div class="flex flex-wrap gap-1 mb-3">
          \${sectorHtml}
        </div>
        
        <div class="grid grid-cols-2 gap-2 mb-3">
          <div class="bg-gray-50 rounded-lg p-2">
            <div class="text-xs text-gray-400">Equity</div>
            <div class="\${equityClass} text-xs px-2 py-0.5 rounded-full font-semibold inline-block mt-0.5">\${inc.equityModel}\${inc.equityPercentage ? ' · ' + inc.equityPercentage : ''}</div>
          </div>
          <div class="bg-gray-50 rounded-lg p-2">
            <div class="text-xs text-gray-400">Duration</div>
            <div class="text-xs font-semibold text-gray-800 mt-0.5">\${inc.duration}</div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3 mb-3">
          <div class="text-xs text-gray-500 mb-0.5">FUNDING SUPPORT</div>
          <div class="font-semibold text-purple-700 text-sm">\${inc.fundingSupport}</div>
        </div>
        
        <div class="mb-3">
          <div class="text-xs text-gray-500 font-semibold mb-1">KEY HIGHLIGHTS</div>
          <ul class="space-y-1">\${highlightsHtml}</ul>
        </div>
        
        \${matchPct ? \`
        <div class="bg-purple-50 border border-purple-100 rounded-xl p-3 mb-3">
          <div class="text-xs font-semibold text-purple-700 mb-1"><i class="fas fa-brain mr-1"></i> AI Match Reason</div>
          <p class="text-xs text-purple-600">Strong alignment with your stage and sector profile. \${inc.focusOnWomen ? 'Women-focused program gives you priority.' : 'Good ecosystem for your growth trajectory.'}</p>
        </div>
        \` : ''}
        
        \${inc.successRate ? '<div class="text-xs text-gray-500 mb-3"><i class="fas fa-chart-line text-green-500 mr-1"></i> ' + inc.successRate + ' portfolio success rate</div>' : ''}
        
        <div class="text-xs text-gray-500 mb-3"><i class="fas fa-route text-gray-400 mr-1"></i> \${inc.applicationProcess}</div>
      </div>
      
      <div class="px-5 pb-5">
        <a href="\${inc.applicationLink}" target="_blank" rel="noopener" class="block w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
          <i class="fas fa-external-link-alt mr-2"></i>Apply / Learn More
        </a>
      </div>
    </div>
  \`;
}

filterIncubators();
</script>
</body>
</html>
`;
}
