import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Theme-Provider";
import { switchThemeDuration } from "./constants";
import Fabicon from "./components/Fabicon";
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejas K Saindane | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#050816] ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="h-16 w-full top-0 left-0 fixed z-1000 opacity-100">
            <Navbar />
          </div>

          <Fabicon />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
