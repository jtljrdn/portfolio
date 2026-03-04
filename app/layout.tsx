import type { Metadata } from "next";
import { Nunito_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jtlee.dev"),
  title: "Jordan Lee",
  description: "Personal website of Jordan Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
