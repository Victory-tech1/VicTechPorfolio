import type { Metadata } from "next";
import { Montserrat, Jura } from "next/font/google";
import "./globals.css";

const mont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VicTech Portfolio",
  description: "Visit VicTech's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.variable} ${jura.variable} antialiased app-bg`}
      >
        {children}
      </body>
    </html>
  );
}
