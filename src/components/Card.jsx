//import '../styles/Layout/_card.scss'

function Card ({title, cover}){
    return(
        <div className="cardContainer"> 
            <h2 className='cardTitle'>{title}</h2>
            <img className='cardImage' src={cover} alt="" />
        </div>   
    );
}


export default Card