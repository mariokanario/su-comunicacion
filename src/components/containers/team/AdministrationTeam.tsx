"use client"

import React from "react";
import Image from "next/image";

import One from "@/../../public/img/team/administration/01.jpg";
import Two from "@/../../public/img/team/administration/02.jpg";
import Three from "@/../../public/img/team/administration/03.jpg";
import Four from "@/../../public/img/team/administration/04.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";

const AdministrationTeam = () => {
  return (
    <section className="team__area p-relative z-index-11 pt-120 pb-120 overflow-hidden ab-team ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section__title-wrapper mb-60">
              <span className="section__subtitle-2">
                <span>Nuestro</span> equipo
              </span>
              <h2 className="section__title-2">
                Equipo Administrativo
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
        <div className="row " data-aos="fade-up" data-aos-delay="300">
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
                          <h3 className="text-white">Xiomara Vergara</h3>
                          <h4>Secretaria Administrativa</h4>
                          <p>Tecnólogo senior en T.I., con mas de 10 años de experiencia en todos los campos Hardware y Software</p>
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
                          <h3 className="text-white">Patricia Jaramillo</h3>
                          <h4>Auxiliar Administrativa y Contable</h4>
                          <p>Tecnólogo semi-senior en T.I., con mas de 4 años de experiencia en todos los campos Hardware y Software</p>
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
                          <h3 className="text-white">Carlos Lora</h3>
                          <h4>Gerente General</h4>
                          <p>Experto en Redes y telefonía, con mas de 20 años de experiencia en prestación de servicios y comercialización de suministros informáticos en el sector público y privado.</p>
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
                          <h3 className="text-white">Mauricio Jiménez</h3>
                          <h4>Subgerente</h4>
                          <p>Experto en logística, posee 20 años de experiencia en administración pública y análisis de proyectos.</p>
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

export default AdministrationTeam;
