import '../sass/Layout/_carousel.scss'

function Carousel ({pictures}){
    return(
        <div className="carouselContainer">
            {pictures.map((image, props) =>
                <img key={props} className='carouselImg' src={image} alt='' />
            )}
        </div>
    )
}

export default Carousel

