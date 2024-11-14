import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
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
import { Link } from "react-router-dom";

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
                  <a href="https://discord.gg/9REgpp5r">
                    <Button className="bg-[#1E90FF] p-3 rounded-lg md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
                      Join Us
                    </Button>
                  </a>
                  <Button className="bg-none px-5 py-3 border-2 border-white rounded-lg hover:bg-gray-500 hover:text-white duration-500">
                    Contact Us
                  </Button>
                </span>
              </ul>
            </div>
          </NavBar>
          <div className="w-full h-screen flex flex-col justify-center items-center text-white text-center py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl mb-4 text-white text-center">
              News, Articles and Insights on Tech{" "}
            </h1>
            <p>
              Subscribe now to receive the latest updates on cutting edge
              applications, breakthrough <br /> technologies and the most
              important news in the tech world
            </p>
            <div className="w-full md:w-[500px] bg-white p-2 flex md:flex-row items-center mt-8 rounded-lg">
              <input
                className="w-full p-2 outline-none active:border-none text-gray-900"
                for="text"
                placeholder="Enter your email address"
              />
              <Button className="bg-[#1E90FF] rounded-lg p-2 hover:bg-gray-500 duration-500 text-[white]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Featured Post Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Recent Posts</h2>
          <div className="relative w-full rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
            <div
              className=" height-full absolute inset-0 bg-gradient-to-r from-transparent to-black mix-blend-multiply bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)), url(${BSBG})`,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="w-full py-5 md:max-w-3xl">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  The world of Tech and what the future holds
                </h3>
                <p className="text-lg mb-6">
                  Artificial Intelligence (AI) is revolutionizing the world of
                  coding, transforming how developers approach software
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
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">All Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.title}
                className="rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
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
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
