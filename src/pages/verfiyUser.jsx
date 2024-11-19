import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { UserContext } from "../App";
import { GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../Components/Button";

const Verify = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { setUserAuth } = useContext(UserContext); // Destructure setUserAuth from UserContext
  const email = location.state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/verify",
        { email, code }
      );

      if (response.data.success) {
        toast.success("Account verified! Redirecting to dashboard...");
        localStorage.setItem("token", response.data.data.access_token);

        // Update userAuth with the verified user data
        setUserAuth(response.data.data);

        // Check role and navigate accordingly
        setTimeout(() => {
          if (response.data.data.role === "admin") {
            navigate("/adminDashboard");
          } else {
            navigate("/userDashboard");
          }
        }, 1000);
      } else {
        setErrorMessage(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "An error occurred.");
        toast.error(error.response.data.message || "An error occurred.");
      } else {
        setErrorMessage("Network error or server not responding.");
        toast.error("Network error or server not responding.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
          <ul
            className={`md:flex md:items-center md:pb-5 pb-10 absolute md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-5 transition-all duration-500 ease-in ${
              isMenuOpen ? "top-0 opacity-100 pt-14" : "top-[-490px]"
            }`}
          >
            {/* Menu items */}
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/about">About</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/training">Trainings</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/events">Events</Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 hover:text-gray-400 duration-500">
              <Link to="/blog">Blogs</Link>
            </li>

            <span className="flex flex-col md:flex-row gap-5 lg:ml-[130px]">
              <Button className="bg-[#1E90FF] p-3 rounded-lg md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
                Join Us
              </Button>
              <Button className="bg-none px-5 py-3 border-2 border-white rounded-lg hover:bg-gray-500 hover:text-white duration-500">
                Contact Us
              </Button>
            </span>
          </ul>
        </div>
      </NavBar>
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px]">
        <section className="">
          <Toaster />
          <form
            onSubmit={handleVerify}
            className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[400px] mx-auto p-8 bg-white shadow-lg rounded-lg"
          >
            <h5 className="font-bold font-gelasio text-center mb-3">
              Verify Your Email
            </h5>

            <div className="relative mt-6">
              <GiPadlock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-[#1E90FF] px-7 py-2 rounded-xl hover:bg-gray-500 duration-500 text-white w-[50%] mt-5 block mx-auto"
            >
              Verify
            </button>
          </form>
          {errorMessage && (
            <p style={{ color: "red" }}>{errorMessage} Please try again</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Verify;
