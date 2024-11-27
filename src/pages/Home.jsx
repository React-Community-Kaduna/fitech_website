import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import hero_image from "../assets/hero_img.png";
import wwas from "../assets/WWAS.jpeg";
import fast_track from "../assets/BBS.jpeg";
import art_img from "../assets/art.png";
import blue_bg from "../assets/blueBg.png";
import frame_img from "../assets/Frame 85.png";
import NavBar, { NavBarContent, PageNavBar } from "../Components/NavBar";
import Carousel from "../Components/Carousel";
import { NavLink, Link } from "react-router-dom";
import { LucideChevronsRight } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { navigationList } from "../constants";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Animation variants for fade-up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  // Animation variants for stats counter
  const statCounter = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-none">
      <PageNavBar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[40px] md:mt-[80px] lg:mt-[120px] overflow-x-hidden">
        {/* Hero Section */}
        <section className="container mx-auto py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-6 md:gap-y-2 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-4 md:space-y-6 md:pr-4 lg:pr-5 md:borde-r-2 lg:borde-r-2 border-gray-400"
            >
              <h1 className="py-6 text-5xl md:text-6xl lg:text-7xl leading-snug lg:leading-snug text-gray-900 text-pretty md:text-wrap text-center md:text-left">
                Empowering Tech Innovators Across Africa and Beyond
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-8 md:space-y-12 text-gray-800"
            >
              <div className="text-lg md:text-xl leading-loose md:leading-loose text-pretty text-justify md:text-left px-2">
                Join our tech community and unlock a world of support,
                innovation, and growth. Connect with like-minded professionals,
                access cutting-edge resources, and receive mentorship to propel
                your career forward.
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
                {[
                  { number: "500+", text: "Active Members" },
                  { number: "20+", text: "Scholarships Awarded" },
                  { number: "100+", text: "Trained Mentees" },
                  { number: "Multiple", text: "Projects Built" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={statCounter}
                    className="text-center space-y-2"
                  >
                    <h4 className="text-3xl leading-normal md:text-3xl font-bold text-pretty">
                      {stat.number}
                    </h4>
                    <p className="text-base md:text-lg">{stat.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col md:flex-row flex-wrap items-center gap-3 md:gap-4 mt-16">
              <Link to="/registration">
                <Button className="bg-[#1E90FF] border-[#1E90FF] px-4 md:px-5 py-4 md:py-3 rounded-lg hover:bg-gray-500 duration-500 text-white md:w-auto w-full text-lg font-bold">
                  Join next cohort
                </Button>
              </Link>
              <Link to="/about">
                <Button className="bg-[#1E90FF2F] borde border-[#1E90FF] px-4 md:px-5 py-2 md:py-3 rounded-lg hover:bg-gray-500 hover:text-white duration-500 md:w-auto w-full text-base">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          className="container mx-auto py-6 md:py-8"
        >
          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-auto object-cover"
              src={hero_image}
              alt="Hero image"
            />
          </div>
        </motion.section>

        {/* Who We Are Section */}
        <section className="container mx-auto py-16 md:py-16 relative">
          <div className="relative overflow-hidden">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 0.1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="w-[800px] md:w-[1000px] absolute right-[-300px] md:right-[-400px] top-[-150px] md:top-[-200px] z-0"
              src={wwas}
              alt="Globe"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeUp}
              className="max-w-2xl md:max-w-3xl mx-auto text-center space-y-6 md:space-y-6 relative z-10"
            >
              <h3 className="text-4xl md:text-2xl font-bold text-gray-800">
                Who we are
              </h3>
              <div className="space-y-3 md:space-y-4 text-base leading-normal text-gray-800 md:text-lg px-2 w-full *:text-[15px] *:lg:text-lg *:leading-loose *:lg:leading-loose *:text-justify *:text-pretty">
                <div>
                  FiTech (formerly known as Kaduna React Developers Community)
                  is a vibrant community of tech enthusiasts from various
                  specialties, providing support to advance careers and bring
                  innovative ideas to life.
                </div>
                <div>
                  The community has rapidly expanded from front end development
                  to various fields like Web 3, Artificial Intelligence, Machine
                  Learning, Data Science and Analytics, Graphics and Product
                  Design, Content Writing, Digital Marketing and so much more,
                  stretching our boundaries.Since 2021, we've grown rapidly,
                  creating a space for knowledge sharing and premium mentorship.
                  Our mission is to empower global innovators to learn, innovate
                  boldly, and shape the future of technology.
                </div>
                <div>
                  With over 500 members, we offer bootcamps, virtual events,
                  mentorship, and resources, breaking down geographic and
                  financial barriers. Our community has achieved significant
                  milestones, including scholarships, internet support, and
                  collaborative projects like EventHub, showcasing our
                  commitment to growth and mutual support.
                </div>
              </div>
              <div className="pt-6 md:pt-8">
                <Link to="/about">
                  <Button className="bg-[#1E90FF44] hover:bg-gray-500 duration-500 px-4 md:px-5 py-2 md:py-3 rounded-lg text-black md:w-auto w-auto text-base flex flex-row items-center gap-x-4">
                    More About Us <LucideChevronsRight size={20} className="animate-pulse" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fast Track Section */}
        <section className="container mx-auto my-12 py-6 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="relative"
            >
              <img
                className="w-full h-auto rounded-lg"
                src={fast_track}
                alt="Fitech developers"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={fadeUp}
              className="flex flex-col justify-between items-center lg:items-start h-auto relative space-y-6 md:space-y-6 my-8 md:my-10 md:px-4 lg:px-0"
            >
              <h3 className="text-3xl md:text-4xl text-center md:text-left font-bold text-gray-800">
                Fast Track Your Tech Career
              </h3>
              <p className="text-base md:text-lg leading-loose text-pretty text-justify">
                Be part of our comprehensive training program, designed to equip
                you with the latest skills and knowledge in the tech industry.
                Our expert-led workshops and hands-on sessions will help you
                grow your expertise and advance your career.
              </p>
              <Link to="/registration">
                <Button className="bg-[#1E90FF]  hover:bg-gray-500 duration-500 px-4 md:px-5 py-2 md:py-3 rounded-lg text-white md:w-auto w-full text-base">
                  Register Now
                </Button>
              </Link>
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                src={art_img}
                alt="art"
                className="w-[400px] md:w-[500px] absolute -top-[-85px] md:-top-[-105px] -left-[-300px] md:-left-[-400px] -z-10"
              />
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeUp}
          className="w-full flex flex-col justify-center items-center my-4 md:my-24 py-4 md:py-6"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6 md:mb-8 space-y-1">
              <div className="underline decoration-wavy decoration-red-400 underline-offset-4">Voices of Our Community!</div>
              <div className="text-2xl">Real Stories, Real Impact.</div>
            </h3>
            {/* <ul className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 text-sm md:text-base">
              <li className="cursor-pointer hover:text-[orangered]">
                STUDENTS
              </li>
              <li className="cursor-pointer hover:text-[orangered]">MENTORS</li>
              <li className="cursor-pointer hover:text-[orangered]">
                COMMUNITY
              </li>
            </ul> */}
          </div>

          <Carousel />
        </motion.section>

        {/* Join Community Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          className="w-full my-8 md:my-24"
        >
          <div className="relative rounded-lg overflow-hidden">
            <img
              className="w-full z-10 shadow- bg-[rgb(8,99,195)]"
              src={blue_bg}
              alt="background"
            />
            {/* <div className="block lg:hidden w-full h-[400px] z-10 shadow- bg-[rgb(109,160,175)]"></div> */}
            <div className="w-full absolute inset-0 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-white font-bold py-16 md:bg-none px-6 md:p-8 lg:p-12 w-full md:w-[700px] absolute z-30 space-y-2 lg:space-y-8"
              >
                <h3 className="text-xl md:text-5xl font-bold text-white">
                  Join Our Community
                </h3>
                <div className="block text-sm md:text-lg lg:text-xl font-normal text-pretty leading-loose w-full lg:w-10/12">
                  Join our tech community and unlock a world of support, innovation, and growth
                </div>
                <div className="flex flex-row justify-start">
                  <a href="https://discord.gg/9REgpp5r" target="_blank">
                    <Button className="group flex flex-row items-center gap-x-3 bg-white text-black hover:bg-blue-800 hover:border-2 hover:border-white hover:text-white hover:scale-110 duration-300 px-4 md:px-4 md:hover:px-5 py-3 md:py-3 rounded-lg md:w-auto w-full text-sm lg:text-base font-bold">
                      <FaDiscord className="text-blue-600 group-hover:text-white group-hover:scale-150 transition-all duration-500" size={20} /> Join Us
                    </Button>
                  </a>
                </div>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="hidden lg:block h-full w-auto ml-auto"
                src={frame_img}
                alt="frame"
              />
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
