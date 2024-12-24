// Importaciones necesarias
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Definición del componente Slide
export const Slide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className='mx-2'>{children}</div>; // Ajuste de margenes para slides
};

// Definición del componente Carousel
interface CarouselProps {
    children: React.ReactNode;
    show?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, show = 3 }) => {
    const [slidesToShow, setSlidesToShow] = useState<number>(show);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(3);  // Mostrar 2 slides en pantallas pequeñas
            } else {
                setSlidesToShow(show);  // Mostrar el número de slides basado en la prop
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [show]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full overflow-hidden">
            <Slider {...settings}>
                {React.Children.map(children, (child, index) => (
                    <div key={index}>
                        {child}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
