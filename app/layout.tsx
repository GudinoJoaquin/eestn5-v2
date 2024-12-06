"use client";

import { useState } from "react";

import "./globals.css";
import { notoSans } from "./ui/fonts";

import Footer from "./components/Footer";
import DevsModal from "./components/DevsModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`grid grid-rows-[1fr_auto] min-h-screen ${notoSans.className} antialiased`}
      >
        {children}
        <Footer modal={(estado) => setIsModalOpen(estado)} />
        {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
      </body>
    </html>
  );
}
