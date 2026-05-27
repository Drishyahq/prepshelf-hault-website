import type { Metadata } from "next";
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
    </html>
  );
}
