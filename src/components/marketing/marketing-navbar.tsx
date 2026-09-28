"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/marketing/mobile-nav";

const navigation = [
  { label: "Product", href: "/product" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export function MarketingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-transparent">
      <div className="marketing-container flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-xl font-semibold tracking-[-0.045em] text-white transition-opacity hover:opacity-75"
          aria-label="Clonao home"
        >
          <img
            src="/clonao-logo.png"
            alt=""
            className="size-9 object-contain sm:size-10"
          />
          Clonao
        </Link>

        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-7 lg:flex">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={currentPath === link.href ? "page" : undefined}
              className={cn(
                "text-sm font-medium text-white/80 transition-colors hover:text-white",
                currentPath === link.href && "text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="bg-transparent lg:hidden">
          <MobileNav currentPath={currentPath} onNavigate={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
