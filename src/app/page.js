"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Focal Town",
      role: "Founder & Lead Strategist",
      period: "Jan 2021 – Present · 4+ yrs",
      location: "Bengaluru, India",
      highlight: "0.5M+ sq. ft. sold",
      description:
        "Founded and direct Focal Town as a premier real estate sales and marketing company. Oversee builder partnerships, pricing strategy, channel partner alliances, and complete sales transaction cycles across Bengaluru.",
    },
    {
      company: "HomzNSpace",
      role: "Manager — Sales & Marketing",
      period: "Feb 2016 – May 2019 · 3 yrs 4 mos",
      location: "Bengaluru, India",
      highlight: "Residential portfolios",
      description:
        "Directed sales operations, prospective buyer engagement, and promotional campaigns across residential real estate developments in Bengaluru.",
    },
    {
      company: "Gowri Construction",
      role: "Manager — Sales & Marketing",
      period: "Sep 2014 – Sep 2015 · 1 yr 1 mo",
      location: "Bangalore, India",
      highlight: "Project inception to close",
      description:
        "Took full responsibility for developer advisory: from project planning and pricing strategy to on-ground team leadership and marketing outreach.",
    },
    {
      company: "Assetz Group",
      role: "Sales & Marketing",
      period: "Mar 2013 – Apr 2014 · 1 yr 2 mos",
      location: "Bangalore, India",
      highlight: "High-value real estate",
      description:
        "Drove client acquisition, site walk-throughs, and relationship management for premium residential properties under the Assetz banner.",
    },
    {
      company: "Brigade Group",
      role: "Executive Sales",
      period: "Jul 2010 – Feb 2013 · 2 yrs 8 mos",
      location: "Bangalore, India",
      highlight: "Sales cycle & campaigns",
      description:
        "Managed complete sales cycles, customer negotiations, property handovers, outdoor hoarding placements, direct mail campaigns, and channel partner networks.",
    },
    {
      company: "Infosys BPO",
      role: "Executive",
      period: "2007 – 2008 · 1 yr",
      location: "Bengaluru, India",
      highlight: "Yahoo! Search Marketing",
      description:
        "Ad editor and content reviewer for Yahoo! Search Marketing PPC campaigns. Provided operational floor support and trained new content team members.",
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-[#e6dbc7] text-[#062b8a] flex flex-col justify-between selection:bg-[#062b8a] selection:text-[#e6dbc7]">
      
      {/* 1. Header / Navigation */}
      <header className="px-6 py-8 md:px-12 flex justify-between items-baseline bg-[#ddd0b9]">
        <div className="font-extrabold text-lg md:text-xl">
          Srinidhi A.R.
        </div>
        <nav className="flex gap-6 md:gap-10 text-sm md:text-base font-semibold">
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#focal-town" className="hover:opacity-60 transition-opacity">Focal Town</a>
          <a href="#experience" className="hover:opacity-60 transition-opacity">Experience</a>
          <a href="#skills" className="hover:opacity-60 transition-opacity">Skills</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </nav>
      </header>

      {/* 2. Hero Section (Waterline Headline Blueprint) */}
      <section className="px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-6 text-sm md:text-base font-semibold text-[#3a5aa8]">
            Real estate sales and marketing leader based in Bengaluru
          </div>

          <h1 className="text-[14vw] sm:text-[11vw] font-black uppercase leading-[0.88] text-[#062b8a] mb-8">
            Srinidhi A.R.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4">
            <div className="md:col-span-8 text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-[#062b8a]">
              Founder at <strong>Focal Town</strong>. 15+ years of driving property transactions, builder go-to-market strategies, and client acquisitions across Bengaluru.
            </div>
            
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href="#contact"
                className="w-full text-center px-8 py-4 bg-[#062b8a] text-[#e6dbc7] font-bold text-base hover:bg-[#031954] transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/srinidhi-a-r-b0125755/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-8 py-4 bg-[#ddd0b9] text-[#062b8a] font-bold text-base hover:bg-[#d0c0a3] transition-colors"
              >
                LinkedIn Profile →
              </a>
            </div>
          </div>

          {/* Key Metric Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 bg-[#ddd0b9] p-8 md:p-12">
            <div>
              <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#062b8a]">
                0.5M+
              </div>
              <div className="text-base font-bold mt-2">
                Square feet transacted
              </div>
              <p className="text-sm text-[#3a5aa8] mt-1">
                Residential and commercial real estate closed in Bengaluru.
              </p>
            </div>

            <div>
              <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#062b8a]">
                4+ Years
              </div>
              <div className="text-base font-bold mt-2">
                Focal Town leadership
              </div>
              <p className="text-sm text-[#3a5aa8] mt-1">
                Founded January 2021 as a dedicated sales &amp; marketing company.
              </p>
            </div>

            <div>
              <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#062b8a]">
                15+ Years
              </div>
              <div className="text-base font-bold mt-2">
                Industry expertise
              </div>
              <p className="text-sm text-[#3a5aa8] mt-1">
                Spanning Brigade Group, Assetz, Gowri, and HomzNSpace.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. About Section (Blueprint: Two columns, highlighted words) */}
      <section id="about" className="bg-[#ddd0b9] px-6 py-20 md:px-12 md:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-[#062b8a]">
            <div>
              <p className="mb-6">
                I am a real estate sales and marketing professional based in{" "}
                <span className="bg-[#e6dbc7] px-2 py-0.5 font-bold">Bengaluru, India</span>.
                For fifteen years, I have partnered with developers and buyers to build clear sales cycles, establish realistic market pricing, and conclude high-value property agreements.
              </p>
              <p>
                My foundation was forged across top-tier developers including{" "}
                <span className="bg-[#e6dbc7] px-2 py-0.5 font-bold">Brigade Group</span>,{" "}
                <span className="bg-[#e6dbc7] px-2 py-0.5 font-bold">Assetz Group</span>, and{" "}
                <span className="bg-[#e6dbc7] px-2 py-0.5 font-bold">Gowri Construction</span>,
                where I managed the entire cycle from on-ground promotions and hoarding media to client agreements and handovers.
              </p>
            </div>

            <div>
              <p className="mb-6">
                In January 2021, I established{" "}
                <span className="bg-[#062b8a] text-[#e6dbc7] px-2 py-0.5 font-bold">Focal Town</span>,
                a dedicated sales and marketing agency that has since facilitated the sale of over{" "}
                <span className="bg-[#e6dbc7] px-2 py-0.5 font-bold">0.5 million sq. ft.</span> of real estate space.
              </p>
              <p>
                I hold an <span className="bg-[#e6dbc7] px-2 py-0.5 font-bold">MBA in Finance</span> and a Bachelor of Business Administration in Marketing from the University of Mysore. I speak English, Kannada, Telugu, and Hindi fluently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Company Spotlight: Focal Town */}
      <section id="focal-town" className="px-6 py-20 md:px-12 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#062b8a] text-[#e6dbc7] p-8 md:p-16">
            <div className="text-sm font-semibold text-[#ddd0b9] mb-4">
              Featured Company
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#e6dbc7] mb-6">
              Focal Town
            </h2>

            <div className="text-xl sm:text-2xl font-medium text-[#ddd0b9] mb-10 max-w-3xl leading-snug">
              A specialized real estate sales and marketing firm established in January 2021, delivering predictable transaction velocity for developers in Bengaluru.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 bg-[#031954] p-6 md:p-8">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#e6dbc7]">4+ Years</div>
                <div className="text-sm font-semibold text-[#ddd0b9] mt-1">Established Jan 2021</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#e6dbc7]">0.5M+ SFT</div>
                <div className="text-sm font-semibold text-[#ddd0b9] mt-1">Real estate space sold</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#e6dbc7]">End-to-End</div>
                <div className="text-sm font-semibold text-[#ddd0b9] mt-1">Sales strategy and closures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Work Experience (Blueprint: Quiet ledger, side preview) */}
      <section id="experience" className="px-6 py-20 md:px-12 md:py-28 bg-[#f2ece0]">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            Work Experience
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Ledger List */}
            <div className="lg:col-span-7 space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 cursor-pointer transition-colors ${
                    activeTab === index
                      ? "bg-[#062b8a] text-[#e6dbc7]"
                      : "bg-[#ddd0b9] text-[#062b8a] hover:bg-[#d0c0a3]"
                  }`}
                >
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <h3 className="text-xl sm:text-2xl font-black">
                      {exp.company}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-medium mt-1 opacity-90">
                    {exp.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Role Detail Panel */}
            <div className="lg:col-span-5 bg-[#ddd0b9] p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="text-sm font-semibold text-[#3a5aa8] mb-2">
                  Role Details
                </div>
                <h3 className="text-3xl font-black text-[#062b8a] mb-2">
                  {experiences[activeTab].company}
                </h3>
                <div className="text-lg font-bold text-[#062b8a] mb-1">
                  {experiences[activeTab].role}
                </div>
                <div className="text-sm text-[#3a5aa8] mb-6">
                  {experiences[activeTab].period} · {experiences[activeTab].location}
                </div>

                <div className="inline-block bg-[#062b8a] text-[#e6dbc7] text-sm font-semibold px-3 py-1 mb-6">
                  {experiences[activeTab].highlight}
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[#062b8a] font-medium">
                  {experiences[activeTab].description}
                </p>
              </div>

              <div className="mt-8 pt-6 text-sm font-medium text-[#3a5aa8]">
                Select any position on the left to read more
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Skills & Education Section */}
      <section id="skills" className="px-6 py-20 md:px-12 md:py-28">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            Capabilities &amp; Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            
            {/* Skills Column */}
            <div className="bg-[#ddd0b9] p-8 md:p-12">
              <h3 className="text-2xl font-black mb-6">Core Competencies</h3>
              <ul className="space-y-3 text-base sm:text-lg font-medium text-[#062b8a]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#062b8a]"></span>
                  Real Estate Sales &amp; High-Value Closures
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#062b8a]"></span>
                  Builder Representation &amp; Pricing Architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#062b8a]"></span>
                  Channel Partner Network Management
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#062b8a]"></span>
                  Integrated Marketing &amp; Hoarding Campaigns
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#062b8a]"></span>
                  Lead Generation &amp; Conversion Optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#062b8a]"></span>
                  Client Agreement Structuring &amp; Site Handovers
                </li>
              </ul>

              <div className="mt-10 pt-6 bg-[#e6dbc7] p-6">
                <h4 className="text-sm font-bold mb-2">Languages Spoken</h4>
                <p className="text-base font-semibold">English · Kannada · Telugu · Hindi</p>
              </div>
            </div>

            {/* Education Column */}
            <div className="bg-[#ddd0b9] p-8 md:p-12">
              <h3 className="text-2xl font-black mb-6">Academic Background</h3>
              
              <div className="space-y-6 text-[#062b8a]">
                <div>
                  <div className="text-lg sm:text-xl font-bold">Master of Business Administration (MBA)</div>
                  <div className="text-sm font-semibold text-[#3a5aa8]">Finance, General · 2007 – 2009</div>
                  <div className="text-sm font-medium mt-0.5">University of Mysore</div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold">P.B.M (Marketing)</div>
                  <div className="text-sm font-semibold text-[#3a5aa8]">Marketing · 2007 – 2009</div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold">Bachelor of Business Administration (B.B.A.)</div>
                  <div className="text-sm font-semibold text-[#3a5aa8]">Marketing · 2003 – 2006</div>
                  <div className="text-sm font-medium mt-0.5">University of Mysore</div>
                </div>

                <div>
                  <div className="text-lg sm:text-xl font-bold">High School Education</div>
                  <div className="text-sm font-semibold text-[#3a5aa8]">K.S.E.E.B</div>
                  <div className="text-sm font-medium mt-0.5">Ideal Jawa Rotary High School (I.J.R.S)</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Contact Section (Blueprint: One word is the button) */}
      <section id="contact" className="bg-[#062b8a] text-[#e6dbc7] px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-between items-start flex-wrap gap-6 mb-12">
            <div>
              <div className="text-sm font-semibold text-[#ddd0b9] mb-3">
                Real estate sales advisory
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#e6dbc7]">
                Connect With Srinidhi
              </h2>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-[#ddd0b9]">Location</div>
              <div className="text-lg font-bold text-[#e6dbc7]">Bengaluru, Karnataka, India</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <a
              href="mailto:a.r.srinidhi@gmail.com"
              className="block p-8 bg-[#031954] hover:bg-[#02123d] transition-colors"
            >
              <div className="text-sm font-semibold text-[#ddd0b9] mb-1">
                Direct Email
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#e6dbc7] break-all">
                a.r.srinidhi@gmail.com
              </div>
              <div className="text-sm text-[#ddd0b9] mt-3 font-medium">Click to send an email →</div>
            </a>

            <a
              href="https://www.linkedin.com/in/srinidhi-a-r-b0125755/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 bg-[#031954] hover:bg-[#02123d] transition-colors"
            >
              <div className="text-sm font-semibold text-[#ddd0b9] mb-1">
                LinkedIn Network
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#e6dbc7] break-all">
                linkedin.com/in/srinidhi-a-r-b0125755
              </div>
              <div className="text-sm text-[#ddd0b9] mt-3 font-medium">View professional profile →</div>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-10 bg-[#031954] p-8">
            <a
              href="https://github.com/arsrinidhi-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-[#ddd0b9] hover:text-[#e6dbc7] transition-colors"
            >
              GitHub: github.com/arsrinidhi-byte ↗
            </a>

            <a
              href="mailto:a.r.srinidhi@gmail.com?subject=Real%20Estate%20Inquiry%20-%20Focal%20Town"
              className="px-8 py-4 bg-[#e6dbc7] text-[#062b8a] font-black text-lg hover:bg-[#ffffff] transition-colors"
            >
              Start A Conversation →
            </a>
          </div>

        </div>
      </section>

      {/* 8. Footer (Blueprint: Invitation over a cropped wordmark) */}
      <footer className="bg-[#031954] text-[#ddd0b9] px-6 pt-12 pb-6 md:px-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase mb-8">
          <div>© {new Date().getFullYear()} Srinidhi A.R. · Founder at Focal Town</div>
          <div>Real Estate Sales &amp; Marketing · Bengaluru, India</div>
          <a href="#" className="hover:text-[#e6dbc7]">Back to Top ↑</a>
        </div>

        {/* Cropped oversized brand typography */}
        <div className="text-[20vw] font-black uppercase text-[#062b8a] opacity-40 select-none leading-none translate-y-[25%] pointer-events-none">
          SRINIDHI
        </div>
      </footer>

    </div>
  );
}
