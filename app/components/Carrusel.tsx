"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Carrusel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <div className="bg-red-500 h-[100px]">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 h-[100px]">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 h-[100px]">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-orange-500 h-[100px]">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 h-[100px]">Slide 5</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
