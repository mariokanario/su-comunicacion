import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "@/../../public/img/gedsys/01.png";
import Two from "@/../../public/img/gedsys/02.png";
import Three from "@/../../public/img/gedsys/03.png";

const GedsysSection = () => {
  return (
    <div className="development__area pt-120 pb-60">
      <div className="container">
        
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
              <div className="section__title-3">
                Estadísticas
              </div>
              <p>
                El análisis y la toma de decisiones eficientes y oportunas solo se puede realizar con rápido acceso a cifras reales.  Además de las herramientas transaccionales que desarrollamos para nuestro producto, también creamos un módulo gerencial para visualizar y extraer datos de la producción documental.
              </p>
            </div>
          </div>
        </div>

        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="development__content-wrapper mb-60">
              <div className="section__title-3">
                GEDSYS móvil
              </div>
              <p>
                La portabilidad es un factor  fundamental y determinante para todas las personas, empresas e instituciones, nuestra solución cuenta con herramientas que satisfacen esa demanda de oportunidad,  estamos  en capacidad de realizar algunas de las transacciones documentales más significativas, por medio de dispositivos  móviles como  teléfonos celulares, tablets  o "máquinas" que tengan la capacidad de navegar por internet y respondan a la tecnología smart.
              </p>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="development__thumb w-img mb-60">
              <Image src={Two} alt="image not found" />
            </div>
          </div>

        </div>

        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="development__thumb w-img mb-60">
              <Image src={Three} alt="image not found" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="development__content-wrapper mb-60">
              <div className="section__title-3">
                PQRSF
              </div>
              <p>
                la solución GEDSYS® posee alta  funcionalidad y unido a la garantía en el  cumplimiento de la normatividad que exige el Archivo general de la Nación, hace que podamos  tener a su disposición, un módulo completo de para la gestión electrónica local y vía web de las peticiones, quejas, reclamos, solicitudes y felicitaciones.
              </p>
            </div>
          </div>
        </div>





      </div>


  



      
    </div>
  );
};

export default GedsysSection;
