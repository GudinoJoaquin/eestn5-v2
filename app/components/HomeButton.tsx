<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HomeButtonProps {
  text: string;
  img: string;
  href: string;
}

export default function HomeButton({ text, img, href }: HomeButtonProps) {
  return (
    <Link
      href={href}
      className={` w-[35%] md:w-[150px] md:h-[150px] rounded-[20px] flex justify-center items-center flex-col hover:scale-[1.05] transition duration-300 ease-in-out mb-4 md:mb-0 text-white bg-white/[2%] backdrop-blur-[20px] font-semibold text-[14px] md:text-[16px] p-4 border-2 border-white  shadow-md`}
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
=======
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HomeButtonProps {
  text: string;
  img: string;
  href: string;
}

export default function HomeButton({ text, img, href }: HomeButtonProps) {
  return (
    <Link
      href={href}
      className={` w-[35%] md:w-[150px] md:h-[150px] rounded-[20px] flex justify-center items-center flex-col hover:scale-[1.05] transition duration-300 ease-in-out mb-4 md:mb-0 text-white bg-white/[2%] backdrop-blur-[20px] font-semibold text-[14px] md:text-[16px] p-4 border-2 border-white  shadow-md`}
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
>>>>>>> 9bef3aef9fddc72fa19662b1a60b17dd6332978a
