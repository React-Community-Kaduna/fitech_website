import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import logo from "../assets/logo.png";
import Button from "../Components/Button";
import { MdOutlineClose, MdOutlineTimer } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineBlock } from "react-icons/ai";
import { CiCloudOn } from "react-icons/ci";
import { DiIllustrator } from "react-icons/di";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoPlayOutline } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";

import card1 from "../assets/cardBg1.jpeg";
import card2 from "../assets/cardBg2.jpeg";
import card3 from "../assets/cardBg3.jpeg";
import BSBG from "../assets/blogsecBg.jpeg";
import AIBG from "../assets/unsplash.jpeg";
import bkg from "../assets/back.jpeg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false },
  transition: { staggerChildren: 0.1 },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: false },
  transition: { duration: 0.5 },
};

const Card = ({ img, title, description, date }) => (
  <motion.div
    {...fadeInUp}
    className="md:w-[411px] w-full flex flex-col gap-4 p-4 hover:shadow-lg transition-shadow duration-300"
  >
    <motion.div
      className="w-full h-[200px] overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img className="w-full h-full object-cover" src={img} alt="" />
    </motion.div>
    <motion.div className="text-sm flex items-center">
      <span className="text-gray-600 inline-block mr-3">
        <MdOutlineTimer />
      </span>
      {date}
    </motion.div>
    <motion.h3 className="text-xl font-semibold">{title}</motion.h3>
    <motion.p className="text-sm">{description}</motion.p>
  </motion.div>
);

function CardButton({ icon, text, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className ? `btn-component ${className}` : "btn-component"}
    >
      <span className="flex justify-center items-center gap-2">
        <span>{icon}</span>
        {text}
      </span>
    </motion.button>
  );
}

const Events = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-none">
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

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-hidden">
        <motion.div
          className="w-full flex flex-col px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 {...fadeInUp}>Discover Topics</motion.h3>
          <motion.p {...fadeInUp} className="my-5">
            Discover hot topics, discussions, webinars and more
          </motion.p>
          <motion.div
            {...staggerContainer}
            className="md:w-[500px] w-full grid grid-rows-1 grid-cols-5 sm:gap-2"
          >
            {[
              { icon: AiOutlineBlock, label: "All Topics" },
              { icon: AiOutlineBlock, label: "Blockchain" },
              { icon: IoGlobeOutline, label: "Web Dev" },
              { icon: DiIllustrator, label: "Data Science" },
              { icon: CiCloudOn, label: "Cloud Computing" },
            ].map(({ icon: Icon, label }, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Button
                  className={`md:w-[80px] w-[55px] leading-3 h-[60px] p-3 ${
                    index === 0
                      ? "bg-[#1E90FF] text-white"
                      : "border-2 border-gray-400"
                  } rounded-lg text-[10px] flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300`}
                >
                  <span className="text-[22px]">
                    <Icon />
                  </span>
                  {label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.section {...fadeInUp} className="w-full my-20">
          <motion.h3 {...fadeInUp} className="ml-4">
            Previous Events
          </motion.h3>
          <motion.div
            {...staggerContainer}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {/* Previous events cards */}
            {[
              { img: bkg, date: "10th January 2025" },
              { img: BSBG, date: "10th December 2024" },
              { img: card1, date: "10th July 2023" },
            ].map((event, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  img={event.img}
                  date={event.date}
                  title="The future of Communication"
                  description="Listen to John Doe explore the future of communication with the present robot takeover of Planet Scarlet"
                />
                <div className="pl-3 w-full md:w-[70%]">
                  <CardButton
                    className="py-2 px-2 text-sm bg-orange-600 text-white flex justify-center items-center rounded-full"
                    icon={<FaRegCalendarDays />}
                    text="SET REMINDER"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section {...fadeInUp} className="w-full mb-20">
          <motion.div
            {...fadeInUp}
            className="flex flex-row justify-between items-center"
          >
            <h3 className="ml-4">Upcoming Events</h3>
            <CardButton
              className="py-1 px-2 text-sm border-2 border-gray-700 text-gray-800 rounded-full"
              icon={<GoSortDesc />}
              text="SORT"
            />
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {/* Upcoming events cards */}
            {[{ img: card2 }, { img: card3 }, { img: AIBG }].map(
              (event, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    img={event.img}
                    date="10th July 2023"
                    title="The future of Communication"
                    description="Listen to John Doe explore the future of communication with the present robot takeover of Planet Scarlet"
                  />
                  <div className="-ml-1 w-full md:w-[55%] flex justify-between items-center">
                    <CardButton
                      className="py-2 px-3 text-sm bg-orange-600 text-white flex justify-center items-center rounded-full"
                      icon={<IoPlayOutline />}
                      text="WATCH"
                    />
                    <CardButton
                      className="py-1 px-2 text-sm border-2 border-gray-700 text-gray-800 rounded-full"
                      icon={<IoShareSocialOutline />}
                      text="SHARE"
                    />
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
