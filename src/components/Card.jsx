import '../sass/Layout/_card.scss'

function Card ({title, cover}){
    return(
        <div className="cardContainer"> 
            <h2 className='productTitle'>{title}</h2>
            <img className='productImg' src={cover} alt="" />
        </div>   
    );
}


export default Card
