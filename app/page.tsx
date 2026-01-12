import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Learn AI Engineering
          <span className="block text-fd-primary">Through Building</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-fd-muted-foreground">
          Production-ready projects with complete code, architecture diagrams,
          and step-by-step explanations. From beginner to advanced.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-6 py-3 font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/aalhommada/ai-projects"
            className="rounded-lg border border-fd-border px-6 py-3 font-medium transition-colors hover:bg-fd-accent"
          >
            View on GitHub
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-fd-border px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-semibold">
            What You&apos;ll Build
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="RAG Systems"
              description="Document Q&A, multi-doc retrieval, hybrid search, and production pipelines"
              href="/docs/rag"
            />
            <FeatureCard
              title="LLM Applications"
              description="Chatbots, content generation, code assistants, and structured outputs"
              href="/docs/llm-applications"
            />
            <FeatureCard
              title="Embeddings"
              description="Semantic search, clustering, similarity systems, and vector databases"
              href="/docs/embeddings"
            />
            <FeatureCard
              title="AI Agents"
              description="Tool-using agents, multi-agent systems, and autonomous workflows"
              href="/docs/agents"
            />
            <FeatureCard
              title="MLOps"
              description="Model deployment, monitoring, CI/CD pipelines, and scaling"
              href="/docs/mlops"
            />
            <FeatureCard
              title="Learning Paths"
              description="Structured journeys from beginner to production-ready engineer"
              href="/docs/learning-paths"
            />
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="border-t border-fd-border bg-fd-muted/30 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold">
            Progressive Difficulty
          </h2>
          <p className="mt-4 text-center text-fd-muted-foreground">
            Projects organized by complexity so you can grow at your own pace
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <LevelCard
              level="Beginner"
              time="1-2 hours"
              description="Perfect for learning fundamentals. Under 200 lines of code."
            />
            <LevelCard
              level="Intermediate"
              time="4-8 hours"
              description="Build real features. 200-500 lines of production code."
            />
            <LevelCard
              level="Advanced"
              time="2-5 days"
              description="Production-ready systems. 500+ lines with full architecture."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-fd-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p className="text-sm text-fd-muted-foreground">
            MIT {new Date().getFullYear()} &copy; Abdullah Alhommada
          </p>
          <Link
            href="https://github.com/aalhommada"
            className="text-sm text-fd-muted-foreground hover:text-fd-foreground"
          >
            @aalhommada
          </Link>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-fd-border p-6 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent/50"
    >
      <h3 className="font-semibold group-hover:text-fd-primary">{title}</h3>
      <p className="mt-2 text-sm text-fd-muted-foreground">{description}</p>
    </Link>
  )
}

function LevelCard({
  level,
  time,
  description,
}: {
  level: string
  time: string
  description: string
}) {
  return (
    <div className="rounded-lg border border-fd-border bg-fd-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{level}</h3>
        <span className="text-xs text-fd-muted-foreground">{time}</span>
      </div>
      <p className="mt-2 text-sm text-fd-muted-foreground">{description}</p>
    </div>
  )
}
