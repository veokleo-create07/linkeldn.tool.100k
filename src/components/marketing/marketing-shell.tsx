import type { ReactNode } from "react";
import { Footer } from "@/components/marketing/footer";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";

type MarketingShellProps = {
  children: ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  return (
    <>
      <MarketingNavbar />
      <main className="min-h-screen overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
