import StarEmpty from '../assets/StarEmpty.svg'
import Star from '../assets/Star.svg'
 
 //Note étoiles
 const Rating = ({rating}) => {
    let notLogement = []
    for (let i = 0; i < 5; i++) {
        if (i < rating ){
            notLogement.push(<img key={i} src={Star} alt='' />) 
        }else{
            notLogement.push(
                <img key={i} src={StarEmpty} alt='' />
            )
        }
    }

    return(
        <span>{notLogement}</span>
    );
}

export default Rating;