import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logements';
import Header from './components/Header';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import './styles/main.scss';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path='*' element={<Error404 />} />  
    </Routes>
  <Footer />
  </BrowserRouter>,
);
