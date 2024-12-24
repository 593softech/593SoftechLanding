"use client"

import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <section className="header relative flex items-center lg:h-[calc(100vh-4rem)] h-[calc(100vh-1rem)]">
      <div className="container lg:ml-40 w-full flex flex-wrap items-center z-0">
        <div className="w-full z-30">
          <div className="lg:pt-0 pt-40 lg:px-0 px-4">
            <h1 className="font-semibold 2xl:text-8xl text-7xl text-primary-400/80 z-auto">
              SISTEMA TAEL              
            </h1>
            <b className="2xl:text-3xl lg:text-xl text-lg text-black-400 flex items-center gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 97.75 78.62"
                  height={25}
                >
                  <path
                    d="M62.21 21.73l3.13.06 8.53-8.51.42-3.6a38.2 38.2 0 0 0-62.3 18.57c.88-.64 2.88-.16 2.88-.16l17-2.8s.88-1.44 1.31-1.35a21.19 21.19 0 0 1 29-2.21z"
                    fill="#ea4335"
                  />
                  <path
                    d="M85.79 28.27a38.32 38.32 0 0 0-11.54-18.6l-12 12a21.2 21.2 0 0 1 7.92 16.53v2.19a10.63 10.63 0 1 1 0 21.25h-21.3l-2.12 2.14v12.73l2.12 2.12h21.25a27.61 27.61 0 0 0 15.67-50.36z"
                    fill="#4285f4"
                  />
                  <path
                    d="M27.62 78.63h21.25v-17H27.62a10.54 10.54 0 0 1-4.38-1l-3.06.94-8.51 8.55-.74 2.88a27.47 27.47 0 0 0 16.69 5.63z"
                    fill="#34a853"
                  />
                  <path
                    d="M27.62 23.39A27.61 27.61 0 0 0 10.94 73l12.32-12.32a10.62 10.62 0 1 1 14-14l12.36-12.36a27.6 27.6 0 0 0-22-10.93z"
                    fill="#fbbc04"
                  />
                </svg>
              </div>
              <span>#PotenciadoPorLaNubeDeGoogle</span>
            </b>
            <p className="mt-4 2xl:text-2xl lg:text-xl text-lg text-black-600/90">
              Vende en linea, factura automáticamente con el <b>SRI ECUADOR</b>{" "}
              y ocúpalo <br />
              en tus puntos de venta físicos, manteniendo la gestión de tu
              negocio al día. <br />
              <b className="text-black-300/80">#TodoEnUno</b>
            </p>
            <div className="mt-12">
              <Link
                href="https://tael.593softech.com/#Promocion"
                target="_blank"
                rel="noopener noreferrer"
                className="get-started text-white text-nowrap px-6 py-4 lg:text-md rounded-full outline-none focus:outline-none mr-1 mb-1 bg-primary-500/50 hover:bg-primary-500/60  text-md shadow over:shadow-lg ease-linear transition-all duration-150"
              >
                Saber beneficios
              </Link>
              <Link
                href="https://tael.593softech.com/Demo"
                target="_blank"
                rel="noopener noreferrer"
                className="github-star ml-1 text-white text-nowrap px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-success-400/50 hover:bg-success-400/60 text-md shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Demomostración
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Effect Image without transition */}
      <img
        className="absolute top-0 right-0 sm:w-6/12 -mt-16 w-11/12 max-h-[860px] z-0 transition-transform duration-100"
        src="https://res.cloudinary.com/dmowrlfxr/image/upload/v1734544704/TaelHero_cqcjuc.webp"
        alt="..."
      />
    </section>
  );
};

export default Form;
