"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import "./globals.css";
import { notoSans } from "./ui/fonts";
import background from "./assets/img/frente-escuela.webp";

import Footer from "./components/Footer";
import DevsModal from "./components/DevsModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const handleModalState = (estado: boolean) => {
    setIsModalOpen(estado);
  };

  return (
    <html lang="en" className={`${notoSans.className}`}>
      <body
        className={`grid ${
          pathname === "/"
            ? "grid-rows-[1fr_auto]"
            : "grid-rows-[auto_1fr_auto]"
        } min-h-screen antialiased`}
      >
        {pathname !== "/" ? (
          <header>
            <Image
              src={background}
              alt="background"
              width={1920}
              height={400}
              priority
              className="brightness-[40%] w-full h-[400px] object-cover bg-origin-content bg-fixed"
            />
          </header>
        ) : (
          ""
        )}

        {children}

        <Footer modal={handleModalState} />

        {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
      </body>
    </html>
  );
}
