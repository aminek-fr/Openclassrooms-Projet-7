
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
//import '../sass/Layout/_header.scss';
 
function Header() {
    return (
        <div className='headerContainer'>
            <img src={logo} alt='Kasa' className='kasaLogo' />
            <nav>
                <ul>
                  <li><Link to="/">ACCUEIL</Link></li>
                  <li><Link to="/about">A PROPOS</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header

/*
import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'

function Header() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  //let activeClassName = "underline";

  return (
    <div className='kasa-banner'>
        <img src={logo} alt='Kasa' className='kasa-logo' />
    <nav>
      <ul>
        <li className="navigation">
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            A Propos
          </NavLink>
        </li>
    </ul>
    </nav>
    </div>
  );
}

export default Header*/

