import { useState, useEffect } from 'react';
import Vector from '../assets/Vector.svg'
import '../sass/Layout/_carousel.scss'
 
function Carousel ({pictures}){
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = pictures.length;
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
      };
    const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    return(
        <div>
            <img src={Vector} alt='' onClick={prevSlide} />
        </div>
    {pictures.map((image, props) => {
        return(
        <div className="carouselContainer">
            <div className='carouselItem'>
                <img key={props} className='carouselImg' src={image} alt='' />
            </div>
        </div>
        )
    )}
    }
    )
}

export default Carousel

/*<div className="left-arrow">
      onClick={prevSlide}
      </div>
    
    <div className="right-arrow">
      onClick={nextSlide}
      </div>*/

