import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Registration() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
        Registration
      </main>
      <Footer />
    </div>
  );
}

export default Registration;
