import { Network, Sparkles, Waypoints } from "lucide-react";

const pillars = [
  {
    title: "Brand Graph",
    description: "The complete context of who you are.",
    image: "https://i.postimg.cc/xqrBLF3j/Chat-GPT-Image-Oct-1-2026-12-18-26-AM.png",
    alt: "Brand Graph connecting the knowledge behind a personal brand",
    icon: Network,
  },
  {
    title: "Strategy",
    description: "A personalized plan for what matters next.",
    image: "https://i.postimg.cc/mr54tjqd/Chat-GPT-Image-Oct-1-2026-12-26-48-AM.png",
    alt: "Clonao strategy screen organizing a focused plan",
    icon: Waypoints,
  },
  {
    title: "Next Best Moves",
    description: "Clear, prioritized actions you can take now.",
    image: "https://i.postimg.cc/MTfSRRJp/Chat-GPT-Image-Oct-1-2026-12-27-14-AM.png",
    alt: "Clonao next best moves screen showing prioritized actions",
    icon: Sparkles,
  },
] as const;

export function ProductCards() {
  return (
    <section aria-labelledby="product-cards-heading" className="bg-[#f8fbfd] pb-24 pt-8 sm:pb-28 sm:pt-12 lg:pb-36 lg:pt-16">
      <div className="marketing-container">
        <h2 id="product-cards-heading" className="sr-only">
          The Clonao personal brand system
        </h2>

        <div className="grid gap-10 sm:gap-12 lg:-mx-6 lg:grid-cols-3 lg:gap-4 xl:gap-5">
          {pillars.map(({ title, description, image, alt, icon: Icon }) => (
            <article key={title} className="group min-w-0">
              <div className="relative overflow-hidden rounded-[1.35rem] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <img src={image} alt={alt} className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
              </div>

              <div className="mt-4 flex items-center gap-3 px-1 sm:mt-5 sm:gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3fd] text-[#142d65] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:size-14">
                  <Icon className="size-5 sm:size-6" strokeWidth={1.65} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.045em] text-[#132238] sm:text-[1.35rem]">{title}</h3>
                  <p className="mt-1 text-sm leading-5 text-[#65768b] sm:text-[0.95rem]">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
