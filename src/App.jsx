import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
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
  // {
  //   path: "/training",
  //   element: <Training />,
  // },
  // {
  //   path: "/blog",
  //   element: <Blog />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
