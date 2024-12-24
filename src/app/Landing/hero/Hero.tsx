"use client";

import React, { useState, useEffect } from "react";
import { HeroModel } from "@/services/model/HeroModel";
import Loader from "@/components/loader/Loader";
import Link from "next/link";
import { PATH_CHRISTMAS_POINTS, PATH_CONTACT_US, PATH_TAEL } from "@/routes/routes";
import dynamic from "next/dynamic";
import Christmas from "@/assets/svg/Christmas.json";
import SantaClaus from "@/assets/svg/SantaClaus.json";

interface HeroProps {
  data: HeroModel | null;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(data === null);
  const [formData, setFormData] = useState<HeroModel | null>(data);
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>({});
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (data) {
      setFormData(data);
      setLoading(false);
    }

    setIsClient(true); // Indicar que se está en el cliente

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, [data]);

  const calculateTimeLeft = (): TimeLeft | {} => {
    const targetDate = new Date("2025-01-06T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    return {};
  };

  if (loading) {
    return <Loader />;
  }

  if (!isClient || !formData) {
    return <Loader />; // Esperar a que el cliente esté listo
  }

  return (
    <div className="lg:h-[calc(100vh-5rem)] min-h-[calc(100vh-32rem)] flex w-full">
      <div className="flex items-center w-full h-full">
        <div
          className="absolute top-0 right-0 w-full md:w-auto h-full"
          style={{
            transform: `translateY(${scrollPosition * 0.2}px)`, // Movimiento en Y para crear el efecto de paralaje
            transition: "transform 0.3s ease-out",
          }}
        >
          <Lottie animationData={Christmas} loop={true} />
        </div>
        <section className="relative md:pb-4 lg:pb-36 overflow-hidden lg:pt-16 pt-36 w-full h-full">
          <img
            className="absolute top-0 right-0 -mr-10 sm:-mr-0 mt-56 md:mt-80 lg:mt-80 xl:mt-112 h-32 md:h-60 lg:h-88 animate-moveHand"
            src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/headers/robot-hand-header.png"
            alt=""
            style={{
              transform: `translateY(${scrollPosition * 0.3}px)`, // Movimiento en Y para el efecto de paralaje de la imagen
              transition: "transform 0.1s ease-out",
            }}
          />
          <div className="flex items-center h-full">
            <div className="relative container px-4 mx-auto z-10 pb-4 h-full">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="font-heading text-5xl xs:text-6xl md:text-8xl xl:text-10xl font-bold text-white mb-8 sm:mb-10">
                    <span className="uppercase texto-gradiente">
                      <span>-20%</span> de descuento <br />
                    </span>
                  </h1>
                </div>
                <div className="max-w-2xl mx-auto text-center lg:pt-0 pt-8">
                  <p className="lg:mt-4 2xl:text-2xl lg:text-xl text-lg md:text-xl text-[#6a96b9] font-semibold">
                    Vende en linea con <Link href={PATH_TAEL} className="text-purple-500 hover:text-purple-800 font-bold transition-colors duration-200">TAEL</Link>, factura automáticamente con el{" "}
                    <b>SRI ECUADOR</b> y ocúpalo en tus puntos de venta físicos,
                    manteniendo la gestión de tu negocio al día. <br />
                  </p>
                  <br />                 
                  <br />
                  <br />
                  <div className="md:text-2xl text-white/60 font-semibold">
                    {typeof timeLeft === "object" && "days" in timeLeft ? (
                      <div className="grid grid-cols-4 px-8 uppercase gap-2">
                        <div className="grid  w-full py-3 rounded-2xl bg-bunker-800/80 backdrop-blur-md">
                          <div className="text-[#CB0C59] text-3xl">
                            {timeLeft.days < 10
                              ? "0" + timeLeft.days
                              : timeLeft.days}
                          </div>
                          <div>días</div>
                        </div>
                        <div className="grid  w-full py-3 rounded-2xl bg-bunker-800/80 backdrop-blur-md">
                          <div className="text-[#CB0C59] text-3xl rounded-2xl">
                            {timeLeft.hours < 10
                              ? "0" + timeLeft.hours
                              : timeLeft.hours}
                          </div>
                          <div>horas</div>
                        </div>
                        <div className="grid  w-full py-3 rounded-2xl bg-bunker-800/80 backdrop-blur-md">
                          <div className="text-[#CB0C59] text-3xl">
                            {timeLeft.minutes < 10
                              ? "0" + timeLeft.minutes
                              : timeLeft.minutes}
                          </div>
                          <div>min</div>
                        </div>
                        <div className="grid  w-full py-3 rounded-2xl bg-bunker-800/80 backdrop-blur-md">
                          <div className="text-[#CB0C59] text-3xl ">
                            {timeLeft.seconds < 10
                              ? "0" + timeLeft.seconds
                              : timeLeft.seconds}
                          </div>
                          <div>seg</div>
                        </div>
                      </div>
                    ) : (
                      <span>¡La fecha ha llegado!</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mt-16 lg:mb-4 gap-2 flex-wrap">
                  <Link
                    href={PATH_CONTACT_US}
                    className="relative group inline-block w-full sm:w-auto py-4 px-6 text-white font-semibold rounded-full bg-primary-800/50 overflow-hidden"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-primary-900/50 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <div className="relative flex items-center justify-center">
                      <span >¡Contactanos!</span>                      
                    </div>
                  </Link>
                  <Link
                    href={PATH_CHRISTMAS_POINTS}
                    className="relative group inline-block w-full sm:w-auto py-4 px-6 text-white font-semibold rounded-full bg-success-800/50 overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-success-900/50 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <div className="relative flex items-center justify-center">
                      <span>Puntos navideños</span>                      
                    </div>
                  </Link>
                  <Link
                    href={PATH_TAEL}
                    className="relative group inline-block w-full sm:w-auto py-4 px-6 text-white font-semibold rounded-full bg-warning-600/30 overflow-hidden"
                  >
                    <div className="absolute top-0 right-full w-full h-full bg-warning-900/50 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <div className="relative flex items-center justify-center">
                      <span className="">Sistema TAEL</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden absolute -left-14 -bottom-44 w-full max-w-2xl z-0 mx-auto mb-5">
            <div className="fixed inset-0"></div>
            <nav className="relative flex flex-col py-6 px-10 w-full h-full overflow-y-auto mt-a">
              <div className="flex items-center mb-16">
                <div className="mr-auto text-2xl font-medium leading-none">
                  <Lottie animationData={SantaClaus} loop={true} />
                </div>
              </div>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
