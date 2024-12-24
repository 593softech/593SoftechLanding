import React from "react";
import { fetchHeroData } from "@/services/service/HeroService";
import { APP_NAME } from "@/config/config";
import { Metadata } from "next";
import { HeroModel } from "@/services/model/HeroModel";
import Hero from "./Landing/hero/Hero";
import Info from "./Landing/info/Info";
import About from "./Landing/about/About";
import Blog from "./Landing/blog/Blog";
import Experiencie from "./Landing/experience/Experiencie";

// Función para obtener datos del servidor
async function fetchHomeData(): Promise<HeroModel> {
  try {
    const heroData = await fetchHeroData();
    return heroData;
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {
      img1: "default-image.png",
      img2: "default-image.png",
      img3: "default-image.png",
      slogan: "Slogan por defecto",
      description: "Descripción por defecto",
    }; // Devuelve un objeto HeroModel completo en caso de error
  }
}

// Definir metadatos estáticos
export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description:
    "Soluciones tecnológicas a medida y servicios de hacking ético, desde el centro del mundo, mejorando la seguridad informática, con el despertar de la innovación",
  openGraph: {
    title: `${APP_NAME}`,
    description:
      "Soluciones tecnológicas a medida y servicios de hacking ético, desde el centro del mundo, mejorando la seguridad informática, con el despertar de la innovación",
    images: [
      {
        url: "https://example.com/images/default-image.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME}`,
    description:
      "Soluciones tecnológicas a medida y servicios de hacking ético, desde el centro del mundo, mejorando la seguridad informática, con el despertar de la innovación",
    images: ["https://example.com/images/default-image.png"],
  },
};

// Componente de la página
const Home: React.FC = async () => {
  const heroData = await fetchHomeData();

  return (
    <>
      <Hero data={heroData} />
      <Experiencie />
      <About />
      <Info />
      <Blog />
      {/* <YoutubeButton /> */}
    </>
  );
};

export default Home;
