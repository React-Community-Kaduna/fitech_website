/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/adminDashboard";
import Events from "./pages/Events";
import Blog from "./pages/Blog/";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminSignIn from "./pages/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/training",
    element: <Training />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <AdminSignIn />,
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
