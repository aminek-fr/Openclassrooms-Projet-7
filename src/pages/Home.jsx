import Banner from "../components/Banner";
import Card from '../components/Card';
import Products from '../data/data.json'

console.log(Products)

function Home() {
  return (
    <main className="mainContainer">
      <Banner />  
      <section className="sectionContainer">
        
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

/*
<h2>{product.title}</h2>
            <img src={product.cover} alt='' />
return(
  <div className="cardContainer"> 
      <div>
      {Products.map((product) => {
          return <h2>{product.title}</h2>;
        })
      

      </div>
  </div>   
);*/