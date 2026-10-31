import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col justify-between overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Navigation */}
      <header className="relative z-10 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-blue-400 flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-transparent">
              Growthive Media
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Capabilities
            </a>
            <a href="#metrics" className="hover:text-foreground transition-colors">
              Impact
            </a>
            <a href="#stack" className="hover:text-foreground transition-colors">
              Architecture
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 shadow-sm shadow-primary/30"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen Growth & Media Engine
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            Scale Your Brand with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-primary to-indigo-400 bg-clip-text text-transparent">
              Autonomous Velocity
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Engineered by <strong>Nitin Bharwad</strong>. Growthive Media combines modern web engineering,
            AI automation, and data-driven media systems to accelerate brand authority and revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-md shadow-primary/25 transition-all"
            >
              Explore Capabilities <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#stack"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg text-base font-medium border border-border bg-card/60 hover:bg-accent hover:text-accent-foreground h-12 px-8 transition-colors"
            >
              View System Stack
            </a>
          </div>
        </section>

        {/* Metrics Banner */}
        <section id="metrics" className="border-y border-border/50 bg-card/30 backdrop-blur-sm py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">10x</div>
              <div className="text-sm text-muted-foreground mt-1">Execution Speed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Type-Safe & Scalable</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">&lt;100ms</div>
              <div className="text-sm text-muted-foreground mt-1">Global Edge Latency</div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Core Architectural Pillars
            </h2>
            <p className="text-muted-foreground text-base">
              Precision solutions designed for uncompromising performance, scalability, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card/50 p-8 hover:border-primary/50 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">High-Performance Web</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Next.js 15 App Router architecture with React Server Components, zero-shift typography, and sub-second Core Web Vitals.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 p-8 hover:border-primary/50 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Autonomous Workflows</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Agentic cron scheduling, multi-step error auto-remediation, and background task pipelines running seamlessly.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 p-8 hover:border-primary/50 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data & Security First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                PostgreSQL and Supabase backend with enforced Row Level Security (RLS) and cryptographic zero-leak secret handling.
              </p>
            </div>
          </div>
        </section>

        {/* Stack Highlights */}
        <section id="stack" className="py-16 bg-card/20 border-t border-border/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              Built on Modern Infrastructure
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-foreground/80">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Next.js 15</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> React 19</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> TypeScript Strict</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Tailwind CSS</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> shadcn/ui</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Supabase / Postgres</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/40 py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Growthive Media. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered by <span className="font-semibold text-foreground">Nitin Bharwad</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
