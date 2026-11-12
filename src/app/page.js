"use client";

import { useState } from "react";

export default function Home() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      idx: "01",
      company: "Focal Town",
      role: "Founder & Lead Strategist",
      category: "VENTURE",
      period: "2021 — PRESENT",
      tenure: "4+ Years",
      location: "Bengaluru, India",
      highlight: "0.5M+ sq. ft. sold",
      bullets: [
        "Founded and direct Focal Town as a specialized real estate sales and marketing company.",
        "Successfully facilitated the sale of over 0.5 million square feet of prime real estate space in Bengaluru.",
        "Formulate developer go-to-market strategies, sales pricing architecture, and channel partner networks.",
        "Lead client acquisition, project launches, customer negotiations, and transaction closures.",
      ],
    },
    {
      idx: "02",
      company: "HomzNSpace",
      role: "Manager — Sales & Marketing",
      category: "PORTFOLIOS",
      period: "2016 — 2019",
      tenure: "3 yrs 4 mos",
      location: "Bengaluru, India",
      highlight: "Residential portfolios",
      bullets: [
        "Directed end-to-end sales and marketing initiatives across residential real estate portfolios.",
        "Managed high-volume client inquiries, personalized property walkthroughs, and conversion velocity.",
        "Built lasting client and channel partner relationships to secure repeat mandates and references.",
      ],
    },
    {
      idx: "03",
      company: "Gowri Construction",
      role: "Manager — Sales & Marketing",
      category: "ADVISORY",
      period: "2014 — 2015",
      tenure: "1 yr 1 mo",
      location: "Bangalore, India",
      highlight: "Project inception to handover",
      bullets: [
        "Nurtured builder operations from initial project development and launch planning to team management.",
        "Formulated competitive property pricing, sales promotions, and managed on-ground sales force.",
        "Facilitated buyer agreements, documentation, and handover processes.",
      ],
    },
    {
      idx: "04",
      company: "Assetz Group",
      role: "Sales & Marketing",
      category: "LUXURY HOMES",
      period: "2013 — 2014",
      tenure: "1 yr 2 mos",
      location: "Bangalore, India",
      highlight: "High-value transactions",
      bullets: [
        "Executed sales and business development for premium residential assets under the Assetz Group banner.",
        "Engaged high-net-worth clients, guided site evaluations, and delivered presentation pitches.",
        "Contributed to strategic marketing outreach and quarterly revenue targets.",
      ],
    },
    {
      idx: "05",
      company: "Brigade Group",
      role: "Executive Sales",
      category: "DEVELOPMENT",
      period: "2010 — 2013",
      tenure: "2 yrs 8 mos",
      location: "Bangalore, India",
      highlight: "Full-cycle sales & hoardings",
      bullets: [
        "Managed the complete sales cycle and consistently achieved assigned quarterly revenue quotas.",
        "Assisted buyers in understanding property specs, agreements, and payment schedules.",
        "Executed multi-channel marketing campaigns: direct mail, outbound calling, trade shows, and events.",
        "Strategically selected and secured high-visibility outdoor hoardings and media placements.",
        "Maintained relationships with channel partners to expand conversion ratios and referral networks.",
        "Liaised with the engineering department to coordinate property inspections and seamless client handovers.",
      ],
    },
    {
      idx: "06",
      company: "Infosys BPO",
      role: "Executive",
      category: "MARKETING",
      period: "2007 — 2008",
      tenure: "1 yr",
      location: "Bengaluru, India",
      highlight: "Yahoo! Search Marketing (PPC)",
      bullets: [
        "Ad editor and content reviewer for the Yahoo! Search Marketing pay-per-click (PPC) platform.",
        "Reviewed and approved advertiser listings in compliance with core Yahoo! editorial guidelines.",
        "Provided floor support, handled quality checks, and trained new content development team members.",
      ],
    },
  ];

  const skills = [
    "Real Estate Sales",
    "Builder Representation",
    "Go-To-Market Strategy",
    "Pricing Architecture",
    "Channel Partner Alliances",
    "Deal Structuring & Closing",
    "High-Value Negotiations",
    "Outdoor Hoarding Placements",
    "Digital & Direct Campaigns",
    "Lead Generation Velocity",
    "Client Agreement Management",
    "Property Handover Coordination",
  ];

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e8e4dc] selection:bg-[#7d1f2e] selection:text-[#e8e4dc]">
      
      {/* ===================================================================
          1. NAVIGATION (harshith.com exact fixed grid nav)
          =================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0908]/90 backdrop-blur-md border-b border-[#e8e4dc]/15 px-6 md:px-12 py-4">
        <div className="max-w-[100rem] mx-auto flex items-center justify-between">
          
          {/* Brand */}
          <a href="#hero" className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-[#e8e4dc] flex items-center gap-1 group">
            <span>SRINIDHI A.R.</span>
            <sup className="text-[10px] font-mono text-[#b4924c] tracking-widest font-normal">SR</sup>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav__link">About</a>
            <a href="#venture" className="nav__link">Focal Town</a>
            <a href="#experience" className="nav__link">Experience</a>
            <a href="#capabilities" className="nav__link">Capabilities</a>
            <a href="#contact" className="nav__link">Contact</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#e8e4dc] border border-[#e8e4dc]/25 px-4 py-2 hover:bg-[#e8e4dc] hover:text-[#0a0908] transition-all duration-300"
            >
              <span>Get In Touch</span>
              <span className="text-[#d65d72]">↗</span>
            </a>
          </div>

        </div>
      </header>

      {/* ===================================================================
          2. HERO SECTION (harshith.com ambient radial beam, mono tags, title)
          =================================================================== */}
      <section id="hero" className="relative min-h-[100svh] pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
        
        {/* Ambient Top Radial Beam */}
        <div 
          className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vmax] h-[120vmax] z-0 opacity-70"
          style={{
            background: "radial-gradient(40% 50% at 50% 18%, rgba(232, 228, 220, 0.08), transparent 65%)"
          }}
        />

        {/* Top Monospace Metadata */}
        <div className="relative z-10 max-w-[100rem] mx-auto w-full flex flex-wrap justify-between items-center text-xs font-mono tracking-widest uppercase text-[#8f887b] pt-4 pb-12 border-b border-[#e8e4dc]/10">
          <div>[ BENGALURU, KARNATAKA, INDIA ]</div>
          <div className="hidden sm:block">[ REAL ESTATE SALES &amp; MARKETING ]</div>
          <div>[ 15+ YEARS PRACTICE ]</div>
        </div>

        {/* Central Display Title */}
        <div className="relative z-10 max-w-[100rem] mx-auto w-full my-auto py-12 md:py-20">
          <div className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-[#b4924c] mb-4">
            Founder at Focal Town
          </div>
          
          <h1 className="font-display font-black text-[13vw] sm:text-[11vw] md:text-[9.5vw] uppercase tracking-[-0.035em] text-[#e8e4dc] leading-[0.88] mb-6">
            SRINIDHI A.R.
          </h1>

          <p className="font-serif-it text-2xl sm:text-3xl md:text-5xl text-[#d8d2c6] max-w-4xl leading-tight">
            Seasoned real estate leader <span className="text-[#b4924c]">architecting sales mandates</span>, builder marketing, and high-value transactions.
          </p>
        </div>

        {/* Bottom Bar: Intro summary & animated scroll indicator */}
        <div className="relative z-10 max-w-[100rem] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 border-t border-[#e8e4dc]/10">
          <div className="md:col-span-8 text-sm md:text-base text-[#8f887b] max-w-2xl leading-relaxed">
            Leading sales and marketing advisory for builders and high-value property buyers in Bengaluru. Over <strong className="text-[#e8e4dc]">0.5 million square feet</strong> transacted under Focal Town since 2021.
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#8f887b]">
            <span>SCROLL</span>
            <div className="relative w-[1px] h-10 bg-[#e8e4dc]/25 overflow-hidden">
              <div className="absolute top-[-100%] left-0 w-full h-full bg-[#b4924c] animate-scroll-drip" />
            </div>
          </div>
        </div>

      </section>

      {/* ===================================================================
          3. MANIFESTO / ABOUT (harshith.com statement + dual-column + stats)
          =================================================================== */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#0a0908]">
        <div className="max-w-[100rem] mx-auto">
          
          <div className="section-head">
            01 / MANIFESTO &amp; BACKGROUND
          </div>

          {/* Large Statement with Serif Italic Accents */}
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4.25rem)] uppercase text-[#e8e4dc] leading-[1.08] tracking-[-0.025em] max-w-5xl mb-16 md:mb-24">
            DRIVING REAL ESTATE GROWTH THROUGH <span className="font-serif-it text-[#b4924c] normal-case">precise market pricing</span>, BUILDER REPUTATION, AND <span className="font-serif-it text-[#d65d72] normal-case">uncompromising execution</span>.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Bio Column */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#8f887b] leading-relaxed">
              <p>
                I am a seasoned Real Estate Sales and Marketing professional based in <strong className="text-[#e8e4dc]">Bengaluru, Karnataka, India</strong> with over 15 years of rich experience spanning top developers, direct builder nurturing, and independent agency ownership.
              </p>
              <p>
                My professional foundation was developed across respected industry giants including <strong className="text-[#e8e4dc]">Brigade Group</strong>, <strong className="text-[#e8e4dc]">Assetz Group</strong>, <strong className="text-[#e8e4dc]">Gowri Construction</strong>, and <strong className="text-[#e8e4dc]">HomzNSpace</strong>—managing end-to-end sales cycles, high-impact hoardings, client negotiations, agreements, and property handovers.
              </p>
              <p>
                In January 2021, I founded <strong className="text-[#e8e4dc]">Focal Town</strong>, bringing structured marketing, transparent advisory, and high velocity to real estate transactions.
              </p>
              <p>
                Academic credentials include an <strong className="text-[#e8e4dc]">MBA in Finance</strong> from the University of Mysore, a Bachelor of Business Administration in Marketing, and P.B.M (Marketing).
              </p>
              
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono uppercase text-[#8f887b]">
                <span className="text-[#b4924c]">Languages:</span>
                <span className="px-2 py-1 bg-[#14120f] border border-[#e8e4dc]/10 text-[#d8d2c6]">English</span>
                <span className="px-2 py-1 bg-[#14120f] border border-[#e8e4dc]/10 text-[#d8d2c6]">Kannada</span>
                <span className="px-2 py-1 bg-[#14120f] border border-[#e8e4dc]/10 text-[#d8d2c6]">Telugu</span>
                <span className="px-2 py-1 bg-[#14120f] border border-[#e8e4dc]/10 text-[#d8d2c6]">Hindi</span>
              </div>
            </div>

            {/* Right Stats Column (harshith.com border-top stat blocks) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              
              <div className="border-t border-[#e8e4dc]/20 pt-4 group transition-colors duration-300 hover:border-[#b4924c]">
                <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#e8e4dc] group-hover:text-[#d65d72] transition-colors duration-300">
                  0.5M+
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#8f887b] mt-2">
                  SQ. FT. REAL ESTATE SOLD
                </div>
                <div className="text-sm text-[#8f887b] mt-1">
                  Closed across residential &amp; commercial projects in Bengaluru.
                </div>
              </div>

              <div className="border-t border-[#e8e4dc]/20 pt-4 group transition-colors duration-300 hover:border-[#b4924c]">
                <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#e8e4dc] group-hover:text-[#d65d72] transition-colors duration-300">
                  4+ YRS
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#8f887b] mt-2">
                  FOCAL TOWN FOUNDER
                </div>
                <div className="text-sm text-[#8f887b] mt-1">
                  Established January 2021 as a dedicated sales &amp; marketing company.
                </div>
              </div>

              <div className="border-t border-[#e8e4dc]/20 pt-4 group transition-colors duration-300 hover:border-[#b4924c]">
                <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#e8e4dc] group-hover:text-[#d65d72] transition-colors duration-300">
                  15+ YRS
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#8f887b] mt-2">
                  OVERALL PRACTICE
                </div>
                <div className="text-sm text-[#8f887b] mt-1">
                  From Brigade Group &amp; Assetz to full entrepreneurial leadership.
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          4. FEATURED VENTURE: FOCAL TOWN
          =================================================================== */}
      <section id="venture" className="py-24 md:py-32 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#14120f] relative overflow-hidden">
        
        {/* Subtle radial ambient highlight */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            background: "radial-gradient(50% 50% at 80% 20%, rgba(125, 31, 46, 0.25), transparent 70%)"
          }}
        />

        <div className="relative z-10 max-w-[100rem] mx-auto">
          
          <div className="section-head">
            02 / FEATURED VENTURE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-block text-xs font-mono uppercase tracking-widest text-[#b4924c] px-3 py-1 bg-[#1d1a16] border border-[#b4924c]/30 mb-6">
                Established January 2021 · Bengaluru
              </div>

              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase text-[#e8e4dc] tracking-tight mb-4">
                FOCAL TOWN
              </h2>

              <p className="font-serif-it text-2xl sm:text-3xl text-[#d65d72] mb-8">
                Real Estate Sales &amp; Marketing Company
              </p>

              <p className="text-base sm:text-lg text-[#8f887b] leading-relaxed mb-8 max-w-2xl">
                Founded in January 2021, Focal Town was created to solve core sales execution challenges for builders. Over the past 4 years, Focal Town has built a trusted reputation across Bengaluru, successfully closing more than <strong>0.5 million square feet</strong> of real estate space.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#e8e4dc]/15">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8f887b]">Founded</div>
                  <div className="text-xl font-bold text-[#e8e4dc] mt-1">Jan 2021</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8f887b]">Track Record</div>
                  <div className="text-xl font-bold text-[#b4924c] mt-1">0.5M+ SFT</div>
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8f887b]">Scope</div>
                  <div className="text-xl font-bold text-[#e8e4dc] mt-1">Sales &amp; Strategy</div>
                </div>
              </div>
            </div>

            {/* Right Card / Graphic Box */}
            <div className="lg:col-span-5 bg-[#0a0908] border border-[#e8e4dc]/15 p-8 md:p-10 relative">
              <div className="text-xs font-mono uppercase tracking-widest text-[#b4924c] mb-4">
                Core Pillars
              </div>
              <ul className="space-y-4 text-sm md:text-base text-[#d8d2c6]">
                <li className="flex items-start gap-3">
                  <span className="text-[#d65d72] font-mono">01</span>
                  <span><strong>Pricing Strategy:</strong> Scientifically calibrated pricing models aligned with localized market demand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d65d72] font-mono">02</span>
                  <span><strong>Channel Alliances:</strong> Deep network of trusted channel partners driving steady referral volume.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d65d72] font-mono">03</span>
                  <span><strong>Transaction Velocity:</strong> Structured lead handling to accelerate customer site visits into closed agreements.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#e8e4dc]/10 flex items-center justify-between text-xs font-mono uppercase text-[#8f887b]">
                <span>Status: Active Mandates</span>
                <span className="text-[#4ade80] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                  Operating
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          5. SELECTED WORK EXPERIENCE (Exact harshith.com .works & .work-row)
          =================================================================== */}
      <section id="experience" className="py-24 md:py-36 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#0a0908]">
        <div className="max-w-[100rem] mx-auto">
          
          <div className="section-head">
            03 / SELECTED EXPERIENCE
          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-[#8f887b] mb-8">
            Click any row to inspect role details &amp; achievements
          </p>

          {/* Interactive Ledger Rows */}
          <div className="border-t border-[#e8e4dc]/15 mb-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setActiveExp(index)}
                className={`work-row ${activeExp === index ? "is-active" : ""}`}
              >
                <span className="work-row__idx">{exp.idx}</span>
                <span className="work-row__title">
                  {exp.company}
                  <em>{exp.role}</em>
                </span>
                <span className="work-row__cat">{exp.category}</span>
                <span className="work-row__year">{exp.period}</span>
                <span className="work-row__arrow">→</span>
              </div>
            ))}
          </div>

          {/* Role Inspection Drawer / Card */}
          <div className="bg-[#14120f] border border-[#e8e4dc]/15 p-8 md:p-12 relative">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[#e8e4dc]/10 mb-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#d65d72] mb-1">
                  {experiences[activeExp].idx} · {experiences[activeExp].category}
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase text-[#e8e4dc]">
                  {experiences[activeExp].company}
                </h3>
                <div className="font-serif-it text-xl sm:text-2xl text-[#b4924c] mt-1">
                  {experiences[activeExp].role}
                </div>
              </div>

              <div className="text-left md:text-right font-mono text-xs uppercase tracking-wider text-[#8f887b]">
                <div className="text-[#e8e4dc] font-bold">{experiences[activeExp].period}</div>
                <div>{experiences[activeExp].tenure}</div>
                <div>{experiences[activeExp].location}</div>
              </div>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-[#d8d2c6] max-w-4xl">
              {experiences[activeExp].bullets.map((b, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3">
                  <span className="text-[#b4924c] font-mono mt-1">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ===================================================================
          6. CAPABILITIES & ACADEMIC CREDENTIALS
          =================================================================== */}
      <section id="capabilities" className="py-24 md:py-36 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#0a0908]">
        <div className="max-w-[100rem] mx-auto">
          
          <div className="section-head">
            04 / COMPETENCIES &amp; CREDENTIALS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Skills Tags */}
            <div className="lg:col-span-7">
              <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-[#e8e4dc] mb-8">
                Core Competencies
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs md:text-sm uppercase tracking-wider px-3.5 py-2 bg-[#14120f] border border-[#e8e4dc]/15 text-[#d8d2c6] hover:border-[#b4924c] hover:text-[#b4924c] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-[#e8e4dc]/10">
                <div className="text-xs font-mono uppercase tracking-widest text-[#8f887b] mb-4">
                  Multi-Lingual Fluency
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs uppercase text-[#e8e4dc]">
                  <div className="p-3 bg-[#14120f] border border-[#e8e4dc]/10">English (Fluent)</div>
                  <div className="p-3 bg-[#14120f] border border-[#e8e4dc]/10">Kannada (Native)</div>
                  <div className="p-3 bg-[#14120f] border border-[#e8e4dc]/10">Telugu (Fluent)</div>
                  <div className="p-3 bg-[#14120f] border border-[#e8e4dc]/10">Hindi (Fluent)</div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="lg:col-span-5 bg-[#14120f] border border-[#e8e4dc]/15 p-8 md:p-10">
              <h3 className="font-display font-bold text-2xl uppercase text-[#e8e4dc] mb-8">
                Academic Qualifications
              </h3>

              <div className="space-y-6">
                <div className="border-l-2 border-[#b4924c] pl-4">
                  <div className="font-display font-bold text-lg text-[#e8e4dc]">
                    Master of Business Administration (MBA)
                  </div>
                  <div className="font-serif-it text-[#d65d72] text-sm">Finance, General · 2007 — 2009</div>
                  <div className="text-xs font-mono uppercase text-[#8f887b] mt-0.5">University of Mysore</div>
                </div>

                <div className="border-l-2 border-[#e8e4dc]/20 pl-4">
                  <div className="font-display font-bold text-lg text-[#e8e4dc]">
                    P.B.M (Marketing)
                  </div>
                  <div className="font-serif-it text-[#d65d72] text-sm">Marketing · 2007 — 2009</div>
                </div>

                <div className="border-l-2 border-[#e8e4dc]/20 pl-4">
                  <div className="font-display font-bold text-lg text-[#e8e4dc]">
                    Bachelor of Business Administration (B.B.A.)
                  </div>
                  <div className="font-serif-it text-[#d65d72] text-sm">Marketing · 2003 — 2006</div>
                  <div className="text-xs font-mono uppercase text-[#8f887b] mt-0.5">University of Mysore</div>
                </div>

                <div className="border-l-2 border-[#e8e4dc]/20 pl-4">
                  <div className="font-display font-bold text-lg text-[#e8e4dc]">
                    Secondary Education (K.S.E.E.B)
                  </div>
                  <div className="text-xs font-mono uppercase text-[#8f887b] mt-0.5">Ideal Jawa Rotary High School (I.J.R.S)</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          7. FOOTER / CONTACT (harshith.com exact footer with radial glow)
          =================================================================== */}
      <footer id="contact" className="relative pt-24 md:pt-36 pb-12 px-6 md:px-12 bg-[#0a0908] border-t border-[#e8e4dc]/10 overflow-hidden">
        
        {/* Wine Radial Ambient Glow in Footer */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            background: "radial-gradient(60% 45% at 50% 110%, rgba(125, 31, 46, 0.4), transparent 70%)"
          }}
        />

        <div className="relative z-10 max-w-[100rem] mx-auto text-center">
          
          {/* Status Kicker */}
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#8f887b] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse-dot" />
            <span>AVAILABLE FOR REAL ESTATE MANDATES &amp; ADVISORY</span>
          </div>

          {/* Huge Footer Title */}
          <h2 className="font-display font-black text-[clamp(2.5rem,10vw,9.5rem)] uppercase text-[#e8e4dc] leading-[0.9] tracking-[-0.03em] mb-8">
            LET'S TALK <span className="font-serif-it text-[#d65d72] normal-case">Real Estate</span>
          </h2>

          {/* Big Interactive Email Link */}
          <div className="mb-12">
            <a
              href="mailto:a.r.srinidhi@gmail.com"
              className="inline-block font-display font-semibold text-xl sm:text-2xl md:text-4xl text-[#e8e4dc] border-b-2 border-[#b4924c] pb-1 hover:text-[#b4924c] transition-colors duration-300"
            >
              a.r.srinidhi@gmail.com
            </a>
          </div>

          {/* Circular Social Buttons in Wine Color */}
          <div className="flex justify-center items-center gap-4 mb-20">
            <a
              href="mailto:a.r.srinidhi@gmail.com"
              aria-label="Send Email"
              className="w-12 h-12 rounded-full bg-[#7d1f2e] text-[#e8e4dc] flex items-center justify-center hover:bg-[#a32639] transition-colors duration-300 text-sm font-mono"
            >
              ✉
            </a>

            <a
              href="https://www.linkedin.com/in/srinidhi-a-r-b0125755/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 rounded-full bg-[#7d1f2e] text-[#e8e4dc] flex items-center justify-center hover:bg-[#a32639] transition-colors duration-300 font-mono text-sm font-bold"
            >
              in
            </a>

            <a
              href="https://github.com/arsrinidhi-byte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 rounded-full bg-[#7d1f2e] text-[#e8e4dc] flex items-center justify-center hover:bg-[#a32639] transition-colors duration-300 font-mono text-sm font-bold"
            >
              gh
            </a>
          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-8 border-t border-[#e8e4dc]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#8f887b]">
            <div>© {new Date().getFullYear()} Srinidhi A.R. · Founder at Focal Town</div>
            <div>Bengaluru, Karnataka, India</div>
            <a href="#hero" className="hover:text-[#e8e4dc] transition-colors">Back to top ↑</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
