import React from "react";
import ArticleList from "./ArticleList";

// Agregar props al componente para recibir el id
const BlogEmploye = ({ id }: { id: number | string }) => {
    return (
        <React.Fragment>
            <div className="w-full justify-center flex-1 max-w-7xl mx-auto md:px-6 lg:pt-8">
                <div className="sticky lg:top-16 top-16 w-full pb-2 pt-1 z-10 mb-2 bg-bunker-600">
                    <div className="grid grid-cols-1 w-full">
                        <div className="w-full grid px-3">
                            <h2 className="text-lg font-bold text-black-300/50 md:text-xl">
                                Artículos publicados
                            </h2>                            
                        </div>
                    </div>
                </div>
                <div className="md:px-3">
                    <ArticleList id={id} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default BlogEmploye;
