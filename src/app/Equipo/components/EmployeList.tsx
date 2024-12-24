"use client";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Employe } from "@/services/model/Employe";
import { getAllEmployes } from "@/services/service/EmployeService";
import Link from "next/link";
import { PATH_EMPLOYE_ID } from "@/routes/routes";
import { API_URL_IMG } from "@/config/config";
import ErrorMessage from "@/components/error/ErrorMessage";

const EmployeList = () => {
  const [data, setData] = useState<Employe[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchDataAndSetState = async () => {
    try {
      setIsLoading(true);
      const response = await getAllEmployes(currentPage);
      setData(response.content);
      setTotalItems(response.totalElements);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError(true);
      if (error instanceof Error) {
        setErrorMessage(error.message.toString().toUpperCase());
      } else {
        setErrorMessage(
          "Error en la solicitud. Por favor, inténtalo de nuevo más tarde"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAndSetState();
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / 12);

  const visiblePages = 12;
  const firstVisiblePage = Math.max(
    0,
    currentPage - Math.floor(visiblePages / 2)
  );
  const lastVisiblePage = Math.min(
    totalPages - 1,
    firstVisiblePage + visiblePages - 1
  );
  const visiblePagesArray = Array.from(
    { length: lastVisiblePage - firstVisiblePage + 1 },
    (_, i) => i + firstVisiblePage
  );

  if (firstVisiblePage > 0) {
    visiblePagesArray.unshift(-1);
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-gradient-to-b">
      <div className="grid w-full justify-center py-4 ">
        <h2 className="py-2 text-xl font-bold text-center text-primary-300 md:text-4xl uppercase">
          Nuestro equipo
        </h2>
        <div className="flex w-32 mb-2.5 overflow-hidden rounded mx-auto">
          <div className="flex-1 h-2 bg-primary-100"></div>
          <div className="flex-1 h-2 bg-primary-400"></div>
          <div className="flex-1 h-2 bg-primary-300"></div>
        </div>
      </div>
      {isLoading ? null : (
        <div className="w-full justify-center">
          <div className="grid lg:grid-cols-5  md:grid-cols-2 gap-5 w-full lg:px-16">
            {data.map((employe) => (
              <Link
                key={employe.idEmploye}
                href={
                  PATH_EMPLOYE_ID +
                  employe.idEmploye +
                  "/" +
                  employe.fullName?.replace(/\s+/g, "-")
                }
                className="flex-shrink-0 relative overflow-hidden max-w-xs mx-auto w-full"
              >
                <div className="relative flex items-center justify-center">
                  <img
                    className="w-52 h-52 max-h-52 bg-primary-300/20 backdrop-blur-md rounded-full"
                    src={API_URL_IMG + "Employe/" + employe.photo}
                    alt={employe.fullName + " - " + employe.description}
                  />
                </div>
                <div className="relative text-white px-6 py-2">
                  <span className="block font-semibold text-xl text-center line-clamp-1 text-primary-500 leading-5">
                    {employe.fullName}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {!isError && (
            <div className="bg-claro mx-auto w-full my-8">
              <div className="grid grid-cols-1 mx-auto w-full ">
                <div className="flex justify-center">
                  <span className="text-md text-black-600 text-center ">
                    Mostrando rango de
                    <span className="font-bold p-1">
                      {Math.min(currentPage * 12 + 1, totalItems)}
                    </span>
                    al
                    <span className="font-bold p-1">
                      {Math.min((currentPage + 1) * 12, totalItems)}
                    </span>
                    de
                    <span className="font-bold p-1">{totalItems}</span>
                    empleados
                  </span>
                </div>
                <div className="flex justify-center pt-3">
                  <div className="flex gap-1 text-primary-500">
                    <div
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={`cursor-pointer p-2 text-center 
                                                ${
                                                  currentPage === 0
                                                    ? "bg-primary-500/30"
                                                    : "bg-primary-500/30"
                                                } hover:bg-primary-200  rounded-xl hover:text-primary-500/50 text-white `}
                    >
                      <FaAngleLeft className=" text-2xl" />
                    </div>
                    {visiblePagesArray.map((page) => (
                      <div
                        key={page}
                        onClick={() =>
                          page === -1
                            ? handlePageChange(0)
                            : handlePageChange(page)
                        }
                        className={`cursor-pointer p-2 rounded-xl px-4 text-center 
                                                    ${
                                                      page === -1
                                                        ? "bg-primary-300  hover:bg-primary-300"
                                                        : currentPage === page
                                                        ? "bg-primary-800/30 text-white font-semibold"
                                                        : "bg-primary-100 hover:bg-primary-200/70 "
                                                    }rounded-xl `}
                      >
                        {page === -1 ? "1" : page + 1}
                      </div>
                    ))}
                    <div
                      className={`cursor-pointer p-2 text-center 
                                            ${
                                              currentPage === totalPages - 1
                                                ? "bg-primary-500/30 hover:bg-primary-300/50 "
                                                : "bg-primary-500/30 hover:text-primary-500/50 hover:bg-primary-200  "
                                            }  text-white rounded-xl hover:text-primary-500/50 `}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <FaAngleRight className=" text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isError && (
            <ErrorMessage
              errorMessage={errorMessage}
              onClick={fetchDataAndSetState}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeList;
