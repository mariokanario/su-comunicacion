import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/../../public/img/logo/logo.png";
import Shape from "@/../../public/img/shape/footer-shape.png";

const FooterTwo = () => {
  return (
    <footer>
      <section className="footer__border footer-bg grey__bg p-relative z-index-11 pt-120 pb-60">
        <div className="footer__shape">
          <Image src={Shape} alt="Image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget footer__col-1 mb-55">
                <div className="footer__title">
                  <h3>Compañia</h3>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <Link href="/">Inicio</Link>
                    </li>
                    <li>
                      <Link href="/">Empresa</Link>
                    </li>
                    <li>
                      <Link href="/">Portafolio</Link>
                    </li>
                    <li>
                      <Link href="/">Contáctenos</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget footer__col-3 mb-55">
                <div className="footer__title">
                  <h3>Soporte técnico</h3>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="https://sucomunicacion.com/soporte/" target="_blank">Informático</a>
                    </li>
                    <li>
                      <a href="https://soporte.gedsys.com.co/scp/login.php" target="_blank">Software Gedsys</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget footer__col-3 mb-55">
                <div className="footer__title">
                  <h3>Talento humano</h3>
                </div>
                <div className="footer__link">
                  <ul>
                    <li>
                      <a href="https://sucomunicacion.com:2096/" target="_blank" >Correo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget mb-55">
                <div className="footer__logo mb-20">
                  <Link href="/">
                    <Image src={Logo} alt="logo not found" />
                  </Link>
                </div>
                <div className="footer__contact mb-30">
                  <span>Cra. 66 #42-79</span>
                  <span>Medellín, Antioquia</span>
                </div>
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
          </div>
        </div>
      </section>
      <div className="footer__copyright ">
        <div className="container">
          <div className="copyright__inner-2">
            <div className="copyright__text text-center">
              <p>Copyright © 2024 Todos los derechos reservados REAL INC.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
