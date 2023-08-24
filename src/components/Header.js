import React from 'react';
import logo from '../images/Logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo}  alt="Logo" className="header__logo"/>
            {/* <img src="<%=require('./images/Logo.svg')%>" alt="Around The U.S. Logo" className="header__logo"/> */}
        </header>
    );
}

export default Header;
