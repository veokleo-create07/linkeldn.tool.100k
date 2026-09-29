type SourceKind = "linkedin" | "website" | "pdf" | "notes" | "video" | "podcast";

const sources = [
  { name: "LinkedIn", kind: "linkedin", color: "#0A66C2" },
  { name: "Website", kind: "website", color: "#2563EB" },
  { name: "PDFs", kind: "pdf", color: "#E53935" },
  { name: "Notes", kind: "notes", color: "#F4B400" },
  { name: "Videos", kind: "video", color: "#FF0000" },
  { name: "Podcasts", kind: "podcast", color: "#A855F7" },
] as const;

const sourceGroups = [
  [sources[0], sources[1]],
  [sources[2], sources[3]],
  [sources[4], sources[5]],
] as const;

const diagnosis = [
  { title: "Positioning", detail: "Clear expertise signal", kind: "positioning", color: "#2563EB" },
  { title: "Content coverage", detail: "Proof is underused", kind: "coverage", color: "#38BDF8" },
  { title: "Opportunities", detail: "Three high-impact paths", kind: "opportunities", color: "#8B5CF6" },
] as const;

const recommendations = [
  { title: "Turn a client case study into a post", detail: "Build trust with proof", kind: "document", color: "#2563EB" },
  { title: "Create a short-form video", detail: "Make the method easier to remember", kind: "video", color: "#EF4444" },
  { title: "Explore your take on AI strategy", detail: "Clarify your point of view", kind: "insight", color: "#8B5CF6" },
] as const;

function CardShell({
  label,
  title,
  description,
  children,
  surface = "default",
}: {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
  surface?: "default" | "understand" | "diagnose" | "recommend";
}) {
  const surfaceClass = surface === "understand"
    ? "bg-[linear-gradient(145deg,rgba(230,240,247,0.96),rgba(169,190,204,0.86))] shadow-[0_30px_66px_-36px_rgba(20,65,103,0.6)]"
    : surface === "diagnose"
      ? "bg-[linear-gradient(145deg,rgba(224,237,245,0.96),rgba(179,196,208,0.88))] shadow-[0_30px_66px_-36px_rgba(28,67,91,0.58)]"
      : surface === "recommend"
        ? "bg-[linear-gradient(145deg,rgba(228,242,246,0.96),rgba(178,201,208,0.87))] shadow-[0_30px_66px_-36px_rgba(21,77,92,0.58)]"
      : "bg-[linear-gradient(145deg,rgba(241,247,250,0.9),rgba(202,215,223,0.72))] shadow-[0_28px_62px_-38px_rgba(30,55,73,0.52)]";

  return (
    <article className={`group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.625rem] border border-white/80 ${surfaceClass} p-5 backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 sm:min-h-[27rem] sm:p-6`}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.16))]" />
      <div className="relative z-10 flex h-full flex-col">
        <div>
          <p className="text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#3977a9]">{label}</p>
          <h3 className="mt-3 max-w-[17rem] text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[#132238] sm:text-[1.75rem]">{title}</h3>
          <p className="mt-2 max-w-[18rem] text-[0.86rem] leading-5 text-[#536779]">{description}</p>
        </div>
        <div className="mt-4 flex flex-1 flex-col">{children}</div>
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
    <CardShell surface="understand" label="Understand" title="Bring your real knowledge together." description="Connect your sources. Clonao organizes the signal.">
      <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
        {sourceGroups.map((group) => (
          <div key={group[0].name} className="flex min-h-[3.1rem] items-center gap-3 py-2.5">
            {group.map(({ name, kind, color }) => (
              <div key={name} className="flex min-w-0 flex-1 items-center gap-2">
                <SourceIcon kind={kind} color={color} />
                <span className="truncate text-sm font-medium text-[#1d3044]">{name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </CardShell>
  );
}

type DiagnosisKind = "positioning" | "coverage" | "opportunities";

function DiagnosisIcon({ kind, color }: { kind: DiagnosisKind; color: string }) {
  const common = { "aria-hidden": true, className: "size-[1.35rem] shrink-0", style: { color } };

  if (kind === "positioning") {
    return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round"><circle cx="12" cy="12" r="7.75" /><circle cx="12" cy="12" r="2.25" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>;
  }

  if (kind === "coverage") {
    return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V13M9.3 19.5V8M14.7 19.5V10.5M20 19.5V4.5" /><path d="M4 19.5h16" opacity=".45" /></svg>;
  }

  return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3ZM18.5 15.5l.65 2.35 2.35.65-2.35.65-.65 2.35-.65-2.35-2.35-.65 2.35-.65.65-2.35Z" /></svg>;
}

function DiagnoseCard() {
  return (
    <CardShell surface="diagnose" label="Diagnose & Strategize" title="See what’s working, what’s missing." description="See the gaps shaping your brand.">
      <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
        {diagnosis.map(({ title, detail, kind, color }) => (
          <div key={title} className="flex min-h-[3.45rem] items-center gap-2.5 py-2">
            <DiagnosisIcon kind={kind} color={color} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#1d3044]">{title}</p>
              <p className="mt-1 truncate text-[0.72rem] text-[#748494]">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
}

type RecommendationKind = "document" | "video" | "insight";

function RecommendationIcon({ kind, color }: { kind: RecommendationKind; color: string }) {
  const common = { "aria-hidden": true, className: "size-[1.35rem] shrink-0", style: { color } };

  if (kind === "document") {
    return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3.5h8.25L18 7.25v13.25H6V3.5Z" /><path d="M14 3.5v4h4M9 11h6M9 14.5h6M9 18h3.5" /></svg>;
  }

  if (kind === "video") {
    return <svg {...common} viewBox="0 0 24 24" fill="none"><rect x="3" y="5.5" width="18" height="13" rx="3" fill="currentColor" opacity=".13" /><rect x="3" y="5.5" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="1.55" /><path d="m10 9 5 3.05L10 15.1V9Z" fill="currentColor" /></svg>;
  }

  if (kind === "insight") {
    return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.35 5.25L18.5 9.5l-5.15 1.25L12 16l-1.35-5.25L5.5 9.5l5.15-1.25L12 3ZM18 15.5l.65 2.35 2.35.65-2.35.65-.65 2.35-.65-2.35-2.35-.65 2.35-.65.65-2.35Z" /></svg>;
  }

  return <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5h14M5 12h14M5 16.5h9" /><circle cx="18" cy="16.5" r="2.5" /><path d="M18 15.3v1.2l.8.5" /></svg>;
}

function RecommendCard() {
  return (
    <CardShell surface="recommend" label="Get your next moves" title="Get your next best moves." description="Three actions, grounded in your strategy.">
      <div>
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6e8291]">Top next moves</p>
        <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
          {recommendations.map(({ title, detail, kind, color }) => (
            <div key={title} className="flex min-h-[3.65rem] items-center gap-2.5 py-2">
              <RecommendationIcon kind={kind} color={color} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-5 text-[#1d3044]">{title}</p>
                <p className="mt-1 truncate text-[0.72rem] text-[#748494]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardShell>
  );
}

export function IntelligenceLoop() {
  return (
    <section aria-labelledby="intelligence-loop-heading" className="bg-[#f5f9fc] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">How Clonao thinks</p>
          <h2 id="intelligence-loop-heading" className="text-balance mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.065em] text-[#132238] sm:text-5xl lg:text-[4.15rem]">From scattered knowledge to your next best move.</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#657789] sm:text-lg">Clonao turns what you know into a clearer personal brand strategy.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl items-stretch gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
          <UnderstandCard />
          <DiagnoseCard />
          <RecommendCard />
        </div>
      </div>
    </section>
  );
}
