
import React from "react";
import Image from "next/image";
import Layout from '@/components/layout/Layout'
import Arrow from "@/../../public/img/svg/arrow-2.svg";
import One from "@/../../public/img/about/about-thumb-2.png";
import Two from "@/../../public/img/shape/about-thumb-shape.png";
import AboutTeam from "@/components/containers/team/AboutTeam";
import SuportTeam from "@/components/containers/team/SuportTeam";

const page = () => {
  return (
    <Layout header={2} footer={2}>
      
      <div className="about__area p-relative pt-120 pb-60">
        <div className="container">
          <div
            className="row align-items-center "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper-3 mb-60">
                <div className="about__thumb-3">
                  <Image src={One} alt="image not found" />
                </div>
                <div className="about__thumb-shape">
                  <Image src={Two} alt="image not found" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__content-wapper mb-60">
                <div className="section__title-wrapper mb-40">
                  <div className="section__title-3">
                    Consultoría y Soporte Técnico
                  </div>
                </div>
                <p>
                  Realizamos todas las actividades que se contemplan en  la administración tangible e intangible de recursos informáticos, para  estaciones de trabajo, servidores, periféricos, cuartos técnicos.
                </p>

                <div className="approach__features s-2">
                  <div className="approach__features-item">
                    <div className="approach__arrow">
                      <Image src={Arrow} alt="Image" />
                    </div>
                    <div className="approach__text">
                      <span>Mantenimiento programado</span>
                    </div>
                  </div>

                  <div className="approach__features-item">
                    <div className="approach__arrow">
                      <Image src={Arrow} alt="Image" />
                    </div>
                    <div className="approach__text">
                      <span>Mantenimiento correctivo</span>
                    </div>
                  </div>

                  <div className="approach__features-item">
                    <div className="approach__arrow">
                      <Image src={Arrow} alt="Image" />
                    </div>
                    <div className="approach__text">
                      <span>Mantenimiento físico y lógico</span>
                    </div>
                  </div>

                  <div className="approach__features-item">
                    <div className="approach__arrow">
                      <Image src={Arrow} alt="Image" />
                    </div>
                    <div className="approach__text">
                      <span>Soporte en ofimática</span>
                    </div>
                  </div>

                  <div className="approach__features-item">
                    <div className="approach__arrow">
                      <Image src={Arrow} alt="Image" />
                    </div>
                    <div className="approach__text">
                      <span>Seguridad digital</span>
                    </div>
                  </div>

                  <div className="approach__features-item">
                    <div className="approach__arrow">
                      <Image src={Arrow} alt="Image" />
                    </div>
                    <div className="approach__text">
                      <span>Configuraciones de ajuste</span>
                    </div>
                  </div>

                </div>
                
              </div>
            </div>
          </div>


          <SuportTeam />

        </div>
      </div>

    </Layout>
  )
}

export default page