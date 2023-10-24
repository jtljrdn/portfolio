import "@/styles/globals.css";

export const metadata = {
  title: "jtlee.dev",
  description: "Personal Portfolio for Jordan Lee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">{children}</div>
      </body>
    </html>
  );
}
