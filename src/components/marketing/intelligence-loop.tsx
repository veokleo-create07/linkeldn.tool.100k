import {
  ArrowUpRight,
  BarChart3,
  FileText,
  ScanSearch,
  Sparkles,
  StickyNote,
  Target,
  Video,
} from "lucide-react";

type SourceKind = "linkedin" | "website" | "pdf" | "notes" | "video" | "podcast";

const sources = [
  { name: "LinkedIn", kind: "linkedin", color: "#0A66C2", count: "128 posts", status: "Connected", statusColor: "#16A34A" },
  { name: "Website", kind: "website", color: "#2563EB", count: "24 pages", status: "Indexed", statusColor: "#2563EB" },
  { name: "PDFs", kind: "pdf", color: "#E53935", count: "12 files", status: "Processed", statusColor: "#16A34A" },
  { name: "Notes", kind: "notes", color: "#F4B400", count: "86 notes", status: "Syncing", statusColor: "#2563EB" },
  { name: "Videos", kind: "video", color: "#FF0000", count: "18 files", status: "Processing", statusColor: "#2563EB" },
  { name: "Podcasts", kind: "podcast", color: "#A855F7", count: "7 episodes", status: "Connected", statusColor: "#16A34A" },
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
  surface = "default",
}: {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  surface?: "default" | "understand";
}) {
  const surfaceClass = surface === "understand"
    ? "bg-[linear-gradient(145deg,rgba(230,240,247,0.96),rgba(169,190,204,0.86))] shadow-[0_30px_66px_-36px_rgba(20,65,103,0.6)]"
    : "bg-[linear-gradient(145deg,rgba(241,247,250,0.9),rgba(202,215,223,0.72))] shadow-[0_28px_62px_-38px_rgba(30,55,73,0.52)]";

  return (
    <article className={`group relative flex h-full min-h-[42rem] flex-col overflow-hidden rounded-[1.625rem] border border-white/80 ${surfaceClass} p-6 backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 sm:p-7`}>
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

function SourceIcon({ kind, color }: { kind: SourceKind; color: string }) {
  const common = { "aria-hidden": true, className: "size-[1.35rem] shrink-0", style: { color } };

  if (kind === "linkedin") {
    return <svg {...common} viewBox="0 0 24 24" fill="currentColor"><path d="M5.2 7.35A2.25 2.25 0 1 0 5.2 2.85a2.25 2.25 0 0 0 0 4.5ZM3.2 21.15h4V9.05h-4v12.1ZM9.65 9.05h3.84v1.65h.06c.54-1.03 1.85-2.12 3.8-2.12 4.06 0 4.81 2.67 4.81 6.15v6.42h-4v-5.69c0-1.36-.03-3.11-1.9-3.11-1.91 0-2.2 1.49-2.2 3.01v5.79h-4V9.05Z" /></svg>;
  }

  if (kind === "website") {
    return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.13 3.3 8.5S14.2 18.2 12 20.5C9.8 18.2 8.7 15.37 8.7 12S9.8 5.8 12 3.5Z" /></svg>;
  }

  if (kind === "pdf") {
    return <svg {...common} viewBox="0 0 24 24" fill="none"><path d="M5 2.75h9.1L19 7.65v13.6H5V2.75Z" fill="currentColor" opacity=".16" /><path d="M14 2.75v5h5M7.8 16.8h1.35c1.2 0 1.93-.58 1.93-1.55 0-.96-.73-1.54-1.93-1.54H7.8v4.64m3.35 0v-4.64h1.2c1.55 0 2.45.86 2.45 2.32 0 1.47-.9 2.32-2.45 2.32h-1.2m5.2-4.64h-2.35v4.64" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 2.75h9.1L19 7.65v13.6H5V2.75Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" /></svg>;
  }

  if (kind === "notes") {
    return <svg {...common} viewBox="0 0 24 24" fill="none"><path d="M5 3.5h14v17H5z" fill="currentColor" opacity=".18" /><path d="M5 3.5h14v17H5zM8 8h8M8 11.5h8M8 15h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }

  if (kind === "video") {
    return <svg {...common} viewBox="0 0 24 24" fill="none"><rect x="3" y="5.5" width="18" height="13" rx="3" fill="currentColor" opacity=".14" /><rect x="3" y="5.5" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="m10 9 5 3.05L10 15.1V9Z" fill="currentColor" /></svg>;
  }

  return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55"><circle cx="12" cy="12" r="8.5" fill="currentColor" opacity=".12" /><path d="M8.8 14.2a4.8 4.8 0 0 1 6.4 0M6.5 16.7a8.2 8.2 0 0 1 11 0M12 8.2h.01" strokeLinecap="round" /><circle cx="12" cy="8.2" r=".8" fill="currentColor" stroke="none" /></svg>;
}

function UnderstandCard() {
  return (
    <CardShell surface="understand" label="Understand" title="Bring your real knowledge together." description="Connect your content and let Clonao organize it.">
      <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
        {sources.map(({ name, kind, color, count, status, statusColor }) => (
          <div key={name} className="flex min-h-[3.35rem] items-center gap-3 py-2.5">
            <SourceIcon kind={kind} color={color} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#1d3044]">{name}</p>
              <p className="mt-0.5 text-[0.7rem] text-[#748494]">{count}</p>
            </div>
            <span className="hidden text-[0.68rem] min-[390px]:block" style={{ color: statusColor }}>{status}</span>
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
