import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RH Tech Support | Web Design & Digital Support",
  description:
    "Websites that work, professional web design, digital support and practical business solutions by Ramphal Harrilal.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
