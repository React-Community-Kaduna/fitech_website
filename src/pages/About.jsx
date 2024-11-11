import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import bg from "../assets/hero_bg_about.png";
import bg1 from "../assets/bg1.png";
// import Carousel from "../Components/Carousel";
import Button from "../Components/Button";
import aboutImg1 from "../assets/aboutImg1.png";
import aboutImg2 from "../assets/aboutImg2.png";
import aboutImg3 from "../assets/aboutImg3.png";
import frame from "../assets/aboutframe.png"
import Members from "../Components/Members";

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 w-full mt-10 md:mt-[150px]  overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative container mx-auto py-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="absolute inset-0">
              <img
                src={bg}
                alt="bg"
                className="w-full h-full object-cover opacity-10"
              />
            </div>

            <div className="relative z-10 w-full p-6 lg:pl-24 lg:border-l-2 border-gray-400">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 mt-5 sm:-mt-0">
                Uniting Innovators <br /> and Tech Enthusiasts
              </h2>
              <p className="mt-4 text-base lg:text-lg mb-10">
                Fitech is a vibrant, diverse community of tech enthusiasts
                across all disciplines and specialties. Whether you’re a
                developer, designer, writer, or tech aficionado, Fitech provides
                the resources and support you need to grow your career and bring
                your ideas to life.
              </p>
              <Button className="bg-[#1E90FF] px-7 py-2 rounded hover:bg-gray-500 duration-500 text-white md:w-auto w-full">
                Join the Community
              </Button>
            </div>

            <div className="p-4 md:px-10 lg:pl-[5.4rem]">
              <img src={aboutImg1} alt="Member Image" className="" />
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="mx-auto py-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-1 lg:order-2 px-4 sm:px-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 mt-5 sm:mt-0">
                Our Journey
              </h2>
              <p className="font-[400] mt-4 text-base lg:text-lg mb-10 max-w-xl">
                Founded in 2021, we’ve rapidly created a vibrant space where
                innovators connect, share expertise, and access top-tier
                mentorship. Join thousands of tech creators who are pushing
                boundaries and redefining possibilities—together.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mt-5">
                <Button className="bg-[#1E90FF] px-6 py-2 hover:bg-gray-500 duration-500 text-white md:w-auto w-full rounded-[0.5rem]">
                  Join us
                </Button>
                <Button className="bg-none border-2 px-7 py-3 rounded-[0.5rem] hover:bg-gray-500 hover:text-white duration-500 w-full sm:w-auto">
                  Become a Sponsor
                </Button>
              </div>
            </div>
            <div className="order-2 lg:order-1 p-4 md:px-10 lg:pl-[5.4rem]">
              <img src={aboutImg2} alt="Member Image" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mx-auto py-6 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className=" px-7 sm:px-3 max-w-xl lg:ml-[5rem]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 mt-5 sm:mt-0">
                Our Mission
              </h2>
              <p className="font-[400] mt-4 text-base lg:text-lg mb-10 ">
                We aim to foster and grow a community of global innovators,
                where every member is empowered to learn, innovate boldly, and
                shape the future of technology together.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mt-5">
                <Button className="bg-[#1E90FF] px-6 py-2 hover:bg-gray-500 duration-500 text-white md:w-auto w-full rounded-[0.5rem]">
                  Join next Cohort
                </Button>
              </div>
            </div>

            <div className="order-2  p-4 md:px-10 ">
              <img src={aboutImg3} alt="Member Image" className="" />
            </div>
          </div>
        </section>

        {/* Our Community Impact Section */}
        <section className="relative container mx-auto py-6 overflow-hidden mt-10 mb-5">
          {/* Background Image with Blue Overlay */}
          <div className="absolute inset-0">
            <img
              src={bg1}
              alt="Community Impact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(30, 144, 255, 0.9)" }}>

            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
            <div className="w-full p-6 lg:pl-24 lg:border-l-2 border-gray-400">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 sm:-mt-0">
                Community Impact
              </h2>
              <p className="mt-4 text-base lg:text-lg text-white mb-10 max-w-xl">
              Our community has influenced countless lives globally, driving innovation and growth
              </p>
              <Button className="bg-white border-2 px-7 py-3 rounded-[0.5rem] hover:bg-gray-500 hover:text-white duration-500 w-full sm:w-auto">
                  Become a Sponsor
                </Button>
            </div>

            <div>
                  <img src={frame} alt="frame"/>
            </div>

            
          </div>
        </section>

        {/* Meet Our Team  Section */}
        <section className="relative container mx-auto py-6 overflow-hidden mt-10 mb-5">
          <Members/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
