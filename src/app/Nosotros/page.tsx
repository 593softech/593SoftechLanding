import { APP_NAME } from '@/config/config';
import { Metadata } from 'next';
import React from 'react';
import Form from './Form';

// Definir metadatos estáticos
export const metadata: Metadata = {
  title: APP_NAME + " - Nosotros",
  description: "Conoce más sobre nuestra misión y visión como empresa en " + APP_NAME,
  openGraph: {
      title: "Sobre Nosotros - " + APP_NAME,
      description: "Descubre nuestra misión, visión y valores en " + APP_NAME,
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
      title: "Sobre Nosotros - " + APP_NAME,
      description: "Descubre nuestra misión, visión y valores en " + APP_NAME,
      images: [
          "/default-img.png",
      ],
  },
};

// Componente de la página
export default function AboutPage() {
  return (
    <Form />
  );
}
