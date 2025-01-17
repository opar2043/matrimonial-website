import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  
} from "@tanstack/react-query";

const queryClient = new QueryClient();

import Root from "./Components/MainCompo/Root/Root.jsx";
import Home from "./Components/MainCompo/Home/Home.jsx";
import Contact from "./Components/MainCompo/Contact/Contact.jsx";
import About from "./Components/MainCompo/About/About.jsx";
import Biodata from "./Components/MainCompo/Biodata/Biodata.jsx";
import Login from "./Components/MainCompo/Firebase/Login.jsx";
import Register from "./Components/MainCompo/Firebase/Register.jsx";
import AuthProvider from "./Components/MainCompo/Provider/AuthProvider.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import CreateBio from "./Components/Dashboard/CreateBio/CreateBio.jsx";
import ContuctReq from "./Components/Dashboard/ContactReq/ContuctReq.jsx";
import Favourate from "./Components/Dashboard/Favourate/Favourate.jsx";
import Editbio from "./Components/Dashboard/EditBio/Editbio.jsx";
import ViewData from "./Components/Dashboard/ViewBioData/ViewData.jsx";
import Checkout from "./Components/Dashboard/ViewBioData/Checkout.jsx";
import MyBio from "./Components/Dashboard/EditBio/MyBio.jsx";
import GotMarried from "./Components/Dashboard/GotMarried/GotMarried.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/biodata",
        element: <Biodata></Biodata>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/create",
        element: <CreateBio></CreateBio>,
      },
      {
        path: "/dashboard/mybio",
        element: <MyBio></MyBio>
      },
      {
        path: "/dashboard/gotmarried",
        element: <GotMarried></GotMarried>
      },
      {
        path: "/dashboard/contact",
        element: <ContuctReq></ContuctReq>,
      },
      {
        path: "/dashboard/favourate",
        element: <Favourate></Favourate>,
      },
      {
        path: "/dashboard/edit/:id",
        element: <Editbio></Editbio>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
      {
        path: "/dashboard/view/:id",
        element: <ViewData></ViewData>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
      ,
    </AuthProvider>
  </QueryClientProvider>
);
