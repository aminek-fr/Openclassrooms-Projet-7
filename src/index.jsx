import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import './sass/main.scss';
//import dataJSON from './data/data.JSON';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

//fetch('dataJSON').then((res) => {console.log(res)})
//const getData=()=>{
  fetch('./data/data.JSON'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })


root.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='*' element={<Error404 />} />  
    </Routes>
  <Footer />
  </BrowserRouter>,
);
