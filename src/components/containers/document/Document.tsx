import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "@/../../public/img/illustrations/docuManagement.svg";
import Arrow from "@/../../public/img/svg/arrow-2.svg";


const Document = () => {
  return (
    <div className="development__area pt-90 pb-60 banner-bg-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="section__title-wrapper text-center mb-70 pt-120">
              <div className="section__title-3">
                Gestión Documental y Archivística
              </div>
              
            </div>
            <p>
              Tenemos  a su disposición una completa línea de actividades y  servicios  especializados para apoyar  el plan de automatización de la Gestión Documental
            </p>
          </div>
        </div>
        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="development__thumb w-img mb-60">
              <Image src={One} alt="image not found" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="development__content-wrapper mb-60">
              
              <div className="approach__features s-2">
                <div className="approach__features-item">
                  <div className="approach__arrow">
                    <Image src={Arrow} alt="Image" />
                  </div>
                  <div className="approach__text">
                    <span>
                      Consultoría y asesoría técnica, profesional  y especializada en ciencias de la información:  Gestión Documental,  Archivística.
                    </span>
                  </div>
                </div>

                <div className="approach__features-item">
                  <div className="approach__arrow">
                    <Image src={Arrow} alt="Image" />
                  </div>
                  <div className="approach__text">
                    <span>
                      Diseño y elaboración, los principales instrumentos archivísticos que deben manejar instituciones  del sector publico o público/privado. 
                    </span>
                  </div>
                </div>

                <div className="development__features-wrap ms-4">
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Bancos terminológicos de series y subseries documentales (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Cuadros de clasificación documental - CCD (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Inventarios documentales de Archivo Central (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Planes institucionales de archivos – PINAR (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Programas de gestión documental - PGD (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Tablas de control de acceso (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Tablas de retención documental -TRD (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Tablas de valoración documental - TVD (Subserie)
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Sistema Integral de Conservación
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Plan de eliminación Documental
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Plan de Transferencias Documentales
                    </div>
                  </div>
                </div>

                <div className="approach__features-item">
                  <div className="approach__arrow">
                    <Image src={Arrow} alt="Image" />
                  </div>
                  <div className="approach__text">
                    <span>
                      Suministro e instalación de infraestructura para los distintos tipos de archivos. 
                    </span>
                  </div>
                </div>

                <div className="approach__features-item">
                  <div className="approach__arrow">
                    <Image src={Arrow} alt="Image" />
                  </div>
                  <div className="approach__text">
                    <span>
                      Capacitación y  asesoría personalizada en los procesos de la Gestión Documental. 
                    </span>
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

export default Document;
