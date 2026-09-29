import Link from "next/link";

const linkGroups = [
  {
    title: "Product",
    links: [
      ["Product", "/product"],
      ["How it works", "/how-it-works"],
      ["Pricing", "/pricing"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Resources", "/resources"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="h-24 bg-[linear-gradient(180deg,#f8fbfd_0%,#cbd2d9_38%,#4a5057_76%,#000000_100%)]" aria-hidden="true" />
      <div className="bg-black">
        <div className="marketing-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(15rem,1.4fr)_minmax(0,2fr)_minmax(11rem,0.8fr)] lg:gap-20">
            <div>
              <Link href="/" className="text-2xl font-semibold tracking-[-0.055em] text-white transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                Clonao
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
                Know exactly what to do next with your personal brand.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {linkGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{group.title}</h2>
                  <ul className="mt-5 space-y-3.5">
                    {group.links.map(([label, href]) => (
                      <li key={label}>
                        <Link href={href} className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <Link href="/sign-up" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-[#101826] transition-colors hover:bg-[#dceeff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                Start free trial
              </Link>
              <Link href="/sign-in" className="mt-5 text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                Log in
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.12] pt-6 text-xs text-white/40 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Clonao</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="transition-colors hover:text-white/75">Privacy</Link>
              <Link href="/terms" className="transition-colors hover:text-white/75">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
