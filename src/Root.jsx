import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
const Root = () => {
  return (
    <div>
      <Header/>
      
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Root;
