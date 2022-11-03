
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import '../styles/Header.css';
 
function Header() {
    return (
        <div className='headerContainer'>
            <img src={logo} alt='Kasa' className='kasaLogo' />
            <nav>
                <ul>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
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

