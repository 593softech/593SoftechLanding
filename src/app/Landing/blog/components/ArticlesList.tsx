"use client"

import { ArticleDto } from "@/services/model/ArticleModel";
import React, { useState, useEffect } from "react";
import Loader from "@/components/loader/Loader";
import { getAllArticles } from "@/services/service/ArticleService";
import CardArticle from "./CardArticle";
import ErrorMessage from "@/components/error/ErrorMessage";

const ArticlesList = () => {

    const [data, setData] = useState<ArticleDto[]>([]);
    const [currentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchDataAndSetState();
    }, [currentPage]);

    const fetchDataAndSetState = async () => {
        try {
            setIsLoading(true);
            setIsError(false);  // Resetear el estado de error antes de la nueva solicitud
            const response = await getAllArticles(currentPage);
            setData(response.content);
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

    return (
        <div className="flex w-full justify-center">
            {isLoading ? (
                <Loader />  // Mostrar Loader mientras isLoading sea true
            ) : isError ? (
                <ErrorMessage errorMessage={errorMessage} onClick={fetchDataAndSetState} btnMeessage="Reintentar"/>
            ) : data.length === 0 && isLoading ? (
                <ErrorMessage errorMessage="No existen artículos publicados" onClick={fetchDataAndSetState} />
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
        </div>
    );
}

export default ArticlesList;
