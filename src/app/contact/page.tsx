import Contact from '@/components/containers/contact/Contact'
import Layout from '@/components/layout/Layout'
import React from 'react'


const page = () => {

    

    return (
        <Layout header={2} footer={2}>
            <div className='pt-120 banner-bg-two'>
                <section
                    className="touch__arae touch-bg include__bg  pt-120"
                    data-background="assets/img/shape/touch-shape.png"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="touch__left mb-60">
                                    <div className="section__title-wrapper">
                                        <h2 className="section__title s-2 mb-30">
                                            <span className="down__mark-line">Comunícate</span> con nosotros
                                        </h2>
                                    </div>

                                    <p className='fw-bold mb-0'>Dirección</p>
                                    <p className='mb-3'>Cra. 66 #42-79, Medellín, Antioquia:</p>

                                    <p className='fw-bold mb-0'>Teléfono Fijo:</p>
                                    <p className='mb-3'>(604) 607 3598</p>

                                    <p className='fw-bold mb-0'>Teléfono Celular:</p>
                                    <p className='mb-3'>+57 310 6223709</p>

                                    <p className='fw-bold mb-0'>Correo electrónico:</p>
                                    <p className='mb-3'>contactenos@sucomunicacion.com</p>


                                    <div className="touch__social">
                                        <a href="https://www.facebook.com/people/Suministros-y-Sucomunicaci%C3%B3n-SAS/100083096204238/?_rdc=1&_rdr" target="_blank">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="https://www.instagram.com/syssucomunicacion/" target="_blank">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="https://wa.me/3001234567" target="_blank">
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="touch__contact p-relative">
                                    <div className="touch__carcle"></div>
                                    <div className="touch__content-title">
                                        <h3>Escríbenos</h3>
                                    </div>
                                    
                                    <Contact />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default page