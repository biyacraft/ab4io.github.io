import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TinaCMS Blog",
  description: "My dev blog :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body >
        <div className="prose-xl mx-auto my-20 w-full max-w-4xl px-4 dark:prose-invert md:px-0">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
