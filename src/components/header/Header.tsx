// src/components/Header.tsx
"use client";

import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT_US,
  PATH_HOME,
  PATH_TAEL,
} from "@/routes/routes";
import React, { JSX, useEffect, useState } from "react";
import imgLogo from "@/assets/img/LogoIcono.png";
import { FaBlog } from "react-icons/fa";
import { scrollToTop } from "@/utils/functions";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { RiBankFill, RiWhatsappFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdPlusOne } from "react-icons/md";
import { BiWallet } from "react-icons/bi";

export interface MenuItem {
  name: string;
  href: string;
  icon: JSX.Element;
  children?: MenuItem[];
}

export default function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Rutas que deben ocultar el Header
  const excludedPaths: string[] = [];
  const shouldHideHeader = excludedPaths.some((path) =>
    pathname.startsWith(path)
  );

  const navigation: MenuItem[] = [
    {
      name: "Inicio",
      href: PATH_HOME,
      icon: <GoHomeFill size={20} />, // Usa 'size' en lugar de 'className'
    },
    {
      name: "Sistema TAEL",
      href: PATH_TAEL,
      icon: <BiWallet size={20} />, // Usa 'size' en lugar de 'className'
    },
    {
      name: "Nosotros",
      href: PATH_ABOUT,
      icon: <RiBankFill size={20} />, // Usa 'size' en lugar de 'className'
    },
    {
      name: "Blog",
      href: PATH_BLOG,
      icon: <FaBlog size={20} />, // Usa 'size' en lugar de 'className'
    },
  ];

  if (shouldHideHeader) {
    return null; // No renderiza el Header si está en una ruta excluida
  }

  return (
    <>
      <header>
        <motion.nav
          className={`h-16 items-center z-auto w-full ${
            isSticky
              ? "lg:bg-bunker-800/95 bg-bunker-600 border-bunker-900/50 border-b lg:border-none"
              : "border-bunker-600 border-b lg:bg-bunker-600/95 bg-bunker-600"
          } lg:backdrop-blur-xl flex transition-colors duration-300 `}
        >
          <div className="grid lg:grid-cols-3 grid-cols-2 justify-between w-full lg:px-16 px-3 h-12 sm:h-16">
            <div className="flex items-center justify-start">
              <Link
                href={PATH_HOME}
                replace
                onClick={() => {
                  scrollToTop();
                }}
                className="py-2 my-auto text-black-500 lg:hover:text-primary-400 font-semibold lg:text-3xl text-2xl flex"
              >
                <div className="flex">
                  <div className="grid text-lg my-auto">
                    <Image src={imgLogo} className="w-auto h-7" alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <ul className="items-center justify-center lg:flex hidden">
              {navigation.slice(0, 4).map((item, index) => (
                <li key={index}>
                  <Link
                    replace
                    href={item.href}
                    onClick={() => {
                      scrollToTop();
                    }}
                    className={`block rounded-full text-base line-clamp-1 font-semibold leading-7 text-center transition-colors duration-500 ${
                      pathname === item.href
                        ? "text-primary-500"
                        : "lg:hover:text-primary-400 text-black-300"
                    }`}
                  >
                    <div className="flex items-center justify-start px-3 py-1 text-xl">
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end gap-1">
              <a
                href="https://wa.link/oyj5du"
                target="_blank"
                className="p-1.5 bg-success-600/50 hover:bg-success-600/40 text-black-200 rounded-full w-fit"
              >
                <RiWhatsappFill size={25} />
              </a>
              <Link
                href={PATH_CONTACT_US}
                className="z-auto relative bg-bunker-900 hover:bg-bunker-500 transition-colors duration-300 py-1.5 px-2 rounded-full inline-flex items-end text-sm text-center text-white lg:text-lg gap-x-2 lg:px-3.5"
              >
                <div>Contactanos</div>
              </Link>
            </div>
          </div>
        </motion.nav>
      </header>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className={`${
          !shouldHideHeader
            ? "fixed bottom-0 left-0 w-full bg-bunker-600 backdrop-blur-2xl border-t border-bunker-900/50 flex justify-around items-center lg:hidden py-1 pt-2 z-10"
            : "hidden"
        }`}
      >
        {navigation.slice(0, 5).map((item) => (
          <Link
            key={item.name}
            href={item.href || ""}
            replace
            onClick={() => {
              scrollToTop();
            }}
            className={`flex flex-col items-center justify-center text-black-400 transition-colors duration-300 ${
              pathname === item.href ? "text-primary-500" : ""
            }`}
          >
            {item.icon}
            <span className="text-sm pb-1.5">{item.name}</span>
          </Link>
        ))}
      </motion.div>
    </>
  );
}
