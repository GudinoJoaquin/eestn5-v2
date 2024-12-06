import React from "react";
import Link from 'next/link'
import { SocialIcon } from "react-social-icons";

interface FooterProps {
  modal: (value: boolean) => void;
}

export default function Footer({ modal }: FooterProps) {
  return (
    <footer className="bg-black backdrop-filter backdrop-blur-lg backdrop-brightness-75 sm:py-2 select-none">
      <div className="flex flex-col md:flex-row justify-center items-center text-center w-full">
        {/* Navigation Links */}
        <div className="w-full md:w-1/2 mb-2 sm:mb-0 flex justify-center p-3">
          <ul className="list-none p-0 m-0 flex justify-center gap-5 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px]">
            <li className="relative text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] transition duration-[.3s]">
              <Link
                href="../contacto"
                className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              >
                Contactanos
              </Link>
            </li>
            <li className="relative text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] transition duration-[.3s]">
              <Link
                href="../anuncios"
                className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              >
                Anuncios
              </Link>
            </li>
            <li className="relative text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] transition duration-[.3s]">
              <Link
                href="../nosotros"
                className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              >
                Nosotros
              </Link>
            </li>
            <li className="relative text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] transition duration-[.3s]">
              <Link
                href="../especialidades"
                className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
              >
                Especialidades
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className=" w-full md:w-1/3 flex justify-center ">
          <ul className="list-none p-0 m-0 flex justify-center gap-[10px] sm:gap-[20px]">
            <li className="inline-block scale-[0.75] hover:scale-[0.85] hover:bg-blue-600 rounded-full transition duration-[.3s]">
              <SocialIcon
                url="https://www.facebook.com/EESTN5MDP/"
                bgColor="transparent"
              />
            </li>
            <li className="inline-block scale-[0.75] hover:scale-[0.85] hover:bg-pink-600 rounded-full transition duration-[.3s]">
              <SocialIcon
                url="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la"
                bgColor="transparent"
              />
            </li>
            <li className="inline-block scale-[0.75] hover:scale-[0.85] hover:bg-red-600 rounded-full transition duration-[.3s]">
              <SocialIcon
                url="mailto:infoT5@eest5mdp.edu.ar"
                bgColor="transparent"
              />
            </li>
            <li
              onClick={() => modal(true)}
              className="flex justify-center items-center scale-[0.75] hover:scale-[0.85] text-white hover:text-black text-[20px] p-[10px] font-semibold hover:bg-white rounded-[10px] transition duration-[.3s] "
            >
              <p>Desarrolladores</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
