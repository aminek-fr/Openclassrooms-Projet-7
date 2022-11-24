import image from '../assets/img.png'

function Banner (){
    return (
        <div className='bannerContainer'>
            <img className='bannerImage' src={image} alt='img' />
            <h1 className='bannerText'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner