import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Donation from './components/Donation'
import Home from './components/Home'
import './index.css'
import Root from './Root'



const router = createBrowserRouter([
  
  {
    path:"/",
    element:<Root/>,

    children:[
       {
       path:"/donation",
       element:<Donation/>
  },
  {
    path:"/home",
    element:<Home/>
  }
    ]
  },
 
  


])



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);