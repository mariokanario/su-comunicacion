"use client"

import React from "react";
import Image from "next/image";
import One from "@/../public/img/brand/1.jpg";
import Two from "@/../public/img/brand/2.jpg";
import Three from "@/../public/img/brand/3.jpg";
import Four from "@/../public/img/brand/4.jpg";
import Five from "@/../public/img/brand/5.jpg";
import Six from "@/../public/img/brand/6.jpg";
import Seven from "@/../public/img/brand/7.jpg";
import Eight from "@/../public/img/brand/8.jpg";
import Nine from "@/../public/img/brand/9.jpg";
import Ten from "@/../public/img/brand/10.jpg";
import Eleven from "@/../public/img/brand/11.jpg";
import Twelve from "@/../public/img/brand/12.jpg";
import Thirteen from "@/../public/img/brand/13.jpg";
import Fourteen from "@/../public/img/brand/14.jpg";
import Fifteen from "@/../public/img/brand/15.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
const SponsorTwo = () => {
  return (
    <div className="brand__area pt-120 pb-120">
      <div className="container">
        <div className="brand__title">
          <span>Cientos de empresas confiaron en nosotros</span>
        </div>
        <div
          className="row justify-content-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-12">
            <div className="swiper brand__active">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={false}
                loop={true}
                navigation={false}
                className="swiper-wrapper"
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  400: {
                    slidesPerView: 2,
                  },
                  600: {
                    slidesPerView: 3,
                  },

                  1024: {
                    slidesPerView: 4,
                  },

                  1500: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={One} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Two} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Three} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Four} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Five} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Six} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Seven} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Eight} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Nine} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Ten} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Eleven} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Twelve} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Thirteen} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Fourteen} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide brand__line">
                    <div className="singel__brand">
                      <Image src={Fifteen} alt="image not found" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorTwo;
