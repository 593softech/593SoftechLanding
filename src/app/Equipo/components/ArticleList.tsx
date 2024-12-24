"use client";

import CardArticle from "@/app/Blog/components/CardArticle";
import ErrorMessage from "@/components/error/ErrorMessage";
import Loader from "@/components/loader/Loader";
import { ArticleDto } from "@/services/model/ArticleModel";
import { getAllArticlesByEmploye } from "@/services/service/ArticleService";
import React, { useEffect, useState, useCallback } from "react";

// Asegúrate de que ArticleList acepte el prop id
const ArticleList = ({ id }: { id: number | string }) => {
    const [data, setData] = useState<ArticleDto[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Define fetchDataAndSetState como una función de callback
    const fetchDataAndSetState = useCallback(async () => {
        setIsLoading(true); // Establecer isLoading en true antes de hacer la solicitud
        setIsError(false); // Restablecer el estado de error
        setErrorMessage(""); // Limpiar el mensaje de error

        try {
            const response = await getAllArticlesByEmploye(id);
            setData(response);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsError(true);
            if (error instanceof Error) {
                setErrorMessage(error.message.toUpperCase());
            } else {
                setErrorMessage('Error en la solicitud. Por favor, inténtalo de nuevo más tarde');
            }
        } finally {
            setIsLoading(false);
        }
    }, [id]); // Agregar id como dependencia

    useEffect(() => {
        fetchDataAndSetState();
    }, [fetchDataAndSetState]); // Usar fetchDataAndSetState en lugar de id

    return (
        <>
            {isLoading && !isError ? (
                <Loader />
            ) : (
                <div>
                    {isError ? (
                        <ErrorMessage errorMessage={errorMessage} onClick={fetchDataAndSetState} />
                    ) : data.length > 0 ? (
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-6 md:pb-12">
                            {data.map((article) => (
                                <CardArticle
                                    key={article.idArticle}
                                    idArticle={article.idArticle}
                                    title={article.title}
                                    description={article.description}
                                    portada={article.portada}
                                    status={article.status}
                                    created={article.created}
                                    code={article.code}
                                    employe={{
                                        idEmploye: article.employe.idEmploye,
                                        fullName: article.employe.fullName,
                                        photo: article.employe.photo
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <ErrorMessage errorMessage="No existen artículos publicados por este autor" onClick={fetchDataAndSetState} />
                    )}
                </div>
            )}
        </>
    );
}

export default ArticleList;
