"use client"

import React from "react";
import Link from "next/link";

const AboutCounter = () => {
  

  return (
    <section className="fact__area pt-120 pb-90 bg-white">
      <div className="container">
        
        <div className="row " data-aos="fade-up" data-aos-delay="300">

          <div className="col-xl-12 col-lg-12">
            <div className="feedback__content-wrapper mb-60">
              <div className="section__title-wrapper">
                {/* <span className="section__subtitle">
                  <span>customer </span> feedback
                </span> */}
                <h2 className="section__title mb-30">
                  Valores <span className="down__mark-line">coporativos</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="fact__item mb-30">
              <div className="fact__count">
                <div className="fact__number">
                  <span className="counter" >
                    Comunicación
                  </span>
                </div>
                <div className="fact__letter">
                  <span></span>
                  <span className="plus">+</span>
                </div>
              </div>
              <div className="fact__content">
                <p>Promovemos, potenciamos y generamos la transmisión de la información eficientemente, desde y hacia nuestros clientes.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="fact__item mb-30">
              <div className="fact__count">
                <div className="fact__number">
                  <span className="counter" >
                    Honestidad
                  </span>
                </div>
                <div className="fact__letter">
                  <span></span>
                  <span className="plus">+</span>
                </div>
              </div>
              <div className="fact__content">
                <p>La ética e integridad  se destacan como preceptos  de todo nuestro  personal  y en los diferentes  tipos de servicios que prestamos.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="fact__item mb-30">
              <div className="fact__count">
                <div className="fact__number">
                  <span className="counter" >
                    Compromiso
                  </span>
                </div>
                <div className="fact__letter">
                  <span></span>
                  <span className="plus">+</span>
                </div>
              </div>
              <div className="fact__content">
                <p>Realizamos acompañamiento constante a los  proyectos que iniciamos, garantizando su terminación exitosa.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="fact__item mb-30">
              <div className="fact__count">
                <div className="fact__number">
                  <span className="counter" >
                    Confidencialidad
                  </span>
                </div>
                <div className="fact__letter">
                  <span></span>
                  <span className="plus">+</span>
                </div>
              </div>
              <div className="fact__content">
                <p>Manejamos todos los protocolos y políticas de seguridad, confiabilidad y responsabilidad en el manejo de la información.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
