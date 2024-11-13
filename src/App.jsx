import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Registration from "./pages/Registration";
import Blog from "./pages/Blog/";
// import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    name: "Events",
    link: "/events",
  },
  {
    name: "Regitration",
    link: "/registration",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
