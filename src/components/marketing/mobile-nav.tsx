import Link from "next/link";
import { cn } from "@/lib/utils";

const mobileLinks = [
  { label: "Product", href: "/product" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

type MobileNavProps = {
  currentPath: string;
  onNavigate: () => void;
};

export function MobileNav({ currentPath, onNavigate }: MobileNavProps) {
  return (
    <nav aria-label="Mobile navigation" className="border-t border-white/10 px-5 pb-5 pt-3 text-white sm:px-6">
      <div className="flex flex-col">
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={currentPath === link.href ? "page" : undefined}
            className={cn(
              "border-b border-white/10 py-3.5 text-[0.9375rem] font-medium text-white/75 transition-colors hover:text-white",
              currentPath === link.href && "text-white",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
