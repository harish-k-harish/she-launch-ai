export interface Incubator {
  id: string;
  name: string;
  location: string;
  sector: string[];
  stage: string[];
  equityModel: 'Equity-Free' | 'Equity-Based' | 'Optional Equity';
  equityPercentage?: string;
  fundingSupport: string;
  duration: string;
  applicationProcess: string;
  applicationLink: string;
  highlights: string[];
  focusOnWomen: boolean;
  successRate?: string;
  notableAlumni?: string;
}

export const incubators: Incubator[] = [
  {
    id: "i1",
    name: "WE Hub – Women Entrepreneur Hub",
    location: "Hyderabad, Telangana",
    sector: ["Technology", "Social Impact", "AgriTech", "HealthTech", "All"],
    stage: ["Idea", "MVP", "Revenue"],
    equityModel: "Equity-Free",
    fundingSupport: "Up to ₹15 Lakhs grant + Seed funding connections",
    duration: "12 months",
    applicationProcess: "Online application → Pitch evaluation → Cohort selection",
    applicationLink: "https://wehub.telangana.gov.in",
    highlights: ["India's first state-led women-exclusive incubator", "Government-backed", "Mentor network of 200+", "Market access programs"],
    focusOnWomen: true,
    successRate: "78%",
    notableAlumni: "NxtWave, AgriStar, HealthBridge"
  },
  {
    id: "i2",
    name: "SINE IIT Bombay",
    location: "Mumbai, Maharashtra",
    sector: ["Deep Tech", "HealthTech", "CleanTech", "Manufacturing", "AI/ML"],
    stage: ["Idea", "MVP"],
    equityModel: "Equity-Based",
    equityPercentage: "2-5%",
    fundingSupport: "₹25 Lakhs – ₹2 Crore",
    duration: "18 months",
    applicationProcess: "Application → Technical screening → Interview → Selection",
    applicationLink: "https://www.sineiitb.org",
    highlights: ["IIT Bombay ecosystem", "Deep tech expertise", "Global investor network", "Patent support"],
    focusOnWomen: false,
    successRate: "65%",
    notableAlumni: "Tessolve, SciSpace, Niramai"
  },
  {
    id: "i3",
    name: "NSRCEL – IIM Bangalore",
    location: "Bangalore, Karnataka",
    sector: ["Technology", "Consumer", "FinTech", "Social Enterprise", "Healthcare"],
    stage: ["Idea", "MVP", "Revenue"],
    equityModel: "Equity-Free",
    fundingSupport: "₹10 Lakhs seed + Mentoring + Space",
    duration: "12-18 months",
    applicationProcess: "Written application → Cohort interview → Final panel",
    applicationLink: "https://nsrcel.org",
    highlights: ["IIM Bangalore network", "Womens Startup Program (WSP)", "Industry connections", "International exposure"],
    focusOnWomen: false,
    successRate: "72%",
    notableAlumni: "CureFit, Dunzo, Betterplace"
  },
  {
    id: "i4",
    name: "iCreate – International Centre for Entrepreneurship",
    location: "Ahmedabad, Gujarat",
    sector: ["Technology", "Manufacturing", "AgriTech", "CleanEnergy", "IoT"],
    stage: ["MVP", "Revenue"],
    equityModel: "Equity-Free",
    fundingSupport: "Up to ₹50 Lakhs + International partnerships",
    duration: "24 months",
    applicationProcess: "Online application → Screening → Demo day → Selection",
    applicationLink: "https://www.icreate.org.in",
    highlights: ["International partnerships", "Gujarat government backed", "Fab Lab access", "Export market linkage"],
    focusOnWomen: false,
    successRate: "68%",
    notableAlumni: "Vyuti Systems, Quark"
  },
  {
    id: "i5",
    name: "CIIE.CO – IIM Ahmedabad",
    location: "Ahmedabad, Gujarat",
    sector: ["FinTech", "CleanTech", "AgriTech", "HealthTech", "EdTech"],
    stage: ["MVP", "Revenue"],
    equityModel: "Optional Equity",
    equityPercentage: "0-3%",
    fundingSupport: "₹25 Lakhs – ₹1 Crore",
    duration: "12 months",
    applicationProcess: "Pitch deck submission → Panel interview → 90-day sprint",
    applicationLink: "https://ciie.co",
    highlights: ["IIM Ahmedabad backing", "Bharat Inclusion Initiative", "VC co-investment", "Sector expert mentors"],
    focusOnWomen: false,
    successRate: "70%",
    notableAlumni: "IndiaBios, Stellapps, Milk Mantra"
  },
  {
    id: "i6",
    name: "Nasscom 10,000 Startups",
    location: "Pan-India (Virtual + Hub Cities)",
    sector: ["Technology", "SaaS", "AI/ML", "FinTech", "EdTech"],
    stage: ["Idea", "MVP"],
    equityModel: "Equity-Free",
    fundingSupport: "Mentoring + Cloud credits + Investor connects (up to $50,000)",
    duration: "6 months",
    applicationProcess: "Online application → Pitching → Selection",
    applicationLink: "https://10000startups.com",
    highlights: ["Nasscom industry network", "Cloud credits from AWS/GCP/Azure", "Pan-India presence", "Recruitment marketplace"],
    focusOnWomen: false,
    successRate: "60%",
    notableAlumni: "1000+ startups across India"
  },
  {
    id: "i7",
    name: "Stree Shakti – Women Startup Accelerator (SBI Foundation)",
    location: "Pan-India",
    sector: ["All", "Social Enterprise", "Financial Services", "AgriTech"],
    stage: ["Idea", "MVP", "Revenue"],
    equityModel: "Equity-Free",
    fundingSupport: "₹10 Lakhs + Banking support + Loan linkage",
    duration: "6 months",
    applicationProcess: "State-level application → Regional evaluation → National cohort",
    applicationLink: "https://www.sbifoundation.in",
    highlights: ["Women-exclusive program", "SBI banking ecosystem", "Financial literacy component", "Rural outreach"],
    focusOnWomen: true,
    successRate: "75%",
    notableAlumni: "Multiple MSMEs across rural India"
  },
  {
    id: "i8",
    name: "T-Hub Hyderabad",
    location: "Hyderabad, Telangana",
    sector: ["Technology", "FinTech", "HealthTech", "DeepTech", "GovTech"],
    stage: ["MVP", "Revenue"],
    equityModel: "Equity-Based",
    equityPercentage: "1-3%",
    fundingSupport: "₹50 Lakhs – ₹5 Crore (via investors)",
    duration: "12 months",
    applicationProcess: "Application → Screening → Innovation sprint → Demo day",
    applicationLink: "https://t-hub.co",
    highlights: ["Asia's largest startup incubator", "Global corporate connects", "Investment readiness program", "Government partnership"],
    focusOnWomen: false,
    successRate: "65%",
    notableAlumni: "Infilect, GreatLearning, Darwinbox"
  },
  {
    id: "i9",
    name: "Villgro Innovations Foundation",
    location: "Chennai + Pan-India",
    sector: ["HealthTech", "AgriTech", "CleanEnergy", "EdTech", "Livelihood"],
    stage: ["Idea", "MVP"],
    equityModel: "Optional Equity",
    equityPercentage: "0-5%",
    fundingSupport: "₹10 Lakhs – ₹1 Crore",
    duration: "18 months",
    applicationProcess: "Application → Impact assessment → Panel selection",
    applicationLink: "https://villgro.org",
    highlights: ["Social enterprise focus", "Rural market expertise", "Pharo Foundation partnership", "Impact measurement"],
    focusOnWomen: false,
    successRate: "73%",
    notableAlumni: "MediAngels, Fasal, Intelehealth"
  },
  {
    id: "i10",
    name: "Atal Incubation Centre (AIC) Network",
    location: "Pan-India (500+ centers)",
    sector: ["All Sectors", "Technology", "Manufacturing", "Services"],
    stage: ["Idea", "MVP"],
    equityModel: "Equity-Free",
    fundingSupport: "Up to ₹50 Lakhs grant (AIM-NITI Aayog)",
    duration: "12 months",
    applicationProcess: "Online AIM portal → Local AIC application → Mentorship onboarding",
    applicationLink: "https://aim.gov.in",
    highlights: ["Government-funded network", "500+ centers nationwide", "Priority for women/SC/ST", "Prototype lab access"],
    focusOnWomen: false,
    successRate: "62%",
    notableAlumni: "Thousands across 500+ AICs"
  },
  {
    id: "i11",
    name: "Jagriti Yatra Enterprise (JEA) Incubator",
    location: "Deoria, Uttar Pradesh + Virtual",
    sector: ["Social Enterprise", "AgriTech", "Rural Tech", "Livelihood"],
    stage: ["Idea", "MVP"],
    equityModel: "Equity-Free",
    fundingSupport: "₹5 Lakhs – ₹25 Lakhs",
    duration: "12 months",
    applicationProcess: "Jagriti Yatra participation → Application → Fellowship selection",
    applicationLink: "https://jagritiyatra.com",
    highlights: ["Rural enterprise focus", "Grassroots impact model", "NABARD partnerships", "Network across Bharat"],
    focusOnWomen: true,
    successRate: "66%",
    notableAlumni: "Samara, KrishiHub, HaryaliStar"
  },
  {
    id: "i12",
    name: "Microsoft Accelerator India (For Her)",
    location: "Bangalore + Hyderabad (Hybrid)",
    sector: ["Technology", "SaaS", "AI/ML", "Cloud Solutions"],
    stage: ["MVP", "Revenue"],
    equityModel: "Equity-Free",
    fundingSupport: "Azure credits ($120,000) + Investor connects",
    duration: "4 months",
    applicationProcess: "Online form → Video pitch → Technical evaluation → Selection",
    applicationLink: "https://www.microsoft.com/en-in/startups",
    highlights: ["Microsoft ecosystem", "Azure AI tools", "Global market access", "Women-focused cohort"],
    focusOnWomen: true,
    successRate: "70%",
    notableAlumni: "Multiple SaaS unicorns"
  }
];
