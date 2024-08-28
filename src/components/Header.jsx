import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">PEOPLE</Link>
        </div>
        <nav className="header__nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campaign">Campaign</Link></li>
            <li><Link to="/donation">Donation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header__button">
          <button>Create Campaign</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
      
      