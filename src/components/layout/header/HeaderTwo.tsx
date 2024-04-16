"use client"

import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/../../public/img/logo/logo.png";

const HeaderTwo = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-open" : "";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " sm-btn-active" : " ";
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="fix">
        <div className={(toggleMenu ? " info-open" : " ") + " offcanvas__info"}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src={Logo} alt="logo not found" priority />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button
                    aria-label="Close"
                    onClick={() => setToggleMenu(false)}
                  >
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
              
              <div className="mobile-menu fix mb-40 mean-container">
                <div className="mean-bar d-block">
                  <nav className="mean-nav">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="/">Inicio</Link>
                      </li>
                      <li>
                        <Link href="/about">Empresa</Link>
                      </li>
                      <li>
                        <Link href="/service">Portafolio</Link>
                      </li>
                      <li className="has-dropdown">
                        <button
                          aria-label="select dropdown"
                          className={`${isSubMenuButton("blog")}`}
                          onClick={() => handleSubmenu("blog")}
                        >
                          Soporte técnico
                          <span className="mean-expand">
                            <i className="fal fa-plus"></i>
                          </span>
                        </button>
                        <ul className={`sub-menu ${isSubMenuOpen("blog")}`}>
                          <li>
                            <Link href="/blog">Informático</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Software Gedsys</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <button
                          className={`${isSubMenuButton("pages")}`}
                          onClick={() => handleSubmenu("pages")}
                        >
                          Talento humano
                          <span className="mean-expand">
                            <i className="fal fa-plus"></i>
                          </span>
                        </button>
                        <ul className={`sub-menu ${isSubMenuOpen("pages")}`}>
                          <li className="has-dropdown">
                            <Link href="/about">Intranet</Link>
                          </li>
                          <li>
                            <Link href="/service">Correo</Link>
                          </li>
                        </ul>
                      </li> 
                      
                      <li className="mean-last">
                        <Link href="/contact">Contáctenos</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* <div className="offcanvas__contact mt-30 mb-20">
                <h4>Información de contacto</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link
                        target="_blank"
                        href="https://maps.app.goo.gl/M45HHhpWmbe2xYJV6"
                      >
                        Cra. 66 #42-79, Medellín, Antioquia
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+573106223709" aria-label="Contact Us">
                        +57 310 6223709
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+573106223709" aria-label="Contact Us">
                        <span className="mailto:contactenos@sucomunicacion.com">
                          contactenos@sucomunicacion.com
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div> */}
              {/* <div className="offcanvas__social">
                <ul>
                  <li>
                    <Link href="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={(toggleMenu ? " overlay-open" : " ") + " offcanvas__overlay"}
        onClick={() => setToggleMenu(false)}
      ></div>
      <div className="offcanvas__overlay-white"></div>

      <header>
        <div
          id="header-sticky"
          className={
            (scrolled ? " sticky" : " ") + " header__area-2 header__transparent"
          }
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-4 col-lg-6 col-6">
                <div className="header__logo-inner">
                  <div className="header__logo">
                    <Link href="/">
                      <Image src={Logo} alt="logo not found" priority />
                    </Link>
                  </div>
                  
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-1 col-6 d-none d-xl-block">
                <div className="header__contact">
                  <div className="contact__item">
                    <div className="contact__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.641"
                        height="18.644"
                        viewBox="0 0 18.641 18.644"
                      >
                        <path
                          id="call-svgrepo-com"
                          d="M47.035,50.653A7.842,7.842,0,0,1,43.372,49.4a23.811,23.811,0,0,1-5.752-4.3,21.827,21.827,0,0,1-4.319-5.75c-1.533-2.788-1.272-4.25-.98-4.875a3.891,3.891,0,0,1,1.525-1.636,7.337,7.337,0,0,1,1.192-.633l.115-.05a1.114,1.114,0,0,1,.913-.083,2.676,2.676,0,0,1,.868.666,14.429,14.429,0,0,1,2.171,3.222,3.21,3.21,0,0,1,.426,1.32A2.086,2.086,0,0,1,39,38.524c-.055.074-.109.146-.161.215-.317.416-.386.536-.34.751a7.9,7.9,0,0,0,1.922,2.851,7.567,7.567,0,0,0,2.818,1.876c.224.048.347-.025.776-.352.062-.047.125-.1.191-.144a2.1,2.1,0,0,1,1.259-.563h0a3.016,3.016,0,0,1,1.326.465,15.9,15.9,0,0,1,3.21,2.155,2.675,2.675,0,0,1,.668.866,1.123,1.123,0,0,1-.083.916c-.015.035-.032.072-.05.114a7.346,7.346,0,0,1-.636,1.189,3.892,3.892,0,0,1-1.639,1.522,2.806,2.806,0,0,1-1.23.269Z"
                          transform="translate(-32.098 -32.009)"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                    <div className="contact__tet">
                      <Link href="tel:+(123)123-456-7890">
                        300-123-45-67
                      </Link>
                    </div>
                  </div>
                  <div className="contact__item">
                    <div className="contact__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.885"
                        height="14.287"
                        viewBox="0 0 19.885 14.287"
                      >
                        <path
                          id="mail-svgrepo-com"
                          d="M19.885,42.4a1.014,1.014,0,0,0-1.014-1.014H1.014A1.014,1.014,0,0,0,0,42.4V54.659a1.014,1.014,0,0,0,1.014,1.014H18.871a1.014,1.014,0,0,0,1.014-1.014Zm-2.029,2.066a1.019,1.019,0,0,1-.358.776l-3.89,3.312L17.5,51.869a1.008,1.008,0,0,1-.654,1.776h-.009a1.037,1.037,0,0,1-.672-.247l-4.124-3.511L10.6,51.115a1.015,1.015,0,0,1-1.315,0L7.841,49.886,3.724,53.392a1.061,1.061,0,0,1-.688.253,1.008,1.008,0,0,1-.654-1.776l3.894-3.315L2.441,45.288a1.172,1.172,0,0,1-.412-.892.981.981,0,0,1,1.617-.747l5.976,5.089a.5.5,0,0,0,.641,0l5.976-5.089a.981.981,0,0,1,1.617.747v.071Z"
                          transform="translate(0 -41.386)"
                          fill="#636363"
                        />
                      </svg>
                    </div>
                    <div className="contact__tet">
                      <Link href="mailto:seofest@example.com">
                        contactenos@sucomunicacion.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-6 col-6">
                <div className="header__right d-flex align-items-center justify-content-end">
                  <div className="header__toggle-wrapper d-flex align-items-center">
                    <div className="header__toggle">
                      <button
                        className="sidebar__active d-flex align-items-center"
                        aria-label="Open Side Menu"
                        onClick={handleToggleMenu}
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div className="header__toggle-text ml-10">
                          <span>MENU</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="header__toggle d-md-none" style={{backgroundColor: "black"}}>
                    <button
                      className="sidebar__active"
                      aria-label="Toggle Sidebar"
                      onClick={handleToggleMenu}
                    >
                      <div className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderTwo;
