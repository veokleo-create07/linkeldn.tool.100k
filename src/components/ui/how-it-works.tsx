import type { CSSProperties } from "react";

type CardTheme = "orange" | "blue" | "purple";

export type HowItWorksStep = {
  title: string;
  description: string;
  theme?: CardTheme;
};

type HowItWorksProps = {
  features: HowItWorksStep[];
};

const themeClasses: Record<CardTheme, { text: string; border: string }> = {
  orange: { text: "text-orange-500", border: "border-orange-100" },
  blue: { text: "text-blue-600", border: "border-blue-100" },
  purple: { text: "text-purple-600", border: "border-purple-100" },
};

const cardBackgrounds = [
  "url('/dreamy-blue-gradient.jpg')",
  "url('/ethereal-aqua-gradient.jpg')",
  "url('/lavender-blue-gradient.jpg')",
  "url('/coral-lavender-gradient.jpg')",
  "url('/pastel-aqua-gradient.jpg')",
  "linear-gradient(135deg, #dceeff 0%, #8ccbff 52%, #f8fbfd 100%)",
];

const positions = [
  "md:absolute md:left-[8%] md:top-0 md:rotate-6",
  "md:absolute md:right-[8%] md:top-[120px] md:-rotate-6",
  "md:absolute md:left-[8%] md:top-[390px] md:rotate-6",
  "md:absolute md:right-[8%] md:top-[510px] md:-rotate-6",
  "md:absolute md:left-[8%] md:top-[780px] md:rotate-6",
  "md:absolute md:right-[8%] md:top-[900px] md:-rotate-6",
];

export function HowItWorks({ features }: HowItWorksProps) {
  const height = features.length > 4 ? 1180 : features.length > 2 ? 850 : 500;

  return (
    <section className="relative overflow-hidden bg-[#f8fbfd] px-6 py-16 sm:px-8 sm:py-20 lg:py-24" aria-label="How Clonao works">
      <div className="relative mx-auto max-w-6xl">
        <div className="relative mx-auto w-full max-w-[1000px] md:h-[var(--steps-height)]" style={{ "--steps-height": `${height}px` } as CSSProperties}>
          {features.length > 1 ? (
            <svg className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block" viewBox={`0 0 1000 ${height}`} preserveAspectRatio="none" aria-hidden="true">
              <path d="M290 150 C500 150 550 270 710 270 C850 270 500 360 290 450 C290 600 550 720 750 720 C950 720 500 820 290 850 C290 960 550 1040 750 1040" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round" className="text-slate-300 [stroke-dashoffset:0] motion-safe:animate-[how-it-works-dash_3s_linear_infinite]" />
            </svg>
          ) : null}

          <div className="relative z-10 flex flex-col gap-8 md:block">
            {features.map((step, index) => {
              const theme = themeClasses[step.theme ?? "blue"];
              return (
                <article key={step.title} className={`w-full transition-transform duration-300 hover:z-20 hover:scale-[1.025] md:w-[280px] ${positions[index % positions.length]}`}>
                  <div className="rounded-[25px] border border-neutral-100 bg-white p-2 shadow-[0_10px_20px_0_rgba(211,211,211,0.75)]">
                    <div className={`relative flex min-h-[218px] flex-col overflow-hidden rounded-[15px] border bg-cover bg-center p-4 ${theme.border}`} style={{ backgroundImage: cardBackgrounds[index % cardBackgrounds.length] }}>
                      <div className="pointer-events-none absolute inset-0 bg-white/58" aria-hidden="true" />
                      <div className="relative z-10">
                        <span className="mb-5 block text-4xl font-semibold tracking-[-0.08em] text-[#050505]">{String(index + 1).padStart(2, "0")}</span>
                        <h3 className="mb-2 text-2xl font-semibold leading-none tracking-[-0.055em] text-neutral-900">{step.title}</h3>
                        <p className="text-sm font-medium leading-5 tracking-[-0.02em] text-[#050505]">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
