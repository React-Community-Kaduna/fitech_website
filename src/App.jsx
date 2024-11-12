import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Trainings from "./pages/Training";
import Registration from "./pages/Registration";
import Blog from "./pages/Blog/";
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
    element: <Trainings />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
