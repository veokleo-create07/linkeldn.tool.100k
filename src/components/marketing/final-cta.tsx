import Link from "next/link";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-[linear-gradient(180deg,#f8fbfd_0%,#e8f4fd_48%,#f8fbfd_100%)] py-28 sm:py-32 lg:py-40">
      <div className="marketing-container">
        <div className="ml-auto max-w-[78rem] text-right">
          <h2 id="final-cta-heading" className="text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.065em] text-black sm:text-4xl lg:whitespace-nowrap lg:text-[3.25rem]">
            Turn your knowledge into the personal brand you should be known for.
          </h2>
          <p className="ml-auto mt-4 max-w-none text-3xl leading-[1.05] tracking-[-0.065em] text-[#7893a6] sm:text-4xl lg:whitespace-nowrap lg:text-[3.25rem]">
            Try Clonao today and get your personal brand diagnosis.
          </p>

          <div className="mt-8 flex flex-col items-end justify-end gap-5 sm:flex-row sm:gap-7">
            <Link
              href="/sign-up"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#101826] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1d3044] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6] focus-visible:ring-offset-2"
            >
              Start your 7-day free trial
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#26394d] transition-colors hover:text-[#2563a6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6] focus-visible:ring-offset-2"
            >
              See how Clonao works
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
