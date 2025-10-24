"use client";
import Link from "next/link";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

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
        <header className="w-full bg-black text-white flex justify-between items-center px-6 py-4 fixed top-0 z-50 shadow-md">
          <nav className="flex flex-col md:flex-row gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 transition-all duration-300 overflow-hidden">
            <Link href="/about" className="hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="/project" className="hover:text-orange-400 transition-colors">
              Project
            </Link>
            <Link href="/form" className="hover:text-orange-400 transition-colors">
              Contact
            </Link>
          </nav>
        </header>

        {/* Contenedor con padding para que el contenido no quede tapado */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}

