import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { homePage } from './pages/home'
import { assessmentPage } from './pages/assessment'
import { schemesPage } from './pages/schemes'
import { incubatorsPage } from './pages/incubators'
import { fundingPage } from './pages/funding'
import { mentorPage } from './pages/mentor'
import { schemes } from './data/schemes'
import { incubators } from './data/incubators'

const app = new Hono()

app.use('/api/*', cors())

// Pages
app.get('/', (c) => c.html(homePage()))
app.get('/assessment', (c) => c.html(assessmentPage()))
app.get('/schemes', (c) => c.html(schemesPage()))
app.get('/incubators', (c) => c.html(incubatorsPage()))
app.get('/funding', (c) => c.html(fundingPage()))
app.get('/mentor', (c) => c.html(mentorPage()))

// API Endpoints

// GET /api/schemes - Return all schemes with optional filtering
app.get('/api/schemes', (c) => {
  const category = c.req.query('category')
  const stage = c.req.query('stage')
  const sector = c.req.query('sector')
  const search = c.req.query('search')?.toLowerCase()

  let filtered = schemes

  if (category && category !== 'all') {
    filtered = filtered.filter(s => s.category === category)
  }
  if (stage && stage !== 'all') {
    filtered = filtered.filter(s => s.stage.includes(stage as any))
  }
  if (sector) {
    filtered = filtered.filter(s =>
      s.sector.includes('All') ||
      s.sector.some(sec => sec.toLowerCase().includes(sector.toLowerCase()))
    )
  }
  if (search) {
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(search) ||
      s.description.toLowerCase().includes(search) ||
      s.eligibility.toLowerCase().includes(search) ||
      s.ministry.toLowerCase().includes(search)
    )
  }

  return c.json({
    success: true,
    count: filtered.length,
    data: filtered
  })
})

// GET /api/incubators - Return all incubators with filtering
app.get('/api/incubators', (c) => {
  const equity = c.req.query('equity')
  const stage = c.req.query('stage')
  const women = c.req.query('women')
  const search = c.req.query('search')?.toLowerCase()

  let filtered = incubators

  if (equity && equity !== 'all') {
    filtered = filtered.filter(i => i.equityModel === equity)
  }
  if (stage) {
    filtered = filtered.filter(i => i.stage.includes(stage as any))
  }
  if (women === 'true') {
    filtered = filtered.filter(i => i.focusOnWomen === true)
  }
  if (search) {
    filtered = filtered.filter(i =>
      i.name.toLowerCase().includes(search) ||
      i.location.toLowerCase().includes(search) ||
      i.sector.some(s => s.toLowerCase().includes(search))
    )
  }

  return c.json({
    success: true,
    count: filtered.length,
    data: filtered
  })
})

// POST /api/assessment - Score submission
app.post('/api/assessment', async (c) => {
  const body = await c.req.json()

  const weights: Record<string, Record<string, number>> = {
    stage: { 'Idea Stage': 10, 'MVP Stage': 20, 'Early Revenue': 30, 'Growth Stage': 40 },
    marketValidation: {
      'No validation yet': 0,
      'Surveys & interviews done': 8,
      'Pilot with paying customers': 15,
      'Established customer base': 20
    },
    teamExpertise: { 'Beginner': 2, 'Intermediate': 5, 'Expert': 8, 'Industry Leader': 10 },
    revenue: {
      'Pre-revenue': 0,
      'Under ₹1 Lakh/month': 5,
      '₹1–5 Lakhs/month': 10,
      '₹5–20 Lakhs/month': 13,
      '₹20L+ /month': 15
    },
    differentiation: {
      'No clear differentiation': 0,
      'Minor improvements on existing': 3,
      'Unique approach / niche focus': 6,
      'Deep tech / patent / IP': 10
    },
    financials: {
      'No projections': 0,
      'Basic P&L estimates': 1,
      '3-year projection': 3,
      'Full investor-grade deck': 5
    }
  }

  let score = 0
  Object.entries(weights).forEach(([key, vals]) => {
    if (body[key] && vals[body[key]] !== undefined) {
      score += vals[body[key]]
    }
  })
  score = Math.min(score, 100)

  let category = 'Early Stage'
  if (score >= 75) category = 'Investment Ready'
  else if (score >= 55) category = 'Growth Ready'
  else if (score >= 30) category = 'Emerging Startup'

  // Match relevant schemes
  const relevantSchemes = schemes.filter(s => {
    const stageMap: Record<string, string[]> = {
      'Idea Stage': ['Idea'],
      'MVP Stage': ['Idea', 'MVP'],
      'Early Revenue': ['MVP', 'Revenue'],
      'Growth Stage': ['Revenue']
    }
    const validStages = stageMap[body.stage] || ['Idea', 'MVP']
    return s.stage.some(st => validStages.includes(st))
  }).slice(0, 3).map(s => ({ id: s.id, name: s.name, fundingAmount: s.fundingAmount, applicationLink: s.applicationLink }))

  return c.json({
    success: true,
    data: {
      score,
      category,
      profile: body,
      recommendedSchemes: relevantSchemes,
      nextStep: score < 50 ? '/schemes' : score < 75 ? '/incubators' : '/funding'
    }
  })
})

// POST /api/mentor/chat - AI mentor endpoint (returns structured advice)
app.post('/api/mentor/chat', async (c) => {
  const body = await c.req.json()
  const { message, context } = body

  if (!message) {
    return c.json({ success: false, error: 'Message is required' }, 400)
  }

  // In production, this would call Gemini API
  // For now, return structured fallback response
  const response = {
    success: true,
    data: {
      reply: `Thank you for your question: "${message}". This endpoint is ready for Gemini API integration. Configure your GEMINI_API_KEY environment variable to enable live AI responses.`,
      stage: context?.stage || 'MVP Stage',
      suggestions: [
        'How do I improve my pitch deck?',
        'What government schemes am I eligible for?',
        'How to approach angel investors?'
      ]
    }
  }

  return c.json(response)
})

// POST /api/funding/plan - Generate funding plan
app.post('/api/funding/plan', async (c) => {
  const body = await c.req.json()
  const { stage, sector, funding, revenue } = body

  const stageMap: Record<string, string[]> = {
    'Idea': ['Idea'],
    'MVP': ['Idea', 'MVP'],
    'Early Revenue': ['MVP', 'Revenue'],
    'Growth': ['Revenue']
  }
  const validStages = stageMap[stage] || ['Idea', 'MVP']

  const matchedSchemes = schemes
    .filter(s => s.stage.some(st => validStages.includes(st)))
    .slice(0, 4)

  const matchedIncubators = incubators
    .filter(i => i.stage.some(s => validStages.includes(s)))
    .slice(0, 3)

  const pathways: Record<string, any[]> = {
    'Idea': [
      { type: 'Government Grant', timeline: 'Month 1-3', amount: '₹5–20 Lakhs' },
      { type: 'Incubation Program', timeline: 'Month 2-4', amount: '₹10–50 Lakhs' },
      { type: 'Angel Investor', timeline: 'Month 6-12', amount: '₹25L–1 Crore' }
    ],
    'MVP': [
      { type: 'Seed Grant', timeline: 'Immediate', amount: '₹10–50 Lakhs' },
      { type: 'Incubator', timeline: 'Month 1-3', amount: '₹25L–2 Crore' },
      { type: 'Angel Funding', timeline: 'Month 4-8', amount: '₹50L–3 Crore' }
    ],
    'Early Revenue': [
      { type: 'Revenue Financing', timeline: 'Immediate', amount: '₹10–50 Lakhs' },
      { type: 'Angel Round', timeline: 'Month 1-4', amount: '₹1–3 Crore' },
      { type: 'Series A / VC', timeline: 'Month 6-12', amount: '₹3–15 Crore' }
    ],
    'Growth': [
      { type: 'Debt Financing', timeline: 'Immediate', amount: '₹50L–5 Crore' },
      { type: 'Series A', timeline: 'Month 1-6', amount: '₹5–20 Crore' },
      { type: 'Strategic Partners', timeline: 'Ongoing', amount: 'Non-dilutive' }
    ]
  }

  return c.json({
    success: true,
    data: {
      profile: { stage, sector, funding, revenue },
      pathway: pathways[stage] || pathways['MVP'],
      schemes: matchedSchemes.map(s => ({
        id: s.id, name: s.name, fundingAmount: s.fundingAmount,
        applicationLink: s.applicationLink, ministry: s.ministry
      })),
      incubators: matchedIncubators.map(i => ({
        id: i.id, name: i.name, fundingSupport: i.fundingSupport,
        applicationLink: i.applicationLink, equityModel: i.equityModel
      }))
    }
  })
})

// Health check
app.get('/api/health', (c) => c.json({
  status: 'ok',
  platform: 'SheLaunch AI',
  version: '1.0.0',
  modules: ['AI Mentor', 'Readiness Assessment', 'Funding Advisor', 'Scheme Aggregator', 'Incubator Aggregator'],
  data: {
    schemes: schemes.length,
    incubators: incubators.length
  }
}))

export default app
