import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import './css/index.css';
import App from './composants/App.jsx';
import PageErreur from './composants/PageErreur.jsx';
import Login from './Login.jsx';
import DasbhoardA from './composants/DasbhoardA.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element:  <Login/> ,
    errorElement: <PageErreur/>,
  },
  {
    path: "App",
    element: 
    <>
     <App />
    </>
    ,
    
  },
  {
    path: "/dasbhoard",
    element:(
    <>
     <DasbhoardA/>
      
    </>
    ),
    
  },
  
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
