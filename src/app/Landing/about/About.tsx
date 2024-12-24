"use client"

import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import Support from "@/assets/svg/Support.json"
import { AboutModel } from '@/services/model/AboutModel'
import { getDataHero } from '@/services/service/AboutService'
import Loader from '@/components/loader/Loader'
import Link from 'next/link'
import { PATH_ABOUT } from '@/routes/routes'

// Carga Lottie solo en el cliente
const LottieNoSSR = dynamic(() => import('lottie-react'), { ssr: false });

const About = () => {

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState<AboutModel>({
        img1: "",
        paragraph1: ""
    });

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await getDataHero();
            setFormData(data.content);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        loading ? <Loader /> :
            <div className="grid lg:py-0 lg:px-32 lg:mb-16">
                <div className="bg-bunker-950 lg:rounded-3xl grid lg:grid-cols-2 lg:justify-normal pt-10 lg:p-0">
                    <div className="grid lg:p-8 p-3 pb-8 lg:pl-16 text-justify lg:order-1 order-2 px-3">
                        <span className="text-success-400 text-3xl font-bold py-3">¿A que nos dedicamos?</span>
                        <span className="text-black-400/90 text-lg mb-4 ">
                            {formData.paragraph1}
                        </span>
                        <Link
                            className="relative group inline-block w-fit py-3 px-6 text-white font-semibold rounded-full bg-warning-950/50 overflow-hidden mb-4"
                            href={PATH_ABOUT}
                        >
                            <div className="absolute top-0 right-full w-full h-full bg-warning-800/15 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                            <div className="relative flex items-center justify-center">
                                <span className="my-auto">Conocer mas de nosotros</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center lg:pb-4 px-3 lg:py-6 lg:order-2 order-1 my-auto">
                        <div className="relative my-auto max-w-xs w-[100%] h-[100%]">
                            {/* Usamos LottieNoSSR en lugar de Lottie */}
                            <LottieNoSSR animationData={Support} loop={true} />
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default About;
