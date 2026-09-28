import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const recommendations = [
  {
    title: "Share your client onboarding framework",
    goal: "Authority",
  },
  {
    title: "Turn your latest case study into a proof post",
    goal: "Trust",
  },
  {
    title: "Reduce AI tools content this week",
    goal: "Positioning",
  },
];

export function HomeHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-atmosphere -mt-16 overflow-hidden pb-20 pt-36 sm:-mt-20 sm:pb-28 sm:pt-44 lg:pb-36 lg:pt-52"
    >
      <div className="marketing-container flex flex-col items-center text-center">
        <div className="hero-reveal hero-reveal-delay-1 flex flex-col items-center">
          <h1
            id="hero-heading"
            className="max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.5rem]"
          >
            The #1 Personal Brand Decision Engine for LinkedIn
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base font-medium leading-7 text-white/90 sm:mt-7 sm:text-lg sm:leading-8">
            Clonao understands your knowledge, content, and performance, then tells you what to create, improve, and focus on next.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 mt-8 flex items-center justify-center sm:mt-9">
          <Link
            href="/sign-up"
            className="metallic-cta inline-flex h-11 items-center justify-center gap-1.5 rounded-md px-5 text-sm font-medium text-white"
          >
            Start for free
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="hero-reveal hero-reveal-delay-3 mt-16 w-full max-w-[900px] sm:mt-20 lg:mt-24">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <div
      aria-label="Clonao product preview"
      className="overflow-hidden rounded-lg border border-foreground/10 bg-white/90 text-left shadow-[0_28px_80px_-38px_hsl(222_34%_12%_/_0.42)] backdrop-blur-sm sm:rounded-xl"
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-foreground/[0.07] bg-white/70 px-4 sm:h-11 sm:px-5">
        <span aria-hidden="true" className="size-2 rounded-full bg-foreground/15" />
        <span aria-hidden="true" className="size-2 rounded-full bg-foreground/15" />
        <span aria-hidden="true" className="size-2 rounded-full bg-foreground/15" />
        <span className="ml-3 text-[0.6875rem] font-medium text-foreground/35">app.clonao.com</span>
      </div>

      <div className="grid gap-8 p-5 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-10 sm:p-8 lg:p-10">
        <div>
          <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Good morning, Alex</p>
          <p className="mt-2 text-sm leading-6 text-foreground/55">Here’s what matters this week.</p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-sm font-semibold text-foreground sm:text-base">Your next best moves</h2>
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-foreground/35">Prioritized</span>
          </div>
          <div className="mt-4 divide-y divide-foreground/[0.08] border-y border-foreground/[0.08]">
            {recommendations.map((recommendation) => (
              <div key={recommendation.title} className="flex items-start gap-3 py-4">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e7f3fd] text-[#3275ae]">
                  <Check aria-hidden="true" className="size-3" strokeWidth={2.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-5 text-foreground/85">{recommendation.title}</p>
                  <p className="mt-1 text-xs text-foreground/45">Goal: {recommendation.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
