"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import HomeButton from "./HomeButton";

import { HomeButtonController } from "../utils/utils";

export default function ButtonCarrusel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop
        pagination={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="pt-[20px]"
      >
        {HomeButtonController.map((btnProps, index) => (
          <SwiperSlide
            key={index}
            style={{ background: "none" }}
            className="grid place-items-center mb-[20px]"
          >
            <HomeButton
              text={btnProps.text}
              img={btnProps.img}
              href={btnProps.href}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
