import React from "react";
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
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-10 md:mt-[150px] overflow-x-hidden">
        {/* Hero Section */}
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 lg:pr-5 lg:border-r-2 border-gray-400">
              <h1 className="text-3xl sm:text-4xl">
                Empowering Tech Innovators Across Africa and Beyond
              </h1>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#1E90FF] px-5 py-3 rounded hover:bg-gray-500 duration-500 text-white md:w-auto w-full">
                  Join next cohort
                </Button>
                <Button className="bg-none border-2 px-5 py-3 rounded hover:bg-gray-500 hover:text-white duration-500 md:w-auto w-full">
                  Learn more
                </Button>
              </div>
            </div>

            <div className="space-y-6 lg:pl-8">
              <p className="text-base lg:text-lg">
                Join our tech community and unlock a world of support,
                innovation, and growth. Connect with like-minded professionals,
                access cutting-edge resources, and receive mentorship to propel
                your career forward.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { number: "500+", text: "Active Members" },
                  { number: "20+", text: "Scholarships Awarded" },
                  { number: "200+", text: "Trained Mentees" },
                  { number: "80+", text: "Products Built" },
                ].map((stat, index) => (
                  <div key={index} className="md:text-left text-center">
                    <h4 className="text-lg font-bold mb-2">{stat.number}</h4>
                    <p className="text-sm lg:text-base">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="container mx-auto py-8">
          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-auto object-cover"
              src={hero_image}
              alt="Hero image"
            />
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="container mx-auto py-16 relative">
          <div className="relative overflow-hidden">
            <img
              className="w-[1000px] absolute right-[-400px] top-[-200px] opacity-[0.5] z-0"
              src={wwas}
              alt="Globe"
            />
            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
              <h3 className="sm:text-3xl font-bold">Who we are</h3>
              <div className="space-y-4 text-base lg:text-lg px-4">
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
              <div className="pt-8">
                <Button className="bg-[#1E90FF] px-5 py-3 rounded-lg text-white md:w-auto w-full">
                  More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Fast Track Section */}
        <section className="container mx-auto py-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                className="w-full h-auto rounded-lg"
                src={fast_track}
                alt="Fitech developers"
              />
            </div>
            <div className="relative space-y-6 lg:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Fast Track Your Tech Career
              </h3>
              <p className="text-base lg:text-lg">
                Be part of our comprehensive training program, designed to equip
                you with the latest skills and knowledge in the tech industry.
                Our expert-led workshops and hands-on sessions will help you
                grow your expertise and advance your career.
              </p>
              <Button className="bg-[#1E90FF] px-5 py-3 rounded-lg text-white md:w-auto w-full">
                Register Now
              </Button>
              <img
                src={art_img}
                alt="art"
                className="w-[500px] absolute -top-[-105px] -left-[-400px] opacity-50 -z-10"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto py-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">
            Voices of Our Community! Real Stories, Real Impact.
          </h3>
          <ul className="flex flex-wrap gap-4 mb-8 text-sm lg:text-base">
            <li className="cursor-pointer hover:text-[orangered]">STUDENTS</li>
            <li className="cursor-pointer hover:text-[orangered]">MENTORS</li>
            <li className="cursor-pointer hover:text-[orangered]">COMMUNITY</li>
          </ul>
          {/* <div className="flex flex-wrap gap-6 overflow-x-auto">
                <Card />
                <Card />
              </div> */}
          <Carousel />
        </section>

        {/* Join Community Section */}
        <section className="container mx-auto py-6">
          <div className="relative rounded-lg overflow-hidden">
            <img
              className="w-full h-auto bg-[#1E90FF]"
              src={blue_bg}
              alt="background"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="text-white space-y-6 p-8 lg:p-12 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Join Our Community
                </h3>
                <p className="text-base">
                  Join our tech community and unlock a world of support,
                  innovation, and growth
                </p>
                <Button className="border-2 px-5 py-3 rounded-lg text-white md:w-auto w-full">
                  Join Us
                </Button>
              </div>
              <img
                className="h-full w-auto ml-auto"
                src={frame_img}
                alt="frame"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
