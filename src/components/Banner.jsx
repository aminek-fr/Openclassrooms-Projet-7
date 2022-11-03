import image from '../assets/Image.png'
import '../styles/Banner.css'

function Banner (){
    return (
        <div className='bannerContainer'>
            <img className='bannerImg' src={image} alt='img'></img> 
        </div>
    )
}

export default Banner
/*
<div className='kasa-container'>
</div>*/
//<p className='kasa-text'>Chez vous, partout et ailleurs</p>