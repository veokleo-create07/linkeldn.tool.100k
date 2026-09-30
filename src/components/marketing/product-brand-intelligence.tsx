import { AlertCircle, ArrowRight, CheckCircle2, Network, Search } from "lucide-react";

const graphCategories = ["Expertise", "Stories", "Opinions", "Proof", "Audience", "Offers", "Topics"];

const diagnosisSignals = [
  { label: "Strong association", value: "AI Automation", tone: "strong", icon: CheckCircle2 },
  { label: "Missing proof", value: "AI implementation results", tone: "missing", icon: AlertCircle },
  { label: "Overused topic", value: "AI tools", tone: "overused", icon: Search },
  { label: "Weak positioning", value: "Founder Strategy", tone: "weak", icon: Network },
] as const;

const signalStyles = {
  strong: "text-[#23835f]",
  missing: "text-[#b27a18]",
  overused: "text-[#2563a6]",
  weak: "text-[#7f63ae]",
} as const;

export function ProductBrandIntelligence() {
  return (
    <section aria-labelledby="product-brand-intelligence-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Brand intelligence</p>
          <h2 id="product-brand-intelligence-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[3.8rem]">
            Clonao learns who you are before it tells you what to do.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Your expertise, stories, opinions, proof, audience, offers, topics, and performance become a living Brand Graph that Clonao can diagnose and use across the product.
          </p>
        </div>

        <BrandIntelligencePreview />
      </div>
    </section>
  );
}

function BrandIntelligencePreview() {
  return (
    <div aria-label="Clonao Brand Graph and diagnosis preview" className="relative rounded-[1.625rem] border border-white/80 bg-[linear-gradient(145deg,rgba(241,247,250,0.94),rgba(194,211,222,0.78))] p-2 shadow-[0_30px_66px_-36px_rgba(20,65,103,0.58)] backdrop-blur-2xl sm:p-3">
      <div className="pointer-events-none absolute inset-0 rounded-[1.625rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.64),rgba(255,255,255,0.08)_48%,rgba(133,157,173,0.15))]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.2rem] border border-white/80 bg-[#f8fbfd]/72 shadow-[0_18px_48px_-34px_rgba(16,24,38,0.5)]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6fb7fd]/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-7 p-5 sm:p-7 lg:grid-cols-[minmax(0,0.92fr)_5rem_minmax(0,1.18fr)] lg:gap-4 lg:p-8">
          <section aria-labelledby="brand-graph-preview-heading">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">Structured context</p>
            <div className="mt-2 flex items-center gap-2.5">
              <Network className="size-5 text-[#101826]" strokeWidth={1.55} aria-hidden="true" />
              <h3 id="brand-graph-preview-heading" className="text-xl font-semibold tracking-[-0.045em] text-[#101826]">Brand Graph</h3>
            </div>
            <div className="mt-5 divide-y divide-[#cad9e3]/80 border-y border-[#cad9e3]/80">
              {graphCategories.map((category, index) => (
                <div key={category} className="flex items-center justify-between py-2.5">
                  <span className="text-sm font-medium text-[#26394d]">{category}</span>
                  <span className={`size-1.5 rounded-full ${index < 4 ? "bg-[#4d9cf3]" : "bg-[#b4c7d4]"}`} aria-hidden="true" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#7893a6]">Grounded in your real sources.</p>
          </section>

          <div className="relative flex items-center justify-center lg:px-1" aria-hidden="true">
            <span className="h-px w-full bg-[#71899a]/45 lg:block" />
            <span className="absolute flex size-8 items-center justify-center rounded-full border border-white/90 bg-[#eef5f9]/90 text-[#2563a6] shadow-[0_8px_18px_-12px_rgba(20,65,103,0.7)]">
              <ArrowRight className="size-4" strokeWidth={1.6} />
            </span>
          </div>

          <section aria-labelledby="diagnosis-preview-heading">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#3977a9]">What Clonao sees</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <h3 id="diagnosis-preview-heading" className="text-xl font-semibold tracking-[-0.045em] text-[#101826]">Diagnosis</h3>
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#7893a6]">From your Brand Graph</span>
            </div>
            <div className="mt-5 divide-y divide-[#cad9e3]/80 border-y border-[#cad9e3]/80">
              {diagnosisSignals.map(({ label, value, tone, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 py-3.5">
                  <Icon className={`size-4 shrink-0 ${signalStyles[tone]}`} strokeWidth={1.7} aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-[0.67rem] font-medium uppercase tracking-[0.08em] text-[#7893a6]">{label}</p>
                    <p className="mt-1 truncate text-sm font-medium text-[#1d3044]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#7893a6]">Diagnosis becomes direction for the next recommendation.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
