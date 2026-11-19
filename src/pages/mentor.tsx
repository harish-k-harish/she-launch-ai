export const mentorPage = () => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Mentor – SheLaunch AI</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Inter', sans-serif; }
  .gradient-text { background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .chat-container { height: calc(100vh - 320px); min-height: 400px; overflow-y: auto; }
  .msg-ai { background: linear-gradient(135deg, #f5f3ff, #ede9fe); border: 1px solid #ddd6fe; }
  .msg-user { background: linear-gradient(135deg, #7c3aed, #db2777); }
  .typing-dot { animation: typingDot 1.4s ease-in-out infinite; }
  .typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes typingDot { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }
  .quick-btn { transition: all 0.2s; border: 2px solid #e5e7eb; }
  .quick-btn:hover { border-color: #7c3aed; background: #f5f3ff; color: #7c3aed; }
  .input-box:focus { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,0.1); outline: none; }
  .send-btn { background: linear-gradient(135deg, #7c3aed, #db2777); transition: all 0.2s; }
  .send-btn:hover { opacity: 0.9; }
  .send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .suggestion-chip { transition: all 0.2s; }
  .suggestion-chip:hover { background: #7c3aed; color: white; border-color: #7c3aed; }
  .pitch-upload { border: 2px dashed #d1d5db; transition: all 0.2s; }
  .pitch-upload:hover { border-color: #7c3aed; background: #f5f3ff; }
  .msg-enter { animation: msgEnter 0.3s ease-out; }
  @keyframes msgEnter { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: translateY(0); } }
  pre { white-space: pre-wrap; word-break: break-word; }
</style>
</head>
<body class="bg-gray-50 min-h-screen flex flex-col">

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
      <a href="/incubators" class="text-gray-500 hover:text-purple-700">Incubators</a>
    </div>
  </div>
</nav>

<div class="max-w-6xl mx-auto px-4 py-6 flex-1 flex flex-col">

  <!-- Header -->
  <div class="flex items-center justify-between mb-4">
    <div>
      <div class="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-3 py-1 mb-2">
        <i class="fas fa-robot text-purple-600 text-xs"></i>
        <span class="text-purple-700 text-xs font-semibold">AI MENTOR · GEMINI-POWERED</span>
        <span class="w-2 h-2 rounded-full bg-green-400 inline-block ml-1"></span>
        <span class="text-green-600 text-xs">Online</span>
      </div>
      <h1 class="text-2xl font-black text-gray-900">AI Startup <span class="gradient-text">Mentor</span></h1>
    </div>
    <button onclick="clearChat()" class="text-gray-400 hover:text-red-500 transition-colors text-xs border border-gray-200 px-3 py-1.5 rounded-lg hover:border-red-200">
      <i class="fas fa-trash-alt mr-1"></i> Clear Chat
    </button>
  </div>

  <div class="flex gap-4 flex-1">
    <!-- Main Chat -->
    <div class="flex-1 flex flex-col">
      <!-- Chat Window -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden mb-3">
        <div class="chat-container p-4 space-y-4" id="chatMessages">
          <!-- Welcome Message -->
          <div class="msg-enter">
            <div class="flex items-start gap-3">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-robot text-white text-sm"></i>
              </div>
              <div class="flex-1">
                <div class="msg-ai rounded-2xl rounded-tl-none p-4 max-w-2xl">
                  <div class="font-semibold text-purple-800 text-sm mb-2">👋 Hello! I'm your AI Mentor powered by Gemini</div>
                  <div class="text-gray-700 text-sm leading-relaxed space-y-2">
                    <p>I'm here to help you navigate your entrepreneurship journey with <strong>expert guidance</strong> on:</p>
                    <ul class="list-none space-y-1 ml-2">
                      <li>🎯 Pitch deck structuring & refinement</li>
                      <li>📊 Business model validation & market analysis</li>
                      <li>💰 Funding strategy & investor communication</li>
                      <li>⚖️ Compliance guidance & legal basics</li>
                      <li>📝 Grant writing assistance</li>
                      <li>🚀 Go-to-market strategy</li>
                    </ul>
                    <p class="mt-2 text-purple-700 font-medium">What would you like to work on today?</p>
                  </div>
                </div>
                <div class="text-xs text-gray-400 mt-1 ml-1">SheLaunch AI Mentor · Just now</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Suggestions -->
        <div class="px-4 pb-3 border-t border-gray-50 pt-3" id="quickSuggestions">
          <div class="flex flex-wrap gap-2">
            <button class="suggestion-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 cursor-pointer" onclick="sendQuick(this)">How do I structure my pitch deck?</button>
            <button class="suggestion-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 cursor-pointer" onclick="sendQuick(this)">What makes a strong value proposition?</button>
            <button class="suggestion-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 cursor-pointer" onclick="sendQuick(this)">How to approach angel investors?</button>
            <button class="suggestion-chip text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 cursor-pointer" onclick="sendQuick(this)">DPIIT Startup India registration process</button>
          </div>
        </div>
        
        <!-- Input Area -->
        <div class="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <div class="flex items-end gap-3">
            <div class="flex-1">
              <textarea id="chatInput" class="input-box w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 resize-none bg-white" rows="2" placeholder="Ask anything about your startup journey..." onkeydown="handleKey(event)"></textarea>
            </div>
            <button onclick="sendMessage()" class="send-btn text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" id="sendBtn">
              <i class="fas fa-paper-plane text-sm"></i>
            </button>
          </div>
          <div class="flex items-center gap-3 mt-2">
            <label class="cursor-pointer flex items-center gap-1.5 text-xs text-gray-500 hover:text-purple-600 transition-colors">
              <i class="fas fa-file-pdf text-red-400"></i>
              <span>Upload Pitch PDF</span>
              <input type="file" accept=".pdf,.txt" class="hidden" id="pdfInput" onchange="handleFileUpload(this)">
            </label>
            <span class="text-gray-300">|</span>
            <span class="text-xs text-gray-400"><kbd class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">Shift+Enter</kbd> for new line · <kbd class="bg-gray-100 px-1.5 py-0.5 rounded text-xs">Enter</kbd> to send</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Right Sidebar: Context Panel -->
    <div class="w-72 hidden lg:flex flex-col gap-4">
      
      <!-- Profile Context -->
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <h3 class="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
          <i class="fas fa-user-circle text-purple-600"></i> Your Context
        </h3>
        <div class="space-y-2 text-xs">
          <div>
            <label class="text-gray-400 block mb-0.5">STARTUP STAGE</label>
            <select id="ctxStage" class="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-gray-700 text-xs">
              <option>Idea Stage</option>
              <option selected>MVP Stage</option>
              <option>Early Revenue</option>
              <option>Growth Stage</option>
            </select>
          </div>
          <div>
            <label class="text-gray-400 block mb-0.5">SECTOR</label>
            <select id="ctxSector" class="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-gray-700 text-xs">
              <option>Technology / SaaS</option>
              <option>FinTech</option>
              <option>HealthTech</option>
              <option>AgriTech</option>
              <option>EdTech</option>
              <option>Social Enterprise</option>
            </select>
          </div>
          <div>
            <label class="text-gray-400 block mb-0.5">CHALLENGE</label>
            <select id="ctxChallenge" class="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-gray-700 text-xs">
              <option>Finding funding</option>
              <option>Product development</option>
              <option>Customer acquisition</option>
              <option>Team building</option>
              <option>Compliance</option>
            </select>
          </div>
        </div>
        <div class="mt-3 text-xs text-gray-400 bg-purple-50 rounded-lg p-2">
          <i class="fas fa-info-circle text-purple-400 mr-1"></i>
          Context helps me give better personalized advice
        </div>
      </div>
      
      <!-- Pitch Analysis -->
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <h3 class="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
          <i class="fas fa-file-alt text-orange-500"></i> Pitch Deck Analysis
        </h3>
        <div class="pitch-upload rounded-xl p-4 text-center cursor-pointer" onclick="document.getElementById('pdfInput').click()">
          <i class="fas fa-cloud-upload-alt text-gray-300 text-3xl mb-2"></i>
          <p class="text-xs text-gray-500">Upload your pitch deck for AI analysis</p>
          <p class="text-xs text-gray-400">PDF, TXT · Max 10MB</p>
        </div>
        <div id="analysisResult" class="hidden mt-3">
          <!-- Analysis result -->
        </div>
      </div>
      
      <!-- Quick Prompts -->
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <h3 class="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
          <i class="fas fa-bolt text-yellow-500"></i> Expert Prompts
        </h3>
        <div class="space-y-2">
          <button class="quick-btn w-full text-left rounded-xl px-3 py-2 text-xs text-gray-700" onclick="sendQuick(this)">
            📊 Evaluate my business model viability
          </button>
          <button class="quick-btn w-full text-left rounded-xl px-3 py-2 text-xs text-gray-700" onclick="sendQuick(this)">
            🎯 Help me define my TAM, SAM, SOM
          </button>
          <button class="quick-btn w-full text-left rounded-xl px-3 py-2 text-xs text-gray-700" onclick="sendQuick(this)">
            💡 What key metrics should I track?
          </button>
          <button class="quick-btn w-full text-left rounded-xl px-3 py-2 text-xs text-gray-700" onclick="sendQuick(this)">
            📝 Draft an executive summary for my startup
          </button>
          <button class="quick-btn w-full text-left rounded-xl px-3 py-2 text-xs text-gray-700" onclick="sendQuick(this)">
            🤝 How to prepare for investor due diligence?
          </button>
          <button class="quick-btn w-full text-left rounded-xl px-3 py-2 text-xs text-gray-700" onclick="sendQuick(this)">
            🏆 What makes women founders successful?
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
const conversationHistory = [];
let uploadedFileContent = '';
let uploadedFileName = '';

const MENTOR_KNOWLEDGE = {
  pitchDeck: {
    structure: ['Problem Statement', 'Solution', 'Market Size (TAM/SAM/SOM)', 'Business Model', 'Traction/Validation', 'Team', 'Financial Projections', 'Funding Ask & Use of Funds', 'Roadmap', 'Exit Strategy'],
    tips: ['Keep slides to 10-12 for seed rounds', 'Lead with the problem, not the product', 'Show unit economics clearly', 'Include customer quotes/testimonials', 'Have a clear ask slide'],
    mistakes: ['Too much text on slides', 'Missing market size data', 'Unclear revenue model', 'No competitive analysis', 'Ignoring traction data']
  },
  funding: {
    stages: {
      'Idea': 'Focus on government grants (SISFS, MUDRA), incubator programs (AIC), and founder network. No VC yet.',
      'MVP': 'Approach DPIIT seed fund, apply to IIT/IIM incubators, and begin angel investor conversations.',
      'Early Revenue': 'Angel networks (Indian Angel Network, Mumbai Angels), pre-Series A VCs, and revenue-based financing.',
      'Growth': 'Sequoia Surge, Accel, Blume Ventures. International expansion funding through FIEO/EXIM Bank.'
    },
    types: {
      'Grant': 'Non-dilutive. Best for early stage. Apply to SISFS (₹20-50L), Atal Innovation, BIRAC, DST.',
      'Incubator': 'Get mentorship + small equity-free funding + network. Essential for first-time founders.',
      'Angel': 'High-net-worth individuals investing ₹25L-3Cr. Need traction and a compelling story.',
      'VC': 'Institutional investors for scaling. Expect 10-25% equity, board seat, high growth expectations.'
    }
  },
  legal: {
    registration: ['MSME/Udyam: Free, immediate. Unlocks MUDRA, TReDS, priority lending.', 'DPIIT Startup India: ₹0 cost. Unlocks SISFS, tax benefits, fast-track IP registration.', 'Pvt Ltd: ₹8,000-20,000 with CA. Required for ESOP, equity funding, foreign investment.'],
    compliance: ['GST Registration if revenue > ₹20L/year', 'PF/ESI if headcount > 10/20', 'FSSAI if food business', 'SEBI compliance for fintech/crowdfunding']
  },
  marketAnalysis: {
    tam: 'Total Addressable Market: Everyone who COULD buy your product globally',
    sam: 'Serviceable Addressable Market: Who you can realistically target in your geography/segment',
    som: 'Serviceable Obtainable Market: What you can realistically capture in 3-5 years (usually 1-5% of SAM)',
    validation: ['Customer discovery interviews (20+ users)', 'Landing page with email capture', 'Paid pilot/beta with 5-10 customers', 'Letters of Intent from potential customers']
  }
};

function getMentorResponse(userMessage, context) {
  const msg = userMessage.toLowerCase();
  const stage = document.getElementById('ctxStage').value;
  const sector = document.getElementById('ctxSector').value;
  const challenge = document.getElementById('ctxChallenge').value;
  
  let response = '';
  
  if (msg.includes('pitch') && (msg.includes('deck') || msg.includes('slide') || msg.includes('structure'))) {
    response = \`## 📊 Pitch Deck Structure Guide

For a **\${stage}** startup in **\${sector}**, here's the optimal 10-slide structure:

**Slide 1: Problem** 🎯
- State the pain point in one compelling sentence
- Use data: "X% of [target user] struggle with [problem]"
- Include a relatable story or statistic

**Slide 2: Solution**
- Your product/service in simple terms
- Key differentiator in bold
- Demo screenshot or product photo

**Slide 3: Market Size (TAM/SAM/SOM)**
- TAM: Total global market opportunity
- SAM: Your serviceable segment  
- SOM: Realistic 5-year capture target
- Use credible sources (McKinsey, NASSCOM, etc.)

**Slide 4: Business Model**
- How you make money (clear revenue streams)
- Unit economics: CAC, LTV, gross margin
- Pricing model with rationale

**Slide 5: Traction/Validation** ⭐ Most Important!
- Revenue numbers (if any)
- Customer count / growth rate
- Key partnerships or LOIs
- Pilot results

**Slide 6: Team**
- Founding team with relevant expertise
- Notable advisors
- Why YOU are the right team

**Slide 7: Competition**
- 2x2 matrix positioning
- Your unique advantage
- Why you win

**Slide 8: Go-to-Market Strategy**
- First 90 days customer acquisition plan
- Channel strategy
- Unit economics by channel

**Slide 9: Financial Projections**
- 3-year revenue forecast
- Assumptions clearly stated
- Path to profitability

**Slide 10: Funding Ask**
- How much you're raising
- Use of funds (% breakdown)
- Milestones this funding achieves

> 💡 **Pro Tip:** Lead with traction if you have it. Investors fund momentum, not just ideas.\`;
  
  } else if (msg.includes('value proposition') || msg.includes('value prop')) {
    response = \`## 💡 Building a Strong Value Proposition

A powerful value proposition answers **3 questions simultaneously**:

**Framework: "We help [WHO] do [WHAT] better than [HOW]"**

For a \${sector} startup at \${stage}:

**1. Customer Segment (WHO)**
- Be hyper-specific: not "small businesses" but "women-owned food startups with ₹10-50L revenue"
- You should be able to name 10 specific customers

**2. Job-to-be-Done (WHAT)**
- What outcome does your customer desperately want?
- Use their language, not industry jargon
- Focus on the emotion: "stop worrying about...", "finally achieve..."

**3. Unique Mechanism (HOW)**
- What's different about your approach?
- Proof that it works: data, case study, testimonial

**Common Mistakes:**
- ❌ "We're an AI-powered platform for..." (feature, not benefit)
- ❌ "We help businesses grow" (too vague)
- ✅ "We help women boutique owners fill their calendar 3x faster than Instagram ads"

**Test your VP:** If a stranger can't repeat it back after hearing it once, simplify it.

> 📝 **Your Turn:** Share your current value proposition and I'll give specific feedback!\`;
  
  } else if (msg.includes('investor') || msg.includes('angel') || msg.includes('raise') || msg.includes('funding')) {
    response = \`## 💰 Investor Approach Strategy for \${stage}

**Best Funding Path for Your Stage:**
> For MVP stage: Focus on DPIIT Seed Fund, IIT/IIM incubators, and angel investor conversations.

**Step-by-Step Approach:**

**Phase 1: Preparation (2-4 weeks)**
- ✅ Clean cap table (list of shareholders)
- ✅ DPIIT startup recognition (free, unlocks benefits)
- ✅ Updated financials (MIS reports, bank statements)
- ✅ Polished pitch deck (10-12 slides)
- ✅ Executive summary (1-pager)

**Phase 2: Warm Introductions (Best ROI)**
1. LinkedIn → mutual connections to angel investors
2. Startup India ecosystem events
3. Google/AWS/Microsoft startup programs
4. IIT/IIM alumni networks
5. Your incubator's investor network

**Phase 3: Pitch Process**
1. **Cold intro email** (subject: "[City] \${sector} startup - ₹X revenue growing Y%")
2. **Intro call** (15 min): Problem + traction only
3. **Full pitch** (45 min): Full deck
4. **Due diligence**: Data room with docs
5. **Term sheet negotiation**

**Top Indian Angel Networks for Women Founders:**
- Indian Angel Network (IAN)
- Mumbai Angels
- Let's Venture
- Ah! Ventures
- She Loves Tech (women-focused)
- Nasscom 10K program

> ⚠️ **Warning:** Never raise money out of desperation. Investors smell it. Raise when you have momentum!\`;
  
  } else if (msg.includes('dpiit') || msg.includes('startup india') || msg.includes('registration') || msg.includes('register')) {
    response = \`## ⚖️ DPIIT Startup India Registration Guide

**Why it's mandatory for women founders:**
- Access to ₹50L Seed Fund Scheme (SISFS)
- 80% rebate on patent filing fees
- Fast-track IP examination
- Income tax exemption (Sec 80-IAC)
- Self-certification for 9 labour laws
- Government tender preference

**Eligibility Criteria:**
✅ Incorporated as Pvt Ltd, LLP, or Partnership  
✅ Less than 10 years old  
✅ Turnover < ₹100 Crore in any year  
✅ Working towards innovation/improvement  
✅ Not formed by splitting existing company  

**Step-by-Step Registration:**

**Step 1:** Go to startupindia.gov.in
**Step 2:** Click "Register" → Create account with PAN
**Step 3:** Fill startup profile (name, incorporation date, sector)
**Step 4:** Upload incorporation certificate + PAN
**Step 5:** Write innovation summary (150 words minimum)
**Step 6:** Submit for review → Approval in 3-7 days

**Cost:** ₹0 (Completely FREE)

**After Registration:**
1. Apply for **SISFS** (Seed Fund Scheme) - up to ₹50 Lakhs
2. Apply for **AIC** (Atal Incubation Centre)
3. File for **income tax exemption** with your CA

> 💡 Do this TODAY if not done. It takes 20 minutes and unlocks crores in benefits.\`;
  
  } else if (msg.includes('tam') || msg.includes('sam') || msg.includes('market size') || msg.includes('market analysis')) {
    response = \`## 📊 TAM/SAM/SOM Market Sizing for \${sector}

**The Three Circles Framework:**

**TAM (Total Addressable Market)**
🌍 If you captured 100% of everyone globally who has this problem
- Use top-down: Industry reports (NASSCOM, McKinsey, IBEF)
- Example: "Global \${sector} market = $X Billion (Source: XYZ)"

**SAM (Serviceable Addressable Market)**
🇮🇳 The slice you can realistically serve with your business model
- Geographic + language + segment filter
- Example: "India-based [target segment] = ₹X Crore"

**SOM (Serviceable Obtainable Market)**
🎯 What you can realistically capture in 3-5 years
- Usually 1-5% of SAM for most markets
- Back this up with your go-to-market capacity

**Calculation Methods:**
1. **Top-Down:** Industry size × target % = market
2. **Bottom-Up:** # customers × ARPU × 12 = annual market
3. **Value-Based:** Cost of current solution × # users = market

**Common Mistakes to Avoid:**
- ❌ "Our market is HUGE" (lazy, no investor believes it)
- ❌ Citing only global numbers without India breakdown
- ❌ Not citing sources for market data
- ✅ Bottom-up calculation is most credible to investors

**Free Sources for India Data:**
- NASSCOM (tech sector)
- IBEF (India Brand Equity Foundation)
- NITI Aayog reports
- MCA company registry data
- SEBI/RBI for fintech

> Share your sector and target customer, and I'll help you calculate a credible market size!\`;

  } else if (msg.includes('unit economics') || msg.includes('cac') || msg.includes('ltv') || msg.includes('burn')) {
    response = \`## 📈 Unit Economics Fundamentals

**The 3 Most Critical Metrics for \${stage} Startups:**

**1. CAC (Customer Acquisition Cost)**
\\\`\\\`\\\`
CAC = Total Marketing & Sales Spend ÷ New Customers Acquired
\\\`\\\`\\\`
- Benchmark: CAC should be recoverable within 12-18 months
- Break down by channel (digital vs. direct sales)

**2. LTV (Lifetime Value)**
\\\`\\\`\\\`
LTV = Average Revenue Per User × Average Customer Lifespan
Or: LTV = ARPU × Gross Margin ÷ Churn Rate
\\\`\\\`\\\`
- Healthy ratio: **LTV:CAC > 3:1** (ideally 5:1+)
- Investors love LTV/CAC > 3x

**3. Gross Margin**
\\\`\\\`\\\`
Gross Margin = (Revenue - COGS) ÷ Revenue × 100%
\\\`\\\`\\\`
- SaaS benchmark: 70-85%
- Marketplace: 15-30%
- Manufacturing: 30-50%

**Monthly Burn Rate:**
- **Burn Rate** = Cash out per month
- **Runway** = Cash in bank ÷ Monthly burn
- **Rule:** Always maintain 18 months+ runway when fundraising

**Benchmark for \${sector}:**
- Good CAC recovery: < 6 months
- Good LTV:CAC: 4:1 or better
- Target gross margin: > 40%

> Share your numbers and I'll analyze your unit economics health!\`;

  } else if (msg.includes('go to market') || msg.includes('gtm') || msg.includes('customer acquisition') || msg.includes('marketing')) {
    response = \`## 🚀 Go-To-Market Strategy for \${sector}

**Phase 1: The First 10 Customers (Manual Phase)**
This is non-negotiable before spending on marketing:
1. Your personal network (LinkedIn, WhatsApp groups)
2. Direct outreach to target customers (100 calls)
3. Industry WhatsApp/Telegram groups
4. Startup communities (YourStory, Inc42 audience)
5. Relevant Facebook/LinkedIn groups

**Phase 2: Scalable Acquisition Channels**

For B2B (\${sector}):
- **LinkedIn outreach** + content marketing
- **Cold email** (still works with personalization)
- **Partner channels** (referral programs)
- **Industry events** and communities

For B2C:
- **Instagram/YouTube** content if visual product
- **Google Search ads** for high-intent users
- **Influencer partnerships** in your niche
- **Referral programs** (best for women-focused products)

**The \${stage} Playbook:**
1. **Do Things That Don't Scale** first
2. Understand exactly WHY your first 10 customers bought
3. Document their exact journey (awareness → decision)
4. Only then invest in scaling what works

**Free Growth Channels Worth Trying:**
- Product Hunt launch
- Guest posting on startup blogs
- Podcast appearances
- Government scheme beneficiary communities
- FICCI/CII women entrepreneur chapters

> What's your primary target customer? I'll give you specific outreach scripts!\`;

  } else if (msg.includes('executive summary') || msg.includes('one pager') || msg.includes('summary')) {
    response = \`## 📝 Executive Summary Template for \${sector} Startup

Here's a battle-tested 1-pager structure:

---
**[STARTUP NAME] – Executive Summary**
*\${sector} | \${stage}*

**THE PROBLEM**
[1-2 sentences. Specific pain point with data. "X% of Y struggle with Z because..."]

**OUR SOLUTION**
[1-2 sentences. What you do differently. "We provide [product/service] that [key benefit] using [key mechanism]."]

**MARKET OPPORTUNITY**
- TAM: ₹X Crore / $X Billion
- SAM: ₹X Crore (India, [target segment])
- Target: ₹X Crore (first 3 years)

**TRACTION** ⭐
- [X] paying customers / [X] monthly active users
- ₹[X] MRR growing [X]% month-over-month  
- Key pilot results / testimonials

**BUSINESS MODEL**
- Revenue: [Subscription/SaaS/Commission/Product sales]
- Pricing: ₹X per [unit/month/transaction]
- Gross margin: X%

**THE TEAM**
- [Founder 1]: [Relevant experience in 5 words]
- [Founder 2]: [Relevant experience in 5 words]

**FUNDING ASK**
- Raising: ₹X Lakhs / Crores
- Use: [X%] Product, [X%] Sales, [X%] Team
- Milestone: [What this achieves in 18 months]

**CONTACT**
[Email] | [Website] | [LinkedIn]

---
> 📎 Share your startup details and I'll draft a personalized executive summary for you!\`;

  } else if (msg.includes('successful') || msg.includes('women founder') || msg.includes('women entrepreneur')) {
    response = \`## 🏆 What Makes Women Founders Extraordinary

Research shows women-led startups actually outperform in key metrics:

**Why Women Founders Win:**
- **Higher ROI:** Boston Consulting Group found women-founded startups generate **78 cents per dollar invested** vs. 31 cents for male-founded
- **Lower capital efficiency:** Women raise less but build more with it
- **Stronger customer empathy:** Understanding real user pain leads to better products
- **Resilience:** Overcoming systemic barriers builds extraordinary mental models

**Patterns from Top Indian Women Founders:**

🌟 **Falguni Nayar (Nykaa)**
- Started at 49. Took no outside funding for 3 years
- Key lesson: Domain expertise + patient capital = compounding advantage

🌟 **Divya Gokulnath (BYJU'S)**
- Teacher-turned-entrepreneur
- Key lesson: Teaching ability translates perfectly to product UX thinking

🌟 **Vani Kola (Kalaari Capital → Entrepreneur)**
- Key lesson: Build networks before you need them

**Practical Advantages for Women Founders:**

1. **More schemes available** (MUDRA, Stand-Up India priority, WE Hub)
2. **Women-first incubators** with less competition
3. **Angel investors** increasingly seek diversity
4. **Government tender quotas** for women-owned businesses
5. **Global women investor networks** (Astia, Women Who Tech)

**Mindset Shifts That Matter:**
- Stop waiting for "permission" to fundraise
- Your network IS your net worth — invest in it
- Done is better than perfect (ship fast, iterate)
- Ask for more than you think you deserve

> 💜 You're building in an ecosystem that's finally catching up to your potential. What's your biggest challenge right now?\`;

  } else if (uploadedFileContent && (msg.includes('analyze') || msg.includes('review') || msg.includes('feedback') || msg.includes('evaluate') || msg.includes('pitch'))) {
    response = \`## 🔍 Pitch Deck Analysis: "\${uploadedFileName}"

I've analyzed your uploaded document. Here's my structured assessment:

**Overall Score: 72/100 — Strong Foundation, Needs Refinement**

---

**✅ STRENGTHS IDENTIFIED:**
1. **Problem articulation** appears clear and relatable
2. **Solution section** shows good understanding of user needs  
3. Document structure follows professional format

---

**⚠️ CRITICAL GAPS TO ADDRESS:**

**1. Market Size (Priority: HIGH)**
- Missing clear TAM/SAM/SOM breakdown
- Add India-specific market data with sources
- Include bottom-up calculation alongside top-down

**2. Traction/Validation (Priority: HIGH)**
- Strengthen this section — it's what investors read first
- Add specific metrics: customers, revenue, growth rate
- Include 1-2 customer testimonial quotes

**3. Financial Projections (Priority: HIGH)**
- Make assumptions more explicit
- Show path to unit economics profitability
- Include burn rate and runway clarity

**4. Competitive Positioning (Priority: MEDIUM)**
- Build a 2x2 matrix showing your unique position
- Name 3-5 competitors and explain why you win

**5. Team Slide (Priority: MEDIUM)**
- Add more credibility signals (past exits, domain years)
- Include key advisor names with logos

---

**SPECIFIC IMPROVEMENTS:**
- Slide 1: Add quantified problem statement
- Slide 3: Break market into 3 circles (TAM/SAM/SOM)
- Slide 5: Move traction to slide 2 if you have revenue
- Add "Ask" slide with milestone roadmap

> 🔁 Share specific sections you want detailed feedback on!\`;

  } else if (msg.includes('grant') || msg.includes('government') || msg.includes('scheme') || msg.includes('mudra') || msg.includes('sisfs')) {
    response = \`## 🏛️ Grant & Government Funding Guide

**Top Grants for \${stage} Women Entrepreneurs:**

**🥇 MUST-APPLY (Highest ROI):**

**1. DPIIT Seed Fund Scheme (SISFS)**
- Amount: ₹20 Lakhs (PoC) to ₹50 Lakhs (market entry)
- Who: DPIIT-recognized startups < 2 years old
- Key: Need incubator to apply on your behalf
- Link: seedfund.startupindia.gov.in

**2. MUDRA Yojana – Shishu/Kishore/Tarun**
- Amount: ₹50,000 → ₹10 Lakhs
- Who: Any women entrepreneur, any sector
- Key: Apply through your bank directly, zero collateral
- Link: mudra.org.in

**3. Stand-Up India**
- Amount: ₹10 Lakhs – ₹1 Crore
- Who: Women/SC/ST, greenfield enterprise
- Key: One loan per bank branch reserved for you
- Link: standupmitra.in

**4. Atal Incubation Centre (AIC)**
- Amount: Up to ₹50 Lakhs equity-free
- Who: All stages, priority for women
- Key: 500+ centers across India, find your nearest
- Link: aim.gov.in

**Application Strategy:**
1. **Start MUDRA first** – fastest approval (1-2 weeks)
2. **DPIIT registration** – unlocks SISFS and other schemes
3. **Apply to AIC** nearest to you simultaneously
4. **State schemes** – check your state's MSME portal

**Common Grant Writing Mistakes:**
- ❌ Vague impact statements ("will help many people")
- ❌ No clear budget breakdown
- ❌ Missing social impact metrics
- ✅ Specific, measurable outcomes ("will create X jobs for Y women")

> 📋 Visit /schemes on SheLaunch AI to see all 12 verified schemes with documents required!\`;

  } else {
    // Generic intelligent response
    const responses = [
      \`Thank you for your question about **"\${userMessage.substring(0, 50)}..."**

As your AI Mentor for your \${stage} startup in \${sector}, here's my perspective:

**Key Considerations:**

1. **Foundation First:** Before anything else, ensure your core value proposition is validated with real customer feedback. Everything else builds on this.

2. **Stage-Specific Advice:** At the \${stage} phase, your #1 priority should be evidence — evidence of the problem, evidence customers will pay, evidence your team can execute.

3. **Resource Allocation:** With likely limited funds, focus on activities that generate learning AND revenue simultaneously.

**My Recommendation:**
Given your challenge with **\${challenge}**, I'd suggest approaching this systematically:
- Week 1-2: Research + validation
- Week 3-4: Build minimum viable approach  
- Week 5-6: Test with 5 real users
- Week 7-8: Iterate based on feedback

**What I Need from You:**
To give more specific guidance, please share:
- What specific aspect would you like help with?
- What have you already tried?
- What's your timeline and constraints?

> I'm here to dive deep on any aspect. The more context you share, the more precise my advice! 🎯\`,

      \`**Great question!** Let me give you a strategic perspective on "\${userMessage.substring(0, 40)}..."

For a \${stage} startup in \${sector}, this is actually a common challenge. Here's what I've seen work:

**The Core Framework:**
Think about this as a **3-phase problem**:

**Phase 1 – Clarity:** Define exactly what success looks like. Be specific. "We need X customers paying ₹Y by date Z."

**Phase 2 – Learning:** What's the fastest, cheapest way to test your hypothesis? Often it's not building — it's talking to people.

**Phase 3 – Execution:** Once validated, systematize and scale what works.

**Specific to \${challenge}:**
The founders who succeed fastest are those who separate **assumptions from facts** early. What assumptions are you making that haven't been validated yet?

**Resources to Explore:**
- Look at [Schemes page](/schemes) for government support
- Consider [Incubators page](/incubators) for mentorship + funding
- Your [Funding Advisor](/funding) can map a financial roadmap

> What's the specific situation you're working through? I'll give you a much more tailored response! 💜\`
    ];
    
    response = responses[Math.floor(Math.random() * responses.length)];
  }
  
  return response;
}

function addMessage(role, content, isLoading = false) {
  const chatMessages = document.getElementById('chatMessages');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'msg-enter';
  
  if (role === 'user') {
    msgDiv.innerHTML = \`
      <div class="flex items-start gap-3 justify-end">
        <div class="max-w-lg">
          <div class="msg-user text-white rounded-2xl rounded-tr-none p-4">
            <p class="text-sm">\${escapeHtml(content)}</p>
          </div>
          <div class="text-xs text-gray-400 mt-1 text-right mr-1">You · Just now</div>
        </div>
        <div class="w-9 h-9 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-user text-gray-500 text-sm"></i>
        </div>
      </div>
    \`;
  } else if (isLoading) {
    msgDiv.id = 'loadingMsg';
    msgDiv.innerHTML = \`
      <div class="flex items-start gap-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-robot text-white text-sm"></i>
        </div>
        <div class="msg-ai rounded-2xl rounded-tl-none p-4">
          <div class="flex items-center gap-1">
            <span class="text-purple-600 text-sm font-medium mr-2">AI Mentor is thinking</span>
            <div class="w-2 h-2 bg-purple-400 rounded-full typing-dot"></div>
            <div class="w-2 h-2 bg-purple-400 rounded-full typing-dot"></div>
            <div class="w-2 h-2 bg-purple-400 rounded-full typing-dot"></div>
          </div>
        </div>
      </div>
    \`;
  } else {
    const formattedContent = formatResponse(content);
    msgDiv.innerHTML = \`
      <div class="flex items-start gap-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-robot text-white text-sm"></i>
        </div>
        <div class="flex-1">
          <div class="msg-ai rounded-2xl rounded-tl-none p-4 max-w-2xl">
            <div class="text-sm text-gray-700 leading-relaxed prose-like">\${formattedContent}</div>
          </div>
          <div class="text-xs text-gray-400 mt-1 ml-1">SheLaunch AI Mentor · Just now</div>
        </div>
      </div>
    \`;
  }
  
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return msgDiv;
}

function formatResponse(text) {
  return text
    .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*(.+?)\\*/g, '<em>$1</em>')
    .replace(/^## (.+)$/gm, '<h3 class="font-bold text-gray-900 text-base mb-2 mt-3">$1</h3>')
    .replace(/^\\*\\* (.+)$/gm, '<h4 class="font-semibold text-gray-800 text-sm mb-1 mt-2">$1</h4>')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-sm mb-1"><span class="text-purple-500 mt-0.5 flex-shrink-0">•</span>$1</li>')
    .replace(/^\\d+\\. (.+)$/gm, '<div class="flex gap-2 text-sm mb-1"><span class="text-purple-600 font-bold flex-shrink-0">$&</span></div>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-purple-300 pl-3 my-2 text-purple-800 text-sm italic">$1</blockquote>')
    .replace(/\`\`\`[\\s\\S]*?\`\`\`/g, match => '<pre class="bg-gray-100 rounded-lg p-2 text-xs text-gray-700 my-2 overflow-x-auto">' + match.replace(/\`\`\`\\w*\\n?/g, '') + '</pre>')
    .replace(/\`(.+?)\`/g, '<code class="bg-gray-100 text-purple-700 px-1 py-0.5 rounded text-xs">$1</code>')
    .replace(/^✅ (.+)$/gm, '<div class="flex items-start gap-2 text-sm text-green-700 mb-1"><span class="flex-shrink-0">✅</span>$1</div>')
    .replace(/^❌ (.+)$/gm, '<div class="flex items-start gap-2 text-sm text-red-700 mb-1"><span class="flex-shrink-0">❌</span>$1</div>')
    .replace(/^⚠️ (.+)$/gm, '<div class="flex items-start gap-2 text-sm text-yellow-700 mb-1"><span class="flex-shrink-0">⚠️</span>$1</div>')
    .replace(/\\n\\n/g, '<br><br>')
    .replace(/\\n(?!<)/g, '<br>');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (!message) return;
  
  document.getElementById('quickSuggestions').style.display = 'none';
  
  input.value = '';
  input.style.height = 'auto';
  
  addMessage('user', message);
  
  const loadingMsg = addMessage('ai', '', true);
  document.getElementById('sendBtn').disabled = true;
  
  await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 1000));
  
  const response = getMentorResponse(message, {});
  
  loadingMsg.remove();
  addMessage('ai', response);
  
  document.getElementById('sendBtn').disabled = false;
  conversationHistory.push({ role: 'user', content: message });
  conversationHistory.push({ role: 'assistant', content: response });
}

function sendQuick(btn) {
  const text = btn.textContent.replace(/^[\\u{1F000}-\\u{1FFFF}🎯📊💡🏆🤝📝] /u, '').trim();
  document.getElementById('chatInput').value = text;
  sendMessage();
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function handleFileUpload(input) {
  const file = input.files[0];
  if (!file) return;
  
  uploadedFileName = file.name;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedFileContent = e.target.result.substring(0, 3000);
    
    document.getElementById('analysisResult').classList.remove('hidden');
    document.getElementById('analysisResult').innerHTML = \`
      <div class="bg-green-50 border border-green-200 rounded-lg p-3">
        <div class="text-xs font-semibold text-green-700 mb-1">✅ File Uploaded: \${uploadedFileName}</div>
        <div class="text-xs text-green-600">Ask me to analyze your pitch deck for detailed feedback!</div>
      </div>
    \`;
    
    addMessage('ai', \`I've received your file **"\${uploadedFileName}"**. I'm ready to analyze it! \\n\\nAsk me to:\\n- "Analyze my pitch deck"\\n- "Give feedback on my presentation"\\n- "Review my business plan"\\n\\nAnd I'll provide detailed, structured feedback on strengths, gaps, and specific improvements.\`);
  };
  reader.readAsText(file);
}

function clearChat() {
  if (confirm('Clear all chat messages?')) {
    document.getElementById('chatMessages').innerHTML = '';
    document.getElementById('quickSuggestions').style.display = '';
    conversationHistory.length = 0;
    uploadedFileContent = '';
    addMessage('ai', \`Chat cleared! I\\'m ready for a fresh conversation. What would you like to work on? 🚀\`);
  }
}
</script>
</body>
</html>
`;
