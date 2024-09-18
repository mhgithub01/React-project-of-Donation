import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Root.css"
const Root = () => {
  return (
    <>    
    <div className='top'>
    <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <Link to="/">PEOPLE</Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/compaign">Campaign</Link></li>
          <li><Link to="/donation">Donation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="header__button">
        <button>Create Campaign</button>
      </div>
    </div>
    
    
  </header>
  </div>
  <main>
        <Outlet />
      </main>

  <footer>
        
  <p style={{fontFamily:"cursive"}}>Copyright © 2024 TenWeb. All rights reserved.</p> 
  Privacy Terms of Service SLA Report Abuse Domain Name Services Agreement
      </footer>
     
  </>

  );
}

export default Root;
