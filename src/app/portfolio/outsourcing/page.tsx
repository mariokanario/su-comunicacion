import Layout from '@/components/layout/Layout'
import React from 'react'
import Image from "next/image";
import One from "@/../../public/img/illustrations/outsourcing.svg";
import OutsourcingTeam from '@/components/containers/team/OutsourcingTeam';

const page = () => {
  return (
    <Layout header={2} footer={2}>
      <div className="development__area pt-90 pb-60 banner-bg-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="section__title-wrapper text-center mb-70 pt-120">
                <div className="section__title-3">
                  Outsourcing
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

              <div className="development__thumb w-img mb-60">
                <Image src={One} alt="image not found" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="development__content-wrapper mb-60">

                <p>
                  Tenemos la capacidad de administrar los recursos informáticos mejorando la sinergia de las instituciones, con nuestro recurso humano de profesionales  informáticos deseamos reducir riesgos, disminuir gastos y aumentar la productividad del  Core de nuestros clientes.
                </p>

                

              </div>
            </div>
          </div>
        </div>
      </div>

    <OutsourcingTeam />

    </Layout>
  )
}

export default page