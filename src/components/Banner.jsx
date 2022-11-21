import image from '../assets/img.png'

function Banner (){
    return (
        <div className='bannerContainer'>
            <img className='bannerImage' src={image} alt='img' />
            <p className='bannerText'>Chez vous,<br/>partout et ailleurs</p>
        </div>
    )
}

export default Banner