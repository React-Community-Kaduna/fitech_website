import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import hero_image from "../assets/hero_img.png";
import wwas from "../assets/WWAS.jpeg";
import fast_track from "../assets/BBS.jpeg";
import art_img from "../assets/art.png";
import blue_bg from "../assets/blueBg.png";
import frame_img from "../assets/Frame 85.png";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";

function Home() {
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
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
        {/* Hero Section */}
        <section className="container mx-auto py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-4 md:space-y-6 md:pr-4 lg:pr-5 md:border-r-2 lg:border-r-2 border-gray-400"
            >
              <h1 className="text-3xl md:text-3xl lg:text-4xl text-grey-100">
                Empowering Tech Innovators Across Africa and Beyond
              </h1>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Button className="bg-[#1E90FF] px-4 md:px-5 py-2 md:py-3 rounded hover:bg-gray-500 duration-500 text-white md:w-auto w-full">
                  Join next cohort
                </Button>
                <Button className="bg-none border-2 border-white px-4 md:px-5 py-2 md:py-3 rounded hover:bg-gray-500 hover:text-white duration-500 md:w-auto w-full">
                  Learn more
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="space-y-4 md:space-y-6 md:pl-4 lg:pl-8"
            >
              <p className="text-base md:text-lg">
                Join our tech community and unlock a world of support,
                innovation, and growth. Connect with like-minded professionals,
                access cutting-edge resources, and receive mentorship to propel
                your career forward.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                {[
                  { number: "500+", text: "Active Members" },
                  { number: "20+", text: "Scholarships Awarded" },
                  { number: "200+", text: "Trained Mentees" },
                  { number: "80+", text: "Products Built" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={statCounter}
                    className="md:text-left text-center"
                  >
                    <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2">
                      {stat.number}
                    </h4>
                    <p className="text-sm md:text-base">{stat.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
        <section className="container mx-auto py-12 md:py-16 relative">
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
              className="max-w-2xl md:max-w-3xl mx-auto text-center space-y-4 md:space-y-6 relative z-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold">Who we are</h3>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg px-4 w-full">
                <p>
                  Fitech is a vibrant community of tech enthusiasts from various
                  specialties, providing support to advance careers and bring
                  innovative ideas to life.
                </p>
                <p>
                  Since 2021, we've grown rapidly, creating a space for
                  knowledge sharing and premium mentorship. Our mission is to
                  empower global innovators to learn, innovate boldly, and shape
                  the future of technology.
                </p>
                <p>
                  With over 500 members, we offer online events, mentorship, and
                  resources, breaking down geographic and financial barriers.
                  Our community has achieved significant milestones, including
                  scholarships, internet support, and collaborative projects
                  like EventHub, showcasing our commitment to growth and mutual
                  support.
                </p>
              </div>
              <div className="pt-6 md:pt-8">
                <Button className="bg-[#1E90FF] hover:bg-gray-500 duration-500 px-4 md:px-5 py-2 md:py-3 rounded-lg text-white md:w-auto w-full">
                  More About Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fast Track Section */}
        <section className="container mx-auto py-6 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 items-center">
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
              className="relative space-y-4 md:space-y-6 my-8 md:my-10 md:px-4 lg:px-0"
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                Fast Track Your Tech Career
              </h3>
              <p className="text-base md:text-lg">
                Be part of our comprehensive training program, designed to equip
                you with the latest skills and knowledge in the tech industry.
                Our expert-led workshops and hands-on sessions will help you
                grow your expertise and advance your career.
              </p>
              <Button className="bg-[#1E90FF] hover:bg-gray-500 duration-500 px-4 md:px-5 py-2 md:py-3 rounded-lg text-white md:w-auto w-full">
                Register Now
              </Button>
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
          className="w-full flex flex-col justify-center items-center my-4 md:my-5 py-4 md:py-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              Voices of Our Community! Real Stories, Real Impact.
            </h3>
            <ul className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 text-sm md:text-base">
              <li className="cursor-pointer hover:text-[orangered]">
                STUDENTS
              </li>
              <li className="cursor-pointer hover:text-[orangered]">MENTORS</li>
              <li className="cursor-pointer hover:text-[orangered]">
                COMMUNITY
              </li>
            </ul>
          </div>

          <Carousel />
        </motion.section>

        {/* Join Community Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={fadeIn}
          className="w-full my-8 md:my-10"
        >
          <div className="relative rounded-lg overflow-hidden">
            <img
              className="w-full shadow- bg-[#6da0af]"
              src={blue_bg}
              alt="background"
            />
            <div className="absolute inset-0 flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-white p-6 md:p-8 lg:p-12 w-full"
              >
                <h3 className="text-2xl md:text-3xl font-bold">
                  Join Our Community
                </h3>
                <p className="text-base md:text-lg lg:text-[22px] my-6 md:my-10">
                  Join our tech community and unlock a world of support,
                  innovation, and growth
                </p>
                <Button className=" border-2 border-white hover:bg-gray-500 hover:text-white duration-500er-2 px-4 md:px-5 py-2 md:py-3 rounded-lg text-white md:w-auto w-full">
                  Join Us
                </Button>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="h-full w-auto ml-auto"
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
