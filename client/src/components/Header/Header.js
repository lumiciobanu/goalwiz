import React from 'react';
import Logo from '../../assets/logo/logo-goalwizz.svg'
import '../Header/Header.scss';




function Header() {
    return (
        <div className="header">
            <img className="header__logo" alt="site logo" src={Logo} />
    </div>
    );
  }
  
  export default Header;

