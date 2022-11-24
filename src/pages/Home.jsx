import Banner from "../components/Banner";
import Card from '../components/Card';
import Products from '../data/data.json';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="mainContainer"> 
      <section className="sectionContainer">
        <Banner />
        <div className="articleContainer">
          {Products.map((product, test) => {
            return (
              <article>
                <Link key={test} to={"/logement/" + product.id}><Card title={product.title} cover={product.cover} /></Link>
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