import Carousel  from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Products from '../data/data.json';
import { useParams } from 'react-router-dom';
import StarColors from '../assets/StarColors.svg'
import StarWhite from '../assets/StarWhite.svg'
import '../sass/Pages/_logements.scss';

function Slider(){
    const id = useParams()
    const oneProduct = Products.find(i => i.id === id.id);
    const tagsLog = oneProduct?.tags.map((tags) => {
        return <p>{tags}</p>
    })

    //Note étoiles
    let notLogement = []
    let fullStar = true
    for ( let index = 0; index < 5; index++) {
        fullStar = false
    if ( fullStar === true){
        notLogement.push(<img key={index} className='etoiles' src={StarWhite} alt='' />) 
    }else{
        notLogement.push(
            <img key={index} className='etoiles' src={StarColors} alt='' />
        )
    }
    }

    return (
        <main className='mainContainer'>
            <section className='sectionContainer'>
                <Carousel slides={oneProduct?.pictures} />
                <div className='containerInformation'>
                    <h1>{oneProduct?.title}</h1>
                    <h2>{oneProduct?.location}</h2>
                    <div className='containerTags'>
                        <div className='tags'>{tagsLog}</div>
                    </div>
                </div>
                <div className='containerStars'>
                    <div>{notLogement}</div>
                    <div className='containerName'>
                        <p className='textName'>{oneProduct?.host.name}</p>
                        <img className='pictureName' src={oneProduct.host.picture} alt='' />
                    </div>
                </div>
                <div className='containerDescription'>
                    <Dropdown title="Description" description={oneProduct.description}/>
                    <div className='equipement'>
                        <Dropdown title="Equipements" description={oneProduct.equipments}/>
                    </div>
                </div>
                
            </section>
        </main>
    )
}

export default Slider
/*<div>{oneProduct.host.picture}</div>*/
/*<div>{oneProduct?.rating}</div>
                <div>{oneProduct?.description}</div>
                <div>{oneProduct?.equipments}</div>*/

                /*<div className='containerTags'>
                    <div className='tags'>{tagsLog}</div>
                </div>*/
                /*<h3>Description</h3>*/