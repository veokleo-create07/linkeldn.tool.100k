import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Clonao — Know exactly what to do next with your personal brand.",
    template: "%s | Clonao",
  },
  description: "Clonao is an AI decision engine for personal brands, starting with LinkedIn.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
