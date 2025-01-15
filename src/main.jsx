import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/MainCompo/Root/Root.jsx';
import Home from './Components/MainCompo/Home/Home.jsx';
import Contact from './Components/MainCompo/Contact/Contact.jsx';
import About from './Components/MainCompo/About/About.jsx';
import Biodata from './Components/MainCompo/Biodata/Biodata.jsx';
import Login from './Components/MainCompo/Firebase/Login.jsx';
import Register from './Components/MainCompo/Firebase/Register.jsx';
import AuthProvider from './Components/MainCompo/Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/biodata',
        element: <Biodata></Biodata>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
    
  },
]);





createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
  </AuthProvider>

)
