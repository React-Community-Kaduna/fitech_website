import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Button from "./Components/Button";

function App() {
  return (
    <>
      <Nav />

      <div className="w-full h-content px-5 md:px-10">
        <div className="w-full h-auto mt-10 px-5 flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-[50%] mb-8 md:mb-0">
            <h1 className="text-[30px] md:text-[40px] font-bold">
              Empowering Tech Innovators <br /> Accross Africa and Beyond
            </h1>
            <div className="flex flex-row gap-5 items-center mt-4">
              <Button />
              <Button />
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <p className="text-base md:text-lg">
              Join our tech community and unlock a world of support, innovation,
              and growth. Connect with like-minded professionals, access
              cutting-edge resources, and receive mentorship to propel your
              career forward.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
