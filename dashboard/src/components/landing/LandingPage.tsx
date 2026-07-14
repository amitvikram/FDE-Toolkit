"use client";

import {
  ArrowRight,
  Boxes,
  Check,
  GitPullRequest,
  Layers3,
  Lock,
  MessageSquare,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const audience = [
  {
    icon: Sparkles,
    title: "AI product companies",
    description:
      "Turn design-partner conversations into working product increments without losing the context behind each request.",
  },
  {
    icon: Layers3,
    title: "Enterprise SaaS vendors",
    description:
      "Give strategic customers a safe place to shape workflows while your core engineering standards remain intact.",
  },
  {
    icon: Users,
    title: "Systems integrators",
    description:
      "Standardize customer discovery, rapid prototyping, evidence capture, and engineering handoff across delivery teams.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Connect the product",
    description:
      "Start from your existing GitHub repository, approved starter application, or reusable industry solution.",
  },
  {
    number: "02",
    title: "Create an isolated customer sandbox",
    description:
      "Give each design partner or client team a controlled environment with its own files, preview, memory, and access boundary.",
  },
  {
    number: "03",
    title: "Co-build in the language of the workflow",
    description:
      "Users explain what should change through text or voice. AI translates intent into visible, testable application updates.",
  },
  {
    number: "04",
    title: "Promote learning into the product",
    description:
      "Approved experiments become branches and pull requests with the customer context, change history, and human review intact.",
  },
];

const capabilities = [
  {
    icon: Boxes,
    title: "Isolated sandboxes",
    description:
      "Separate customer experiments by user, project, repository, files, preview environment, and execution boundary.",
  },
  {
    icon: MessageSquare,
    title: "Customer-native iteration",
    description:
      "Capture requests through natural language and voice while keeping the original intent connected to the resulting change.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted application changes",
    description:
      "Use models to edit, explain, and refine the application inside a bounded environment rather than an uncontrolled production codebase.",
  },
  {
    icon: Network,
    title: "Persistent product memory",
    description:
      "Retain decisions, experiments, feedback, and prior iterations so teams do not restart discovery from zero.",
  },
  {
    icon: GitPullRequest,
    title: "GitHub-native handoff",
    description:
      "Export approved work into branches, commits, pull requests, and reviewable change histories that engineering teams already understand.",
  },
  {
    icon: ShieldCheck,
    title: "Human-controlled promotion",
    description:
      "Keep product owners and engineers accountable for what becomes a formal product change, release candidate, or reusable pattern.",
  },
];

const useCases = [
  "Enterprise design-partner programs",
  "AI workflow discovery and deployment",
  "Vertical SaaS solution acceleration",
  "Customer-specific integration prototyping",
  "Implementation proof-of-value programs",
  "Forward-deployed engineering playbooks",
];

const governanceItems = [
  "Repository and sandbox isolation",
  "Minimum-privilege tool access",
  "Secret and credential boundaries",
  "Human approval before promotion",
  "Traceable change and decision history",
  "Extensible test, security, and quality gates",
];

function LogoMark() {
  return (
    <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
      FDE
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
      <span className="size-1.5 rounded-full bg-cyan-300" />
      {children}
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <section className="relative border-b border-white/10 px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[42rem] w-[70rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
          <div className="absolute -right-48 top-40 h-96 w-96 rounded-full bg-orange-400/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <Sparkles className="size-4 text-cyan-300" />
              The customer-to-code operating layer for forward-deployed teams
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
              Turn customer conversations into working software.
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-orange-300 bg-clip-text text-transparent">
                Without creating another fork.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              FDE-Toolkit gives forward-deployed engineers, solutions teams, and product leaders isolated customer sandboxes, AI-assisted iteration, persistent product memory, and governed GitHub handoff.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:amitvik@gmail.com?subject=FDE-Toolkit%20design-partner%20pilot"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Start a design-partner pilot
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                See the operating model
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-4">
              {["Isolated sandboxes", "Customer memory", "Human approval", "GitHub-native"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-orange-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/85 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-300/80" />
                  <span className="size-2.5 rounded-full bg-emerald-300/80" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  customer sandbox / acme-health
                </span>
              </div>

              <div className="grid gap-3 p-3 md:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      <MessageSquare className="size-3.5" /> Customer request
                    </div>
                    <p className="text-sm leading-6 text-slate-200">
                      “Our operations team needs the exception reason, policy evidence, and next action on one screen.”
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-300">
                        Product memory
                      </span>
                      <span className="rounded-full bg-cyan-300/10 px-2 py-1 font-mono text-[10px] text-cyan-200">
                        14 decisions retained
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs leading-5 text-slate-300">
                      <li>• Evidence must remain visible</li>
                      <li>• Reviewer owns final disposition</li>
                      <li>• Existing API contract preserved</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Live experiment</p>
                      <p className="mt-1 text-sm font-medium text-white">Exception review workspace</p>
                    </div>
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[11px] text-emerald-200">
                      Preview ready
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        ["Reason", "Policy mismatch"],
                        ["Confidence", "92%"],
                        ["Owner", "Ops review"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-xl bg-white/5 p-3">
                          <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
                          <p className="mt-1 text-xs font-medium text-slate-200">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Evidence</span>
                        <span className="text-cyan-300">3 linked sources</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="h-2 w-4/5 rounded-full bg-white/10" />
                        <div className="h-2 w-2/3 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-orange-300/20 bg-orange-300/5 p-3">
                      <div className="flex items-center gap-2">
                        <GitPullRequest className="size-4 text-orange-200" />
                        <div>
                          <p className="text-xs font-medium text-white">Ready for product review</p>
                          <p className="text-[10px] text-slate-500">Context and change history attached</p>
                        </div>
                      </div>
                      <span className="rounded-lg bg-orange-200 px-2.5 py-1 text-[10px] font-semibold text-slate-950">
                        Create PR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/40 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Built for teams where customer proximity and engineering discipline must coexist
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audience.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                <Icon className="size-6 text-cyan-300" />
                <h2 className="mt-5 text-lg font-semibold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>The product gap</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Bespoke customer work creates value.
              <span className="block text-slate-500">It also creates product entropy.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Forward-deployed teams sit close to the real workflow, but their learning is often trapped in calls, tickets, prototypes, and one-off branches. FDE-Toolkit creates a governed path from customer discovery to reusable product change.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Discovery is separated from delivery", "The people hearing the problem are not always the people implementing the solution."],
              ["Context disappears at every handoff", "Customer intent gets compressed into tickets, screenshots, and partial acceptance criteria."],
              ["Demos become disposable", "Valuable experiments prove demand but rarely preserve a clean route into the core product."],
              ["Customer branches become permanent", "Teams move quickly at first, then inherit duplicated code, drift, and upgrade friction."],
            ].map(([title, description], index) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <span className="font-mono text-xs text-orange-300">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="border-y border-white/10 bg-white/[0.025] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Operating model</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              One continuous loop from customer intent to engineering review.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {workflowSteps.map((step) => (
              <div key={step.number} className="bg-slate-950 p-7 lg:min-h-72">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-cyan-300">{step.number}</span>
                  <ArrowRight className="size-4 text-slate-700" />
                </div>
                <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionLabel>Product system</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                More than a coding agent.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-400 lg:justify-self-end">
              Generic coding agents optimize the change. FDE-Toolkit preserves the operating context around the change: who requested it, what workflow it serves, how it was tested, what decisions were made, and who approved promotion.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group rounded-3xl border border-white/10 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="border-y border-white/10 bg-slate-900/40 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Where it fits</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Built for the messy middle between platform and production.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Use FDE-Toolkit when the customer problem is important enough to co-build, but the resulting work still needs to become secure, maintainable, and reusable software.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <Check className="mt-0.5 size-5 shrink-0 text-cyan-300" />
                <span className="text-sm font-medium leading-6 text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Lock className="size-6" />
              </div>
              <h2 className="mt-8 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Designed for governed experimentation.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                AI-generated changes should be treated as untrusted until validated. FDE-Toolkit is designed around isolation, explicit promotion, human accountability, and integration with your existing engineering controls.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {governanceItems.map((item) => (
                <div key={item} className="flex min-h-28 items-center gap-3 bg-slate-950 p-6">
                  <ShieldCheck className="size-5 shrink-0 text-emerald-300" />
                  <span className="text-sm font-medium leading-6 text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-cyan-300 px-7 py-14 text-slate-950 sm:px-10 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-40 size-96 rounded-full border-[70px] border-white/20" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-700">
                <Workflow className="size-4" /> Design-partner pilot
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Bring one customer workflow. Leave with a repeatable deployment pattern.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                Start with a focused product or workflow challenge, a representative codebase, and a small group of customer users. Prove the operating loop before expanding the platform footprint.
              </p>
            </div>
            <a
              href="mailto:amitvik@gmail.com?subject=FDE-Toolkit%20pilot%20discussion"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Discuss a pilot
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="font-semibold">FDE-Toolkit</p>
              <p className="text-xs text-slate-500">Forward-deployed product infrastructure</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#security" className="hover:text-white">Governance</a>
            <a href="https://github.com/amitvikram/FDE-Toolkit" className="hover:text-white">GitHub</a>
            <a href="mailto:amitvik@gmail.com" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
