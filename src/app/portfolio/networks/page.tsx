import React from 'react'
import Image from "next/image";
import Layout from '@/components/layout/Layout'
import One from "@/../../public/img/illustrations/sec1.svg";
import NetworkTeam from '@/components/containers/team/NetworkTeam';

const page = () => {
  return (
    <Layout header={2} footer={2}>
      <div className="development__area pt-90 pb-60 banner-bg-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="section__title-wrapper text-center mb-70 pt-120">
                <div className="section__title-3">
                  Fibra Óptica, Redes, Telefonía y Mantenimiento
                </div>
                <p className='mt-20'>
                  Nuestro servicio es reconocido por su profesionalismo cumplimiento y calidad, manejamos los distintos tipos de tecnologías, buscamos mejorar los procesos de nuestros clientes, siempre ofreciendo los mejores productos que se ajusten a los presupuestos  pero que generen confiabilidad y rendimiento  efectivo para el desempeño de las actividades informáticas.
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
              
              <div className="development__thumb w-img mb-60">
                <Image src={One} alt="image not found" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="development__content-wrapper mb-60">
                
                <p>
                  Proyección, Instalación, Montaje, Conexión y Mantenimiento correctivo/preventivo de:
                </p>

                <div className="development__features-wrap">
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Redes  externas e internas en Fibra Óptica monomodo, multimodo y drop.
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Redes  externas e internas en  cableado estructurado.
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Enlaces de red por medio de antenas sectoriales.
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Cuartos técnicos y Racks.
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Redes eléctricas residenciales , comerciales e industriales de acuerdo a la norma "RETIE". 
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Plantas eléctricas de alto desempeño tipo CUMMINS y generadores.
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Dispositivos UPS de protección eléctrica y circuito regulado.
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Circuitos cerrados de televisión y vigilancia en modo IP o análogos alámbrico e inalámbrico.
                    </div>
                  </div>
                  <div className="development__features-item">
                    <div className="development__features-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="development__features-text">
                      Control de acceso biométrico.
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <NetworkTeam />
    </Layout>
  )
}

export default page