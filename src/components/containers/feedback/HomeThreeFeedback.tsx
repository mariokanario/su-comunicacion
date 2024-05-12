"use client"

import React from "react";
import Image from "next/image";

import One from "@/../../public/img/shape/feedback-pattren.png";
import Four from "@/../../public/img/about/team.png";
import "swiper/css";

const HomeThreeFeedback = () => {
  return (
    <section className="feedback__area pt-120 pb-60 grey-bg">
      <div className="feedback__pattren">
        <Image src={One} alt="image not found" />
      </div>
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="100">
          <div className="col-xl-12 col-lg-12">
            <div className="feedback__content-wrapper mb-60">
              <div className="section__title-wrapper">
                {/* <span className="section__subtitle">
                  <span>customer </span> feedback
                </span> */}
                <h2 className="section__title mb-30">
                  Nuestro <span className="down__mark-line">equipo</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <Image src={Four} alt="image not found" />
                <div className="feedbacK__content-wrapper space">
                  <div className="feedback__active">
                    <h3>
                      ! Familia ! <span className="fw-normal">es  el estatus de ambiente laboral y la expresión de sentimiento que redunda al interior de nuestra  compañía,  crecer junto a nuestros clientes  es  la premisa, creciendo cada día en  calidad, con ética y compromiso.</span>
                    </h3>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeFeedback;
