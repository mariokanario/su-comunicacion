import React, { Fragment } from "react";
import Head from "next/head";

import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/FooterTwo";
import ScrollProgress from "./ScrollProgress";

type layoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

const Layout = ({ children, header, footer }: layoutProps) => {
  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Suministros & Sucomunicación</title>
        <meta name="keywords" content="digitek, seo, service" />
        <meta name="description" content="Actualización tecnológica de la plataforma informática para las instituciones públicas y compañias privadas" />
      </Head>
      <div className="my-app">
        <HeaderTwo />
        <main>{children}</main>
        <FooterTwo />
        <ScrollProgress />
      </div>
    </Fragment>
  );
};

export default Layout;
