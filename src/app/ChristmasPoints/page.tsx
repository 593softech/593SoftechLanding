import { APP_NAME } from '@/config/config';
import { Metadata } from 'next';
import React from 'react';
import FormChristmas from './Form';

// Definir metadatos estáticos
export const metadata: Metadata = {
  title:  "Puntos Navideños - " + APP_NAME,
  description: "Mira tus puntos que acumulaste esta navidad en " + APP_NAME,
  openGraph: {
      title: "Puntos Navideños - " + APP_NAME,
      description: "Mira tus puntos que acumulaste esta navidad en  " + APP_NAME,
      images: [
          {
              url: "/default-img.png",
              width: 1200,
              height: 630,
          },
      ],
      url: "https://example.com/about",
  },
  twitter: {
      card: "summary_large_image",
      title: "Puntos Navideños - " + APP_NAME,
      description: "Mira tus puntos que acumulaste esta navidad en " + APP_NAME,
      images: [
          "/default-img.png",
      ],
  },
};

// Componente de la página
export default function ChristmasPage() {
  return (
    <FormChristmas />
  );
}
