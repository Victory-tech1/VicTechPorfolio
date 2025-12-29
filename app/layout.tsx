import type { Metadata } from "next";
import { Montserrat, Jura } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  variable: "--font-mono",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victory Tech Portfolio",
  description: "Visit Victory Tech's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.variable} ${jura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
