import React from 'react';
import Logo from '../../assets/logo/logo-goalwizz.svg'
import '../Header/Header.scss';
import { Link } from "react-router-dom";





function Header() {
    return (
        <div className="header">
           <Link to="/MainPage"><img className="header__logo" alt="site logo" src={Logo} /></Link> 
    </div>
    );
  }
  
  export default Header;

