import Banner from "../components/Banner";
import Card from '../components/Card';
import Products from '../data/data.json';
import { Link } from 'react-router-dom';

//console.log(Products)

function Home() {
  return (
    <main className="mainContainer">  
      <section className="sectionContainer">
        <Banner />
        {Products.map((product, test) => {
          return (
            <div >
            <Link key={test} to={"/logement/" + product.id}><Card title={product.title} cover={product.cover} /></Link>
            </div>
          )
        })
        }
      </section>
    </main>
  );
}

export default Home;