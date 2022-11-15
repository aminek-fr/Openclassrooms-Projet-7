import Carousel  from '../components/Carousel';
import Products from '../data/data.json';
import { useParams } from 'react-router-dom';
//import '../sass/Layout/_carroussel.scss';
import '../sass/Pages/_logements.scss';

function Slider(){
    const id = useParams()
    //console.log(id);
    const log = Products.find(i => i.id === id.id);
    //console.log(logement);

    const tagsLog = log?.tags.map((tags) => {
        return <p>{tags}</p>
    })
    /*const imgLog = log?.pictures.map((image) => {
        return <div>{image}</div>
    })
    console.log(imgLog);*/
    
    return (
        <main className='mainContainer'>
        <section className='sectionContainer'>
        <div>{tagsLog}</div>
        <Carousel pictures={log?.pictures} />
        </section>
        </main>
    )
}

export default Slider
/*{imgLog.map((product) => {
    return (
    <Carousel pictures={imgLog.pictures} />
    <img src={product.pictures} alt='' />
    )
})
{log?.pictures.map((product, k) => {
        return (
            //<Carousel pictures={product.pictures} />
            <img key={k} src={product.pictures} alt='' />
        )
        })
        }
}*/