import Link from "next/link";
import Image from "next/image";

interface HomeButtonProps {
    text?: string;
    img?: string;
    to?: string;
    onClick?: () => void;
}

export default function HomeButton({ text = '', img = '', to = '', onClick } : HomeButtonProps) {
  return (
    <Link
      href={to}
      className={`bg-verde-oscuro w-[35%] md:w-[150px] md:h-[150px] rounded-[20px] flex justify-center items-center flex-col hover:scale-110 transition duration-300 ease-in-out mb-4 md:mb-0 text-white font-semibold text-[14px] md:text-[16px] p-4 border border-white-600 hover:border-white shadow-md`}
      onClick={onClick}
    >
      <Image src={img} alt="" width={60} className="mb-2" />
      <p className="text-center">
        {text}
      </p>
    </Link>
  );
}
