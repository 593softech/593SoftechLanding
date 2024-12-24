import React from 'react'
import ArticlesList from './components/ArticlesList'
import Link from 'next/link'
import { PATH_BLOG } from '@/routes/routes'

export default function Blog() {
    return (
        <div className="lg:py-10 pb-24">
            <div className="px-4 py-5 md:text-center text-center">
                <h2 className="pb-4 text-3xl font-bold text-warning-600 md:text-4xl">
                    Mantente informado
                </h2>
            </div>
            <div className='lg:px-16'>
                <ArticlesList />
            </div>
            <div className="flex justify-center pt-8">
                <Link
                    className="relative group inline-block w-fit py-3 px-6 text-white font-semibold rounded-full bg-danger-950/80 overflow-hidden mb-4"
                    href={PATH_BLOG}
                >
                    <div className="absolute top-0 right-full w-full h-full bg-warning-800/15 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <div className="relative flex items-center justify-center">
                        <span className="my-auto">Ver todos los articulos</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
