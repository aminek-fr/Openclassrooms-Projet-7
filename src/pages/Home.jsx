import Card from '../components/Card';
import Products from '../data/data.json';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="mainContainer"> 
      <section className="sectionContainer">
        <div className='bannerContainer'>
          <h1>Chez vous,&nbsp;<span>partout et ailleurs</span></h1>
        </div>
        <div className="articleContainer">
          {Products.map((product, index) => {
            return (
              <article key={index}>
                <Link  to={"/logement/" + product.id}>
                  <Card title={product.title} cover={product.cover} />
                </Link>
              </article>
            )
          })
          }
        </div>
      </section>
    </main>
  );
}

export default Home;