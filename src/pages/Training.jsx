import React, { useState, useEffect } from "react";
import { LucideQuote } from "lucide-react";
import NavBar from "../Components/NavBar";
import SubscribeForm from "../Components/SubscribeForm";
import Footer from "../Components/Footer";
import bgImg from "../assets/train1.jpeg";
import Button from "../Components/Button";
import card1 from "../assets/cardBg1.jpeg";
import card2 from "../assets/cardBg2.jpeg";
import card3 from "../assets/cardBg3.jpeg";
import WCU from "../assets/Photo.png";
import bkg from "../assets/back.jpeg";

import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import { IoSchoolOutline } from "react-icons/io5";
import { PiChalkboardTeacher } from "react-icons/pi";
import { GoBriefcase } from "react-icons/go";
import { TbWorldDollar } from "react-icons/tb";
import { Link } from "react-router-dom";

// Add AnimatedSection component
const AnimatedSection = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const data = [
  {
    course: "Web Developer Bootcamp",
    description: "A 3 months intensive training on HTML, CSS, React and more",
    bgImg: card1,
  },
  {
    course: "Data Science and Analysis",
    description:
      "Dive into data science with our comprehensive training program. Master Python, data analysis techniques, and machine learning with hands-on projects.",
    bgImg: card2,
  },
  {
    course: "Blockchain Development",
    description:
      "Embark on a comprehensive journey into blockchain development. Learn the fundamentals of blockchain technology, master smart contract creation with Solidity, and explore decentralized applications (dApps).",
    bgImg: card3,
  },
];

const Training = () => {
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
    <div className="min-h-screen flex flex-col bg-transparent">
      <section className="relative w-full h-screen mt-0 bg-transparent">
        <div
          className=" height-full absolute inset-0 bg-gradient-to-r from-transparent to-black mix-blend-multiply bg-cover bg-no-repeat bg-center"
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
                  isMenuOpen
                    ? "top-0 opacity-100 pt-14"
                    : "top-[-490px] text-white"
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
              </ul>
            </div>
          </NavBar>
          <AnimatedSection className="md:ml-16 flex flex-col justify-center items-start mt-[120px] md:mt-[150px] w-full md:w-[70%] px-4 sm:px-6 lg:px-8 pt-20 text-white">
            <h1
              className="text-3xl md:text-5xl text-white"
              data-testid="hero-heading"
            >
              Unlock Your Career <br />
              Potential With <span className="text-[orangered]">Fitech</span>
            </h1>
            <p className="my-5">
              Unlock new opportunities with FiTech Tech Trainings. Whether
              you're <br /> a beginner or an experienced professional, elevate
              your skills and <br /> transform your career
            </p>
            <div className="flex flex-col md:flex-row">
              <Link to="/registration">
                <Button className="bg-[#1E90FF] p-3 rounded-lg hover:bg-gray-500 duration-500 text-[white] mb-4 md:mb-0 md:mr-4 md:w-auto w-full">
                  Register Now
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800tld mb-4">
            Choose the Perfect Course for Your Career
          </h3>
          <p>Find the Ideal course to move your career forward</p>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
            {data.map((item, index) => (
              <AnimatedSection
                key={index}
                className="w-full md:w-[400px] h-[500px] bg-white rounded-lg shadow-lg relative overflow-hidden"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img
                  src={item.bgImg}
                  alt={item.course}
                  className="w-full h-48 object-cover"
                />
                <div className="w-[200px] flex flex-row items-center gap-1 absolute top-[145px] right-1 text-white px-2 py-1">
                  <div className="bg-white text-gray-950 px-2 py-1 rounded-3xl">
                    Online
                  </div>
                  <div className="bg-white text-gray-950 px-2 py-1 rounded-3xl">
                    12 weeks
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.course}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5 flex items-center justify-center">
                  <Link className="w-full" to="/registration">
                    <Button className="bg-[#1E90FF] p-3 w-full rounded-lg hover:bg-gray-500 duration-500 text-[white]">
                      Apply
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
        <section className="my-20 w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-32">
            <AnimatedSection className="relative w-full mb-8 md:mb-0">
              <img
                className="w-full md:w-[448px] h-[536px] rounded-tr-[40px] rounded-bl-[40px] object-cover"
                src={WCU}
                alt="Fitech alumni"
              />
              <div className="absolute -bottom-2 md:-right-20 w-[250px] h-auto flex items-center justify-center rounded-2xl bg-white shadow-lg p-5">
                <LucideQuote className="absolute text-[#FF6F00] w-8 h-9 top-2 left-1" />
                <blockquote className="relative">
                  <p className="text-[14px] my-7 leading-4">
                    Fitech coding bootcamp was a game-changer for me. The
                    curriculum was comprehensive, and the instructors were
                    incredibly supportive. The hands-on projects and career
                    support helped me land my first job in tech. Highly
                    recommend!
                  </p>
                  <h4 className="text-sm font-semibold text-[#FF6F00]">
                    - Tali Moses
                  </h4>
                </blockquote>
              </div>
            </AnimatedSection>
            <AnimatedSection className="w-full px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <ul>
                <li className="flex items-start gap-3 py-3">
                  <span className="text-[#FF6F00] inline-block mr-2">
                    <IoSchoolOutline />
                  </span>
                  Scholarship Placement Available
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="text-[#FF6F00] inline-block mr-2">
                    <PiChalkboardTeacher />
                  </span>
                  Hands-On Learning through real-world projects and challenges
                </li>

                <li className="flex items-start gap-3 py-3">
                  <span className="text-[#FF6F00] inline-block mr-2">
                    <GoBriefcase />
                  </span>
                  Job Placement Assistance and Technical Interview Preparation
                </li>
                <li className="flex items-start gap-3 py-3">
                  <span className="text-[#FF6F00] inline-block mr-2">
                    <TbWorldDollar />
                  </span>
                  Networking opportunities and Mentorship
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </section>
        <section
          className="bg-[url('../assets/back.jpeg')] bg-cover bg-no-repeat w-full h-auto rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(30,144,255, 0.3), rgba(30,144,255, 0.3)), url(${bkg})`,
          }}
        >
          <div className="flex flex-col items-center w-full md:w-[500px] m-auto text-white text-center py-16 px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white text-center">
              Get Updates For Free
            </h3>
            <p>
              Subscribe to our newsletter and never miss out on updates offers
              and expert insights
            </p>
            <SubscribeForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
