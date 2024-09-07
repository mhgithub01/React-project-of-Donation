import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import Root from './routes/Root'
import Donation from './routes/Donation'
import Home from './routes/Home'
import Compaign from './routes/Compaign'
import Contact from './routes/Contact'




const router = createBrowserRouter([
  
  {
    path:"",
    element:<Root/>,
  

    children:[
      {
        path:"/",
        element:<Home/>
       },
       {
       path:"/donation",
      element:<Donation/>
  },
  {
    path:"/compaign",
    element:<Compaign/>

  },
  
  {
    path:"/contact",
    element:<Contact/>
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