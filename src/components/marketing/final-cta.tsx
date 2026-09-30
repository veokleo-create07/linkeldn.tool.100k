import Link from "next/link";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-[linear-gradient(180deg,#f8fbfd_0%,#e8f4fd_48%,#f8fbfd_100%)] py-28 sm:py-32 lg:py-40">
      <div className="marketing-container">
        <div className="ml-auto max-w-[78rem] text-right">
          <h2 id="final-cta-heading" className="text-balance text-xl font-semibold leading-[1.1] tracking-[-0.045em] text-black sm:text-2xl lg:whitespace-nowrap lg:text-[2.15rem]">
            Turn your knowledge into the brand you should be known for.
          </h2>
          <p className="ml-auto mt-4 max-w-none text-xl leading-[1.1] tracking-[-0.045em] text-[#7893a6] sm:text-2xl lg:whitespace-nowrap lg:text-[2.15rem]">
            Try Clonao today and get your personal brand diagnosis.
          </p>
          <div className="mt-6 flex justify-end">
            <Link
              href="/sign-up"
              className="metallic-cta inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563a6] focus-visible:ring-offset-2"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
