import Carousel  from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import Products from '../data/data.json';
import { useParams } from 'react-router-dom';
import '../styles/Pages/_logements.scss';

function Slider(){
    const id = useParams()
    const oneProduct = Products.find(i => i.id === id.id);
    
    return (
        <main className='mainContainer'>
            <section className='sectionContainer'>
                <Carousel slides={oneProduct?.pictures} />
                <div className='containerInformation'>
                    <h1>{oneProduct?.title}</h1>
                    <h2>{oneProduct?.location}</h2>
                    <Tags tagsLodging={oneProduct.tags} />
                </div>
                <div className='containerStars'>
                    <Rating rating={oneProduct.rating}/>
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
