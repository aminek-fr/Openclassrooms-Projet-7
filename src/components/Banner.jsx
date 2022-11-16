import image from '../assets/Image.png'

function Banner (){
    return (
        <div className='bannerContainer'>
            <img className='bannerImg' src={image} alt='img' /> 
            <p className='bannerTxt'>Chez vous,<br/>partout et ailleurs</p>
        </div>
    )
}

export default Banner