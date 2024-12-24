"use client";

import { staggerContainer, planetVariants, fadeIn } from "@/utils/motion";
import { TypingText } from "@/components/customText/CustomTexts";
import { getDataAbout } from "@/services/service/AboutService";
import EmployeList from "../Equipo/components/EmployeList";
import { AboutEntity } from "@/services/model/AboutModel";
import { PATH_CONTACT_US } from "@/routes/routes";
import Loader from "@/components/loader/Loader";
import { API_URL_IMG } from "@/config/config";
import { useEffect, useState } from "react";
import styles from "@/assets/styles/styles";
import { motion } from "framer-motion";
import Link from "next/link";

const Form: React.FC = () => {

    const [dataAbout, setDataAbout] = useState<AboutEntity | null>(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const data = await getDataAbout();
                setDataAbout(data.content);
            } catch (error) {
                setDataAbout({
                    paragraph1: "",
                    paragraph2: "",
                    paragraph3: "",
                    img1: "",
                    img2: "",
                    img3: ""
                });
            }
        };

        fetchAboutData();
    }, []);

    if (!dataAbout) {
        return <Loader />;
    }

    return (
        <section>
            <>
                <div className="relative overflow-hidden h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-4rem)]">
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center p-4 md:p-8">
                            <h1 className="text-4xl md:text-6xl font-bold text-warning-200">
                                Encuentra tu inspiración
                            </h1>
                            <p className="mt-4 text-xl lg:text-2xl text-white lg:px-40">
                                {dataAbout.paragraph1}
                            </p>
                            <div className="mt-6">
                                <Link href={PATH_CONTACT_US} className="bg-primary-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-primary-700 transition duration-300">
                                    Contáctanos
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 z-0 lg:h-[calc(100vh-4rem)]">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/0 to-bunker-600"></div>
                        <img
                            src={API_URL_IMG + "About/" + dataAbout.img1}
                            alt=""
                            className="w-full h-full lg:object-fill object-cover"
                        />
                    </div>
                </div>
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col overflow-hidden py-24`}
                >
                    <motion.div
                        variants={planetVariants('left')}
                        className={`flex-1 ${styles.flexCenter}`}
                    >
                        <div className="relative my-auto w-[80%] h-[80%] object-contain lg:-mt-6">
                            <img
                                src={API_URL_IMG + "About/" + dataAbout.img2}
                                alt=""
                                className="relative z-10 w-full rounded-xl md:h-96 h-64" />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1)}
                        className="flex-[0.75] flex justify-center flex-col mx-auto"
                    >
                        <TypingText
                            title="Misión"
                            textStyles='text-4xl lg:text-5xl font-semibold text-primary-400 lg:text-start text-center pt-4'
                        />
                        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] text-black-500 text-justify px-3">
                            {dataAbout.paragraph2}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col overflow-hidden py-24`}
                >
                    <motion.div
                        variants={planetVariants('left')}
                        className={`flex-1 ${styles.flexCenter}`}
                    >
                        <div className="relative my-auto w-[80%] h-[80%] object-contain lg:-mt-6">
                            <img
                                src={API_URL_IMG + "About/" + dataAbout.img3}
                                alt=""
                                className="relative z-10 w-full rounded-xl md:h-96 h-64" />
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 1)}
                        className="flex-[0.75] flex justify-center flex-col mx-auto"
                    >
                        <TypingText
                            title="Visión"
                            textStyles='text-4xl lg:text-5xl font-semibold text-primary-400 lg:text-start text-center pt-4'
                        />
                        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] text-black-500 text-justify px-3">
                            {dataAbout.paragraph3}
                        </div>
                    </motion.div>
                </motion.div>

            </>
            <EmployeList />
        </section>
    );
}

export default Form;
