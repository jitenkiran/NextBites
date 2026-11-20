
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover delicious recipes with NextBites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <h2 className="logo">🍴 NextBites</h2>
            <span className="nav-label">Discover Recipes</span>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
