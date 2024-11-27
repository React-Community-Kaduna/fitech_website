import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar, { NavBarContent, PageNavBar } from "../Components/NavBar";
import Footer from "../Components/Footer";
import SubscribeForm from "../Components/SubscribeForm";
import bgImg from "../assets/blogBg.jpeg";
import Button from "../Components/Button";
import card1 from "../assets/cardBg1.jpeg";
import card2 from "../assets/cardBg2.jpeg";
import card3 from "../assets/cardBg3.jpeg";
import BSBG from "../assets/blogsecBg.jpeg";
import AIBG from "../assets/aiBg.jpeg";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  // { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

const posts = [
  {
    title: "The Importance of Web Development",
    description:
      "Web development is a crucial aspect of the digital landscape. It involves creating and maintaining websites and web applications. It encompasses a wide range of skills, including front-end development, back-end development, and database management.",
    image: card1,
  },
  {
    title: "The Power of Data Science",
    description:
      "Data science is a rapidly growing field that involves extracting insights and knowledge from data. It combines various techniques, including data analysis, machine learning, and statistical modeling. ",
    image: card2,
  },
  {
    title: "The Role of Blockchain Technology",
    description:
      "Blockchain technology is a decentralized and secure digital ledger that enables secure transactions and data storage. It has revolutionized various industries, including finance, supply chain management, and healthcare.",
    image: card3,
  },
  {
    title: "The Future of Artificial Intelligence",
    description:
      "Artificial intelligence (AI) is transforming various industries, including healthcare, finance, and transportation. AI enables machines to learn, reason, and make decisions, leading to advancements in areas such as natural language processing, computer vision, and robotics. ",
    image: AIBG,
  },
  {
    title: "The Future of Web Development",
    description:
      "The future of web development is promising, with emerging technologies such as serverless computing, microservices, and progressive web applications (PWAs) shaping the landscape. These advancements aim to enhance performance, scalability, and user experience in web development.",
    image: BSBG,
  },
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

function Blog() {
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
      <section className="relative w-full h-screen mt-0 bg-transparent">
        <PageNavBar />

        <div
          className="height-full absolute inset-0 bg-gradient-to-r from-transparent to-black mix-blend-multiply bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${bgImg})`,
          }}
        />
        <div className="relative z-10 bg-transparent">
          {/* <NavBar
            className={`w-full fixed top-0 left-0 z-50 ${isScrolled
              ? "bg-blue-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              : "bg-transparent"
              } transition-colors duration-500`}
          >
            <NavBarContent />
          </NavBar> */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="w-full h-screen flex flex-col justify-center items-center text-white text-center py-16 px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-3xl md:text-5xl mb-4 text-white text-center">
              News, Articles and Insights on Tech
            </h1>
            <p>
              Subscribe now to receive the latest updates on cutting edge
              applications, breakthrough <br /> technologies and the most
              important news in the tech world
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <SubscribeForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Featured Post Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="relative w-full rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
            <div
              className="height-full absolute inset-0 bg-gradient-to-r from-transparent to-black mix-blend-multiply bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${BSBG})`,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="absolute bottom-0 left-0 right-0 md:p-8 text-white"
            >
              <div className="bg-blue-800 bg-clip-padding backdrop-filter md:backdrop-blur-sm bg-opacity-10  w-full rounded-2xl p-5">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  The world of Tech and what the future holds
                </h3>
                <p className="text-lg mb-6">
                  Artificial Intelligence (AI) is revolutionizing the world of
                  coding, transforming how developers <br /> approach software
                  creation. With AI-powered tools, coding .....
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <p className="text-sm opacity-75">Written by</p>
                    <p className="font-medium">Daniel Ochoja</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Published On</p>
                    <p className="font-medium">26 November 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* All Posts Grid */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold mb-8"
          >
            All Posts
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                variants={fadeInUp}
                className="rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
                whileHover={{ y: -10 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-2">
                    Daniel Ochoja | 26th Nov. 2024
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
