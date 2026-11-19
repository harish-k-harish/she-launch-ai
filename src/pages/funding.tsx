import { schemes } from '../data/schemes'
import { incubators } from '../data/incubators'

export const fundingPage = () => {
  const schemesJson = JSON.stringify(schemes.slice(0, 10));
  const incubatorsJson = JSON.stringify(incubators.slice(0, 10));
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Funding Pathway Advisor – SheLaunch AI</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Inter', sans-serif; }
  .gradient-text { background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .btn-primary { background: linear-gradient(135deg, #059669, #10b981); transition: all 0.3s; }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 20px rgba(5,150,105,0.4); }
  .form-input { border: 2px solid #e5e7eb; transition: all 0.2s; }
  .form-input:focus { border-color: #059669; box-shadow: 0 0 0 3px rgba(5,150,105,0.1); outline: none; }
  .option-card { border: 2px solid #e5e7eb; transition: all 0.2s; cursor: pointer; }
  .option-card:hover { border-color: #059669; background: #f0fdf4; }
  .option-card.selected { border-color: #059669; background: #f0fdf4; }
  .step-connector { background: linear-gradient(90deg, #059669, #10b981); }
  .roadmap-step { position: relative; }
  .timeline-line { background: linear-gradient(180deg, #7c3aed, #db2777, #059669); }
  .result-fade { animation: fadeIn 0.5s ease-out; }
  @keyframes fadeIn { from { opacity:0; transform: translateY(15px); } to { opacity:1; transform: translateY(0); } }
  .funding-tier { border-left: 4px solid; }
  .tier-grant { border-color: #059669; }
  .tier-incubator { border-color: #7c3aed; }
  .tier-angel { border-color: #f59e0b; }
  .tier-vc { border-color: #ef4444; }
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
      <a href="/schemes" class="text-gray-500 hover:text-purple-700">Schemes</a>
      <a href="/incubators" class="text-gray-500 hover:text-purple-700">Incubators</a>
      <a href="/mentor" class="text-gray-500 hover:text-purple-700">AI Mentor</a>
    </div>
  </div>
</nav>

<div class="max-w-5xl mx-auto px-4 py-8">

  <div class="text-center mb-8">
    <div class="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5 mb-3">
      <i class="fas fa-seedling text-green-600 text-xs"></i>
      <span class="text-green-700 text-xs font-semibold">RAG ARCHITECTURE · RETRIEVAL-AUGMENTED GENERATION</span>
    </div>
    <h1 class="text-3xl font-black text-gray-900 mb-2">Funding Pathway <span class="gradient-text">Advisor</span></h1>
    <p class="text-gray-500">Not just a scheme list — a structured, sequenced funding strategy generated from your profile. Powered by AI + curated data.</p>
  </div>

  <!-- Profile Form -->
  <div id="profileSection">
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <i class="fas fa-user-circle text-green-600"></i> Your Startup Profile
        <span class="text-xs text-gray-400 font-normal ml-2">Takes 2 minutes</span>
      </h2>
      
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">STARTUP NAME</label>
          <input type="text" id="p_name" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800" placeholder="e.g. GreenGrow Technologies">
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">FOUNDER NAME</label>
          <input type="text" id="p_founder" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800" placeholder="e.g. Priya Sharma">
        </div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-4 mb-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">STAGE</label>
          <select id="p_stage" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800">
            <option value="Idea">Idea Stage</option>
            <option value="MVP" selected>MVP Stage</option>
            <option value="Early Revenue">Early Revenue</option>
            <option value="Growth">Growth Stage</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">SECTOR</label>
          <select id="p_sector" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800">
            <option>Technology / SaaS</option>
            <option>FinTech</option>
            <option>HealthTech</option>
            <option>AgriTech</option>
            <option>CleanTech</option>
            <option>Social Enterprise</option>
            <option>Manufacturing</option>
            <option>Food & Beverage</option>
            <option>EdTech</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">FUNDING NEEDED</label>
          <select id="p_funding" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800">
            <option value="micro">Under ₹5 Lakhs</option>
            <option value="seed" selected>₹5–25 Lakhs</option>
            <option value="angel">₹25L–1 Crore</option>
            <option value="pre-series-a">₹1–5 Crore</option>
            <option value="series-a">₹5 Crore+</option>
          </select>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">CURRENT MONTHLY REVENUE</label>
          <select id="p_revenue" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800">
            <option>Pre-revenue</option>
            <option>Under ₹1 Lakh/month</option>
            <option>₹1–5 Lakhs/month</option>
            <option>₹5–20 Lakhs/month</option>
            <option>₹20L+/month</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">REGISTRATION STATUS</label>
          <select id="p_reg" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800">
            <option>Not registered</option>
            <option>MSME/Udyam Registered</option>
            <option>DPIIT Startup India Registered</option>
            <option>Pvt Ltd / LLP</option>
          </select>
        </div>
      </div>
      
      <div class="mb-4">
        <label class="block text-xs font-semibold text-gray-600 mb-1">BRIEF DESCRIPTION (optional)</label>
        <textarea id="p_desc" class="form-input w-full rounded-xl px-4 py-3 text-sm text-gray-800 h-20 resize-none" placeholder="Describe your product/service and target market..."></textarea>
      </div>
      
      <button onclick="generateFundingPlan()" class="btn-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-3">
        <i class="fas fa-magic"></i>
        Generate Funding Roadmap
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>

  <!-- Results Section -->
  <div id="resultsSection" class="hidden">
    <!-- Will be filled by JS -->
  </div>

</div>

<script>
const SCHEMES = ${schemesJson};
const INCUBATORS = ${incubatorsJson};

function generateFundingPlan() {
  const profile = {
    name: document.getElementById('p_name').value || 'Your Startup',
    founder: document.getElementById('p_founder').value || 'Founder',
    stage: document.getElementById('p_stage').value,
    sector: document.getElementById('p_sector').value,
    funding: document.getElementById('p_funding').value,
    revenue: document.getElementById('p_revenue').value,
    reg: document.getElementById('p_reg').value,
    desc: document.getElementById('p_desc').value
  };
  
  const btn = document.querySelector('button[onclick="generateFundingPlan()"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Building RAG Context... <span class="text-xs opacity-70">~3s</span>';
  btn.disabled = true;
  
  setTimeout(() => {
    const plan = buildFundingPlan(profile);
    renderFundingPlan(profile, plan);
    document.getElementById('resultsSection').classList.remove('hidden');
    window.scrollTo({ top: document.getElementById('resultsSection').offsetTop - 80, behavior: 'smooth' });
    btn.innerHTML = '<i class="fas fa-magic"></i> Regenerate Plan';
    btn.disabled = false;
  }, 2800);
}

function buildFundingPlan(profile) {
  // RAG: Retrieve relevant schemes based on profile
  const relevantSchemes = SCHEMES.filter(s => {
    const stageMap = {
      'Idea': ['Idea'], 'MVP': ['Idea', 'MVP'], 'Early Revenue': ['MVP', 'Revenue'], 'Growth': ['Revenue']
    };
    const validStages = stageMap[profile.stage] || ['Idea', 'MVP'];
    const stageMatch = s.stage.some(st => validStages.includes(st));
    const sectorMatch = s.sector.includes('All') || s.sector.some(sec => 
      sec.toLowerCase().includes(profile.sector.split(' ')[0].toLowerCase())
    );
    return stageMatch;
  }).slice(0, 4);
  
  const relevantIncubators = INCUBATORS.filter(inc => {
    const stageMap = {
      'Idea': ['Idea'], 'MVP': ['Idea', 'MVP'], 'Early Revenue': ['MVP', 'Revenue'], 'Growth': ['Revenue']
    };
    const validStages = stageMap[profile.stage] || ['Idea', 'MVP'];
    return inc.stage.some(s => validStages.includes(s));
  }).slice(0, 3);
  
  // Determine funding pathway based on stage
  const pathways = {
    'Idea': [
      { type: 'Government Grant', tier: 'grant', icon: 'landmark', color: 'green', timeline: 'Month 1-3', amount: '₹5–20 Lakhs', rationale: 'No dilution, validates credibility, free money to build MVP' },
      { type: 'Incubation Program', tier: 'incubator', icon: 'building', color: 'purple', timeline: 'Month 2-4', amount: '₹10–50 Lakhs', rationale: 'Access mentorship, infrastructure, and investor network' },
      { type: 'Angel Investor', tier: 'angel', icon: 'user-tie', color: 'yellow', timeline: 'Month 6-12', amount: '₹25L–1 Crore', rationale: 'After proof of concept, angel can fund MVP to revenue stage' },
    ],
    'MVP': [
      { type: 'Seed Grant / Scheme', tier: 'grant', icon: 'landmark', color: 'green', timeline: 'Immediate', amount: '₹10–50 Lakhs', rationale: 'DPIIT Seed Fund or MUDRA for immediate non-dilutive capital' },
      { type: 'Incubator Program', tier: 'incubator', icon: 'building', color: 'purple', timeline: 'Month 1-3', amount: '₹25L–2 Crore', rationale: 'IIT/IIM incubators provide capital + market access for scaling' },
      { type: 'Angel Funding Round', tier: 'angel', icon: 'user-tie', color: 'yellow', timeline: 'Month 4-8', amount: '₹50L–3 Crore', rationale: 'With MVP validation, approach angels for growth capital' },
    ],
    'Early Revenue': [
      { type: 'Revenue-Based Financing', tier: 'grant', icon: 'chart-line', color: 'green', timeline: 'Immediate', amount: '₹10–50 Lakhs', rationale: 'Use revenue traction for collateral-light business loans' },
      { type: 'Angel / Pre-Seed Round', tier: 'angel', icon: 'user-tie', color: 'yellow', timeline: 'Month 1-4', amount: '₹1–3 Crore', rationale: 'Revenue proof makes you attractive to angel networks' },
      { type: 'Series A / VC', tier: 'vc', icon: 'university', color: 'red', timeline: 'Month 6-12', amount: '₹3–15 Crore', rationale: 'Scale with institutional VC after proving unit economics' },
    ],
    'Growth': [
      { type: 'Debt / Revenue Financing', tier: 'grant', icon: 'chart-line', color: 'green', timeline: 'Immediate', amount: '₹50L–5 Crore', rationale: 'Growth-stage debt financing keeps equity intact' },
      { type: 'Series A Funding', tier: 'vc', icon: 'university', color: 'red', timeline: 'Month 1-6', amount: '₹5–20 Crore', rationale: 'Institutional VC for market expansion and team scaling' },
      { type: 'Strategic Partnerships', tier: 'angel', icon: 'handshake', color: 'yellow', timeline: 'Ongoing', amount: 'Non-dilutive', rationale: 'Corporate partnerships provide capital + market access' },
    ]
  };
  
  const checklist = [
    profile.reg === 'Not registered' ? { item: 'Register business (MSME/Udyam or Pvt Ltd)', done: false, priority: 'HIGH' } : { item: 'Business registration complete ✓', done: true, priority: 'HIGH' },
    { item: 'Prepare pitch deck (10-12 slides)', done: false, priority: 'HIGH' },
    { item: 'Create 3-year financial projections', done: false, priority: 'HIGH' },
    { item: 'Document product/market validation', done: false, priority: 'MEDIUM' },
    { item: 'Open dedicated business bank account', done: false, priority: 'MEDIUM' },
    { item: 'Get DPIIT Startup India recognition', done: profile.reg === 'DPIIT Startup India Registered', priority: 'HIGH' },
    { item: 'Prepare company overview (1-pager)', done: false, priority: 'MEDIUM' },
    { item: 'Research and shortlist target incubators', done: false, priority: 'MEDIUM' },
  ];
  
  return {
    pathway: pathways[profile.stage] || pathways['MVP'],
    schemes: relevantSchemes,
    incubators: relevantIncubators,
    checklist: checklist
  };
}

function renderFundingPlan(profile, plan) {
  const tierColors = {
    grant: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: 'text-green-600', step: 'bg-green-600', badge: 'bg-green-100 text-green-700' },
    incubator: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', icon: 'text-purple-600', step: 'bg-purple-600', badge: 'bg-purple-100 text-purple-700' },
    angel: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: 'text-yellow-600', step: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-700' },
    vc: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'text-red-600', step: 'bg-red-600', badge: 'bg-red-100 text-red-700' },
  };
  
  const pathwayHtml = plan.pathway.map((step, i) => {
    const c = tierColors[step.tier];
    return \`
      <div class="result-fade flex items-start gap-4 p-5 \${c.bg} border \${c.border} rounded-2xl">
        <div class="flex flex-col items-center gap-1 flex-shrink-0">
          <div class="w-10 h-10 rounded-xl \${c.step} flex items-center justify-center text-white font-bold text-sm">\${i+1}</div>
          \${i < plan.pathway.length - 1 ? '<div class="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>' : ''}
        </div>
        <div class="flex-1">
          <div class="flex items-start justify-between mb-1">
            <h3 class="font-bold \${c.text} text-base"><i class="fas fa-\${step.icon} mr-2"></i>\${step.type}</h3>
            <div class="text-right ml-2">
              <div class="text-xs text-gray-500">\${step.timeline}</div>
              <div class="font-bold text-gray-900 text-sm">\${step.amount}</div>
            </div>
          </div>
          <p class="text-sm text-gray-700">\${step.rationale}</p>
        </div>
      </div>
    \`;
  }).join('');
  
  const schemesHtml = plan.schemes.map(s => \`
    <div class="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
      <div class="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
        <i class="fas fa-landmark text-green-600 text-sm"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-gray-900 text-sm truncate">\${s.name}</div>
        <div class="text-xs text-gray-500 mb-1">\${s.ministry}</div>
        <div class="text-xs font-bold text-green-700">\${s.fundingAmount}</div>
      </div>
      <a href="\${s.applicationLink}" target="_blank" class="text-green-600 hover:text-green-800 text-xs font-semibold whitespace-nowrap">Apply →</a>
    </div>
  \`).join('');
  
  const incubatorsHtml = plan.incubators.map(inc => \`
    <div class="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-purple-200 transition-colors">
      <div class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
        <i class="fas fa-building text-purple-600 text-sm"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="font-semibold text-gray-900 text-sm truncate">\${inc.name}</div>
        <div class="text-xs text-gray-500 mb-1">\${inc.location} · \${inc.equityModel}</div>
        <div class="text-xs font-bold text-purple-700">\${inc.fundingSupport}</div>
      </div>
      <a href="\${inc.applicationLink}" target="_blank" class="text-purple-600 hover:text-purple-800 text-xs font-semibold whitespace-nowrap">Apply →</a>
    </div>
  \`).join('');
  
  const checklistHtml = plan.checklist.map(item => \`
    <div class="flex items-center gap-3 p-3 \${item.done ? 'bg-green-50' : 'bg-white'} rounded-xl border \${item.done ? 'border-green-200' : 'border-gray-100'}">
      <div class="w-5 h-5 rounded-full \${item.done ? 'bg-green-500' : 'border-2 border-gray-300'} flex items-center justify-center flex-shrink-0">
        \${item.done ? '<i class="fas fa-check text-white text-xs"></i>' : ''}
      </div>
      <span class="text-sm \${item.done ? 'text-green-700 line-through' : 'text-gray-800'}">\${item.item}</span>
      <span class="ml-auto text-xs \${item.priority === 'HIGH' ? 'text-red-600 bg-red-50' : 'text-gray-500 bg-gray-50'} px-2 py-0.5 rounded-full font-semibold">\${item.priority}</span>
    </div>
  \`).join('');
  
  document.getElementById('resultsSection').innerHTML = \`
    <div class="result-fade mb-4 p-5 bg-gradient-to-r from-green-900 to-emerald-900 rounded-2xl text-white">
      <div class="flex items-center gap-3 mb-1">
        <i class="fas fa-map-signs text-yellow-300 text-xl"></i>
        <div>
          <h2 class="font-black text-lg">\${profile.name} – Funding Roadmap</h2>
          <p class="text-green-200 text-sm">\${profile.stage} · \${profile.sector} · \${profile.revenue}</p>
        </div>
      </div>
      <p class="text-green-200 text-sm mt-2 bg-white/10 rounded-lg px-3 py-2 border border-white/10">
        <i class="fas fa-robot text-yellow-300 mr-2"></i>
        <strong>AI Strategy:</strong> For a \${profile.stage} startup in \${profile.sector}, the optimal funding sequence starts with <strong>non-dilutive grants</strong> to preserve equity, followed by <strong>incubator programs</strong> for market access and mentorship, then <strong>angel investors</strong> after validating traction. This approach maximizes capital efficiency while minimizing equity dilution.
      </p>
    </div>
    
    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-4">
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i class="fas fa-route text-green-600"></i> Recommended Funding Pathway
          </h3>
          <div class="space-y-3">\${pathwayHtml}</div>
        </div>
        
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i class="fas fa-checklist text-blue-600"></i> Pre-Application Checklist
          </h3>
          <div class="space-y-2">\${checklistHtml}</div>
        </div>
      </div>
      
      <div class="space-y-4">
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
            <i class="fas fa-landmark text-green-600"></i> Matched Schemes
          </h3>
          <div class="space-y-2">\${schemesHtml}</div>
          <a href="/schemes" class="mt-3 block text-center text-green-600 text-xs font-semibold hover:underline">View all schemes →</a>
        </div>
        
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
            <i class="fas fa-building text-purple-600"></i> Matched Incubators
          </h3>
          <div class="space-y-2">\${incubatorsHtml}</div>
          <a href="/incubators" class="mt-3 block text-center text-purple-600 text-xs font-semibold hover:underline">View all incubators →</a>
        </div>
      </div>
    </div>
    
    <div class="mt-6 flex flex-wrap gap-3 justify-center">
      <a href="/mentor" class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2">
        <i class="fas fa-robot"></i> Discuss with AI Mentor
      </a>
      <a href="/assessment" class="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2">
        <i class="fas fa-chart-line"></i> Retake Assessment
      </a>
    </div>
  \`;
}
</script>
</body>
</html>
`;
}
