export const homePage = () => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SheLaunch AI – AI-Powered Startup Platform for Women</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Inter', sans-serif; }
  .gradient-hero { background: linear-gradient(135deg, #1a0533 0%, #2d1b69 30%, #4c1d95 60%, #6d28d9 100%); }
  .gradient-card { background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); }
  .gradient-pink { background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%); }
  .gradient-text { background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .module-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(109,40,217,0.15); }
  .module-card { transition: all 0.3s ease; }
  .btn-primary { background: linear-gradient(135deg, #7c3aed, #db2777); color: white; transition: all 0.3s ease; }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(124,58,237,0.4); }
  .stat-number { background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .feature-icon { background: linear-gradient(135deg, #7c3aed, #db2777); }
  .nav-blur { backdrop-filter: blur(20px); background: rgba(10,5,30,0.85); }
  .sdg-badge { transition: all 0.3s; }
  .sdg-badge:hover { transform: scale(1.05); }
  .floating { animation: float 6s ease-in-out infinite; }
  .floating2 { animation: float 8s ease-in-out infinite reverse; }
  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
  .pulse-ring { animation: pulseRing 2s ease-out infinite; }
  @keyframes pulseRing { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
  .hero-glow { box-shadow: 0 0 100px rgba(124,58,237,0.3), 0 0 50px rgba(219,39,119,0.2); }
</style>
</head>
<body class="bg-gray-50">

<!-- Navigation -->
<nav class="nav-blur fixed top-0 w-full z-50 border-b border-white/10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg feature-icon flex items-center justify-center">
          <i class="fas fa-rocket text-white text-sm"></i>
        </div>
        <span class="text-white font-bold text-lg">SheLaunch <span style="background: linear-gradient(135deg, #a78bfa, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">AI</span></span>
      </div>
      <div class="hidden md:flex items-center gap-6">
        <a href="/assessment" class="text-gray-300 hover:text-white text-sm transition-colors">Readiness Check</a>
        <a href="/funding" class="text-gray-300 hover:text-white text-sm transition-colors">Funding Advisor</a>
        <a href="/schemes" class="text-gray-300 hover:text-white text-sm transition-colors">Schemes</a>
        <a href="/incubators" class="text-gray-300 hover:text-white text-sm transition-colors">Incubators</a>
        <a href="/mentor" class="text-gray-300 hover:text-white text-sm transition-colors">AI Mentor</a>
      </div>
      <div class="flex items-center gap-3">
        <a href="/assessment" class="btn-primary px-5 py-2 rounded-full text-sm font-semibold">Get Started Free</a>
      </div>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<section class="gradient-hero min-h-screen flex items-center pt-16 relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl floating"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl floating2"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl"></div>
    <!-- Grid pattern -->
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0); background-size: 40px 40px;"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div>
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span class="w-2 h-2 rounded-full bg-pink-400 inline-block"></span>
          <span class="text-white/90 text-xs font-semibold uppercase tracking-wider">Fueling Her Vision · Funding Her Venture</span>
        </div>
        
        <h1 class="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Your AI-Powered
          <span class="block" style="background: linear-gradient(135deg, #a78bfa, #f472b6, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Startup Growth</span>
          Advisor
        </h1>
        
        <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
          SheLaunch AI transforms fragmented startup ecosystems into <strong class="text-white">intelligent growth pathways</strong>. Get personalized readiness scores, funding roadmaps, scheme discovery, and AI mentorship — all in one place.
        </p>
        
        <div class="flex flex-wrap gap-4 mb-10">
          <a href="/assessment" class="btn-primary px-8 py-3.5 rounded-xl text-base font-bold inline-flex items-center gap-2">
            <i class="fas fa-chart-line"></i> Start Readiness Assessment
          </a>
          <a href="/mentor" class="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all inline-flex items-center gap-2">
            <i class="fas fa-robot"></i> Try AI Mentor
          </a>
        </div>
        
        <div class="flex items-center gap-6">
          <div class="text-center">
            <div class="text-2xl font-black stat-number">12+</div>
            <div class="text-gray-400 text-xs">Govt Schemes</div>
          </div>
          <div class="w-px h-10 bg-white/10"></div>
          <div class="text-center">
            <div class="text-2xl font-black stat-number">12+</div>
            <div class="text-gray-400 text-xs">Incubators</div>
          </div>
          <div class="w-px h-10 bg-white/10"></div>
          <div class="text-center">
            <div class="text-2xl font-black stat-number">5</div>
            <div class="text-gray-400 text-xs">AI Modules</div>
          </div>
          <div class="w-px h-10 bg-white/10"></div>
          <div class="text-center">
            <div class="text-2xl font-black stat-number">SDG</div>
            <div class="text-gray-400 text-xs">Aligned</div>
          </div>
        </div>
      </div>
      
      <!-- Right: Dashboard Preview Card -->
      <div class="relative">
        <div class="hero-glow bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 relative z-10">
          <!-- Mini Dashboard -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span class="text-white/40 text-xs">SheLaunch AI Dashboard</span>
          </div>
          
          <!-- Score Display -->
          <div class="bg-white/10 rounded-xl p-4 mb-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-white/70 text-sm">Startup Readiness Score</span>
              <span class="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-0.5 rounded-full">Growth Ready</span>
            </div>
            <div class="flex items-end gap-2">
              <span class="text-4xl font-black" style="background: linear-gradient(135deg, #a78bfa, #f472b6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">78</span>
              <span class="text-white/40 text-lg mb-1">/100</span>
            </div>
            <div class="mt-2 bg-white/10 rounded-full h-2 overflow-hidden">
              <div class="h-full rounded-full" style="width:78%; background: linear-gradient(90deg, #7c3aed, #db2777);"></div>
            </div>
          </div>
          
          <!-- Quick Stats Row -->
          <div class="grid grid-cols-3 gap-3 mb-4">
            <div class="bg-purple-500/20 rounded-lg p-3 text-center">
              <div class="text-purple-300 text-lg font-bold">MVP</div>
              <div class="text-white/50 text-xs">Stage</div>
            </div>
            <div class="bg-pink-500/20 rounded-lg p-3 text-center">
              <div class="text-pink-300 text-lg font-bold">₹20L</div>
              <div class="text-white/50 text-xs">Target</div>
            </div>
            <div class="bg-violet-500/20 rounded-lg p-3 text-center">
              <div class="text-violet-300 text-lg font-bold">FinTech</div>
              <div class="text-white/50 text-xs">Sector</div>
            </div>
          </div>
          
          <!-- Funding Pathway -->
          <div class="bg-white/10 rounded-xl p-3 mb-4">
            <div class="text-white/60 text-xs mb-2 font-medium">RECOMMENDED FUNDING PATHWAY</div>
            <div class="flex items-center gap-2">
              <div class="flex-1 bg-purple-500/30 rounded px-2 py-1.5 text-center">
                <div class="text-purple-300 text-xs font-semibold">Grant</div>
                <div class="text-white/40 text-xs">Step 1</div>
              </div>
              <i class="fas fa-arrow-right text-white/30 text-xs"></i>
              <div class="flex-1 bg-pink-500/30 rounded px-2 py-1.5 text-center">
                <div class="text-pink-300 text-xs font-semibold">Incubator</div>
                <div class="text-white/40 text-xs">Step 2</div>
              </div>
              <i class="fas fa-arrow-right text-white/30 text-xs"></i>
              <div class="flex-1 bg-violet-500/30 rounded px-2 py-1.5 text-center">
                <div class="text-violet-300 text-xs font-semibold">Angel</div>
                <div class="text-white/40 text-xs">Step 3</div>
              </div>
            </div>
          </div>
          
          <!-- AI Mentor -->
          <div class="bg-white/5 rounded-xl p-3 border border-white/10">
            <div class="flex items-start gap-2">
              <div class="w-6 h-6 rounded-full feature-icon flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-robot text-white text-xs"></i>
              </div>
              <div>
                <div class="text-white/40 text-xs mb-1">AI Mentor · Just now</div>
                <div class="text-white/80 text-xs">"Your market validation is strong. Focus on financial projections to attract angel investors in 90 days..."</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Floating badges -->
        <div class="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg floating">
          ✓ AI Analyzed
        </div>
        <div class="absolute -bottom-4 -left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg floating2">
          🎯 3 Matches Found
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Modules Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <div class="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-4">
        <i class="fas fa-cubes text-purple-600 text-xs"></i>
        <span class="text-purple-700 text-xs font-semibold">5 INTELLIGENT MODULES</span>
      </div>
      <h2 class="text-4xl font-black text-gray-900 mb-3">Everything You Need to <span class="gradient-text">Launch & Grow</span></h2>
      <p class="text-gray-500 max-w-2xl mx-auto">One unified AI platform replacing five different portals, advisors, and directories. Built exclusively for women entrepreneurs.</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Module 1: AI Mentor -->
      <a href="/mentor" class="module-card gradient-card rounded-2xl p-6 block cursor-pointer border border-purple-100">
        <div class="w-12 h-12 rounded-xl feature-icon flex items-center justify-center mb-4">
          <i class="fas fa-robot text-white text-xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">AI Mentor</h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">Conversational AI mentor powered by Gemini. Get pitch analysis, business model validation, and strategic guidance.</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="bg-purple-100 text-purple-700 text-xs px-2.5 py-1 rounded-full font-medium">Pitch Analysis</span>
          <span class="bg-purple-100 text-purple-700 text-xs px-2.5 py-1 rounded-full font-medium">PDF Upload</span>
          <span class="bg-purple-100 text-purple-700 text-xs px-2.5 py-1 rounded-full font-medium">Multimodal AI</span>
        </div>
        <div class="flex items-center text-purple-700 text-sm font-semibold">
          Start Mentoring <i class="fas fa-arrow-right ml-2 text-xs"></i>
        </div>
      </a>
      
      <!-- Module 2: Assessment -->
      <a href="/assessment" class="module-card gradient-pink rounded-2xl p-6 block cursor-pointer border border-pink-100">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
          <i class="fas fa-chart-line text-white text-xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Readiness Assessment</h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">AI-powered startup maturity scoring. Get your 0–100 readiness score with actionable 30–60 day roadmap.</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="bg-pink-100 text-pink-700 text-xs px-2.5 py-1 rounded-full font-medium">0-100 Score</span>
          <span class="bg-pink-100 text-pink-700 text-xs px-2.5 py-1 rounded-full font-medium">AI Scoring</span>
          <span class="bg-pink-100 text-pink-700 text-xs px-2.5 py-1 rounded-full font-medium">Roadmap</span>
        </div>
        <div class="flex items-center text-pink-700 text-sm font-semibold">
          Assess Now <i class="fas fa-arrow-right ml-2 text-xs"></i>
        </div>
      </a>
      
      <!-- Module 3: Funding Advisor -->
      <a href="/funding" class="module-card rounded-2xl p-6 block cursor-pointer border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
          <i class="fas fa-seedling text-white text-xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Funding Pathway Advisor</h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">RAG-powered funding strategy generation. Get sequenced grant → incubator → angel → VC roadmap.</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">RAG Architecture</span>
          <span class="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">Funding Roadmap</span>
          <span class="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">Timeline</span>
        </div>
        <div class="flex items-center text-green-700 text-sm font-semibold">
          Plan Funding <i class="fas fa-arrow-right ml-2 text-xs"></i>
        </div>
      </a>
      
      <!-- Module 4: Schemes -->
      <a href="/schemes" class="module-card rounded-2xl p-6 block cursor-pointer border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
          <i class="fas fa-landmark text-white text-xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Govt Scheme Aggregator</h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">12+ curated, verified government schemes for women entrepreneurs. Filter by sector, stage, and funding type.</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">12+ Schemes</span>
          <span class="bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">Verified Data</span>
          <span class="bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">Smart Filter</span>
        </div>
        <div class="flex items-center text-blue-700 text-sm font-semibold">
          Explore Schemes <i class="fas fa-arrow-right ml-2 text-xs"></i>
        </div>
      </a>
      
      <!-- Module 5: Incubators -->
      <a href="/incubators" class="module-card rounded-2xl p-6 block cursor-pointer border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50">
        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-4">
          <i class="fas fa-building text-white text-xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Incubator Aggregator</h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">AI-powered incubator matching. Discover 12+ top incubators with match scores, equity details, and application guidance.</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full font-medium">AI Matching</span>
          <span class="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full font-medium">12+ Incubators</span>
          <span class="bg-orange-100 text-orange-700 text-xs px-2.5 py-1 rounded-full font-medium">Match Score</span>
        </div>
        <div class="flex items-center text-orange-700 text-sm font-semibold">
          Find Incubators <i class="fas fa-arrow-right ml-2 text-xs"></i>
        </div>
      </a>
      
      <!-- CTA Card -->
      <div class="module-card rounded-2xl p-6 cursor-pointer" style="background: linear-gradient(135deg, #1a0533 0%, #4c1d95 100%);">
        <div class="h-full flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <i class="fas fa-star text-yellow-300 text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Ready to Launch?</h3>
            <p class="text-white/60 text-sm leading-relaxed mb-4">Start your journey with a comprehensive startup assessment and get your personalized growth plan.</p>
          </div>
          <a href="/assessment" class="bg-white text-purple-900 px-5 py-2.5 rounded-xl text-sm font-bold text-center block hover:bg-purple-50 transition-colors">
            Begin Assessment →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SDG Section -->
<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-black text-gray-900 mb-2">Aligned with <span class="gradient-text">UN SDG Goals</span></h2>
      <p class="text-gray-500">SheLaunch AI drives measurable impact across four Sustainable Development Goals</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="sdg-badge bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
        <div class="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center mx-auto mb-3">
          <span class="text-white font-black text-lg">5</span>
        </div>
        <div class="font-bold text-gray-900 text-sm mb-1">Gender Equality</div>
        <div class="text-gray-500 text-xs">Empowering women through AI mentorship & funding access</div>
      </div>
      <div class="sdg-badge bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
        <div class="w-14 h-14 rounded-xl bg-red-600 flex items-center justify-center mx-auto mb-3">
          <span class="text-white font-black text-lg">8</span>
        </div>
        <div class="font-bold text-gray-900 text-sm mb-1">Decent Work & Growth</div>
        <div class="text-gray-500 text-xs">Accelerating startup sustainability and economic impact</div>
      </div>
      <div class="sdg-badge bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
        <div class="w-14 h-14 rounded-xl bg-orange-600 flex items-center justify-center mx-auto mb-3">
          <span class="text-white font-black text-lg">9</span>
        </div>
        <div class="font-bold text-gray-900 text-sm mb-1">Industry & Innovation</div>
        <div class="text-gray-500 text-xs">AI-powered digital infrastructure for innovation access</div>
      </div>
      <div class="sdg-badge bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
        <div class="w-14 h-14 rounded-xl bg-pink-600 flex items-center justify-center mx-auto mb-3">
          <span class="text-white font-black text-lg">10</span>
        </div>
        <div class="font-bold text-gray-900 text-sm mb-1">Reduced Inequalities</div>
        <div class="text-gray-500 text-xs">Democratizing access to schemes, mentors, and capital</div>
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-black text-gray-900 mb-2">How <span class="gradient-text">SheLaunch AI</span> Works</h2>
      <p class="text-gray-500">From registration to funded startup in structured steps</p>
    </div>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="text-center relative">
        <div class="w-14 h-14 rounded-2xl feature-icon flex items-center justify-center mx-auto mb-4 text-white text-xl font-black">1</div>
        <h3 class="font-bold text-gray-900 mb-2">Assessment</h3>
        <p class="text-gray-500 text-sm">Complete startup readiness form. AI scores your maturity across 6 dimensions.</p>
        <div class="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
      </div>
      <div class="text-center relative">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mx-auto mb-4 text-white text-xl font-black">2</div>
        <h3 class="font-bold text-gray-900 mb-2">Funding Plan</h3>
        <p class="text-gray-500 text-sm">AI generates your personalized funding roadmap with schemes & incubators.</p>
        <div class="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
      </div>
      <div class="text-center relative">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-4 text-white text-xl font-black">3</div>
        <h3 class="font-bold text-gray-900 mb-2">Discover & Apply</h3>
        <p class="text-gray-500 text-sm">Explore matched schemes and incubators, apply with AI-prepared checklists.</p>
        <div class="hidden md:block absolute top-7 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
      </div>
      <div class="text-center">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 text-white text-xl font-black">4</div>
        <h3 class="font-bold text-gray-900 mb-2">Get Mentored</h3>
        <p class="text-gray-500 text-sm">Chat with AI Mentor for pitch refinement, compliance, and growth strategy.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="py-16" style="background: linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #6d28d9 100%);">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-4xl font-black text-white mb-4">Ready to Launch Your Startup?</h2>
    <p class="text-purple-200 text-lg mb-8">Join thousands of women entrepreneurs leveraging AI to accelerate their startup journey.</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="/assessment" class="bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-base hover:bg-purple-50 transition-colors inline-flex items-center gap-2">
        <i class="fas fa-chart-line"></i> Start Free Assessment
      </a>
      <a href="/mentor" class="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors inline-flex items-center gap-2">
        <i class="fas fa-robot"></i> Talk to AI Mentor
      </a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-gray-900 text-gray-400 py-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg feature-icon flex items-center justify-center">
          <i class="fas fa-rocket text-white text-sm"></i>
        </div>
        <div>
          <div class="text-white font-bold">SheLaunch AI</div>
          <div class="text-purple-300 text-xs">Fueling Her Vision. Funding Her Venture.</div>
        </div>
      </div>
      <div class="flex gap-6 text-sm">
        <a href="/assessment" class="hover:text-white transition-colors">Assessment</a>
        <a href="/funding" class="hover:text-white transition-colors">Funding</a>
        <a href="/schemes" class="hover:text-white transition-colors">Schemes</a>
        <a href="/incubators" class="hover:text-white transition-colors">Incubators</a>
        <a href="/mentor" class="hover:text-white transition-colors">AI Mentor</a>
      </div>
      <div class="text-xs text-gray-600">Powered by Gemini AI · Built for Google AI Studio Hackathon</div>
    </div>
  </div>
</footer>

</body>
</html>
`;
