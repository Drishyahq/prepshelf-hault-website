import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrepShelf Pause Notice",
  description:
    "PrepShelf is temporarily offline after the exam season and will return improved. Premium subscriptions remain safe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9574593667806187"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </html>
  );
}
