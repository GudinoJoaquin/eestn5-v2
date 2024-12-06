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
        slidesPerView={'auto'}
        loop
        pagination={{
          clickable: true,
        }}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="grid place-items-center pt-[20px] max-w-[1300px]"
      >
        {HomeButtonController.map((btnProps, index) => (
          <SwiperSlide
            key={index}
            style={{ background: "none", display: 'flex', justifyContent: 'center', alignItems: 'center', width: 600 }}
            className="grid place-items-center mb-[40px]"
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
