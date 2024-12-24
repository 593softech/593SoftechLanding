'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import { IoClose } from 'react-icons/io5';

const YoutubeButton = () => {
    const [showButton, setShowButton] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <motion.button
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 200, damping: 25 }}
                    onClick={handleButtonClick}
                    className="fixed md:bottom-16 bottom-16 md:left-8 left-4 bg-danger-500 text-white p-3 rounded-full shadow-lg hover:bg-danger-700 z-10"
                >
                    <FaYoutube size={24} />
                </motion.button>
            )}

            {showModal && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 200, damping: 25 }}
                    className='relative'>
                    <div className="fixed bottom-20 mb-2 left-2 lg:left-4 lg:bottom-8 bg-opacity-50 flex items-center justify-center z-10">
                        <div className="relative rounded-2xl max-w-lg">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-2 right-2 text-black bg-white rounded-full"
                            >
                                <IoClose className='w-8 h-8' />
                            </button>
                            <div className="w-fit h-fit">
                                <iframe
                                    className='rounded-2xl'
                                    width="250"
                                    height="440"
                                    src="https://www.youtube.com/embed/H6-C7FoRhXE?autoplay=1&mute=0&loop=1&controls=0&showinfo=0"
                                    title="YouTube video player"
                                    allow="autoplay; fullscreen"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default YoutubeButton;
