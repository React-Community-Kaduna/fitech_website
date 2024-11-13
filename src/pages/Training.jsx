import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import bgImg from "../assets/train1.jpeg";
import Button from "../Components/Button";
import card1 from "../assets/cardBg1.jpeg";
import card2 from "../assets/cardBg2.jpeg";
import card3 from "../assets/cardBg3.jpeg";
import WCU from "../assets/WCU_img.jpeg";
import bkg from "../assets/back.jpeg";
import bckdrp from "../assets/Rectangle 5806.png";
import { IoSchoolOutline } from "react-icons/io5";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { GoBriefcase } from "react-icons/go";
import { TbWorldDollar } from "react-icons/tb";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <section className="relative w-full h-screen mt-[50px] md:mt-[100px] bg-transparent">
        <div
          className=" height-full absolute inset-0 bg-gradient-to-r from-transparent to-black mix-blend-multiply bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${bgImg})`,
          }}
        />
        <div className="relative z-10 bg-transparent">
          <NavBar />
          <div className="container flex flex-col justify-center items-start md:mt-[100px] w-full md:w-[70%] px-4 sm:px-6 lg:px-8 pt-20 text-white">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              data-testid="hero-heading"
            >
              Unlock Your Career Potential With Fitech
            </h1>
            <p className="my-5">
              Unlock new opportunities with FiTech Tech Trainings. Whether
              you're a beginner or an experienced professional, elevate your
              skills and transform your career
            </p>
            <div className="flex flex-col md:flex-row">
              <Link to="/registration">
                <Button className="bg-[#1E90FF] p-3 rounded-lg hover:bg-gray-500 duration-500 text-[white] mb-4 md:mb-0 md:mr-4 md:w-auto w-full">
                  Register Now
                </Button>
              </Link>
              {/* <Button className="bg-none px-5 py-3 border-2 border-white rounded-lg hover:bg-gray-500 hover:text-white duration-500 md:w-auto w-full">
                Explore Courses
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Choose the Perfect Course for Your Career
          </h2>
          <p>Find the Ideal course to move your career forward</p>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[400px] h-[500px] bg-white rounded-lg shadow-lg relative overflow-hidden"
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
              </div>
            ))}
          </div>
        </section>
        <section className="my-20 w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="relative w-full mb-8 md:mb-0">
              <img
                className="w-full md:w-[448px] h-[536px] rounded-tr-[40px] rounded-bl-[40px] object-cover"
                src={WCU}
                alt="Fitech alumni"
              />
            </div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
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
                    <PiChalkboardTeacherThin />
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
            </div>
          </div>
        </section>
        <section
          className="bg-[url('../assets/back.jpeg')] bg-cover bg-no-repeat w-full h-auto rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bkg})`,
          }}
        >
          <div className="w-full md:w-[500px] m-auto text-white text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-4 text-white text-center">
              Get Updates For Free
            </h2>
            <p>
              Subscribe to our newsletter and never miss out on updates offers
              and expert insights
            </p>
            <div className="bg-white p-2 flex md:flex-row items-center mt-8 rounded-lg">
              <input
                className="w-full p-2 outline-none active:border-none text-gray-900"
                for="text"
                placeholder="Your email"
              />
              <Button className="bg-[#1E90FF] rounded-lg p-2 hover:bg-gray-500 duration-500 text-[white]">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
