import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-10 md:mt-[150px] overflow-x-hidden"></main>
      <Footer />
    </div>
  );
}

export default About;
