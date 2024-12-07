export const textStyles = {
    title: {
      base: "font-bold antialiased animate-fade-in-down", // Estilos comunes
      mobile: "text-[15vw]",
      desktop: "lg:text-[90px]",
    },
    subtitle: {
      base: "font-semibold animate-fade-in-down",
      mobile: "text-[6vw]",
      desktop: "lg:text-[40px]",
    },

    subtitleSmall: {
      base: "font-medium animate-fade-in-up",
      mobile: "text-[6vw]",
      desktop: "lg:text-[30px]",
    },
};

export const CarruselStyles = {
  base: "border-2 grid place-items-center border-white text-center text-balance rounded-[8px] backdrop-blur-[20px] bg-white/[2%] max-w-screen",
  mobile: "w-[250px] min-w-[250px] h-[110px] min-h-[110px] text-[14px]",
  desktop: "lg:w-[420px] lg:min-w-[420px] lg:h-[170px] lg:min-h-[170px] lg:text-[25px]",
}

export const HomeButtonStyle = {
  base: 'animate-fade-in-down rounded-[20px] flex justify-center items-center flex-col transition duration-[.3s] ease-in-out mb-4 text-white bg-white/[2%] backdrop-blur-[20px] font-semibold p-4 border-2 border-white shadow-md',
  mobile: 'w-[25%] text-[14px]',
  desktop: 'lg:w-[30%] lg:text-[16px]'
}