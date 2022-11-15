import Carousel  from '../components/Carousel';
import Products from '../data/data.json';
import { useParams } from 'react-router-dom';
import '../sass/Pages/_logements.scss';

function Slider(){
    const id = useParams()
    const oneProduct = Products.find(i => i.id === id.id);

    return (
        <main className='mainContainer'>
            <section className='sectionContainer'>
                <Carousel pictures={oneProduct?.pictures} />
                <div>{oneProduct?.tags}</div>
                
            </section>
        </main>
    )
}

export default Slider

/*
const tagsLog = log?.tags.map((tags) => {
        return <p>{tags}</p>
    })
<div>{tagsLog}</div>*/
