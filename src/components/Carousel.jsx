import { useState } from "react";
import vector from '../assets/Vector.svg'
import '../styles/Layout/_carousel.scss';

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);  /*on défini un état à 0.*/
    const length = slides.length;   /*on compte le nombre de slide.*/

    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);   /*Vérifie la position actuelle et ajoute 1.*/
    };

    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);   /*Vérifie la position actuelle et retire 1.*/
    };

    return (
    <div className='carouselContainer'>
        {/*Condition si le nombre de photo est supérieur à 1, alors on affiche la flèche gauche du carroussel.*/}
        {length > 1 && (
        <img src={vector} onClick={prevSlide} className='vectorLeft' alt=''/>
        )}

        {/*Condition si le nombre de photo est supérieur à 1, alors on affiche la flèche droite du carroussel.*/}
        {length > 1 && (
        <img src={vector} onClick={nextSlide} className='vectorRigth' alt=''/>
        )}
        
        {/*Pour chaque photo trouvée, on affiche la balise "img".*/}
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



