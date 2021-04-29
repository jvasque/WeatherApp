import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
//import 'D:/Programacion/henry/FT-M2/09-React-Routing/homework/src/containers/App.css';
import '../../src/containers/App.css'
import Bubbles from './styles/Bubbles'

function Nav({onSearch}) {
  return (
     <div>
        <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          {/* <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
          Weather App
        </span>
        </Link>
        <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
      <Bubbles />
     </div>
  );
};

export default Nav;
