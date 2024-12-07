"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "react-js-loader";

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

import { CarruselStyles } from "../ui/styles";

import useFetch from "../hooks/useFetch";

interface ApiResponse {
  id: number;
  titulo: string;
}

export default function NoticeCarrusel() {
  const { data, loading, error } = useFetch<ApiResponse[]>(
    "https://anuncios.vercel.app"
  );

  if (error) {
    return <h1>Error</h1>;
  }

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
        {loading ? (
          <div
            className={`${CarruselStyles.base} ${CarruselStyles.mobile} ${CarruselStyles.desktop}`}
          >
            <Loader
              bgColor={"#fff"}
              color={"#ffff"}
            />
          </div>
        ) : (
          data?.slice(0, 3).map((anuncio) => (
            <SwiperSlide
              key={anuncio.id}
              style={{
                background: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="grid place-items-center"
            >
              <div
                className={`${CarruselStyles.base} ${CarruselStyles.mobile} ${CarruselStyles.desktop}`}
              >
                {anuncio.titulo}
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
}
