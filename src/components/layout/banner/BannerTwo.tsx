"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import One from "@/../../public/img/shape/cercle.png";
import Two from "@/../../public/img/hero/hero-thumb-2.png";
import Three from "@/../../public/img/shape/hero-shape-5.png";
import Four from "@/../../public/img/shape/hero-shape-6.png";
import Five from "@/../../public/img/shape/rectangle-3.png";

import YoutubeEmbed from "@/components/containers/youtube/YoutubeEmbed";

const BannerTwo = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <section className="hero__area hero__hight d-flex align-items-center include__bg p-relative banner-bg-two">
      <div className="hero__cercle">
        <Image src={One} alt="image not found" />
      </div>
      <div className="container">
        <div className="hero__main-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="hero__content-wrapper">
                <div className="hero__content mb-60">
                  <span className="" data-aos="fade-up" data-aos-delay="200">
                    Bienvenido a  <span>Suministros & Sucomunicación</span> s.a.s.
                  </span>
                  <h2 className="" data-aos="fade-up" data-aos-delay="500">
                    Siempre Innovando
                  </h2>
                  <p className="" data-aos="fade-up" data-aos-delay="600">
                    Apoyamos la actualización tecnológica de la plataforma informática para las instituciones públicas y compañias privadas en todo el Valle de Aburrá y el departamento de Antioquia.
                  </p>
                </div>
                
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="hero__thumb-wrapper-2 mb-60">
                <div className="hero__thumb-2 w-img">
                  <Image src={Two} alt="image not found" />
                </div>
                <div className="hero__shape-7">
                  <Image src={Three} alt="image not found" />
                </div>
                <div className="hero__shape-8">
                  <Image src={Four} alt="image not found" />
                </div>
                <div className="hero__regtangle">
                  <Image src={Five} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-light fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
