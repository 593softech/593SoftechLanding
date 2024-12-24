"use client";

import InputField from "@/components/field/InputField";
import Christmas from "@/assets/svg/Christmas.json";
import React from "react";
import styles from "@/assets/styles/styles";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false }); 
const FormChristmas = () => {
  return (
    <div className="grid lg:py-16 lg:px-32">
      <div className="bg-gradient-to-r bg-bunker-800 lg:rounded-3xl grid lg:grid-cols-2 lg:justify-normal">
        <div className="grid p-8 text-center lg:order-1 order-2 h-fit">
          <h1 className="text-warning-500 text-4xl font-bold  pb-2 py-3">
            PUNTOS NAVIDEÑOS
          </h1>
          <br />
          <p className="text-xl text-success-500/50">Por cada cliente que acumules y se sumen a la comunidad 593softech, recibes estos premios:</p>
          <br />
          <br />
          <div className="grid  w-full gap-3 text-start">
            <div className={`${styles.flexCenter} flex-row`}>
              <div
                className={`${styles.flexCenter} w-fit p-3 px-4 rounded-[24px] bg-[#323F5D]`}
              >
                <p className="text-xl text-white text-center uppercase">1 cliente<br /> </p>
              </div>
              <p className="flex-1 ml-3 font-normal text-[18px] text-[#B0B0B0] leading-6">
                Orden de compra de 25 USD
              </p>
            </div>
            <div className={`${styles.flexCenter} flex-row`}>
              <div
                className={`${styles.flexCenter} w-fit p-3 rounded-[24px] bg-[#323F5D]`}
              >
                <p className="text-xl text-white text-center uppercase">2 clientes<br /> </p>
              </div>
              <p className="flex-1 ml-3 font-normal text-[18px] text-[#B0B0B0] leading-6">
                Orden de compra de 50 USD
              </p>
            </div>
            <div className={`${styles.flexCenter} flex-row`}>
              <div
                className={`${styles.flexCenter} w-fit p-3 rounded-[24px] bg-[#323F5D]`}
              >
                <p className="text-xl text-white text-center uppercase">3 clientes<br /> </p>
              </div>
              <p className="flex-1 ml-3 font-normal text-[18px] text-[#B0B0B0] leading-6">
                Orden de compra de 75 USD
              </p>
            </div>
            <div className={`${styles.flexCenter} flex-row`}>
              <div
                className={`${styles.flexCenter} w-fit p-3 rounded-[24px] bg-[#323F5D]`}
              >
                <p className="text-xl text-white text-center uppercase">4 clientes<br /> </p>
              </div>
              <p className="flex-1 ml-3 font-normal text-[18px] text-[#B0B0B0] leading-6">
                Orden de compra de 25 USD + Canasta navideña
              </p>
            </div>
            <div className={`${styles.flexCenter} flex-row`}>
              <div
                className={`${styles.flexCenter} w-fit p-3 rounded-[24px] bg-[#323F5D]`}
              >
                <p className="text-xl text-white text-center uppercase">5 clientes<br /> </p>
              </div>
              <p className="flex-1 ml-3 font-normal text-[18px] text-[#B0B0B0] leading-6">
                SMARTPHONE POCO X8B
              </p>
            </div>
          </div>
          <div className="grid w-full text-justify gap-y-3 pt-5">
            <InputField
              placeholder="1723382593"
              inline
              mode="numeric"
              label="No. de cédula:"
            />
            <div>
              <a
                className="relative group inline-block w-fit sm:w-auto py-4 px-10 text-white font-semibold rounded-full bg-bunker-600 hover:bg-bunker-900 transition-colors duration-500 overflow-hidden "
                href="#"
              >
                <div className="relative flex items-center justify-center">
                  <span className="mr-4">Enviar</span>
                  <span>
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z"
                        fill="#FFF2EE"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:pb-0 lg:order-2 order-1">
          <div className="my-auto h-fit">
            <Lottie animationData={Christmas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormChristmas;
