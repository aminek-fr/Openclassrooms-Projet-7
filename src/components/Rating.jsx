import StarEmpty from '../assets/StarEmpty.png'
import Star from '../assets/Star.png'
 
 //Note étoiles
 const Rating = ({rating}) => {
    let notLogement = []
    for (let i = 0; i < 5; i++) {
        if (i < rating ){
            notLogement.push(<img className='star'key={i} src={Star} alt='' />) 
        }else{
            notLogement.push(
                <img className='star' key={i} src={StarEmpty} alt='' />
            )
        }
    }

    return(
        <span>{notLogement}</span>
    );
}

export default Rating;