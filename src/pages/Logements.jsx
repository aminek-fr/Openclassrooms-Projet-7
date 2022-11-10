import Products from '../data/data.json'
import '../sass/Pages/_logements.scss'

function Logement(){
    <section className='sectionLogement'>
        {Products.map((product, index) => {
            return (
            <div key={index}>
            <h3>{product.title}</h3>
            </div>
            )
        })
        }
    </section>
}

export default Logement