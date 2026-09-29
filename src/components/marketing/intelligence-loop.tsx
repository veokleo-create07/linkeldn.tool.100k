import {
  ArrowUpRight,
  BarChart3,
  FileText,
  Globe2,
  Linkedin,
  Podcast,
  ScanSearch,
  Sparkles,
  StickyNote,
  Target,
  Video,
} from "lucide-react";

const sources = [
  { name: "LinkedIn", icon: Linkedin, count: "128 posts", status: "Connected" },
  { name: "Website", icon: Globe2, count: "24 pages", status: "Indexed" },
  { name: "PDFs", icon: FileText, count: "12 files", status: "Processed" },
  { name: "Notes", icon: StickyNote, count: "86 notes", status: "Syncing" },
  { name: "Videos", icon: Video, count: "18 files", status: "Processing" },
  { name: "Podcasts", icon: Podcast, count: "7 episodes", status: "Connected" },
] as const;

const diagnosis = [
  { title: "Positioning", detail: "Clear expertise signal", status: "Strength", icon: Target },
  { title: "Content coverage", detail: "Proof is underused", status: "Gap", icon: ScanSearch },
  { title: "Audience alignment", detail: "Strong relevance", status: "Strong", icon: BarChart3 },
  { title: "Opportunities", detail: "Three high-impact paths", status: "High potential", icon: Sparkles },
] as const;

const recommendations = [
  { title: "Turn a client case study into a post", detail: "Build trust with proof", icon: FileText },
  { title: "Create a short-form video", detail: "Make the method easier to remember", icon: Video },
  { title: "Explore your take on AI strategy", detail: "Clarify your point of view", icon: Sparkles },
  { title: "Build a simple content series", detail: "Create a consistent signal", icon: Target },
] as const;

function CardShell({
  label,
  title,
  description,
  children,
  footer,
}: {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <article className="group relative flex h-full min-h-[42rem] flex-col overflow-hidden rounded-[1.625rem] border border-white/80 bg-[linear-gradient(145deg,rgba(241,247,250,0.9),rgba(202,215,223,0.72))] p-6 shadow-[0_28px_62px_-38px_rgba(30,55,73,0.52)] backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 sm:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.16))]" />
      <div className="relative z-10 flex h-full flex-col">
        <div>
          <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#3977a9]">{label}</p>
          <h3 className="mt-4 max-w-[17rem] text-[1.7rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[#132238] sm:text-[1.85rem]">{title}</h3>
          <p className="mt-3 max-w-[18rem] text-[0.92rem] leading-6 text-[#536779]">{description}</p>
        </div>
        <div className="mt-8 flex flex-1 flex-col">{children}</div>
        {footer}
      </div>
    </article>
  );
}

function UnderstandCard() {
  return (
    <CardShell label="Understand" title="Bring your real knowledge together." description="Connect your content and let Clonao organize it.">
      <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
        {sources.map(({ name, icon: Icon, count, status }) => (
          <div key={name} className="flex min-h-[3.35rem] items-center gap-3 py-2.5">
            <Icon aria-hidden="true" className="size-[1.05rem] shrink-0 text-[#3977a9]" strokeWidth={1.7} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#1d3044]">{name}</p>
              <p className="mt-0.5 text-[0.7rem] text-[#748494]">{count}</p>
            </div>
            <span className="hidden text-[0.68rem] text-[#6b8191] min-[390px]:block">{status}</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 text-[#7b93a3] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} />
          </div>
        ))}
      </div>
      <button type="button" className="mt-auto flex items-center gap-2 border-b border-[#3977a9]/35 pb-2 pt-6 text-left text-sm font-medium text-[#286b9f] transition-colors hover:text-[#174d78] focus-visible:border-[#174d78]">
        <span className="text-lg leading-none">+</span>
        Add a source
      </button>
    </CardShell>
  );
}

function DiagnoseCard() {
  return (
    <CardShell label="Diagnose & Strategize" title="See what’s working, what’s missing." description="Clonao analyzes your content to find opportunities.">
      <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
        {diagnosis.map(({ title, detail, status, icon: Icon }) => (
          <div key={title} className="flex min-h-[4.65rem] items-center gap-3 py-3">
            <Icon aria-hidden="true" className="size-[1.05rem] shrink-0 text-[#3977a9]" strokeWidth={1.7} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#1d3044]">{title}</p>
              <p className="mt-1 truncate text-[0.72rem] text-[#748494]">{detail}</p>
            </div>
            <span className="hidden max-w-[5.1rem] text-right text-[0.66rem] leading-4 text-[#61798a] min-[390px]:block">{status}</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 text-[#7b93a3] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} />
          </div>
        ))}
      </div>
      <p className="mt-auto pt-6 text-[0.72rem] leading-5 text-[#718593]">Your strategy starts with a clearer view of the signals already in your work.</p>
    </CardShell>
  );
}

function RecommendCard() {
  return (
    <CardShell label="Get your next moves" title="Get your next best moves." description="Receive a focused plan based on your content.">
      <div>
        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6e8291]">Top next moves</p>
        <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
          {recommendations.map(({ title, detail, icon: Icon }) => (
            <div key={title} className="flex min-h-[4.25rem] items-center gap-3 py-3">
              <Icon aria-hidden="true" className="size-[1.05rem] shrink-0 text-[#3977a9]" strokeWidth={1.7} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-5 text-[#1d3044]">{title}</p>
                <p className="mt-1 truncate text-[0.72rem] text-[#748494]">{detail}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 text-[#7b93a3] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.7} />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-auto pt-6 text-[0.72rem] leading-5 text-[#718593]">A short list of actions, grounded in what your brand needs now.</p>
    </CardShell>
  );
}

export function IntelligenceLoop() {
  return (
    <section aria-labelledby="intelligence-loop-heading" className="border-y border-foreground/[0.07] bg-[#f5f9fc] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">How Clonao thinks</p>
          <h2 id="intelligence-loop-heading" className="text-balance mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#132238] sm:text-5xl lg:text-[4.15rem]">From scattered knowledge to your next best move.</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#657789] sm:text-lg">Clonao turns what you know into a clearer personal brand strategy.</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          <UnderstandCard />
          <DiagnoseCard />
          <RecommendCard />
        </div>
      </div>
    </section>
  );
}
