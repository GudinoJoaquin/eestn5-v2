"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../globals.css";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import { NoticeContent } from "../utils/utils";

export default function NoticeCarrusel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay
        pagination={true}
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="flex items-center justify-center"
      >
        {NoticeContent.map((notices, index) => (
          <SwiperSlide
            key={index}
            style={{ background: "none" }}
            className="grid place-items-center mb-[40px]"
          >
            <div className="border-2 grid place-items-center border-white w-[250px] text-balance h-[120px] rounded-[8px] backdrop-blur-[20px] bg-white/[2%]">
              {notices}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
