const sourceRepository =
  "https://github.com/mathewjustin/DesignPatternsAndAbhyasas";

const topics = [
  {
    title: "System Fundamentals",
    description:
      "The vocabulary and trade-offs that shape every architecture discussion.",
    notes: ["Availability", "Latency and throughput", "Big-O refresher"],
  },
  {
    title: "Infrastructure",
    description:
      "How requests move through scalable and reliable production systems.",
    notes: ["Load balancing", "Caching", "Proxy servers", "HTTPS and certificates"],
  },
  {
    title: "Data Systems",
    description:
      "Storage decisions, partitioning strategies, hashing, and performance.",
    notes: ["Storage fundamentals", "Hashing", "Database partitioning"],
  },
  {
    title: "Application Design",
    description:
      "Small design exercises and implementation patterns that build judgment.",
    notes: ["Browser history design", "Java design patterns", "Generics notes"],
  },
];

const roadmap = [
  {
    stage: "01",
    title: "Foundations",
    description: "Scale, latency, throughput, availability, consistency, and core trade-offs.",
  },
  {
    stage: "02",
    title: "Networking",
    description: "DNS, HTTP, load balancers, CDNs, proxies, and API gateways.",
  },
  {
    stage: "03",
    title: "Data Systems",
    description: "SQL, NoSQL, indexes, replication, partitioning, and durability.",
  },
  {
    stage: "04",
    title: "Distributed Systems",
    description: "Queues, caches, consensus, idempotency, backpressure, and retries.",
  },
  {
    stage: "05",
    title: "Reliability",
    description: "SLOs, observability, rate limits, failover, and graceful degradation.",
  },
  {
    stage: "06",
    title: "Architecture Practice",
    description: "Capacity estimates, diagrams, trade-off calls, and design reviews.",
  },
];

const learningLoop = ["Read", "Design", "Build", "Measure"];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Learn, connect, revisit
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl">
            System Design Notes
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            A growing home for system design concepts, technical lessons, and
            the small engineering insights worth remembering.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#topics"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              Explore the starting map
            </a>
            <a
              href={sourceRepository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-800"
            >
              View the original notes
            </a>
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        className="border-b border-[var(--line)] bg-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Roadmap
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                A timeline that never ends
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              System design learning is less like finishing a checklist and
              more like growing judgment. The timeline keeps moving because the
              systems keep changing.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_45px_rgba(30,41,59,0.06)]">
            <div className="relative px-5 py-8 sm:px-8">
              <div className="absolute left-12 right-12 top-14 hidden h-px bg-slate-200 md:block" />
              <ol className="grid gap-6 md:grid-cols-6">
                {roadmap.map((item) => (
                  <li key={item.stage} className="relative flex gap-4 md:block">
                    <div className="flex flex-col items-center md:mb-5">
                      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-teal-200 bg-teal-50 font-mono text-sm font-bold text-teal-800">
                        {item.stage}
                      </span>
                      <span className="h-full w-px bg-slate-200 md:hidden" />
                    </div>
                    <div className="min-w-0 pb-2 md:pb-0">
                      <h3 className="text-base font-bold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-[var(--line)] bg-slate-50 px-5 py-5 sm:px-8">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {learningLoop.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex min-w-0 items-center gap-3 text-teal-800">
                  <span className="endless-roadmap-line h-px flex-1 lg:w-44 lg:flex-none" />
                  <span className="font-mono text-4xl leading-none">∞</span>
                  <span className="text-sm font-bold">Repeat forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Initial structure
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Topics to build out
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
            This is a migration map, not a finished curriculum. Each topic will
            gain original notes, diagrams, references, and examples over time.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_12px_30px_rgba(30,41,59,0.05)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs font-bold text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-teal-800">
                  Planned
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {topic.title}
              </h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">
                {topic.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {topic.notes.map((note) => (
                  <li
                    key={note}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm text-slate-600"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-slate-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
              Working agreement
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Keep the source. Improve the explanation.
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              The original repository remains the historical notebook. This
              site will gradually turn those topics into concise, original,
              well-organized study material.
            </p>
          </div>
          <a
            href={sourceRepository}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-teal-300 hover:text-teal-200"
          >
            DesignPatternsAndAbhyasas
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8 text-sm text-[var(--muted)] sm:px-8">
        Built as a long-term engineering notebook by Justin Mathew.
      </footer>
    </main>
  );
}
