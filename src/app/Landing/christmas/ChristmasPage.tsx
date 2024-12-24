"use client"
import { motion } from 'framer-motion';
import styles from '@/assets/styles/styles';
import { staggerContainer, planetVariants, fadeIn } from '@/utils/motion';
import { TypingText } from '@/components/customText/CustomTexts';
import dynamic from 'next/dynamic';  // Importa dynamic de Next.js
import { FaLock } from 'react-icons/fa';
import { PiPaintBrushFill } from 'react-icons/pi';
import { BsCloudCheckFill } from 'react-icons/bs';

// Usa dynamic para cargar Lottie solo en el cliente
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });  // Desactiva SSR

import SantaClaus from "@/assets/svg/SantaClaus.json"

const ChristmasPage = () => {
  return (
<section className={`${styles.paddings} relative z-10 pb-7 lg:-mt-36`}>
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col overflow-hidden`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="relative my-auto w-[80%] h-[80%] object-contain lg:-mt-6">
          <Lottie animationData={SantaClaus} loop={true} />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="¿Por qué nosotros?" textStyles='text-4xl lg:text-5xl font-semibold text-primary-400 lg:text-start text-center' />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          <div className={`${styles.flexCenter} flex-row`}>
            <div
              className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-success-500`}
            >
              <p className="font-bold text-[20px] text-white">
                <FaLock size={25} />
              </p>
            </div>
            <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-6">
              Seguridad de alto nivel y protección en soluciones tecnológicas
            </p>
          </div>
          <div className={`${styles.flexCenter} flex-row`}>
            <div
              className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-danger-500`}
            >
              <p className="font-bold text-[20px] text-white">
                <PiPaintBrushFill size={25} />
              </p>
            </div>
            <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-6">
              Desarrollamos tu idea de forma personalizada y adaptada a tus necesidades, con profesionales altamente capacitados
            </p>
          </div>
          <div className={`${styles.flexCenter} flex-row`}>
            <div
              className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-success-500`}
            >
              <p className="font-bold text-[20px] text-white">
                <BsCloudCheckFill size={25} />
              </p>
            </div>
            <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-6">
              Guardamos tu información de forma segura en la nube
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default ChristmasPage