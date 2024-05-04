import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";


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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="prose-xl mx-auto w-full max-w-4xl px-4 dark:prose-invert 
        md:px-0">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
