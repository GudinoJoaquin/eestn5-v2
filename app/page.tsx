import Image from "next/image";
import background from "./assets/img/frente-escuela.webp";

import { montserrat } from "./ui/fonts";
import { textStyles } from "./ui/styles";

import ButtonCarrusel from "./components/ButtonCarrusel";
import NewsCarrusel from "./components/NewsCarrusel";
import TemporalCarrusel from "./components/TemporalCarrusel";

export default function Home() {

  return (
    <main
      className={`text-white flex flex-col items-center overflow-x-hidden background`}
    >
      <Image
        src={background}
        alt="Fondo"
        layout="fill" // Ocupa todo el espacio del contenedor
        objectFit="cover" // Ajusta la imagen al tamaño del contenedor
        priority
        className="-z-10 brightness-[30%]" // Envía la imagen al fondo
      />
      <header className="flex flex-col items-center mt-[50px]">
        {/* Título */}
        <h1
          className={`${textStyles.title.base} ${textStyles.title.mobile} lg:${textStyles.title.desktop} ${montserrat.className}`}
        >
          E.E.S.T. N°5
        </h1>

        {/* Subtítulos */}
        <h2
          className={`${textStyles.subtitle.base} ${textStyles.subtitle.mobile} lg:${textStyles.subtitle.desktop} mt-[-15px]`}
        >
          Amancio Williams
        </h2>
        <div className="border-b-2 border-white w-[50vw] lg:w-[17vw]"></div>
        <h3
          className={`${textStyles.subtitleSmall.base} ${textStyles.subtitleSmall.mobile} lg:${textStyles.subtitleSmall.desktop}`}
        >
          Mar del Plata
        </h3>
      </header>

      {/* Carruseles */}
      <section className="mt-[30px]">
        <TemporalCarrusel />
      </section>
      <section className="mt-[30px]">
        <NewsCarrusel />
      </section>
      <section className="mt-[5px]">
        <ButtonCarrusel />
      </section>
    </main>
  );
}
