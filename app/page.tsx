import dynamic from "next/dynamic";
import Image from "next/image";
import background from "./assets/img/frente-escuela.webp";

import { montserrat } from "./ui/fonts";

import { textStyles } from "./ui/styles";

const ButtonCarrusel = dynamic(() => import("./components/ButtonCarrusel"));
const NewsCarrusel = dynamic(() => import("./components/NewsCarrusel"));
const TemporalCarrusel = dynamic(() => import("./components/TemporalCarrusel"));

export default function Home() {
  const titleClass = `${textStyles.title.base} ${textStyles.title.mobile} ${textStyles.title.desktop} ${montserrat.className}`;
  const subtitleClass = `${textStyles.subtitle.base} ${textStyles.subtitle.mobile} ${textStyles.subtitle.desktop}`;
  const subtitleSmallClass = `${textStyles.subtitleSmall.base} ${textStyles.subtitleSmall.mobile} ${textStyles.subtitleSmall.desktop}`;

  return (
    <main
      className={`text-white flex flex-col items-center overflow-x-hidden background`}
    >
      <Image
        src={background}
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="-z-10 brightness-[30%]"
      />

      <header className="flex flex-col items-center mt-[10px]">
        <h1 className={titleClass}>E.E.S.T. N°5</h1>

        <h2 className={`${subtitleClass} mt-[-15px]`}>Amancio Williams</h2>
        <div className="border-b-2 border-white w-[50vw] lg:w-[17vw]"></div>
        <h3 className={subtitleSmallClass}>Mar del Plata</h3>
      </header>

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
