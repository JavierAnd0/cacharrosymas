import React from 'react';
import Logo from "../img/LogoCacharreria.png";          
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import '../../css/Header.css';
=======
import '../Css/HeaderStyle.css'

>>>>>>> 10de2d52ab7fe989d4c053ded57adc68e9da42da

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-section">

      </div>
       
      <div className="navbar-section links">
<<<<<<< HEAD
        <Link to="/"><img className="Logo" src={Logo} alt="logo" /></Link>
        <Link to="/productos">Productos</Link>
=======
        <Link  to="/inicio"><img className="Logo" src={Logo} alt="logo" /></Link>
        <Link className="" to="/productos">Productos</Link>
>>>>>>> 10de2d52ab7fe989d4c053ded57adc68e9da42da
        <Link to="/sobre-nosotros">Nosotros</Link>
        <Link to="/contactanos">Contactanos</Link>
      </div>


      <div className="navbar-section">
        <div className="ui vertical animated button" tabIndex="0">
          <div className="hidden content">
            <Link to="/login">Acceder</Link>
          </div>
          <div className="visible content">
            <i className="user icon"></i>
          </div>
        </div>
      </div>
    </div>

  );
};

export default NavBar;
