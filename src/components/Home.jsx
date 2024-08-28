import React from 'react';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div>
     <div>
        <h1 className='heading'>Humanity <span className='centre'>Above</span>Relegion</h1>
        </div>  

        <div><Outlet/></div>
    </div>
  );
}

export default Home;
