import type { ReactNode } from "react";

type MarketingShellProps = {
  children: ReactNode;
};

export function MarketingShell({ children }: MarketingShellProps) {
  return <main className="min-h-screen overflow-x-clip">{children}</main>;
}
