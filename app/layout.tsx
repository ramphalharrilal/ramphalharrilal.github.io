import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramphal Harrilal Portfolio",
  description:
    "Customer-focused websites, business solutions, technical support, QA and digital work by Ramphal Harrilal.",
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
