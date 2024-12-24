'use client';

import { textContainer, textVariant2 } from '@/utils/motion';
import { motion } from 'framer-motion';

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal  text-bunker-200 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span className='' variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps {
  title: string;
  textStyles?: string;
}

export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-bunker-200 text-wrap`}
  >
    {title}
  </motion.h2>
);
