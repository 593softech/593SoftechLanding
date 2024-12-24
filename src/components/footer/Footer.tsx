"use client";

import imgLogo from "@/assets/img/LogoIcono.png";
import { APP_DOMAIN_PRIVATE } from "@/config/config";
import { PATH_ABOUT, PATH_BLOG, PATH_HOME, PATH_TAEL } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null); // Tipo de estado definido como number o null

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); // Asigna el valor solo cuando el componente está montado en el cliente
  }, []);

  if (currentYear === null) {
    return null; // Renderiza nada hasta que `currentYear` esté disponible
  }

  return (
    <footer className="w-full bg-bunker-800 lg:mb-0 mb-14">
      <div className="mx-auto  px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0 w-full">
            <Link
              href={PATH_HOME}
              className="py-2 lg:mx-0 mx-auto my-auto uppercase text-black-200 lg:hover:text-primary-400 font-black lg:text-3xl text-2xl flex w-fit"
            >
              <div className="flex font-bold lg:mx-0 mx-auto">
                <Image src={imgLogo} className="w-auto h-7" alt="" />
              </div>
            </Link>
            <p className="py-8 text-sm text-black-500 lg:max-w-xs text-center lg:text-left">
              Quito - Ecuador, Sector Quitumbe
            </p>
            <div className="py-2.5 h-fit block w-fit rounded-full mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
              <div className="grid grid-cols-4 gap-3 z-50">
                <div className="flex justify-center">
                  <a
                    href="http://wa.me/593986637631"
                    target="_blank"
                    className="p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto"
                  >
                    <RiWhatsappFill size={25} />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.instagram.com/593softech_/"
                    target="_blank"
                    className="p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto"
                  >
                    <FaInstagram size={25} />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.tiktok.com/@593softech?_t=8sNZ0XNSYli&_r=1"
                    target="_blank"
                    className="p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto"
                  >
                    <FaTiktok size={25} />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/593softech"
                    target="_blank"
                    className="p-3 bg-bunker-600 hover:bg-bunker-600/50 text-black-200 rounded-full w-fit mx-auto"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-black-200 font-medium mb-7">
              Secciones
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-3">
                <Link
                  href={PATH_TAEL}
                  className=" text-black-600 hover:text-black-900"
                >
                  Sistema TAEL
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={PATH_HOME}
                  className="text-black-600 hover:text-black-900"
                >
                  Inicio
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={PATH_ABOUT}
                  className=" text-black-600 hover:text-black-900"
                >
                  Nosotros
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={PATH_BLOG}
                  className=" text-black-600 hover:text-black-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-black-200 font-medium mb-7">Soporte</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-3">
                <Link
                  href={APP_DOMAIN_PRIVATE}
                  rel="nofollow"
                  className=" text-black-600 hover:text-black-900"
                >
                  Acceso personal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-7 border-t border-bunker-900">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-black-500 ">
              © {currentYear}, Todos los derechos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
