import React from "react";
import Image from "next/image";

import One from "@/../../public/img/svg/arrow-2.svg";
import Two from "@/../../public/img/boost/boost-01.png";

const ServiceBoost = () => {
  return (
    <div className="boost__area pt-120">
      <div className="container">
        <div className="row  " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-6 col-lg-6">
            <div className="boost__content-wrapper mb-60">
              <div className="section__title-wrapper mb-40">
                <h2 className="section__title-2">Política del Sistema de Gestión de Seguridad y Salud en el Trabajo</h2>
              </div>
              <p className="mb-0">
                La empresa SUMINISTROS Y SUCOMUNICACIÓN S.A.S identificada con NIT. 901.223.481-5,  se compromete con la implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) de acuerdo con lo establecido en la normatividad legal vigente; ,
              </p>
              <div className="approach__features s-2">
                <div className="approach__features-item">
                  <div className="approach__arrow">
                    <Image src={One} alt="Image" />
                  </div>
                  <div className="approach__text">
                    <span>Promoviendo el bienestar físico, mental y social de sus colaboradores</span>
                  </div>
                </div>

                <div className="approach__features-item">
                  <div className="approach__arrow">
                    <Image src={One} alt="Image" />
                  </div>
                  <div className="approach__text">
                    <span>Gestionando los riesgos a través de actividades de  identificación, evaluación, valoración y ejecución de controles para la intervención de los de los mismos</span>
                  </div>
                </div>
                
              </div>
              
              <p className="mt-4">Igualmente, se compromete en asignar los recursos físicos, humanos y económicos necesarios para tal fin, mejorando continuamente el SG-SST. Todos los colaboradores de la empresa, contratistas, subcontratistas y visitantes tienen el privilegio de contar con espacios seguros y confortables para el desarrollo de sus actividades, así mismo se les exige el cumplimiento de las normas en materia de Seguridad y Salud en el Trabajo.</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="boost__thumb-wrapper mb-60">
              <div className="boost__thumb w-img p-relative">
                <Image src={Two} alt="image not found" />
                <div className="boost__shape-1"></div>
              </div>
              <div className="boost__shape-2">
                <svg
                  id="Group_27289"
                  data-name="Group 27289"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.594"
                  height="19.655"
                  viewBox="0 0 25.594 19.655"
                >
                  <path
                    id="Path_26014"
                    data-name="Path 26014"
                    d="M321.713,46.082l-25.594,3.962,0,.008.163,1.6a23.645,23.645,0,0,0,7.662,14.089Z"
                    transform="translate(-296.119 -46.082)"
                    fill="#EA5518"
                  />
                </svg>
              </div>
              <div className="boost__shape-3"></div>
              <div className="boost__shape-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44.495"
                  height="44.279"
                  viewBox="0 0 44.495 44.279"
                >
                  <path
                    id="Path_26017"
                    data-name="Path 26017"
                    d="M437.625,75.1a11.863,11.863,0,1,1-13.383,10.112l-10.288-1.433a22.245,22.245,0,1,0,25.1-18.964Z"
                    transform="translate(-413.738 -64.809)"
                    fill="#425fec"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoost;
