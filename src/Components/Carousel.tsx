import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    return (

        <div className="carousel">
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
    );
};

export default Carousel;