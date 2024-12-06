import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HomeButtonStyle } from "../ui/styles";

interface HomeButtonProps {
  text: string;
  img: string;
  href: string;
}

export default function HomeButton({ text, img, href }: HomeButtonProps) {
  return (
    <Link
      href={href}
      className={`${HomeButtonStyle.base} ${HomeButtonStyle.mobile} ${HomeButtonStyle.desktop}`}
    >
      <Image src={img} alt={text} className="mb-2 p-[10px]" />
      <p className="text-center">
        {text.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <br />
          </React.Fragment>
        ))}
      </p>
    </Link>
  );
}
