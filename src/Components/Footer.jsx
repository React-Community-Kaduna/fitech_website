import React from "react";
import logo from "../assets/logo.png";
import footer_logo from "../assets/footer_logo.png";

function Footer() {
  return (
    <footer className="w-full bg-[#1978D4] border border-gray-200 py-5 px-10 md:fixed md:bottom-0 md:left-0">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around text-white text-[10px]">
        <div className="w-full md:w-[25%] leading-5">
          <img className="w-[100px]" src={footer_logo} alt="Community logo" />
          <p className="my-2">
            Fitech is a vibrant tech community fostering connection, knowledge
            sharing, and mentorship since 2021. Join us to push the boundaries
            of what's possible.
          </p>
          <div className="leading-5">
            <h4 className="text-[15px]">Connect with us</h4>
            <div>icon icone icon icon</div>
          </div>
        </div>
        <div className="w-full md:w-[20%] leading-5">
          <h4 className="text-[15px] mb-2">Quick Links</h4>
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
          <p>Trainings</p>
          <p>FAQ</p>
        </div>
        <div className="w-full md:w-[20%] leading-8">
          <h4 className="text-[15px] mb-2">Legal</h4>
          <p>Partners</p>
          <p>Terms and Conditions</p>
          <p>Policy and Privacy</p>
        </div>
        <div className="w-full md:w-[25%] flex flex-col gap-2 leading-5">
          <h4 className="text-[15px] mb-2">Subscribe to Our Newslatter</h4>
          <p>Get the latest news and updates</p>
          <input
            className="py-1 px-3"
            type="text"
            placeholder="Email address"
          />
          <button className="py-1 px-5 bg-[white] text-[15px] rounded-md text-[#1978D4]">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
