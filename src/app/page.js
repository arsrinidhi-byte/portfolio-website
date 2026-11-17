"use client";

import { useState } from "react";

export default function Home() {
  const [activeExp, setActiveExp] = useState(0);

  // Easily update your contact details here
  const contactInfo = {
    email: "a.r.srinidhi@gmail.com",
    mobileNumber: "+91 98862 30987",
  };

  const experiences = [
    {
      idx: "01",
      company: "Focal Town",
      role: "Founder & Lead Strategist",
      category: "VENTURE",
      period: "2021 — PRESENT",
      tenure: "4+ Years",
      location: "Bengaluru, India",
      highlight: "0.5M+ Sq. Ft. Sold",
      bullets: [
        "Founder and organizational leader of Focal Town, steering a specialized real estate sales and marketing company alongside a team of passionate, high-performing sales professionals.",
        "Successfully facilitated the sale of over 0.5 million square feet of prime residential and commercial real estate space across Bengaluru.",
        "Formulate full-spectrum marketing strategies, digital creative formation, targeted advertising campaigns, and market positioning.",
        "Lead developer pricing architecture, buyer acquisition pipelines, high-value client negotiations, and transaction closures.",
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
      highlight: "Residential Portfolios",
      bullets: [
        "Spearheaded the entire sales and marketing team, establishing high-performance standards to actively drive transaction velocity and overall revenue growth for the company.",
        "Directed integrated sales and marketing initiatives across diverse residential real estate portfolios in Bengaluru.",
        "Formulated targeted customer acquisition campaigns, creative promotional strategies, and lead-to-conversion workflows.",
        "Managed high-volume prospective buyer walk-throughs and consistently accelerated transaction turnaround times.",
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
      highlight: "Project Inception to Handover",
      bullets: [
        "Nurtured builder operations from land development, brand positioning, and pricing strategy to final sales execution.",
        "Formulated multi-channel promotional campaigns, outdoor media, and directed on-ground sales teams.",
        "Facilitated legal documentation, buyer sales agreements, and property handover procedures.",
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
      highlight: "High-Value Real Estate",
      bullets: [
        "Drove sales and market outreach for premium luxury residential developments under the Assetz banner.",
        "Formulated bespoke marketing pitches and presentations for high-net-worth investors and buyers.",
        "Met and exceeded quarterly revenue quotas through strategic buyer engagement and site visits.",
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
      highlight: "Full-Cycle Sales & Campaigns",
      bullets: [
        "Executed comprehensive marketing and sales cycles, consistently meeting and exceeding quarterly revenue targets.",
        "Managed large-scale advertising, prime outdoor hoarding media selection, direct mail, and promotional events.",
        "Guided prospective homeowners through technical property specifications, agreements, and payment schedules.",
        "Coordinated with the engineering division for seamless site quality checks and client handovers.",
      ],
    },
    {
      idx: "06",
      company: "Infosys BPO",
      role: "Executive — Yahoo! Search Marketing",
      category: "MARKETING",
      period: "2007 — 2008",
      tenure: "1 Year",
      location: "Bengaluru, India",
      highlight: "Digital Marketing & PPC",
      bullets: [
        "Ad editor and content reviewer for Yahoo! Search Marketing Pay-Per-Click (PPC) campaigns.",
        "Evaluated creative advertising copy, search intent, and compliance with core Yahoo! editorial guidelines.",
        "Provided operational floor support, content review quality control, and trained new team members.",
      ],
    },
  ];

  // Core Competencies ordered: Real Estate Sales first, then Digital Marketing, then Market Intelligence
  const skills = [
    { name: "Real Estate Sales & Deal Closures", highlight: true },
    { name: "Digital Marketing & Creative Formation", highlight: true },
    { name: "Market Intelligence & Brand Positioning", highlight: true },
    { name: "Builder Representation", highlight: false },
    { name: "Go-To-Market Strategy", highlight: false },
    { name: "Pricing Architecture", highlight: false },
    { name: "Creative Campaign Strategy", highlight: false },
    { name: "High-Value Negotiations", highlight: false },
    { name: "Outdoor Hoarding & Media Execution", highlight: false },
    { name: "Lead Generation Velocity", highlight: false },
    { name: "Client Agreement Management", highlight: false },
    { name: "Property Handover Coordination", highlight: false },
  ];

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#e8e4dc] selection:bg-[#7d1f2e] selection:text-[#e8e4dc]">
      
      {/* 1. NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0908]/90 backdrop-blur-md border-b border-[#e8e4dc]/15 px-6 md:px-12 py-4">
        <div className="max-w-[100rem] mx-auto flex items-center justify-between">
          
          <a href="#hero" className="font-display font-extrabold text-xl md:text-2xl tracking-tight text-[#e8e4dc] flex items-center gap-1 group">
            <span>A.R. SRINIDHI</span>
            <sup className="text-[10px] font-mono text-[#b4924c] tracking-widest font-normal">AR</sup>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav__link">About</a>
            <a href="#venture" className="nav__link">Focal Town</a>
            <a href="#experience" className="nav__link">Experience</a>
            <a href="#capabilities" className="nav__link">Capabilities</a>
            <a href="#contact" className="nav__link">Contact</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-wider text-[#e8e4dc] border border-[#e8e4dc]/25 px-4 py-2 hover:bg-[#e8e4dc] hover:text-[#0a0908] transition-all duration-300"
          >
            <span>Get In Touch</span>
            <span className="text-[#d65d72]">↗</span>
          </a>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="relative min-h-[90svh] pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
        
        <div 
          className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vmax] h-[120vmax] z-0 opacity-70"
          style={{
            background: "radial-gradient(40% 50% at 50% 18%, rgba(232, 228, 220, 0.08), transparent 65%)"
          }}
        />

        <div className="relative z-10 max-w-[100rem] mx-auto w-full my-auto py-12 md:py-16">
          <div className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-[#b4924c] mb-4">
            Founder of Focal Town
          </div>
          
          <h1 className="font-display font-black text-[13vw] sm:text-[11vw] md:text-[9.5vw] uppercase tracking-[-0.035em] text-[#e8e4dc] leading-[0.88] mb-6">
            A.R. SRINIDHI
          </h1>

          <p className="font-serif-it text-2xl sm:text-3xl md:text-5xl text-[#d8d2c6] max-w-4xl leading-tight">
            Seasoned real estate leader <span className="text-[#b4924c]">architecting sales mandates</span>, digital marketing, and high-value transactions.
          </p>
        </div>

        <div className="relative z-10 max-w-[100rem] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8 border-t border-[#e8e4dc]/10">
          <div className="md:col-span-8 text-sm md:text-base text-[#8f887b] max-w-2xl leading-relaxed">
            Leading sales and digital marketing advisory for builders and discerning property buyers in Bengaluru. Over <strong className="text-[#e8e4dc]">0.5 million square feet</strong> transacted under Focal Town since 2021.
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-end items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#8f887b]">
            <span>SCROLL</span>
            <div className="relative w-[1px] h-10 bg-[#e8e4dc]/25 overflow-hidden">
              <div className="absolute top-[-100%] left-0 w-full h-full bg-[#b4924c] animate-scroll-drip" />
            </div>
          </div>
        </div>

      </section>

      {/* 3. MANIFESTO / ABOUT */}
      <section id="about" className="py-24 md:py-36 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#0a0908]">
        <div className="max-w-[100rem] mx-auto">
          
          <div className="section-head">
            01 / MANIFESTO &amp; BACKGROUND
          </div>

          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4.25rem)] uppercase text-[#e8e4dc] leading-[1.08] tracking-[-0.025em] max-w-5xl mb-16 md:mb-24">
            DRIVING REAL ESTATE GROWTH THROUGH <span className="font-serif-it text-[#b4924c] normal-case">creative marketing</span>, DEEP MARKET INTELLIGENCE, AND <span className="font-serif-it text-[#d65d72] normal-case">uncompromising execution</span>.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#8f887b] leading-relaxed">
              <p>
                I am a seasoned Real Estate Sales and Marketing professional based in <strong className="text-[#e8e4dc]">Bengaluru, Karnataka, India</strong> with over 15 years of rich experience spanning top developers, direct builder advisory, and independent agency ownership.
              </p>
              <p>
                My professional foundation was developed across respected industry leaders including <strong className="text-[#e8e4dc]">Brigade Group</strong>, <strong className="text-[#e8e4dc]">Assetz Group</strong>, <strong className="text-[#e8e4dc]">Gowri Construction</strong>, and <strong className="text-[#e8e4dc]">HomzNSpace</strong>—managing end-to-end sales cycles, targeted digital campaigns, high-impact outdoor hoardings, client negotiations, agreements, and property handovers.
              </p>
              <p>
                In January 2021, I established <strong className="text-[#e8e4dc]">Focal Town</strong>, bringing creative marketing formation, deep market understanding, transparent advisory, and high velocity to real estate transactions.
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
                  FOUNDER OF FOCAL TOWN
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

      {/* 4. FEATURED VENTURE: FOCAL TOWN */}
      <section id="venture" className="py-24 md:py-32 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#14120f] relative overflow-hidden">
        
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
                Founded in January 2021, Focal Town was created to solve core sales execution and marketing challenges for builders. With a deep understanding of evolving buyer behavior, digital channels, and market dynamics across Bengaluru, Focal Town has successfully closed more than <strong>0.5 million square feet</strong> of premier real estate space.
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
                  <div className="text-xl font-bold text-[#e8e4dc] mt-1">Sales &amp; Marketing</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0a0908] border border-[#e8e4dc]/15 p-8 md:p-10 relative">
              <div className="text-xs font-mono uppercase tracking-widest text-[#b4924c] mb-4">
                Core Operating Pillars
              </div>
              <ul className="space-y-4 text-sm md:text-base text-[#d8d2c6]">
                <li className="flex items-start gap-3">
                  <span className="text-[#d65d72] font-mono">01</span>
                  <span><strong>Pricing Architecture:</strong> Scientifically calibrated pricing models aligned with localized market demand and micro-market analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d65d72] font-mono">02</span>
                  <span><strong>Digital Marketing &amp; Creative Formation:</strong> Deep market understanding and full-spectrum marketing expertise—orchestrating targeted digital campaigns, creative brand formation, performance marketing, and high-impact visual storytelling that connect directly with qualified property buyers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d65d72] font-mono">03</span>
                  <span><strong>Transaction Velocity:</strong> Structured lead qualification and strategic sales workflows to accelerate customer site visits into closed agreements.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SELECTED WORK EXPERIENCE (Interactive Accordion Tabs on Hover) */}
      <section id="experience" className="py-24 md:py-36 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#0a0908]">
        <div className="max-w-[100rem] mx-auto">
          
          <div className="section-head">
            03 / SELECTED EXPERIENCE
          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-[#b4924c] mb-8">
            HOVER OVER ANY ROLE TO EXPAND DETAILS
          </p>

          <div className="border-t border-[#e8e4dc]/15 flex flex-col">
            {experiences.map((exp, index) => {
              const isActive = activeExp === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveExp(index)}
                  onClick={() => setActiveExp(isActive ? -1 : index)}
                  className="border-b border-[#e8e4dc]/12 transition-all duration-300"
                >
                  {/* Row Header */}
                  <div
                    className={`grid grid-cols-[2.5rem_1fr_auto_1.5rem] md:grid-cols-[3.5rem_1fr_auto_auto_2rem] items-center gap-3 md:gap-6 p-4 md:p-6 cursor-pointer relative overflow-hidden transition-all duration-300 ${
                      isActive ? "bg-[#e8e4dc] text-[#0a0908]" : "hover:bg-[#14120f] text-[#e8e4dc]"
                    }`}
                  >
                    <span className={`font-mono text-xs tracking-widest ${isActive ? "text-[#56514a]" : "text-[#8f887b]"}`}>
                      {exp.idx}
                    </span>

                    <span className="font-display font-bold uppercase text-lg sm:text-2xl md:text-3xl tracking-tight flex items-baseline flex-wrap gap-2">
                      <span>{exp.company}</span>
                      <em className={`font-serif italic font-normal text-sm sm:text-lg ${isActive ? "text-[#7d1f2e]" : "text-[#d65d72]"}`}>
                        {exp.role}
                      </em>
                    </span>

                    <span className={`hidden md:block font-mono text-xs uppercase tracking-wider ${isActive ? "text-[#56514a]" : "text-[#8f887b]"}`}>
                      {exp.category}
                    </span>

                    <span className={`font-mono text-xs uppercase tracking-wider ${isActive ? "text-[#56514a]" : "text-[#8f887b]"}`}>
                      {exp.period}
                    </span>

                    <span className={`font-mono text-base font-bold transition-transform duration-300 text-right ${isActive ? "rotate-45 text-[#0a0908]" : "text-[#8f887b]"}`}>
                      +
                    </span>
                  </div>

                  {/* Expandable Inline Tab Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 bg-[#14120f] border-l-4 border-[#b4924c] ${
                      isActive ? "max-h-[520px] p-6 md:p-8 opacity-100" : "max-h-0 p-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-wrap justify-between items-center gap-4 pb-4 mb-4 border-b border-[#e8e4dc]/10 text-xs font-mono uppercase">
                      <div className="text-[#8f887b]">
                        {exp.period} · {exp.tenure} · {exp.location}
                      </div>
                      <div className="px-2.5 py-1 bg-[#1d1a16] border border-[#b4924c]/40 text-[#b4924c] font-semibold">
                        {exp.highlight}
                      </div>
                    </div>

                    <ul className="space-y-3 text-sm md:text-base text-[#d8d2c6] max-w-4xl">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="text-[#b4924c] font-mono mt-0.5">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CAPABILITIES & ACADEMIC CREDENTIALS */}
      <section id="capabilities" className="py-24 md:py-36 px-6 md:px-12 border-t border-[#e8e4dc]/10 bg-[#0a0908]">
        <div className="max-w-[100rem] mx-auto">
          
          <div className="section-head">
            04 / COMPETENCIES &amp; CREDENTIALS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-7">
              <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-[#e8e4dc] mb-8">
                Core Competencies
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`font-mono text-xs md:text-sm uppercase tracking-wider px-3.5 py-2 border transition-colors duration-200 ${
                      skill.highlight
                        ? "bg-[#1d1a16] border-[#b4924c]/50 text-[#b4924c]"
                        : "bg-[#14120f] border-[#e8e4dc]/15 text-[#d8d2c6] hover:border-[#b4924c] hover:text-[#b4924c]"
                    }`}
                  >
                    {skill.name}
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

      {/* 7. FOOTER / CONTACT (Dual Channels: Email & Mobile Number) */}
      <footer id="contact" className="relative pt-24 md:pt-36 pb-12 px-6 md:px-12 bg-[#0a0908] border-t border-[#e8e4dc]/10 overflow-hidden">
        
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            background: "radial-gradient(60% 45% at 50% 110%, rgba(125, 31, 46, 0.4), transparent 70%)"
          }}
        />

        <div className="relative z-10 max-w-[100rem] mx-auto text-center">
          
          <div className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#8f887b] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse-dot" />
            <span>AVAILABLE FOR REAL ESTATE MANDATES &amp; MARKETING ADVISORY</span>
          </div>

          <h2 className="font-display font-black text-[clamp(2.5rem,10vw,9.5rem)] uppercase text-[#e8e4dc] leading-[0.9] tracking-[-0.03em] mb-12">
            LET'S TALK <span className="font-serif-it text-[#d65d72] normal-case">Real Estate</span>
          </h2>

          {/* Dual Direct Channels: Email & Mobile */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
            
            {/* Direct Email Card */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-8 bg-[#14120f] border border-[#e8e4dc]/15 hover:border-[#b4924c] hover:bg-[#1d1a16] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8f887b] block mb-2">Direct Email</span>
                <span className="font-display font-bold text-xl md:text-2xl text-[#e8e4dc] group-hover:text-[#b4924c] transition-colors break-all">
                  {contactInfo.email}
                </span>
              </div>
              <span className="font-mono text-xs text-[#d65d72] uppercase tracking-wider mt-6 block">
                Send Email ↗
              </span>
            </a>

            {/* Direct Mobile Card */}
            <a
              href={`tel:${contactInfo.mobileNumber.replace(/\s+/g, '')}`}
              className="p-8 bg-[#14120f] border border-[#e8e4dc]/15 hover:border-[#b4924c] hover:bg-[#1d1a16] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8f887b] block mb-2">Direct Mobile / Call</span>
                <span className="font-display font-bold text-xl md:text-2xl text-[#e8e4dc] group-hover:text-[#b4924c] transition-colors">
                  {contactInfo.mobileNumber}
                </span>
              </div>
              <span className="font-mono text-xs text-[#d65d72] uppercase tracking-wider mt-6 block">
                Call / WhatsApp ↗
              </span>
            </a>

          </div>

          {/* Social Circles Row */}
          <div className="flex justify-center items-center gap-4 mb-20">
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Send Email"
              className="w-12 h-12 rounded-full bg-[#7d1f2e] text-[#e8e4dc] flex items-center justify-center hover:bg-[#a32639] transition-colors duration-300 text-sm font-mono"
            >
              ✉
            </a>

            <a
              href={`tel:${contactInfo.mobileNumber.replace(/\s+/g, '')}`}
              aria-label="Call Mobile"
              className="w-12 h-12 rounded-full bg-[#7d1f2e] text-[#e8e4dc] flex items-center justify-center hover:bg-[#a32639] transition-colors duration-300 text-sm font-mono"
            >
              ✆
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

          <div className="pt-8 border-t border-[#e8e4dc]/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#8f887b]">
            <div>© {new Date().getFullYear()} A.R. Srinidhi · Founder of Focal Town</div>
            <div>Bengaluru, Karnataka, India</div>
            <a href="#hero" className="hover:text-[#e8e4dc] transition-colors">Back to top ↑</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
