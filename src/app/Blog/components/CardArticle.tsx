import { API_URL_IMG } from "@/config/config"
import { PATH_BLOG_ID, PATH_EMPLOYE_ID } from "@/routes/routes"
import { ArticleDto } from "@/services/model/ArticleModel"
import { formatDate } from "@/utils/functions"
import Link from "next/link"
import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

const CardArticle: React.FC<ArticleDto> = (props) => {
    return (
        <div
            key={props.idArticle}
            className="group sm:flex lg:rounded-xl dark:focus:ring-black-600 bg-bunker-950 hover:bg-bunker-950/65 lg:border lg:border-bunker-800 transition-colors duration-300">
            <div className="flex-shrink-0 relative lg:rounded-s-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                <Link href={PATH_BLOG_ID(props.idArticle, props.title.replace(/\s+/g, '-'))}>
                    <img className="size-full absolute top-0 start-0 lg:object-fill"
                        src={API_URL_IMG + "Article/" + props.code + "/" + props.portada}
                        alt={props.title} />
                </Link>
            </div>

            <div className="grow transition-colors duration-300">
                <div className="p-4 flex flex-col h-full sm:p-6">
                    <Link href={PATH_BLOG_ID(props.idArticle, props.title.replace(/\s+/g, '-'))}
                        className="text-lg sm:text-2xl w-fit font-bold hover:text-primary-800 text-primary-600 uppercase line-clamp-2"
                        rel="noopener noreferrer">
                        {props.title}
                    </Link>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}
                        className="markdown text-black-400 font-sans text-justify line-clamp-5">
                        {props.description}
                    </ReactMarkdown>

                    <div className="mt-5 sm:mt-auto">
                        <div className="flex items-center">
                            <Link
                                href={PATH_EMPLOYE_ID + props.employe.idEmploye + "/" + props.employe.fullName?.replace(/\s+/g, '-')}
                                className="flex-shrink-0">
                                <img className="size-[46px] rounded-full bg-black-100 border border-primary-200"
                                    src={API_URL_IMG + "Employe/" + props.employe.photo}
                                    alt={props.employe.fullName} />
                            </Link>
                            <div className="ms-2">
                                <Link
                                    href={PATH_EMPLOYE_ID + props.employe.idEmploye + "/" + props.employe.fullName?.replace(/\s+/g, '-')}
                                    className="font-semibold text-black-200 hover:text-black-700 line-clamp-1">
                                    {props.employe.fullName}
                                </Link>
                                <p className="text-xs text-black-400 line-clamp-1">
                                    {formatDate(props.created)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardArticle