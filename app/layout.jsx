import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "jtlee.dev",
  description: "Personal Portfolio for Jordan Lee, Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Jordan Lee</title>
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto sm:px-16 px-6">
          
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
