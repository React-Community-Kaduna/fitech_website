import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar, { NavBarContent } from "../Components/NavBar";
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

import { FaLinkedin, FaRegUser } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { LucideMail, LucidePhone, LucideTwitter } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  // { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

const contactList = [
  {
    icon: <LucideMail />,
    text: "Send a message",
    contact: "fitechcommunity24@gmail.com",
    buttonText: "Send a Message",
    url: "mailto:fitechcommunity24@gmail.comsubject=Inquiry%20about%20the%20community&body=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20community."
  },
  {
    icon: <LucidePhone />,
    text: "Chat or Call",
    contact: "(+234) 817 006 1600",
    buttonText: "Call Us",
    url: "https://wa.me/08166943800"
  },
  {
    icon: <LucideTwitter />,
    text: "Follow Us",
    contact: "@fitech_community",
    buttonText: "Follow Us",
    url: "https://twitter.com/Fitechcommunity"
  },
  {
    icon: <FaDiscord />,
    text: "Connect with Us",
    contact: "@fitech",
    buttonText: "Connect",
    url: "https://discord.gg/9REgpp5r"
  },
]

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
            className={`w-full fixed top-0 left-0 z-50 ${isScrolled
              ? "bg-blue-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              : "bg-transparent"
              } transition-colors duration-500`}
          >
            <NavBarContent />
          </NavBar>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="hidden w-full h-screen flex flex-col justify-center items-center text-white text-center py-16 px-4 sm:px-6 lg:px-8"
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

      <main className="flex-1 w-full md:px-8 px-6 lg:px-8 my-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
        <section className="space-y-6 text-center">
          <h4 className="text-5xl font-medium">
            Get in touch
          </h4>
          <div className="mx-auto text-base w-full lg:w-8/12 text-justify text-pretty">Reach out to our support team for enquiries. We’re here to help with any questions or concerns you may have. Connect with us for updates, feedback, or just say hello!</div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center gap-8 my-12">
          {
            contactList.map((eachContact, index) => (
              <div key={index} className="space-y-2 p-4 rounded-xl border border-[#D6D6D6]">
                <div className="flex flex-row justify-center items-center text-white size-10 rounded-lg bg-[#1E90FF] mb-12">{eachContact.icon}</div>
                <div className="space-y-5">
                  <div>
                    <h5 className="text-xl font-medium">{eachContact.text}</h5>
                    <div className="text-base">{eachContact.contact}</div>
                  </div>
                  <div>
                    <a href={eachContact.url}>
                      <Button className="border border-[#BBBBBB] rounded-lg h-10 px-7 hover:shadow-lg transition duration-300">{eachContact.buttonText}</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </section>

        <section className="">
          <div className="hidden w-full flex md:flex-row flex-col justify-around">
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