"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const diagnosis = [
  { title: "Positioning", kind: "positioning", color: "#2563EB" },
  { title: "Content coverage", kind: "coverage", color: "#38BDF8" },
  { title: "Opportunities", kind: "opportunities", color: "#8B5CF6" },
] as const;

const recommendations = [
  { title: "Turn a client case study into a post", kind: "document", color: "#2563EB" },
  { title: "Create a short-form video", kind: "video", color: "#EF4444" },
  { title: "Explore your take on AI strategy", kind: "insight", color: "#8B5CF6" },
] as const;

function CardShell({
  title,
  children,
  surface = "default",
}: {
  title?: string;
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
    <article className={`group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.625rem] border border-white/80 ${surfaceClass} p-5 backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1 sm:min-h-[25rem] sm:p-6`}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.16))]" />
      <div className="relative z-10 flex h-full flex-col">
        {title ? <div><h4 className="mx-auto max-w-[17rem] text-center text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.055em] text-[#132238] sm:text-[1.75rem]">{title}</h4></div> : null}
        <div className="mt-6 flex flex-1 flex-col">{children}</div>
      </div>
    </article>
  );
}

function ShowcaseCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-8 sm:gap-10">
      <h3 className="text-balance px-1 text-center font-sans text-[2.6rem] font-semibold leading-[0.92] tracking-[-0.06em] text-[#101826] sm:text-[3rem] lg:text-[3.35rem]">{label}</h3>
      {children}
    </div>
  );
}

function BrandGraphCard() {
  return (
    <ShowcaseCard label="Brand Graph">
      <CardShell surface="understand">
        <div className="relative min-h-[13.5rem] overflow-hidden rounded-[1.1rem] border border-white/55 bg-white/18">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,203,255,0.34),transparent_58%)]" aria-hidden="true" />
          <svg className="absolute inset-0 size-full" viewBox="0 0 520 250" fill="none" aria-hidden="true" preserveAspectRatio="none">
            <path d="M82 54C160 54 180 104 232 124M82 124h150M82 194c78 0 98-50 150-70M438 54C360 54 340 104 288 124M438 124H288M438 194c-78 0-98-50-150-70" stroke="#55758c" strokeOpacity=".42" strokeWidth="1.15" />
          </svg>
          <div className="absolute left-3 top-8 flex items-center gap-2 text-[0.68rem] font-medium text-[#26394d] sm:left-5"><span className="size-1.5 rounded-full bg-[#4d9cf3]" />Content</div>
          <div className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-2 text-[0.68rem] font-medium text-[#26394d] sm:left-5"><span className="size-1.5 rounded-full bg-[#4d9cf3]" />Experience</div>
          <div className="absolute bottom-8 left-3 flex items-center gap-2 text-[0.68rem] font-medium text-[#26394d] sm:left-5"><span className="size-1.5 rounded-full bg-[#4d9cf3]" />Proof</div>
          <div className="absolute right-3 top-8 flex flex-row-reverse items-center gap-2 text-[0.68rem] font-medium text-[#26394d] sm:right-5"><span className="size-1.5 rounded-full bg-[#4d9cf3]" />Audience</div>
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-row-reverse items-center gap-2 text-[0.68rem] font-medium text-[#26394d] sm:right-5"><span className="size-1.5 rounded-full bg-[#4d9cf3]" />Ideas</div>
          <div className="absolute bottom-8 right-3 flex flex-row-reverse items-center gap-2 text-[0.68rem] font-medium text-[#26394d] sm:right-5"><span className="size-1.5 rounded-full bg-[#4d9cf3]" />Goals</div>
          <div className="absolute left-1/2 top-1/2 flex size-[4.8rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-white/80 bg-white/70 shadow-[0_18px_30px_-20px_rgba(20,65,103,0.7)] backdrop-blur-md">
            <Image src="/clonao-logo.png" alt="" width={28} height={28} className="size-7 object-contain" />
            <span className="mt-1 text-[0.62rem] font-semibold tracking-[-0.02em] text-[#101826]">Clonao</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h4 className="text-lg font-semibold tracking-[-0.04em] text-[#132238]">Brand Graph</h4>
          <p className="mt-1 text-sm text-[#647384]">The complete context of who you are.</p>
        </div>
      </CardShell>
    </ShowcaseCard>
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
    <ShowcaseCard label="Diagnose & Strategize">
      <CardShell surface="diagnose" title="See what’s working, what’s missing.">
      <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
        {diagnosis.map(({ title, kind, color }) => (
          <div key={title} className="flex min-h-[3.45rem] items-center gap-2.5 py-2">
            <DiagnosisIcon kind={kind} color={color} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#1d3044]">{title}</p>
            </div>
          </div>
        ))}
      </div>
      </CardShell>
    </ShowcaseCard>
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
    <ShowcaseCard label="Get Your Next Moves">
      <CardShell surface="recommend" title="Get your next best moves.">
      <div>
        <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#6e8291]">Top next moves</p>
        <div className="divide-y divide-[#6f8797]/20 border-y border-[#6f8797]/20">
          {recommendations.map(({ title, kind, color }) => (
            <div key={title} className="flex min-h-[3.65rem] items-center gap-2.5 py-2">
              <RecommendationIcon kind={kind} color={color} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-5 text-[#1d3044]">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </CardShell>
    </ShowcaseCard>
  );
}

const showcaseCards = [BrandGraphCard, DiagnoseCard, RecommendCard];

function MobileCardSequence() {
  const sequenceRef = useRef<HTMLDivElement>(null);
  const [sequencePosition, setSequencePosition] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updatePosition = () => {
      frame = 0;
      const sequence = sequenceRef.current;
      if (!sequence) return;

      const sticky = sequence.firstElementChild as HTMLElement | null;
      if (!sticky) return;

      const stickyTop = 64;
      const travel = Math.max(sequence.offsetHeight - sticky.offsetHeight, 1);
      const progress = Math.min(1, Math.max(0, (stickyTop - sequence.getBoundingClientRect().top) / travel));
      setSequencePosition(progress * (showcaseCards.length - 1));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePosition);
    };

    updatePosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={sequenceRef} className="relative h-[210vh] lg:hidden">
      <div className="sticky top-16 flex h-[70vh] items-center overflow-hidden">
        <div className="relative min-h-[29rem] w-full">
          {showcaseCards.map((Card, index) => {
            const currentIndex = Math.min(showcaseCards.length - 1, Math.floor(sequencePosition));
            const transitionProgress = sequencePosition - currentIndex;
            const isOutgoing = index === currentIndex && currentIndex < showcaseCards.length - 1;
            const isIncoming = index === currentIndex + 1;
            const outgoingProgress = isOutgoing ? Math.min(1, transitionProgress / 0.55) : 0;
            const incomingProgress = isIncoming ? Math.max(0, Math.min(1, (transitionProgress - 0.35) / 0.65)) : 0;
            const isCurrent = index === currentIndex;
            const opacity = isOutgoing
              ? 1 - outgoingProgress
              : isIncoming
                ? incomingProgress
                : isCurrent
                  ? 1
                  : 0;
            const translateY = isOutgoing
              ? -16 * outgoingProgress
              : isIncoming
                ? 16 * (1 - incomingProgress)
                : 16;
            const scale = isOutgoing
              ? 1 - 0.03 * outgoingProgress
              : isIncoming
                ? 0.97 + 0.03 * incomingProgress
                : isCurrent
                  ? 1
                  : 0.97;

            return (
              <div
                key={Card.name}
                className="absolute inset-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                style={{
                  opacity,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  pointerEvents: opacity > 0.5 ? "auto" : "none",
                  willChange: "transform, opacity",
                  zIndex: isIncoming || isCurrent ? 2 : 1,
                }}
              >
                <Card />
              </div>
            );
          })}
        </div>
      </div>
    </div>
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

        <div className="mx-auto mt-12 hidden max-w-7xl items-stretch gap-4 sm:mt-14 lg:grid lg:grid-cols-3 lg:gap-5">
          <BrandGraphCard />
          <DiagnoseCard />
          <RecommendCard />
        </div>
        <div className="mx-auto mt-10 max-w-xl sm:mt-12 lg:hidden">
          <MobileCardSequence />
        </div>
      </div>
    </section>
  );
}
