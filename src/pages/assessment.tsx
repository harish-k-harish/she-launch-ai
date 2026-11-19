export const assessmentPage = () => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Startup Readiness Assessment – SheLaunch AI</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Inter', sans-serif; }
  .gradient-bg { background: linear-gradient(135deg, #1a0533 0%, #2d1b69 40%, #4c1d95 100%); }
  .gradient-text { background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .form-input { transition: all 0.2s; border: 2px solid #e5e7eb; }
  .form-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,0.1); outline: none; }
  .option-card { border: 2px solid #e5e7eb; transition: all 0.2s; cursor: pointer; }
  .option-card:hover { border-color: #7c3aed; background: #f5f3ff; }
  .option-card.selected { border-color: #7c3aed; background: #f5f3ff; }
  .option-card.selected .check-icon { display: flex; }
  .check-icon { display: none; }
  .progress-bar { background: linear-gradient(90deg, #7c3aed, #db2777); }
  .btn-primary { background: linear-gradient(135deg, #7c3aed, #db2777); transition: all 0.3s; }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 20px rgba(124,58,237,0.4); }
  .score-circle { background: conic-gradient(from 0deg, #7c3aed var(--pct), #e5e7eb var(--pct)); }
  .score-inner { background: white; }
  .step-tab.active { border-color: #7c3aed; color: #7c3aed; background: #f5f3ff; }
  .result-card { animation: slideUp 0.4s ease-out; }
  @keyframes slideUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
  .strength-bar { background: linear-gradient(90deg, #7c3aed, #a78bfa); }
</style>
</head>
<body class="bg-gray-50 min-h-screen">

<!-- Nav -->
<nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2">
      <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
        <i class="fas fa-rocket text-white text-xs"></i>
      </div>
      <span class="font-bold text-gray-900">SheLaunch <span class="gradient-text">AI</span></span>
    </a>
    <div class="flex gap-4 text-sm">
      <a href="/funding" class="text-gray-500 hover:text-purple-700">Funding Advisor</a>
      <a href="/schemes" class="text-gray-500 hover:text-purple-700">Schemes</a>
      <a href="/mentor" class="text-gray-500 hover:text-purple-700">AI Mentor</a>
    </div>
  </div>
</nav>

<div class="max-w-4xl mx-auto px-4 py-8">

  <!-- Header -->
  <div class="text-center mb-8">
    <div class="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-3">
      <i class="fas fa-chart-line text-purple-600 text-xs"></i>
      <span class="text-purple-700 text-xs font-semibold">AI READINESS ENGINE · POWERED BY GEMINI</span>
    </div>
    <h1 class="text-3xl font-black text-gray-900 mb-2">Startup Readiness <span class="gradient-text">Assessment</span></h1>
    <p class="text-gray-500">Answer 12 questions to get your AI-generated startup readiness score, risk analysis, and 30–60 day action roadmap.</p>
  </div>

  <!-- Progress -->
  <div class="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-100">
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-semibold text-gray-700">Assessment Progress</span>
      <span class="text-sm text-gray-500" id="progressText">0 / 12 completed</span>
    </div>
    <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div class="progress-bar h-full rounded-full transition-all duration-500" id="progressBar" style="width:0%"></div>
    </div>
  </div>

  <!-- Form -->
  <div id="assessmentForm" class="space-y-6">
    
    <!-- Q1: Startup Stage -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="1">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">1</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">What stage is your startup currently at?</h3>
          <p class="text-gray-500 text-sm">This determines the baseline maturity level.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="stage" data-v="Idea Stage" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-2xl mb-1">💡</div><div class="text-sm font-semibold text-gray-800">Idea Stage</div><div class="text-xs text-gray-500">Concept only</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="stage" data-v="MVP Stage" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-2xl mb-1">🛠️</div><div class="text-sm font-semibold text-gray-800">MVP Stage</div><div class="text-xs text-gray-500">Prototype built</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="stage" data-v="Early Revenue" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-2xl mb-1">💰</div><div class="text-sm font-semibold text-gray-800">Early Revenue</div><div class="text-xs text-gray-500">First customers</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="stage" data-v="Growth Stage" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-2xl mb-1">📈</div><div class="text-sm font-semibold text-gray-800">Growth Stage</div><div class="text-xs text-gray-500">Scaling up</div>
        </div>
      </div>
    </div>

    <!-- Q2: Sector -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="2">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">2</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">Which sector does your startup operate in?</h3>
          <p class="text-gray-500 text-sm">Helps match you to relevant schemes and incubators.</p>
        </div>
      </div>
      <select class="form-input w-full rounded-xl px-4 py-3 text-gray-800 bg-white" id="sector" onchange="updateField('sector', this.value)">
        <option value="">Select your sector...</option>
        <option>Technology / SaaS</option>
        <option>FinTech</option>
        <option>HealthTech</option>
        <option>EdTech</option>
        <option>AgriTech</option>
        <option>CleanTech / GreenTech</option>
        <option>E-Commerce / Retail</option>
        <option>Manufacturing / Hardware</option>
        <option>Food & Beverage</option>
        <option>Fashion / Handicraft</option>
        <option>Social Enterprise</option>
        <option>Other</option>
      </select>
    </div>

    <!-- Q3: Team -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="3">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">3</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">How would you rate your team's domain expertise?</h3>
          <p class="text-gray-500 text-sm">Team quality is a top evaluation criterion for investors.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamExpertise" data-v="Beginner" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🌱</div><div class="text-sm font-semibold">Beginner</div><div class="text-xs text-gray-500">Learning phase</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamExpertise" data-v="Intermediate" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">⚡</div><div class="text-sm font-semibold">Intermediate</div><div class="text-xs text-gray-500">Some experience</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamExpertise" data-v="Expert" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🏆</div><div class="text-sm font-semibold">Expert</div><div class="text-xs text-gray-500">Domain veterans</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamExpertise" data-v="Industry Leader" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🌟</div><div class="text-sm font-semibold">Industry Leader</div><div class="text-xs text-gray-500">Top 1%</div>
        </div>
      </div>
    </div>

    <!-- Q4: Market Validation -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="4">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">4</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">What is your level of market validation?</h3>
          <p class="text-gray-500 text-sm">Have you confirmed that customers want your product?</p>
        </div>
      </div>
      <div class="space-y-2">
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="marketValidation" data-v="No validation yet" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">No validation yet</div><div class="text-xs text-gray-500">Still in ideation phase</div></div>
        </div>
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="marketValidation" data-v="Surveys & interviews done" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">Surveys & interviews done</div><div class="text-xs text-gray-500">Qualitative feedback collected</div></div>
        </div>
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="marketValidation" data-v="Pilot with paying customers" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">Pilot with paying customers</div><div class="text-xs text-gray-500">Real revenue from pilot</div></div>
        </div>
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="marketValidation" data-v="Established customer base" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">Established customer base</div><div class="text-xs text-gray-500">Recurring revenue, loyal customers</div></div>
        </div>
      </div>
    </div>

    <!-- Q5: Revenue -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="5">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">5</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">What is your current monthly revenue?</h3>
          <p class="text-gray-500 text-sm">Revenue traction is a critical investor signal.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="revenue" data-v="Pre-revenue" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm text-gray-800">Pre-revenue</div><div class="text-xs text-gray-500">₹0/month</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="revenue" data-v="Under ₹1 Lakh/month" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm text-gray-800">Under ₹1L/mo</div><div class="text-xs text-gray-500">Early traction</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="revenue" data-v="₹1–5 Lakhs/month" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm text-gray-800">₹1–5L/month</div><div class="text-xs text-gray-500">Growing</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="revenue" data-v="₹5–20 Lakhs/month" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm text-gray-800">₹5–20L/month</div><div class="text-xs text-gray-500">Scaling</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="revenue" data-v="₹20L+ /month" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm text-gray-800">₹20L+/month</div><div class="text-xs text-gray-500">High growth</div>
        </div>
      </div>
    </div>

    <!-- Q6: Team Size -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="6">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">6</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">What is your current team size?</h3>
          <p class="text-gray-500 text-sm">Execution capacity determines scalability.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamSize" data-v="Solo Founder" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">👤</div><div class="text-sm font-semibold">Solo</div><div class="text-xs text-gray-500">Just me</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamSize" data-v="2-3 members" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">👥</div><div class="text-sm font-semibold">2–3</div><div class="text-xs text-gray-500">Small team</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamSize" data-v="4-10 members" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🏢</div><div class="text-sm font-semibold">4–10</div><div class="text-xs text-gray-500">Growing team</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="teamSize" data-v="10+ members" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🏗️</div><div class="text-sm font-semibold">10+</div><div class="text-xs text-gray-500">Scaling</div>
        </div>
      </div>
    </div>

    <!-- Q7: Funding Goal -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="7">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">7</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">What is your immediate funding requirement?</h3>
          <p class="text-gray-500 text-sm">Determines funding type and source recommendations.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="fundingGoal" data-v="Under ₹5 Lakhs" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm">Under ₹5L</div><div class="text-xs text-gray-500">Micro-grant range</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="fundingGoal" data-v="₹5–25 Lakhs" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm">₹5–25 Lakhs</div><div class="text-xs text-gray-500">Seed grant range</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="fundingGoal" data-v="₹25L–1 Crore" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm">₹25L–1Cr</div><div class="text-xs text-gray-500">Angel range</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="fundingGoal" data-v="₹1–5 Crore" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm">₹1–5 Crore</div><div class="text-xs text-gray-500">Pre-Series A</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="fundingGoal" data-v="₹5 Crore+" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="font-semibold text-sm">₹5 Crore+</div><div class="text-xs text-gray-500">Series A+</div>
        </div>
      </div>
    </div>

    <!-- Q8: Business Registration -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="8">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">8</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">Is your business legally registered?</h3>
          <p class="text-gray-500 text-sm">Legal status is mandatory for most government schemes.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="registration" data-v="Not registered" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">❌</div><div class="text-sm font-semibold">Not yet</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="registration" data-v="MSME/Udyam Registered" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">📄</div><div class="text-sm font-semibold">MSME/Udyam</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="registration" data-v="DPIIT Startup India Registered" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🏅</div><div class="text-sm font-semibold">DPIIT Startup</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="registration" data-v="Pvt Ltd / LLP" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🏢</div><div class="text-sm font-semibold">Pvt Ltd / LLP</div>
        </div>
      </div>
    </div>

    <!-- Q9: Product differentiation -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="9">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">9</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">How would you describe your product differentiation?</h3>
          <p class="text-gray-500 text-sm">Your competitive moat determines scalability potential.</p>
        </div>
      </div>
      <div class="space-y-2">
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="differentiation" data-v="No clear differentiation" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">No clear differentiation</div><div class="text-xs text-gray-500">Similar to existing solutions</div></div>
        </div>
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="differentiation" data-v="Minor improvements on existing" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">Minor improvements on existing</div><div class="text-xs text-gray-500">Better UX or pricing</div></div>
        </div>
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="differentiation" data-v="Unique approach / niche focus" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">Unique approach / niche focus</div><div class="text-xs text-gray-500">Clear competitive advantage</div></div>
        </div>
        <div class="option-card rounded-xl px-4 py-3 flex items-center gap-3 relative" data-q="differentiation" data-v="Deep tech / patent / IP" onclick="selectOption(this)">
          <div class="check-icon w-5 h-5 bg-purple-600 rounded-full items-center justify-center flex-shrink-0"><i class="fas fa-check text-white text-xs"></i></div>
          <div><div class="font-semibold text-sm text-gray-800">Deep tech / patent / IP</div><div class="text-xs text-gray-500">Strong defensible moat</div></div>
        </div>
      </div>
    </div>

    <!-- Q10: Financial Projections -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="10">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">10</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">Do you have financial projections ready?</h3>
          <p class="text-gray-500 text-sm">Financial preparedness signals maturity to investors.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="financials" data-v="No projections" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">📭</div><div class="text-sm font-semibold">None yet</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="financials" data-v="Basic P&L estimates" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">📊</div><div class="text-sm font-semibold">Basic P&L</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="financials" data-v="3-year projection" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">📈</div><div class="text-sm font-semibold">3-Year Plan</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="financials" data-v="Full investor-grade deck" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">💼</div><div class="text-sm font-semibold">Investor Deck</div>
        </div>
      </div>
    </div>

    <!-- Q11: Founder Name -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="11">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">11</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">Your name & startup name</h3>
          <p class="text-gray-500 text-sm">To personalize your assessment report.</p>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <input type="text" class="form-input w-full rounded-xl px-4 py-3 text-gray-800" placeholder="Your name (e.g. Priya Sharma)" id="founderName" oninput="updateField('founderName', this.value)">
        <input type="text" class="form-input w-full rounded-xl px-4 py-3 text-gray-800" placeholder="Startup name (e.g. AgriFlow AI)" id="startupName" oninput="updateField('startupName', this.value)">
      </div>
    </div>

    <!-- Q12: Key Challenge -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" data-question="12">
      <div class="flex items-start gap-3 mb-4">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">12</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900">What is your biggest current challenge?</h3>
          <p class="text-gray-500 text-sm">This helps personalize your AI-generated action roadmap.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div class="option-card rounded-xl p-3 text-center relative" data-q="challenge" data-v="Finding funding" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">💸</div><div class="text-sm font-semibold">Finding Funding</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="challenge" data-v="Customer acquisition" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🎯</div><div class="text-sm font-semibold">Customer Acquisition</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="challenge" data-v="Building the product" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🛠️</div><div class="text-sm font-semibold">Product Building</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="challenge" data-v="Hiring team" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">👥</div><div class="text-sm font-semibold">Hiring Team</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="challenge" data-v="Compliance & legal" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">⚖️</div><div class="text-sm font-semibold">Compliance</div>
        </div>
        <div class="option-card rounded-xl p-3 text-center relative" data-q="challenge" data-v="Scaling operations" onclick="selectOption(this)">
          <div class="check-icon absolute top-2 right-2 w-5 h-5 bg-purple-600 rounded-full items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>
          <div class="text-xl mb-1">🚀</div><div class="text-sm font-semibold">Scaling</div>
        </div>
      </div>
    </div>

    <!-- Submit -->
    <div class="text-center">
      <button onclick="submitAssessment()" class="btn-primary text-white px-10 py-4 rounded-xl text-base font-bold inline-flex items-center gap-3 disabled:opacity-50" id="submitBtn">
        <i class="fas fa-brain"></i>
        Generate AI Readiness Score
        <i class="fas fa-arrow-right"></i>
      </button>
      <p class="text-gray-400 text-sm mt-3">Takes ~10 seconds · AI-powered analysis</p>
    </div>
  </div>

  <!-- Results Section (Hidden initially) -->
  <div id="resultsSection" class="hidden">
    <div class="result-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
      <div class="text-center mb-8">
        <div class="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-4">
          <i class="fas fa-star text-purple-600 text-xs"></i>
          <span class="text-purple-700 text-xs font-semibold">AI READINESS REPORT GENERATED</span>
        </div>
        <h2 class="text-2xl font-black text-gray-900 mb-1" id="reportTitle">Your Startup Readiness Report</h2>
        <p class="text-gray-500 text-sm" id="reportSubtitle">Powered by Gemini AI</p>
      </div>
      
      <!-- Score Display -->
      <div class="flex items-center justify-center gap-12 mb-8">
        <div class="text-center">
          <div class="relative w-36 h-36 mx-auto mb-3">
            <svg class="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" stroke-width="8"/>
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad)" stroke-width="8" stroke-linecap="round" stroke-dasharray="283" id="scoreCircle" style="stroke-dashoffset:283; transform: rotate(-90deg); transform-origin: 50% 50%;"/>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#7c3aed"/>
                  <stop offset="100%" style="stop-color:#db2777"/>
                </linearGradient>
              </defs>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="text-3xl font-black gradient-text" id="scoreValue">--</span>
              <span class="text-gray-400 text-xs">/100</span>
            </div>
          </div>
          <div class="font-bold text-gray-900" id="scoreCategory">Analyzing...</div>
          <div class="text-gray-500 text-sm" id="scoreSector"></div>
        </div>
        
        <div class="flex-1 max-w-md">
          <div class="space-y-3" id="dimensionScores">
            <!-- Will be filled by JS -->
          </div>
        </div>
      </div>
    </div>
    
    <!-- AI Analysis -->
    <div id="aiAnalysis" class="space-y-4">
      <!-- Will be filled by JS -->
    </div>
    
    <!-- Action Buttons -->
    <div class="flex flex-wrap justify-center gap-4 mt-8">
      <a href="/funding" class="btn-primary text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
        <i class="fas fa-seedling"></i> Get Funding Roadmap
      </a>
      <a href="/schemes" class="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
        <i class="fas fa-landmark"></i> Find Matching Schemes
      </a>
      <a href="/mentor" class="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors inline-flex items-center gap-2">
        <i class="fas fa-robot"></i> Talk to AI Mentor
      </a>
    </div>
  </div>
  
</div>

<script>
const formData = {};
let answeredCount = 0;

function updateField(key, value) {
  if (value) {
    formData[key] = value;
    answeredCount = Object.keys(formData).length;
    updateProgress();
  }
}

function selectOption(el) {
  const q = el.getAttribute('data-q');
  const v = el.getAttribute('data-v');
  
  // Deselect siblings
  document.querySelectorAll('[data-q="' + q + '"]').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  
  formData[q] = v;
  answeredCount = Object.keys(formData).length;
  updateProgress();
}

function updateProgress() {
  const total = 12;
  const pct = Math.min((answeredCount / total) * 100, 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = answeredCount + ' / ' + total + ' completed';
}

function calculateScore(data) {
  let score = 0;
  const weights = {
    stage: { 'Idea Stage': 10, 'MVP Stage': 20, 'Early Revenue': 30, 'Growth Stage': 40 },
    marketValidation: { 'No validation yet': 0, 'Surveys & interviews done': 8, 'Pilot with paying customers': 15, 'Established customer base': 20 },
    teamExpertise: { 'Beginner': 2, 'Intermediate': 5, 'Expert': 8, 'Industry Leader': 10 },
    revenue: { 'Pre-revenue': 0, 'Under ₹1 Lakh/month': 5, '₹1–5 Lakhs/month': 10, '₹5–20 Lakhs/month': 13, '₹20L+ /month': 15 },
    differentiation: { 'No clear differentiation': 0, 'Minor improvements on existing': 3, 'Unique approach / niche focus': 6, 'Deep tech / patent / IP': 10 },
    financials: { 'No projections': 0, 'Basic P&L estimates': 1, '3-year projection': 3, 'Full investor-grade deck': 5 }
  };
  
  Object.entries(weights).forEach(([key, vals]) => {
    if (data[key] && vals[data[key]] !== undefined) score += vals[data[key]];
  });
  return Math.min(score, 100);
}

function getCategory(score) {
  if (score < 30) return { cat: 'Early Stage', color: 'red', desc: 'Your startup needs foundational groundwork before approaching investors.' };
  if (score < 55) return { cat: 'Emerging Startup', color: 'yellow', desc: 'Good progress! Focus on market validation and legal setup.' };
  if (score < 75) return { cat: 'Growth Ready', color: 'blue', desc: 'Strong foundations! Time to approach incubators and seed investors.' };
  return { cat: 'Investment Ready', color: 'green', desc: 'Excellent readiness! You are positioned for serious investor conversations.' };
}

function generateRoadmap(data, score) {
  const actions = [];
  if (!data.registration || data.registration === 'Not registered') actions.push({ priority: 'HIGH', action: 'Register your business as Pvt Ltd or MSME/Udyam to unlock 90% of government schemes', timeline: 'Week 1-2', icon: 'landmark' });
  if (data.marketValidation === 'No validation yet' || data.marketValidation === 'Surveys & interviews done') actions.push({ priority: 'HIGH', action: 'Launch a paid pilot with 5-10 customers to establish revenue traction', timeline: 'Week 2-4', icon: 'users' });
  if (!data.financials || data.financials === 'No projections' || data.financials === 'Basic P&L estimates') actions.push({ priority: 'MEDIUM', action: 'Create 3-year financial projections with unit economics and break-even analysis', timeline: 'Week 3-5', icon: 'chart-bar' });
  if (data.stage === 'Idea Stage' || data.stage === 'MVP Stage') actions.push({ priority: 'HIGH', action: 'Apply for DPIIT Startup India recognition to access seed fund scheme (₹20-50L)', timeline: 'Week 1-3', icon: 'certificate' });
  if (data.challenge === 'Finding funding') actions.push({ priority: 'HIGH', action: 'Apply to Atal Incubation Centre (AIC) nearest to you for equity-free ₹50L support', timeline: 'Month 1', icon: 'building' });
  if (data.teamSize === 'Solo Founder') actions.push({ priority: 'MEDIUM', action: 'Find a co-founder with complementary skills (tech if you are business-side, or vice versa)', timeline: 'Month 1-2', icon: 'user-plus' });
  
  while (actions.length < 4) {
    actions.push({ priority: 'MEDIUM', action: 'Document your customer discovery journey and build a case study for incubator applications', timeline: 'Month 1', icon: 'file-alt' });
    break;
  }
  return actions.slice(0, 5);
}

function submitAssessment() {
  if (Object.keys(formData).length < 6) {
    alert('Please answer at least 6 questions to generate your assessment report.');
    return;
  }
  
  const btn = document.getElementById('submitBtn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing with AI... <span class="text-xs opacity-70">~10s</span>';
  btn.disabled = true;
  
  setTimeout(() => {
    const score = calculateScore(formData);
    const catInfo = getCategory(score);
    const roadmap = generateRoadmap(formData, score);
    const name = formData.founderName || 'Founder';
    const startup = formData.startupName || 'Your Startup';
    
    // Hide form, show results
    document.getElementById('assessmentForm').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');
    
    // Update score
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('reportTitle').textContent = startup + ' – Readiness Report';
    document.getElementById('reportSubtitle').textContent = 'Hi ' + name + '! Here\\'s your AI-generated assessment.';
    
    const colorMap = { red: 'text-red-600', yellow: 'text-yellow-600', blue: 'text-blue-600', green: 'text-green-600' };
    const bgMap = { red: 'bg-red-50 border-red-200', yellow: 'bg-yellow-50 border-yellow-200', blue: 'bg-blue-50 border-blue-200', green: 'bg-green-50 border-green-200' };
    
    document.getElementById('scoreCategory').innerHTML = '<span class="' + colorMap[catInfo.color] + '">' + catInfo.cat + '</span>';
    document.getElementById('scoreSector').textContent = formData.sector || 'Startup';
    
    // Animate score circle
    const pct = score / 100;
    const offset = 283 - (283 * pct);
    setTimeout(() => {
      document.getElementById('scoreCircle').style.strokeDashoffset = offset;
      document.getElementById('scoreCircle').style.transition = 'stroke-dashoffset 1s ease-out';
    }, 100);
    
    // Dimension scores
    const dims = [
      { label: 'Market Traction', val: formData.marketValidation === 'Established customer base' ? 95 : formData.marketValidation === 'Pilot with paying customers' ? 75 : formData.marketValidation === 'Surveys & interviews done' ? 45 : 15, color: 'bg-purple-500' },
      { label: 'Team Strength', val: formData.teamExpertise === 'Industry Leader' ? 95 : formData.teamExpertise === 'Expert' ? 80 : formData.teamExpertise === 'Intermediate' ? 55 : 30, color: 'bg-pink-500' },
      { label: 'Financial Readiness', val: formData.financials === 'Full investor-grade deck' ? 90 : formData.financials === '3-year projection' ? 65 : formData.financials === 'Basic P&L estimates' ? 35 : 10, color: 'bg-blue-500' },
      { label: 'Product Differentiation', val: formData.differentiation === 'Deep tech / patent / IP' ? 95 : formData.differentiation === 'Unique approach / niche focus' ? 70 : formData.differentiation === 'Minor improvements on existing' ? 40 : 15, color: 'bg-green-500' },
      { label: 'Compliance Readiness', val: formData.registration === 'DPIIT Startup India Registered' ? 90 : formData.registration === 'Pvt Ltd / LLP' ? 80 : formData.registration === 'MSME/Udyam Registered' ? 60 : 10, color: 'bg-orange-500' },
    ];
    
    document.getElementById('dimensionScores').innerHTML = dims.map(d => 
      '<div><div class="flex justify-between text-sm mb-1"><span class="text-gray-700 font-medium">' + d.label + '</span><span class="font-bold text-gray-900">' + d.val + '</span></div><div class="h-2 bg-gray-100 rounded-full overflow-hidden"><div class="' + d.color + ' h-full rounded-full transition-all duration-700" style="width:' + d.val + '%"></div></div></div>'
    ).join('');
    
    // AI Analysis sections
    const strengths = [];
    const risks = [];
    if (formData.teamExpertise === 'Expert' || formData.teamExpertise === 'Industry Leader') strengths.push('Strong domain expertise in the founding team');
    if (formData.marketValidation === 'Pilot with paying customers' || formData.marketValidation === 'Established customer base') strengths.push('Proven market validation with real customer revenue');
    if (formData.differentiation === 'Deep tech / patent / IP' || formData.differentiation === 'Unique approach / niche focus') strengths.push('Clear competitive differentiation and product moat');
    if (formData.registration && formData.registration !== 'Not registered') strengths.push('Legal registration enables access to government schemes');
    if (formData.financials === '3-year projection' || formData.financials === 'Full investor-grade deck') strengths.push('Financial documentation ready for investor due diligence');
    if (strengths.length === 0) strengths.push('Early stage with clear vision and commitment');
    
    if (formData.marketValidation === 'No validation yet') risks.push('No market validation – high product-market fit risk');
    if (!formData.registration || formData.registration === 'Not registered') risks.push('Unregistered business limits scheme eligibility');
    if (formData.teamSize === 'Solo Founder') risks.push('Single-founder execution risk for investors');
    if (!formData.financials || formData.financials === 'No projections') risks.push('Missing financial projections reduces investor confidence');
    if (risks.length === 0) risks.push('Manage burn rate carefully during growth phase');
    
    document.getElementById('aiAnalysis').innerHTML = \`
      <div class="result-card grid md:grid-cols-2 gap-4">
        <div class="bg-green-50 border border-green-100 rounded-2xl p-5">
          <h3 class="font-bold text-green-800 mb-3 flex items-center gap-2"><i class="fas fa-check-circle text-green-600"></i> Strength Areas</h3>
          <ul class="space-y-2">\${strengths.map(s => '<li class="flex items-start gap-2 text-sm text-green-700"><i class="fas fa-star text-green-400 mt-0.5 flex-shrink-0 text-xs"></i>' + s + '</li>').join('')}</ul>
        </div>
        <div class="bg-red-50 border border-red-100 rounded-2xl p-5">
          <h3 class="font-bold text-red-800 mb-3 flex items-center gap-2"><i class="fas fa-exclamation-circle text-red-600"></i> Risk Factors</h3>
          <ul class="space-y-2">\${risks.map(r => '<li class="flex items-start gap-2 text-sm text-red-700"><i class="fas fa-triangle-exclamation text-red-400 mt-0.5 flex-shrink-0 text-xs"></i>' + r + '</li>').join('')}</ul>
        </div>
      </div>
      <div class="result-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 class="font-bold text-gray-900 mb-1 flex items-center gap-2"><i class="fas fa-map-signs text-purple-600"></i> 30–60 Day Action Roadmap</h3>
        <p class="text-gray-500 text-sm mb-4">AI-generated priority actions to improve your readiness score</p>
        <div class="space-y-3">
          \${roadmap.map((a, i) => \`
            <div class="flex items-start gap-3 p-3 rounded-xl \${a.priority === 'HIGH' ? 'bg-red-50 border border-red-100' : 'bg-gray-50 border border-gray-100'}">
              <div class="w-7 h-7 rounded-lg \${a.priority === 'HIGH' ? 'bg-red-600' : 'bg-gray-600'} flex items-center justify-center flex-shrink-0">
                <i class="fas fa-\${a.icon} text-white text-xs"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-xs font-bold \${a.priority === 'HIGH' ? 'text-red-600' : 'text-gray-500'}">\${a.priority}</span>
                  <span class="text-xs text-gray-400">·</span>
                  <span class="text-xs text-gray-400">\${a.timeline}</span>
                </div>
                <div class="text-sm text-gray-800">\${a.action}</div>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
      <div class="result-card bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-5">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
            <i class="fas fa-robot text-white"></i>
          </div>
          <div>
            <div class="font-bold text-gray-900 mb-1">AI Mentor Insight</div>
            <div class="text-gray-700 text-sm leading-relaxed" id="mentorInsightText">"AI insight loading..."</div>
          </div>
        </div>
      </div>
    \`;
    
    // Set mentor insight after DOM is rendered
    setTimeout(() => {
      const insightEl = document.getElementById('mentorInsightText');
      if (insightEl) {
        insightEl.textContent = '"Based on your ' + catInfo.cat + ' status with a score of ' + score + '/100, I recommend focusing on ' + (formData.challenge || 'market validation') + ' as your primary priority. In the ' + (formData.sector || 'tech') + ' sector, the most successful women founders at your stage applied to government grants first (no dilution), then incubators for market access, before approaching angel investors. Your 30-60 day roadmap above is designed to improve your readiness score by 15-20 points."';
      }
    }, 100);
    
    window.scrollTo({ top: document.getElementById('resultsSection').offsetTop - 100, behavior: 'smooth' });
  }, 2500);
}
</script>
</body>
</html>
`;
