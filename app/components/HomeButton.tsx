import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HomeButtonProps {
  text: string;
  img: string;
  href: string;
}

export default function HomeButton({ text, img, href }: HomeButtonProps) {
  
  const HomeButtonStyle = {
    base: 'rounded-[20px] flex justify-center items-center flex-col transition duration-[.3s] ease-in-out mb-4 text-white bg-white/[2%] backdrop-blur-[20px] font-semibold p-4 border-2 border-white shadow-md',
    mobile: 'w-[35%] text-[14px]',
    desktop: 'lg:w-[10%] lg:text-[16px]'
  }

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
