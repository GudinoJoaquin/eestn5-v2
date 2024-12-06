import Image from "next/image";
import background from "./assets/img/frente-escuela.webp";
import { montserrat } from "./ui/fonts";

import ButtonCarrusel from "./components/ButtonCarrusel";
import NoticeCarrusel from "./components/NewsCarrusel";
import Temporal from "./components/TemporalCarrusel";

export default function Home() {
  return (
    <>
      <main className="text-white flex flex-col items-center overflow-x-hidden">
        <Image
          src={background}
          alt="Fondo"
          layout="fill" // Ocupa todo el espacio del contenedor
          objectFit="cover" // Ajusta la imagen al tamaño del contenedor
          priority
          className="-z-10 brightness-[30%]" // Envía la imagen al fondo
        />
        <header className="flex flex-col items-center mt-[50px]">
          <h1
            className={`font-bold text-[15vw] ${montserrat.className} antialiased`}
          >
            E.E.S.T. N°5
          </h1>
          <h2 className={`font-semibold text-[6vw] mt-[-15px] `}>
            Amancio Williams
          </h2>
          <div className="border-b-2 border-white w-[50vw]"></div>
          <h3 className={`font-medium text-[5vw] `}>Mar del Plata</h3>
        </header>
        <section className="mt-[60px]">
          <Temporal />
        </section>
        <section className="mt-[10px]">
          <NoticeCarrusel />
        </section>
        <section className="mt-[20px]">
          <ButtonCarrusel />
        </section>
      </main>
    </>
  );
}
