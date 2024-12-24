import React from "react";
import { APP_NAME } from "@/config/config";
import { Metadata } from 'next';
import ArticlesList from "./components/ArticlesList";


// Definir metadatos estáticos
export const metadata: Metadata = {
    title: `${APP_NAME} - Blog`,
    description: "Lugar donde te mantienes informado hacerca de nuestros eventos sociales",
    openGraph: {
        title: `${APP_NAME} - Blog`,
        description: "Lugar donde te mantienes informado hacerca de nuestros eventos sociales",
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
        title: `${APP_NAME} - Blog`,
        description: "Lugar donde te mantienes informado hacerca de nuestros eventos sociales",
        images: [
            "https://example.com/images/default-image.png",
        ],
    },
};


// Componente de la página
const Home: React.FC = async () => {
    return (
        <>
            <div className="grid lg:mb-16 mb-24">               
                <div className="flex w-full lg:px-16">
                    <ArticlesList />
                </div>
            </div>
        </>
    );
};

export default Home;