"use client";
import Link from "next/link";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

// Configuración de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header fijo con menú */}
        <header className="w-full h-20 bg-white-700  flex justify-between items-center px-9 py-4 fixed top-0 z-50 shadow-md">
          <nav className="flex  flex justify-center  gap-9 absolute md:static  w-full  text-black/100 font-bold md:bg-transparent p-6 md:p-0 transition-all duration-300 overflow-hidden">
            <Link href="/about" className="hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="/project" className="hover:text-orange-400 transition-colors">
              Project
            </Link>
            <Link href="/formulario" className="hover:text-orange-400 transition-colors">
              Contact
            </Link>
            <Link href="/inicio" className="hover:text-orange-400 transition-colors">
              Home
            </Link>
          </nav>
        </header>

      
        <div className="pt-20">
          {children}
        </div>

        <ToastContainer />
      </body>
    </html>
  );
}

