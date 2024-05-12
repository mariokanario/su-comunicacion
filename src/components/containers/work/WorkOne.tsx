import React from "react";
import Image from "next/image";
import Link from "next/link";


const WorkOne = () => {
  return (
    <section className="work__area grey-bg pt-120 pb-60 banner-bg-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-70 mt-70">
              <div className="section__subtitle-3">
              </div>
              <div className="section__title-3 mb-20">Nosotros</div>
              <p>
                Somos una empresa fundada en Medellín desde 2004, dedicada a la venta de productos y servicios tecnológicos en el sector público y privado. Contamos con más de 18 años de experiencia y reconocimiento en el Departamento de Antioquia. Como política empresarial tenemos el buen desempeño y la ética hacia todos nuestros clientes y empleados, las buenas prácticas empresariales y logísticas son el pilar de nuestro funcionamiento, el cual se ve reflejado en el buen nombre que representa nuestra marca.
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-60" data-aos="fade-up" data-aos-delay="100">

          <div className="col-12 col-md-6 text-center">

            <h3>
              Misión
            </h3>
            <p>
              Proveer componentes tangibles e intangibles con servicios informáticos para el mejoramiento y actualización de la infraestructura tecnológica,  sistemas, telecomunicaciones y gestión documental electrónica, por medio de asesoría profesional personalizada o virtual, nuestro objetivo primordial es generar sinergia entre las distintas áreas internas de nuestros clientes y permitir así que se concentren en el Core específico de su negocio.
            </p>
          </div>
          <div className="col-12 col-md-6  text-center">

            <h3>
              Visión
            </h3>
            <p>
              Suministros y Sucomunicación S.A.S, será para el año 2024 una empresa reconocida a nivel nacional, en la producción, edición y distribución de software de gestión documental electrónica, y prestación de servicios en plataformas  de informática, redes y telecomunicaciones.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOne;
