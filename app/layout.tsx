import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Themeswitch from "@/components/Theme-switch";
import ThemeContextProvider from "@/context/theme-context";

export const metadata: Metadata = {
  title: "Mohamed Mishaj | Experienced Full-Stack Developer",
  description: "Discover the portfolio of Mohamed Mishaj, a seasoned full-stack developer with extensive experience in building robust web applications. Explore projects, skills, and professional achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">

      <body className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#b0e2a3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#0f583c]"></div>
        <div className="bg-[#9db0f1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#25325a]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <Themeswitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
