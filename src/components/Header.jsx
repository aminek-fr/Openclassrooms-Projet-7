import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
 
function Header() {
    return (
        <header className='headerContainer'>
            <img src={logo} alt='Kasa' className='kasaLogo' />
            <nav>
                <ul>
                  <li><Link to="/">ACCUEIL</Link></li>
                  <li><Link to="/about">A PROPOS</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header

