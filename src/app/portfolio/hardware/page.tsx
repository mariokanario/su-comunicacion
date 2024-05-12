import Layout from '@/components/layout/Layout'
import React from 'react'
import Image from "next/image";
import One from "@/../../public/img/illustrations/computers.svg";

const page = () => {
  return (
    <Layout header={2} footer={2}>
      <div className="development__area pt-90 pb-60 banner-bg-two">
        <div className="container  pt-120">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="section__title-wrapper text-center mb-70">
                <div className="section__title-3">
                  Hardware y Software Especializado
                </div>
               
              </div>

            </div>
          </div>
          <div
            className="row align-items-center "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-xl-6 col-lg-6">

              <div className="development__thumb w-img mb-60 p-5">
                <Image src={One} alt="image not found" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="development__content-wrapper mb-60">

                <p>
                  Distribuimos y comercializamos todos los elementos tangibles e intangibles de naturaleza informática, garantizamos los legibilidad y originalidad de los productos, nuestro compromiso es proporcionar  licencias y dispositivos cumplan con todas las garantías técnicas y legales que exige la ley Colombiana.
                </p>

                <div className="development__features-wrap">
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Servidores
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Computación de alto desempeño 
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Impresión
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Escaneo
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Software licenciado
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Antivirus y Seguridad Digital
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      APP
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Switches - Routers
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Periféricos
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default page