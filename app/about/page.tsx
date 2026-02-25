import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Code2,
  TrendingUp,
  Workflow,
  Wrench,
  Globe,
  ArrowRight,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
                About the Founder
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight text-balance">
                Jake Snedker
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Mechatronics Engineer, automation builder, and self-taught developer with a track record of
                shipping production systems across engineering, trading, and AI-driven workflow automation.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Based in Stuttgart, Germany. Background spans ThyssenKrupp engineering internships, algorithmic
                trading bot development (MQL5, C++), n8n workflow orchestration, LLM-powered assistant
                systems, and full-stack web development. Comfortable working across the stack and across
                industries &mdash; from spinal surgery navigation systems to AI chatbot pipelines.
              </p>
              <div className="flex gap-3">
                <a href="mailto:jakesnedker@gmail.com">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white bg-transparent"
                  >
                    jakesnedker@gmail.com
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                BSc Engineering (Honours) &mdash; Mechatronics
              </h3>
              <p className="text-cyan-400 font-medium mb-2">Curtin University, Perth WA | 2011&ndash;2017</p>
              <p className="text-gray-400">
                Thesis: &ldquo;A navigation system for pedicle screw alignment in spinal surgery&rdquo; (Distinction).
                Interdisciplinary programme combining mechanical, electrical, and software engineering.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["C++", "C#", "MQL5", "VBA", "TypeScript", "Python", "Next.js", "React", "Node.js", "SQL"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm font-mono"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Automation & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "n8n Workflows",
                    "Webhooks & APIs",
                    "LLM Prompting",
                    "RAG Knowledge Bases",
                    "Assistant Orchestration",
                    "Agentic Systems",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Data & Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Advanced Excel/Sheets",
                    "Data Processing Pipelines",
                    "CSV/API Ingestion",
                    "Report Automation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Other</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Process Building",
                    "Remote Operations",
                    "Sales & Presenting",
                    "Small Business Ops",
                    "Team Coordination",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Experience */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Selected Engineering Experience</h2>
          </div>
          <div className="space-y-6">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">Engineering Intern &rarr; Electrical Engineering Assistant</h3>
                  <span className="text-sm text-gray-500">2016&ndash;2018</span>
                </div>
                <p className="text-cyan-400 font-medium mb-3">ThyssenKrupp Engineering, Perth WA</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    Built an Excel-based cable database with custom UI that reduced task time by ~85% (~650 hours saved)
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    Programmed cable database tools to increase uniformity and efficiency across departments
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    Offered a 2-year contract after a 3-month internship
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Workflow className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Key Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Snedker Automations</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">2024 &ndash; Present</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built a full automation agency from scratch: n8n workflow systems, website intake to RAG pipelines,
                  auto-posting with approval flows, AI chatbot for FAQ/email/calendar handling. Full-stack website
                  built with Next.js.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Algorithmic Trading Systems</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">2022 &ndash; Present</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Developed MQL5 trading bots with optimised execution logic. Led a ~15 person group on bot
                  optimisation and analysis. Built 2 courses, wrote 2 books on trading methodology. Currently
                  running live trading sessions and developing new strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Spinal Surgery Navigation System</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">2017 &ndash; Thesis</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Designed and built a navigation system for pedicle screw alignment in spinal surgery.
                  Awarded Distinction. Interdisciplinary project combining robotics, software, and biomedical
                  engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Remote Airbnb Business</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">2021 &ndash; 2022</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built a school bus into a fully off-grid tiny home, converted it to a self-sustained Airbnb,
                  and managed it entirely remotely from Mexico with automated processes for cleaners and
                  maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Experience */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Global Experience</h2>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Lived and worked across Australia, New Zealand, Canada, Mexico, and Germany.
            Operated businesses remotely across time zones. Comfortable in fast-paced, ambiguous
            environments where you have to figure things out and ship quickly.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Australia", "New Zealand", "Canada", "Mexico", "Germany"].map((country) => (
              <span
                key={country}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Me */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">What Drives Me</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Building Systems</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Whether it is an off-grid tiny home, a trading bot, or an AI pipeline &mdash; I find the most
                  satisfaction in designing systems that work reliably and efficiently.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Quantitative Thinking</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  From engineering optimization at ThyssenKrupp to algorithmic trading analysis &mdash; I approach
                  problems with data-driven rigor and measurable outcomes.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Shipping Fast</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  From building this automation agency to self-teaching new languages &mdash; I bias towards action,
                  iterate quickly, and learn by doing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Want to Work Together?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Whether you need automation solutions for your business or are looking for an engineer who ships &mdash; let
            us talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta#beta-form">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="mailto:jakesnedker@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full bg-transparent"
              >
                Email Directly
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              SnedkerAutomations
            </h3>
            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-2 rounded-full" />
          </div>
          <p className="text-gray-400 mb-4">&copy; 2025 Snedker Automations. All rights reserved.</p>
          <p className="text-gray-500 text-sm">
            <a href="mailto:jakesnedker@gmail.com" className="hover:text-cyan-400 transition-colors">
              jakesnedker@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
