import '../styles/Layout/_carousel.scss'
import { useState } from "react";
import vector from '../assets/Vector.svg'

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
    <div className='carouselContainer'>
        {length > 1 && (
        <img src={vector} onClick={prevSlide} className='vectorLeft' alt=''/>
        )}

        {length > 1 && (
        <img src={vector} onClick={nextSlide} className='vectorRigth' alt=''/>
        )}
        
        {slides.map((slide, index) => {
        return (
            <div key={index}>
            {index === current && (
                <img className='carouselImg' src={slide} alt="" />
            )}
            </div>
        );
        })}
    </div>
    );
};

export default Carousel;



