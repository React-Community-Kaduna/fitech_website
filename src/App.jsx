/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/adminDashboard";
import Events from "./pages/Events";
import Blog from "./pages/Blog/";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserAuthForm from "./pages/UserAuthForm";
import { createContext, useState, useEffect } from "react";
import { lookInSession } from "./Components/Sessions";
import Verify from "./pages/verfiyUser";
import UserDashboard from "./pages/userDashboard";
import Application from "./Components/Trainings";
import BlogPage from "./Components/BlogPage";
import EventPage from "./Components/EventPage";
import Settings from "./Components/Settings";

// Create UserContext
export const UserContext = createContext({});

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
    path: "/adminDashboard",
    element: <AdminDashboard />,
    children: [
      { path: "Trainings", element: <Application /> },
      { path: "BlogPage", element: <BlogPage /> },
      { path: "EventPage", element: <EventPage /> },
      { path: "Settings", element: <Settings /> },
    ],
  },
  {
    path: "/verifyUser",
    element: <Verify />,
  },
  {
    path: "/userDashboard",
    element: <UserDashboard />,
  },
  {
    path: "/signin",
    element: <UserAuthForm type="sign-in" />,
  },
  {
    path: "/signup",
    element: <UserAuthForm type="sign-up" />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  const [userAuth, setUserAuth] = useState({});

  // Initialize userAuth from session storage on app load
  useEffect(() => {
    const userInSession = lookInSession("user");
    if (userInSession) {
      setUserAuth(JSON.parse(userInSession));
    } else {
      setUserAuth({ access_token: null });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
