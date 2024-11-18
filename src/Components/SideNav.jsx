/* eslint-disable no-unused-vars */
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { PiScrollFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineLogout } from "react-icons/ai";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../App";
import { removeFromSession } from "./Sessions";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);
  const navigate = useNavigate(); // React Router's navigation hook

  const signOutUser = () => {
    removeFromSession("user"); // Clear user session
    setUserAuth({ access_token: null }); // Reset user auth state
    navigate("/"); // Redirect to home page
  };

  // Default and active styles
  const navLinkStyle = {
    padding: "10px 15px",
    textDecoration: "none",
    color: "#333",
    display: "block",
    fontWeight: "bold",
    borderRadius: "8px", // Rounded corners
    margin: "10px auto", // Space between buttons
    width: "70%", // Button width
    textAlign: "center", // Center the text
  };

  const activeStyle = {
    backgroundColor: "#007bff", // Blue background
    color: "#fff", // White text
  };

  return (
    <div
      style={{
        width: "338px",
        backgroundColor: "#fff",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distributes items evenly with space at the top/bottom
        height: "100vh", // Full viewport height for the sidebar
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "200px",
          margin: "40px auto", // Centers the logo horizontally
        }}
      />

      {/* Links Section */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers items horizontally
          gap: "1rem", // Space between links
        }}
      >
        <span className="flex items-center gap-2 font-bold pr-[5rem]">
          <MdOutlineDashboard className="text-[32px]" />
          <h3 className="text-[16px] font-bold">Dashboard</h3>
        </span>

        {/* NavLinks */}
        <NavLink
          to="Trainings"
          style={({ isActive }) =>
            isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
          }
        >
          <span className="flex items-center gap-2">
            <BsFillPersonVcardFill className="w-[27.22px]" />
            <h3 className="text-[16px] font-bold">Trainings</h3>
          </span>
        </NavLink>

        <NavLink
          to="BlogPage"
          style={({ isActive }) =>
            isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
          }
        >
          <span className="flex items-center gap-2">
            <PiScrollFill className="w-[27.22px]" />
            <h3 className="text-[16px] font-bold">Blogs</h3>
          </span>
        </NavLink>

        <NavLink
          to="EventPage"
          style={({ isActive }) =>
            isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
          }
        >
          <span className="flex items-center gap-2">
            <SlCalender className="w-[27.22px]" />
            <h3 className="text-[16px] font-bold">Events</h3>
          </span>
        </NavLink>

        <NavLink
          to="Settings"
          style={({ isActive }) =>
            isActive ? { ...navLinkStyle, ...activeStyle } : navLinkStyle
          }
        >
          <span className="flex items-center gap-2">
            <IoSettingsSharp className="w-[27.22px]" />
            <h3 className="text-[16px] font-bold">Settings</h3>
          </span>
        </NavLink>
      </div>

      {/* Logout Section */}
      <div
        style={{
          marginBottom: "2rem", // Adds spacing at the bottom
        }}
      >
        <div onClick={signOutUser}>
          <button className="pl-[4.1rem] w-full flex items-center gap-2 p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300">
            <AiOutlineLogout className="w-[27.22px]" />
            <h3 className="text-[16px] font-bold">Logout</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
