"use client";

import Link from "next/link";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../app/i18n"; // archivo donde inicializamos i18next
import React from "react";
import { usePathname } from "next/navigation"; // <-- importamos usePathname

// Configuración de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { t, i18n: i18nInstance } = useTranslation("common");
  const pathname = usePathname(); // <-- obtenemos la ruta actual

  const toggleLanguage = () => {
    const nextLocale = i18nInstance.language === "es" ? "en" : "es";
    i18nInstance.changeLanguage(nextLocale);
  };

  return (
    <html lang={i18nInstance.language}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nextProvider i18n={i18n}>
          {/* Solo mostrar header si no estamos en la página principal */}
          {pathname !== "/" && (
            <header className="w-full h-20 bg-white/70 flex justify-between items-center px-9 py-4 fixed top-0 left-0 right-0 z-[9999] shadow-md">
              <nav className="flex justify-center gap-9 absolute md:static w-full text-black font-bold md:bg-transparent p-6 md:p-0 transition-all duration-300 overflow-hidden">
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  {t("menu.about")}
                </Link>

                <Link href="/project" className="hover:text-orange-400 transition-colors">
                  {t("menu.projects")}
                </Link>

                <Link href="/formulario" className="hover:text-orange-400 transition-colors">
                  {t("menu.contact")}
                </Link>

                <Link href="/inicio" className="hover:text-orange-400 transition-colors">
                  {t("menu.home")}
                </Link>

                <button
                  onClick={toggleLanguage}
                  className="ml-4 px-3 py-1 border rounded hover:bg-gray-200 transition-colors"
                >
                  {i18nInstance.language === "es" ? "EN" : "ES"}
                </button>
              </nav>
            </header>
          )}

          {/* Ajustamos padding si hay header */}
          <div className={pathname !== "/" ? "pt-20" : ""}>{children}</div>
          <ToastContainer />
        </I18nextProvider>
      </body>
    </html>
  );
}

