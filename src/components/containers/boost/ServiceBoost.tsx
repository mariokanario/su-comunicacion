import React from "react";
import Image from "next/image";

import One from "@/../../public/img/svg/arrow-2.svg";
import Two from "@/../../public/img/illustrations/consulting.svg";

const ServiceBoost = () => {
  return (
    <div className="boost__area pt-120">
      <div className="container">
        <div className="row  " data-aos="fade-up" data-aos-delay="100">
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
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBoost;
