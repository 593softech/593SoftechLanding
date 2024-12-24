"use client";

import Carousel, { Slide } from "@/components/carrousel/Carousel";
import { CategoryModel } from "@/services/model/CategoryModel";
import React, { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import { API_URL_IMG } from "@/config/config";
import ErrorMessage from "@/components/error/ErrorMessage";
import { getAllCategories } from "@/services/service/CategoryService";

export default function Experiencie() {
  const [categorias, setCategorias] = useState<CategoryModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]); // Solo currentPage es necesario como dependencia

  const fetchData = async (page: number) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMessage(""); // Limpiar el mensaje de error antes de la solicitud

    try {
      const response = await getAllCategories(page);
      if (response && response.content) {
        setCategorias(response.content);
      } else {
        setCategorias([]);
        setErrorMessage("No existen registros");
      }
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
      setIsError(true);
      setErrorMessage("Error al obtener las categorías.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" lg:-mt-4 p-3 mb-32 gap-y-3 mx-auto w-full bg-black-950/50 z-0">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage
          errorMessage={errorMessage}
          onClick={() => fetchData(currentPage)}
        />
      ) : (
        <div className="w-full py-4 rounded-3xl max-w-5xl mx-auto z-0 pb-6">
          <p className="md:text-xl text-bunker-100/45 font-semibold text-center">
            Soluciones tecnológicas a medida y servicios de hacking ético, desde
            el centro del mundo, <br /> mejorando la seguridad informática,{" "}
            <b className="">con el despertar de la innovación</b>
          </p>
          <br />
          <br />
          <span className="block mb-6 text-md lg:text-xl font-semibold text-warning-500 text-center">
            EMPRESAS QUE CONFIAN EN NOSOTROS
          </span>
          <br />
          <Carousel show={5}>
            {categorias.length > 0 ? (
              categorias.map((cat) => (
                <Slide key={cat.idCategory}>
                  <div className="transition-colors duration-100 gap-2 overflow-hidden w-full text-black-700 grid items-center text-center">
                    <div className="flex-col mx-auto">
                      <div className="flex items-center justify-center w-20 h-20 overflow-hidden ">
                        <img
                          src={`${API_URL_IMG}CategoryProduct/${
                            cat.img
                          }?t=${new Date().getTime()}`}
                          className="w-full h-full object-contain"
                          alt={""}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <span className="text-white leading-4 lg:text-lg text-[10px]">{cat.name}</span>
                    </div>
                  </div>
                </Slide>
              ))
            ) : (
              <div>No hay categorías disponibles</div>
            )}
          </Carousel>
        </div>
      )}
    </div>
  );
}
