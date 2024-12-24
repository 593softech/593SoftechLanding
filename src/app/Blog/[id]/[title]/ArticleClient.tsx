// ArticleClient.tsx
'use client';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { API_URL_IMG } from '@/config/config';
import Link from 'next/link';
import ShareButton from '@/components/share/ShareButton';
import { formatDate, scrollToTop } from '@/utils/functions';
import { PATH_EMPLOYE_ID } from '@/routes/routes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const ArticleClient = ({ article }: { article: any }) => {

    const [fullUrl, setFullUrl] = useState<string>('');
    useEffect(() => {
        setFullUrl(window.location.href);
    }, []);

    return (
        <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 25 }}
        >
            <PhotoProvider
                maskClassName="bg-bunker-600 backdrop-blur-md lg:backdrop-blur-md transition-colors transition-opacity duration-100"
                bannerVisible={false}
                maskOpacity={-1}
            >
                <div className="lg:px-36 lg:pb-10">
                    <div className="lg:px-3 text-black-900 rounded-xl lg:pt-1">
                        <div className="lg:px-3 text-black-900">
                            <div className="relative w-full lg:h-96 h-52">
                                <PhotoView src={API_URL_IMG + "Article/" + article.code + "/" + article.portada}>
                                    <img
                                        className="absolute inset-0 object-fill w-full h-full bg-white/20 text-black-800 shadow-md overflow-hidden lg:rounded-xl"
                                        src={API_URL_IMG + "Article/" + article.code + "/" + article.portada}
                                        alt={article.title}
                                    />
                                </PhotoView>
                            </div>

                            <div className="lg:flex w-full grid lg:pb-0 pb-1">
                                <Link

                                    href={PATH_EMPLOYE_ID + `${article.employe.idEmploye}/${article.employe.fullName.replace(/\s+/g, '-')}`}
                                    className="lg:ml-8 ml-4 lg:w-44 lg:h-44 h-32 w-32 relative lg:-mt-20 -mt-24 border-4 border-bunker-800 rounded-full overflow-hidden z-10 bg-bunker-800 backdrop-blur-md"
                                >
                                    <img
                                        className="object-cover lg:h-44 h-32 w-full rounded-full bg-bunker-800 backdrop-blur-md"
                                        src={API_URL_IMG + "Employe/" + article.employe.photo}
                                        alt={article.employe.fullName}
                                    />
                                </Link>

                                <div className="text-left pt-3">
                                    <h1 className="px-5 max-w-3xl font-semibold text-2xl text-primary-400 uppercase">
                                        {article.title}
                                    </h1>
                                    <div className="flex justify-between px-5 items-end">
                                        <div className="flex">
                                            <span className="mr-1 font-semibold text-lg text-black-200">Autor:</span>
                                            <Link
                                                href={PATH_EMPLOYE_ID + `${article.employe.idEmploye}/${article.employe.fullName.replace(/\s+/g, '-')}`}
                                                className="text-black-300 hover:text-primary-800 text-lg hover:underline line-clamp-1"
                                            >
                                                {article.employe.fullName}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-between px-5 items-end">
                                        <div className="flex">
                                            <p className="text-black-300 text-sm">{formatDate(article.created)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='relative flex w-full justify-end'>
                                <div className='abosulute lg:-mt-10 right-2 px-3'>
                                    <ShareButton
                                        title={"Compartir articulo"}
                                        btnText='Compartir articulo'
                                        url={fullUrl}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:px-0 px-4 pt-5">
                            <div className=" grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3  rounded-2xl lg:pb-0 pb-3">
                                <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 mb-2">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}
                                        className="markdown text-black-500 text-justify text-lg pb-2">
                                        {article.paragraph1}
                                    </ReactMarkdown>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}
                                        className="markdown text-black-500 text-justify text-lg">
                                        {article.paragraph2}
                                    </ReactMarkdown>
                                </div>
                                <div className="grid grid-cols-1 h-fit">
                                    <div className="container  py-2 mx-auto">
                                        <div className="-m-1 flex flex-wrap md:-m-2">
                                            <div className="flex w-full flex-wrap">
                                                <div className="w-1/2 p-1 md:p-2 my-auto">
                                                    <div className="relative">
                                                        <PhotoView src={API_URL_IMG + "Article/" + article.code + "/" + article.img1}>
                                                            <img
                                                                className="block max-h-52 w-full rounded-lg bg-primary-100 object-center"
                                                                src={API_URL_IMG + "Article/" + article.code + "/" + article.img1}
                                                                alt={article.title}
                                                            />
                                                        </PhotoView>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 p-1 md:p-2 my-auto">
                                                    <div className="relative">
                                                        <PhotoView src={API_URL_IMG + "Article/" + article.code + "/" + article.img2}>
                                                            <img
                                                                className="block max-h-52 w-full rounded-lg bg-primary-100 object-center"
                                                                src={API_URL_IMG + "Article/" + article.code + "/" + article.img2}
                                                                alt={article.title}
                                                            />
                                                        </PhotoView>
                                                    </div>
                                                </div>
                                                <div className="w-full p-1 md:p-2">
                                                    <div className="relative">
                                                        <PhotoView src={API_URL_IMG + "Article/" + article.code + "/" + article.img3}>
                                                            <img
                                                                className="block max-h-52 w-full rounded-lg bg-primary-100 object-center"
                                                                src={API_URL_IMG + "Article/" + article.code + "/" + article.img3}
                                                                alt={article.title}
                                                            />
                                                        </PhotoView>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3  rounded-2xl  pb-3">

                                <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 mb-2 lg:order-2">
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}
                                        className="markdown text-black-500 text-justify text-lg pb-2">
                                        {article.paragraph3}
                                    </ReactMarkdown>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}
                                        className="markdown text-black-500 text-justify text-lg">
                                        {article.paragraph4}
                                    </ReactMarkdown>
                                </div>
                                <div className="grid grid-cols-1 h-fit lg:order-1">
                                    <div className="container mx-auto py-2">
                                        <div className="-m-1 flex flex-wrap md:-m-2">
                                            <div className="flex w-full flex-wrap">
                                                <div className="w-1/2 p-1 md:p-2 my-auto">
                                                    <div className="relative">
                                                        <PhotoView src={API_URL_IMG + "Article/" + article.code + "/" + article.img4}>
                                                            <img
                                                                className="block max-h-52 w-full rounded-lg bg-primary-100 object-center"
                                                                src={API_URL_IMG + "Article/" + article.code + "/" + article.img4}
                                                                alt={article.title}
                                                            />
                                                        </PhotoView>
                                                    </div>
                                                </div>
                                                <div className="w-1/2 p-1 md:p-2 my-auto">
                                                    <div className="relative">
                                                        <PhotoView src={API_URL_IMG + "Article/" + article.code + "/" + article.img5}>
                                                            <img
                                                                className="block max-h-52 w-full rounded-lg bg-primary-100 object-center"
                                                                src={API_URL_IMG + "Article/" + article.code + "/" + article.img5}
                                                                alt={article.title}
                                                            />
                                                        </PhotoView>
                                                    </div>
                                                </div>
                                                <div className="w-full p-1 md:p-2">
                                                    <div className="relative">
                                                        <PhotoView src={API_URL_IMG + "Article/" + article.code + "/" + article.img6}>
                                                            <img
                                                                className="block max-h-52 w-full rounded-lg bg-primary-100 object-center"
                                                                src={API_URL_IMG + "Article/" + article.code + "/" + article.img6}
                                                                alt={article.title}
                                                            />
                                                        </PhotoView>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}
                                className="markdown text-black-500 text-justify text-lg pb-2">
                                {article.paragraph5}
                            </ReactMarkdown>
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}
                                className="markdown text-black-500 text-justify text-lg">
                                {article.paragraph6}
                            </ReactMarkdown>
                        </div>

                    </div>
                </div>
            </PhotoProvider>
        </motion.div>
    );
};

export default ArticleClient;
