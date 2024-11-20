import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import bgImg from "../assets/contactBg.jpeg";
import Button from "../Components/Button";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiWhatsappFill } from "react-icons/ri";
import {
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

import { FaRegUser } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  // { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80%] mt-0">
        <div
          className="height-full absolute inset-0 bg-gradient-to-r from-transparent to-black mix-blend-multiply bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${bgImg})`,
          }}
        />

        <div className="relative z-10 bg-transparent">
          <NavBar
            className={`w-full fixed top-0 left-0 z-50 ${
              isScrolled
                ? "bg-blue-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
                : "bg-transparent"
            } transition-colors duration-500`}
          >
            <div className="md:flex items-center justify-between px-7 z-50">
              <div className="font-bold py-5 text-2xl cursor-pointer flex items-center">
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
                className={`md:flex md:items-center md:pb-5 pb-10 absolute md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-10 p-5 gap-5 transition-all duration-500 ease-in ${
                  isMenuOpen
                    ? "top-0 opacity-100 pt-14"
                    : "top-[-550px] text-white"
                }`}
              >
                {/* Menu items */}
                <ul className="md:flex md:items-center md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in">
                  {navigation.map((item) => (
                    <li className="md:ml-8 text-xl md:my-0 my-7">
                      <NavLink
                        className={({ isActive }) => {
                          return (
                            "px-3 py-2 z-50 rounded-tr-md rounded-bl-md duration-500" +
                            (isActive
                              ? "bg-gray-900 text-[#1E90FF] border-2 border-[#1E90FF] shadow-md shadow-[#1e8fffa1]"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-500 ease-in")
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
                    <Button className="bg-none px-5 py-3 border-2 border-[#1E90FF] rounded-lg md:ml-8 hover:bg-gray-500 hover:text-white duration-500">
                      Register Now
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="bg-[#1E90FF] border-2 border-[#1E90FF] w-auto p-3 rounded-lg hover:bg-gray-500 duration-500 text-[white]">
                      Contact Us
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
          </NavBar>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="w-full h-screen flex flex-col justify-center items-center text-white text-center py-16 px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-3xl md:text-5xl mb-4 text-white text-center">
              Contact Us
            </h1>
            <p>Do you have any inquiry ? please get in touch with us</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* <SubscribeForm /> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <main className="flex-1 w-full md:px-8 px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
        <section className="">
          <div className="w-full flex md:flex-row flex-col justify-around">
            <div className="md:w-[30%] w-full">
              <h4>
                Need help? <br />
                <span className="text-[#1E90FF]">Get in Touch with us</span>
              </h4>
              <p>
                Reach out to our support team for enquiries. They are active
                24/7 to make sure you have the best experience with{" "}
                <span className="text-[#1E90FF]">Fitech</span>
              </p>
              <div className="space-y-2 mt-4">
                <h4 className="text-base sm:text-lg font-medium">
                  Connect with us
                </h4>
                <ul className="flex space-x-4 text-[#1E90FF]">
                  <li>
                    <a href="https://youtube.com/@FitechCommunity/">
                      <FaYoutube className="text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Fitechcommunity">
                      <FaTwitter className="text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/9REgpp5r">
                      <FaDiscord className="text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a href="https://chat.whatsapp.com/DvtUhe9dU0gLFkwnyCMJ8M">
                      <RiWhatsappFill className="text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center md:w-[600px] w-full border-2 md:mt-0 mt-10 border-gray-300 md:p-10 p-2 rounded-xl shadow-sm">
              <h3 className="text-[28px] mb-2">Send us a message</h3>
              {/* <p>Fill out the form carefully</p> */}
              <span className="flex flex-row items-center gap-5">
                <a href="mailto:fitechcommunity24@gmail.comsubject=Inquiry%20about%20the%20community&body=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20community.">
                  <GoMail />
                </a>
                <a href="https://wa.me/08166943800" target="_blank">
                  <FaWhatsapp />
                </a>
                <p>or</p>
                <a href="tel:+2348166943800">Call us now!</a>
              </span>

              {/* <form className="w-full flex flex-col justify-center mt-10">
                <label htmlFor="name">Full name</label>
                <div className="flex flex-row items-center py-1 px-2 bg-white w-full mb-5 mt-2 rounded-lg overflow-hidden border-2 border-gray-300">
                  <span className="text-gray-400">
                    <FaRegUser />
                  </span>
                  <input
                    className="w-full p-1 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your name here"
                  />
                </div>
                <label htmlFor="name">Email</label>
                <div className="flex flex-row items-center py-1 px-2 bg-white w-full mb-5 mt-2 rounded-lg overflow-hidden border-2 border-gray-300">
                  <span className="text-gray-400">
                    <GoMail />
                  </span>
                  <input
                    className="w-full p-1 outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="user@example.com"
                  />
                </div>
                <input
                  className="w-full mb-5 mt-2 p-2 rounded-lg outline-none border-2 border-gray-300"
                  type="text"
                  name=""
                  id=""
                  placeholder="Subject"
                />
                <textarea
                  className="w-full p-2 outline-none rounded-lg border-2 border-gray-300"
                  placeholder="Type your message here..."
                  cols={20}
                  rows={5}
                />
                <Button className="px-5 py-2 bg-[#1E90FF] my-5 rounded-lg text-white">
                  Send message
                </Button>
              </form> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;
