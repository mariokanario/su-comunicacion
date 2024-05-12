"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "@/../../public/img/team/network/01.jpg";
import Two from "@/../../public/img/team/network/02.jpg";
import Three from "@/../../public/img/team/network/03.jpg";
import Four from "@/../../public/img/team/network/04.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";

const NetworkTeam = () => {
  return (
    <section className="team__area p-relative z-index-11 pt-120 pb-120 overflow-hidden ab-team">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section__title-wrapper mb-60">
              <span className="section__subtitle-2">
                <span>Nuestro</span> equipo
              </span>
              <h2 className="section__title-2">
                Equipo de Redes
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team__navigation">
              <button className="team__button-prev">
                <i className="fa-regular fa-arrow-left-long"></i>
              </button>
              <button className="team__button-next">
                <i className="fa-regular fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row " data-aos="fade-up" data-aos-delay="100">
          <div className="col-12">
            <div className="swiper">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  roundLengths={true}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".team__button-next",
                    prevEl: ".team__button-prev",
                  }}
                  className="team__active"
                  breakpoints={{
                    576: {
                      slidesPerView: 2,
                    },

                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team__item">
                        <div className="team__thumb">
                          <Image src={One} alt="image not found" />
                        </div>
                        <div className="team__content">
                          <h3 className="text-white">Esteven Salgado</h3>
                          <h4>Líder de Redes, Telefonía y Mantenimiento</h4>
                          <p>Senior - Experto en con mas de 15 años de experiencia en análisis, evaluación, implementación de requerimientos en redes, cableado estructurado, Fibrra óptica</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team__item">
                        <div className="team__thumb">
                          <Image src={Two} alt="image not found" />
                        </div>
                        <div className="team__content">
                          <h3 className="text-white">Jose Luis Lora Serna</h3>
                          <h4>Técnico de Redes, Telefonía y Mantenimiento</h4>
                          <p>Senior - Experto con  mas de 15 años de experiencia en el montaje y mantenimiento de redes y telefonía.</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                 

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team__item">
                        <div className="team__thumb">
                          <Image src={Three} alt="image not found" />
                        </div>
                        <div className="team__content">
                          <h3 className="text-white">Ever Goez</h3>
                          <h4>Técnico de Redes, Telefonía y Mantenimiento</h4>
                          <p>Junior con  mas de 3 años de experiencia en el montaje y mantenimiento de  redes de telefonía y cableado estructurado.</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="team__item">
                        <div className="team__thumb">
                          <Image src={Four} alt="image not found" />
                        </div>
                        <div className="team__content">
                          <h3 className="text-white">Yeison Lora</h3>
                          <h4>Técnico de Redes, Telefonía y Mantenimiento</h4>
                          <p>Junior con  mas de 3 años de experiencia en el montaje y mantenimiento de redes de telefonía y cableado estructurado.</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkTeam;
