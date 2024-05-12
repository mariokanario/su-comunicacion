import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import "./styles/index-four.scss";
import "./styles/main.scss";
import "./styles/css/fontawesome-pro.css";
import 'animate.css';
import 'aos/dist/aos.css';
import "./styles/css/style.css";
import BootstrapClient from '@/components/BootstrapClient';
import AosClient from '@/components/AosClient';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suministros & Sucomunicación S.A.S",
  description: "Siempre innovando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient/>
        <AosClient />
        </body>
    </html>
  );
}
