import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

/**
 * Modern Data-Driven Minimalism Resume
 * Design Philosophy: Clean, spacious layouts with asymmetric grid structures
 * Metrics are displayed prominently as visual badges
 * Typography-driven design with strategic use of whitespace
 */

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Section */}
      <header className="relative border-b border-slate-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Aman Singh Rawal
              </h1>
              <p className="text-lg text-teal-600 font-medium mt-1">
                Aspiring Digital Marketer
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a
                href="tel:8392993620"
                className="flex items-center gap-2 hover:text-teal-600 transition-colors"
              >
                <Phone size={16} />
                <span>8392993620</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
            <a
              href="mailto:amansinghrawal15@gmail.com"
              className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors group"
            >
              <Mail size={18} className="text-teal-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm">amansinghrawal15@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin size={18} className="text-teal-500" />
              <span className="text-sm">Rohini Sector-7, Delhi – 110085</span>
            </div>
            <a
              href="https://linkedin.com/in/aman-singh-rawal-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors group"
            >
              <Linkedin size={18} className="text-teal-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* About Section */}
        <section className="mb-16 animate-fade-in">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 border border-teal-100/50">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Aspiring Digital Marketer with hands-on knowledge of Meta Ads, Google Ads, SEO, content creation, and analytics. Familiar with audience targeting, keyword research, campaign optimization, and performance tracking. A quick learner with strong attention to detail and a proactive mindset, eager to support digital marketing initiatives and grow within a professional team environment.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-teal-500">
            Education
          </h2>
          <div className="space-y-6">
            <div className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                    Bachelor of Commerce (B.Com)
                  </h3>
                  <p className="text-teal-600 font-medium">
                    Indira Gandhi National Open University (IGNOU)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-teal-500">
            Key Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Marketing */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                Digital Marketing
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Meta Ads Campaign Management",
                  "Google Ads (Search & Display)",
                  "Performance Marketing",
                  "Audience Targeting",
                  "Campaign Optimization",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* SEO */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                SEO
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Keyword Research",
                  "On-Page SEO Basics",
                  "Competitor Analysis",
                  "Google Search Console",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Analytics & Tools */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                Analytics & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Google Analytics",
                  "SEMrush",
                  "WordPress",
                  "Email Marketing",
                  "Social Media Optimization",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative Skills */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                Creative Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Canva Design",
                  "Copywriting",
                  "Video Editing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects & Experience Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-teal-500">
            Projects & Practical Experience
          </h2>
          
          <div className="space-y-8">
            {/* Meta Ads Campaign */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Meta Ads Campaign (2025)
                  </h3>
                  <p className="text-teal-600 font-medium">
                    Digital Marketing Agency Awareness Campaign
                  </p>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-100">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600">127K+</div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">Impressions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600">115K+</div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">People Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600">₹370</div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">Budget</div>
                </div>
              </div>

              <div className="space-y-2 text-slate-700">
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Reduced cost per 1,000 people reached to approximately ₹2.60</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Generated website traffic and messaging conversations through optimized targeting</span>
                </p>
              </div>
            </div>

            {/* PRISMWHITE */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    PRISMWHITE (YouTube Channel)
                  </h3>
                </div>
              </div>
              
              <div className="space-y-2 text-slate-700">
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Created and managed YouTube videos using AI-generated voiceovers</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Optimized video titles, descriptions, and keywords to improve reach and engagement</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Designed thumbnails to enhance click-through rates</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Analyzed performance metrics to improve retention and content strategy</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Built and scaled an AI-driven YouTube channel with growing views and engagement</span>
                </p>
              </div>
            </div>

            {/* Personal Website */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Personal Website – Adrunkaro.com
                  </h3>
                </div>
              </div>
              
              <div className="space-y-2 text-slate-700">
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Built and managed a WordPress website from scratch</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Implemented SEO strategies, content creation, and performance optimization</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Improved website visibility, user engagement, and content structure</span>
                </p>
              </div>
            </div>

            {/* AdRocketAI */}
            <div className="bg-white rounded-lg border border-slate-200 p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    AdRocketAI
                  </h3>
                </div>
              </div>
              
              <div className="space-y-2 text-slate-700">
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Designed and published social media creatives and ad posts using Canva</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Assisted in improving post reach and engagement through A/B content testing</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span>Supported campaign planning and execution for digital platforms</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-teal-500">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Master in Digital Marketing",
                issuer: "Delhi Institute of Digital Marketing (DIDM)",
                issued: "",
                valid: "",
              },
              {
                title: "Google Analytics Certification",
                issuer: "Google",
                issued: "Nov 2025",
                valid: "Valid till: Nov 2026",
              },
              {
                title: "Master AI-Powered SEO",
                issuer: "WsCube Tech",
                issued: "Nov 2025",
                valid: "",
              },
              {
                title: "HubSpot Academy Certification",
                issuer: "HubSpot",
                issued: "Nov 2025",
                valid: "Valid till: Nov 2026",
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-6 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 text-lg mb-2">
                  {cert.title}
                </h3>
                <p className="text-teal-600 font-medium text-sm mb-3">{cert.issuer}</p>
                <div className="text-xs text-slate-600 space-y-1">
                  <p>Issued: {cert.issued}</p>
                  {cert.valid && <p>{cert.valid}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Print Button */}
        <section className="mb-8 flex justify-center">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <ExternalLink size={18} />
            Print / Save as PDF
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p>© 2025 Aman Singh Rawal. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @media print {
          header {
            position: static;
            background: white;
            border-bottom: 1px solid #e2e8f0;
          }
          
          button {
            display: none;
          }
          
          body {
            background: white;
          }
          
          main {
            padding: 0;
          }
          
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
