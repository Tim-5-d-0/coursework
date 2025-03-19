import React from "react";
import { Link } from 'react-router-dom';

//import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Bee</div>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/about">Про нас</Link>
        <Link to="/contact">Контакти</Link>
      </nav>
    </header>
  );
};

export default Header;
