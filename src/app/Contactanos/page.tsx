
import { APP_NAME } from '@/config/config';
import { Metadata } from 'next';
import React from 'react'
import FormContactUs from "./FormContactUs";

export const metadata: Metadata = {
    title: APP_NAME + " - Contactanos",
    description: "Conoce más sobre nuestra misión y visión como empresa en " + APP_NAME,
    openGraph: {
        title: "Sobre Nosotros - " + APP_NAME,
        description: "Descubre nuestra misión, visión y valores en " + APP_NAME,
        images: [
            {
                url: "/default-img.png", // Usa una imagen predeterminada en lugar de formData.img1
                width: 1200,
                height: 630,
            },
        ],
        url: "https://example.com/about",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contactanos - " + APP_NAME,
        description: "Conoce más sobre nuestra misión y visión en Gotitas del Rocío.",
        images: [
            "/default-img.png", // Usa una imagen predeterminada en lugar de formData.img1
        ],
    },
};

const page = () => {
    return (
        <FormContactUs />
    )
}

export default page