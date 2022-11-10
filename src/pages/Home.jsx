import Banner from "../components/Banner";
import Card from '../components/Card';
import Products from '../data/data.json'

console.log(Products)

function Home() {
  return (
    <main className="mainContainer">  
      <section className="sectionContainer">
        <Banner />
        {Products.map((product, index) => {
          return (
            <div key={index}>
            <Card title={product.title} cover={product.cover} />
            </div>
          )
        })
        }
        
      </section>
    </main>
  );
}

export default Home;