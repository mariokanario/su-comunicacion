import React from "react";
import Image from "next/image";

import One from "@/../../public/img/shape/about-shape-1.png";
import Two from "@/../../public/img/shape/about-shape-2.png";
import Three from "@/../../public/img/shape/rectangle-3.png";
import Four from "@/../../public/img/shape/rectangle-4.png";
import Five from "@/../../public/img/illustrations/ilustracion2.gif";

const AboutTwo = () => {
  return (
    <div className="about__area grey-bg z-index-11 p-relative pt-120 pb-60">
      {/* <div className="about__shape-1">
        <Image src={One} alt="image not found" />
      </div> */}
      {/* <div className="about__shape-2">
        <Image src={Two} alt="image not found" />
      </div> */}
      {/* <div className="about__shape-3">
        <Image src={Three} alt="image not found" />
      </div> */}
      {/* <div className="about__shape-4">
        <Image src={Four} alt="image not found" />
      </div> */}
      <div className="container">
        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper mb-60">
              <div className="about__thumb w-img pe-5">
                <Image src={Five} alt="image not found" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__content-wapper mb-60">
              <div className="section__title-wrapper mb-40">
                <span className="section__subtitle-2">
                  <span>Que</span> hacemos
                </span>
                <h2 className="section__title-2">
                  Suministros & Sucomunicación S.A.S
                </h2>
              </div>
              <p>
                Somos una empresa fundada en Medellín desde 2004, dedicada a la venta de productos y servicios tecnológicos en el sector público y privado.  
              </p>
              <div className="about__features-box">
                <div className="about__features-item">
                  <div className="about__features-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="about__features-content">
                    <p>
                      Contamos con más de 18 años de experiencia y reconocimiento en el departamento de Antioquia.
                    </p>
                  </div>
                </div>
                <div className="about__features-item">
                  <div className="about__features-icon s-2">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="about__features-content">
                    <p>
                      Como política empresarial tenemos el buen desempeño y la ética hacia todos nuestros clientes y empleados, las buenas prácticas empresariales y logísticas  son el pilar de nuestro funcionamiento, el cual se ve reflejado en el buen nombre que representa nuestra marca.
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
