/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import AnimationWrapper from "../Components/PageAnimation";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState} from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../Components/Sessions";
import { UserContext } from "../App";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";

const UserAuthForm = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);
  
  console.log(access_token);


  const userAuthThroughServer = (serverRoute, formData) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({ data }) => {
        if (type === "sign-up") {
          // Show the toast message immediately
          toast.success('Verification code sent to your email. Please check and verify.');
  
          // Redirect to the verification page
          setTimeout(() => {
            navigate('/verifyUser', { state: { email: formData.email } });
          }, 1000);
        } else {
          // Show the toast message immediately
          toast.success('Signed in successfully! Redirecting to dashboard...');
  
          // Delay the sign-in success actions by 1 seconds
          setTimeout(() => {
            storeInSession("user", JSON.stringify(data));
            setUserAuth(data);
  
            // Check the user's role and navigate to the appropriate dashboard
            if (data.role === 'admin') {
              navigate('/adminDashboard');
            } else {
              navigate('/userDashboard');
            }
          }, 1000);
        }
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    let serverRoute = type === "sign-in" ? "/signin" : "/signup";

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let form = new FormData(document.getElementById('formElement'));
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    let { fullname, email, password } = formData;

    if (fullname && fullname.length < 3) {
      return toast.error("Fullname must be at least 3 letters long");
    }

    if (!email.length) {
      return toast.error("Enter Email");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is Invalid");
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letter"
      );
    }
    userAuthThroughServer(serverRoute, formData);
  };
  // if (!access_token) {
  //   return <Navigate to="/" />;
  // }

  return (
    <>
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
      <AnimationWrapper keyValue={type}>
        <section className=" flex items-center justify-center mt-[70px] md:mt-[100px] lg:mt-[150px]">
          <Toaster />
          <form
          onSubmit={handleSubmit}
            id="formElement"
            className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[400px] mx-auto p-8 bg-white shadow-lg rounded-lg"
          >
            <img src={logo} alt="Logo" className="block mx-auto mb-4 w-[8em]" />
            <h1 className="text-xl font-gelasio capitalize text-center mb-6 mt-3">
              {type === "sign-in" ? "Welcome Back!" : "Join The Community"}
            </h1>

            {type !== "sign-in" && (
              <div className="relative">
                <MdOutlinePerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                />
              </div>
            )}

            <div className="relative mt-6">
              <BsEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                className="w-full pl-10 pr-4 py-2 border rounded-md"
              />
            </div>

            <div className="relative mt-6">
              <GiPadlock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border rounded-md"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              >
                {showPassword ? <BiHide /> : <BiShowAlt />}
              </span>
            </div>

            <Button
              className="bg-[#1E90FF] p-2 rounded-2xl  hover:bg-gray-500 duration-500 text-[white] mt-5 block mx-auto"
              type="submit"
              // onClick={handleSubmit}
            >
              {type.replace("-", " ")}
            </Button>

            {type === "sign-in" ? (
              <p className="mt-6 text-gray-500 text-center text-sm">
                Don&lsquo;t have an account?
                <Link to="/signup" className="underline text-black ml-1 text-sm">
                  Register Today
                </Link>
              </p>
            ) : (
              <p className="mt-6 text-gray-500 text-center text-sm">
                Already a member?
                <Link to="/signin" className="underline text-black ml-1 text-sm">
                  Sign in here
                </Link>
              </p>
            )}
          </form>
        </section>
      </AnimationWrapper>
      <Footer />
    </>
  );
};

export default UserAuthForm;



