import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

import { NavLink, Link } from "react-router-dom";
import Button from "../Components/Button";

import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

function AdminSignIn() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the admin code to the backend for verification
      const response = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/api/admin/verifyAdmin",
        { adminCode }
      );

      if (response.data.success) {
        // If the admin code is correct, redirect to the admin dashboard
        navigate("/adminDashboard");
      } else {
        setError("Invalid admin code. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar className="w-full fixed top-0 left-0 z-50 bg-[#e5e5e5]">
        <div className="md:flex items-center justify-between py-4 px-7 z-50">
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <Link to="/">
              <img className="w-[150px]" src={logo} alt="Community logo" />
            </Link>
          </div>
          <button
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen((e) => !e)}
          >
            {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </button>
          <div
            className={`md:flex md:items-center md:pb-5 pb-10 absolute md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-5 gap-5 transition-all duration-500 ease-in ${
              isMenuOpen ? "top-0 opacity-100 pt-14" : "top-[-490px]"
            }`}
          >
            {/* Menu items */}
            <ul className="md:flex md:items-center md:pb-5 pb-10 md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-5 transition-all duration-500 ease-in">
              {navigation.map((item) => (
                <li className="md:ml-8 text-xl md:my-0 my-7">
                  <NavLink
                    className={({ isActive }) => {
                      return (
                        "px-3 py-2 z-50 rounded-md duration-500" +
                        (isActive
                          ? "bg-gray-900 text-green-900 border-2 border-green-950"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white")
                      );
                    }}
                    key={item.name}
                    to={item.href}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <span className="flex flex-col md:flex-row gap-5">
              <Link to="/registration">
                <Button className="bg-[#1E90FF] w-auto p-3 rounded-lg md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-none px-5 py-3 border-2 border-white rounded-lg hover:bg-gray-500 hover:text-white duration-500">
                  Contact Us
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </NavBar>
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
        <div className="flex justify-center items-center min-h-screen">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-lg"
          >
            <h1 className="text-xl font-semibold mb-4">Admin Sign In</h1>

            {/* Display error message */}
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <div>
              <label htmlFor="adminCode" className="block text-sm mb-2">
                Enter Admin Code
              </label>
              <input
                type="password"
                id="adminCode"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                className="w-full px-4 py-2 border rounded mb-4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AdminSignIn;
