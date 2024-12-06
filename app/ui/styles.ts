export const textStyles = {
    title: {
      base: "font-bold antialiased", // Estilos comunes
      mobile: "text-[15vw]",
      desktop: "lg:text-[90px]",
    },
    subtitle: {
      base: "font-semibold",
      mobile: "text-[6vw]",
      desktop: "lg:text-[40px]",
    },
    subtitleSmall: {
      base: "font-medium",
      mobile: "text-[6vw]",
      desktop: "lg:text-[30px]",
    },
};

export const CarruselStyles = {
  base: "border-2 grid place-items-center border-white text-balance rounded-[8px] backdrop-blur-[20px] bg-white/[2%] max-w-screen",
  mobile: "w-[250px] h-[110px]",
  desktop: "lg:w-[400px] lg:h-[150px]",
}

export const HomeButtonStyle = {
  base: 'rounded-[20px] flex justify-center items-center flex-col transition duration-[.3s] ease-in-out mb-4 text-white bg-white/[2%] backdrop-blur-[20px] font-semibold p-4 border-2 border-white shadow-md',
  mobile: 'w-[35%] text-[14px]',
  desktop: 'lg:w-[10%] lg:text-[16px]'
}