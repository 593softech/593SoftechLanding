"use client"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ArticleDto } from "@/services/model/ArticleModel";
import React, { useState, useEffect } from "react";
import Loader from "@/components/loader/Loader";
import { getAllArticles } from "@/services/service/ArticleService";
import CardArticle from "./CardArticle";
import ErrorMessage from "@/components/error/ErrorMessage";

const ArticlesList = () => {

    const [data, setData] = useState<ArticleDto[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchDataAndSetState();
    }, [currentPage]);

    const fetchDataAndSetState = async () => {
        try {
            setIsLoading(true);
            const response = await getAllArticles(currentPage);
            setData(response.content);
            setTotalItems(response.totalElements);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsError(true);
            if (error instanceof Error) {
                setErrorMessage(error.message.toString().toUpperCase());
            } else {
                setErrorMessage('Error en la solicitud. Por favor, inténtalo de nuevo más tarde');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const totalPages = Math.ceil(totalItems / 12);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className="flex w-full justify-center bg-bunker-600">
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {data.length === 0 && !isError && isLoading ? (
                        <ErrorMessage
                            errorMessage="No existen articulos publicados"
                            onClick={fetchDataAndSetState}
                        />
                    ) : (
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-6">
                            {data.map(article => (
                                <CardArticle
                                    key={article.idArticle}
                                    code={article.code}
                                    idArticle={article.idArticle}
                                    title={article.title}
                                    description={article.description}
                                    portada={article.portada}
                                    status={article.status}
                                    created={article.created}
                                    employe={{
                                        idEmploye: article.employe.idEmploye,
                                        fullName: article.employe.fullName,
                                        photo: article.employe.photo
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {!isError && totalItems > 0 && (
                        <div className="bg-claro mx-auto w-full my-8">
                            <div className="grid grid-cols-1 mx-auto w-full ">
                                <div className="flex justify-center">
                                    <span className="text-md text-black-600 text-center">
                                        Mostrando rango de
                                        <span className='font-bold p-1'>
                                            {Math.min(currentPage * 12 + 1, totalItems)}
                                        </span>
                                        al
                                        <span className='font-bold p-1'>
                                            {Math.min((currentPage + 1) * 12, totalItems)}
                                        </span>
                                        de
                                        <span className='font-bold p-1'>
                                            {totalItems}
                                        </span>
                                        artículos
                                    </span>
                                </div>
                                <div className="flex justify-center pt-3">
                                    <div className='flex gap-1 text-primary-500'>
                                        <div
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            className={`cursor-pointer p-2 my-auto text-center 
                                                ${currentPage === 0 ? 'bg-primary-500/30' : 'bg-primary-500/30'}
                                                 hover:bg-primary-200  rounded-xl hover:text-primary-500/50 text-white `}
                                        >
                                            <FaAngleLeft size={16} />
                                        </div>
                                        {Array.from({ length: totalPages }, (_, i) => i).map(page => (
                                            <div
                                                key={page}
                                                onClick={() => handlePageChange(page)}
                                                className={`cursor-pointer p-2 px-4 text-center 
                                                    ${currentPage === page ? 'bg-primary-800/30 text-white font-semibold' : 'bg-primary-100 hover:bg-primary-200/70'}
                                                   rounded-xl `}
                                            >
                                                {page + 1}
                                            </div>
                                        ))}
                                        <div className={`cursor-pointer my-auto p-2 text-center 
                                            ${currentPage === totalPages - 1 ? 'bg-primary-500/30 hover:bg-primary-300/50' : 'bg-primary-500/30 hover:text-primary-500/50 hover:bg-primary-200'}
                                            text-white rounded-xl`}
                                            onClick={() => handlePageChange(currentPage + 1)}>
                                            <FaAngleRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {isError && (  // Si hay un error, muestra un mensaje de error
                        <ErrorMessage errorMessage={errorMessage} onClick={fetchDataAndSetState} btnMeessage="Reintentar"/>
                    )}
                </div>
            )}
        </div>
    );
}

export default ArticlesList;
