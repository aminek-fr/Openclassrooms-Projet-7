import Carousel  from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Rating from '../components/Rating';
import Tags from '../components/Tags';
import Products from '../data/data.json';
import { useParams, Navigate } from 'react-router-dom';
import '../styles/Pages/_logements.scss';

function Slider(){
    const id = useParams()
    const oneProduct = Products.find(i => i.id === id.id);

    //Si l'id de l'url et différent de l'id présent dans le fichier "json" alors on renvoit sur la page d'erreur, sinon on affiche la page logement.//
    if(!oneProduct){
        return <Navigate to="*" />;
    }else{
        return (
            <main className='mainContainerLogements'>
                <section className='sectionContainerLogements'>
                    <Carousel slides={oneProduct.pictures} />
                    <article className='articleContainerLogements'>
                        <div className='containerInformation'>
                            <h1>{oneProduct.title}</h1>
                            <h2>{oneProduct.location}</h2>
                            <Tags tagsLodging={oneProduct.tags} />
                        </div>
                        <div className='containerStars'>
                            <Rating rating={oneProduct.rating}/>
                            <div className='containerName'>
                                <p className='textName'>{oneProduct.host.name}</p>
                                <img className='pictureName' src={oneProduct.host.picture} alt='' />
                            </div>
                        </div>
                    </article>
                    <article className='articleContainerDescription'>
                        <Dropdown title="Description" description={oneProduct.description}/>
                        <Dropdown title="Equipements" description={oneProduct.equipments}/>
                    </article>
                </section>
            </main>
        )
    }    
}

export default Slider
