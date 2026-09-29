import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "€39",
    description: "For individuals building their personal brand.",
    features: ["Brand Graph", "Diagnosis", "Weekly strategy", "Next Best Moves", "Create", "Basic analytics"],
    emphasized: false,
  },
  {
    name: "Pro",
    price: "€69",
    description: "For serious founders, creators, and consultants.",
    features: ["Everything in Starter", "Deeper Brand Graph", "More knowledge sources", "Advanced analytics", "Higher usage limits", "More strategic recommendations"],
    emphasized: true,
  },
] as const;

export function PricingSection() {
  return (
    <section aria-labelledby="pricing-heading" className="bg-[#f8fbfd] py-24 sm:py-28 lg:py-36">
      <div className="marketing-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#3977a9]">Simple pricing</p>
          <h2 id="pricing-heading" className="text-balance mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#101826] sm:text-5xl lg:text-[4.1rem]">
            A clearer way to build your brand.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#647384] sm:text-lg sm:leading-8">
            Start with the decision layer your personal brand needs now, then grow into deeper strategic context as you do.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2 lg:gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                "flex flex-col rounded-[1.5rem] border bg-white p-6 shadow-[0_24px_58px_-42px_rgba(20,50,76,0.34)] sm:p-8",
                plan.emphasized ? "border-[#6fb7fd] shadow-[0_28px_70px_-42px_rgba(32,104,177,0.42)]" : "border-[#dfe8ef]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.045em] text-[#101826]">{plan.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#647384]">{plan.description}</p>
                </div>
                {plan.emphasized && <span className="pt-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#2563a6]">More context</span>}
              </div>

              <div className="mt-8 flex items-end gap-2 border-b border-[#e5edf3] pb-7">
                <span className="text-5xl font-semibold leading-none tracking-[-0.07em] text-[#101826]">{plan.price}</span>
                <span className="pb-1 text-sm text-[#748392]">/ month</span>
              </div>

              <ul className="mt-6 space-y-4" aria-label={`${plan.name} features`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#26394d]">
                    <Check aria-hidden="true" className="size-4 shrink-0 text-[#2563a6]" strokeWidth={1.8} />
                    <span className={feature === "Everything in Starter" ? "font-medium" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/sign-up"
                className={[
                  "mt-10 inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6] focus-visible:ring-offset-2",
                  plan.emphasized ? "bg-[#101826] text-white hover:bg-[#1d3044]" : "border border-[#cbd9e4] bg-white text-[#101826] hover:border-[#8bbce5] hover:bg-[#f5faff]",
                ].join(" ")}
              >
                Start free trial
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#748392]">7-day free trial · No permanent free plan</p>
      </div>
    </section>
  );
}
