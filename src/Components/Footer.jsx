import React from "react";
import footer_logo from "../assets/footer_logo.png";
import Button from "./Button";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#1978D4] border border-gray-200 pt-5 mt-10 relative">
      <div className="w-full p-5 md:w-[95%] mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          {/* Logo and About Section */}
          <div className="">
            <img
              className="w-[100px] h-auto mb-3"
              src={footer_logo}
              alt="Community logo"
            />
            <p className="text-sm sm:text-base">
              Fitech is a vibrant tech community fostering connection, knowledge
              sharing, and mentorship since 2021. Join us to push the boundaries
              of what's possible.
            </p>
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-medium">
                Connect with us
              </h4>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://youtube.com/@FitechCommunity/">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Fitechcommunity?s=09">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/9REgpp5r">
                    <FaDiscord />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="pl-0 md:pl-20 space-y-4">
            <h4 className="text-base sm:text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2 flex flex-col">
              <Link className="text-sm sm:text-base" to="/about">
                <li>About</li>
              </Link>
              <Link className="text-sm sm:text-base" to="/contact">
                <li>Contact</li>
              </Link>
              <Link className="text-sm sm:text-base" to={"/blog"}>
                <li>Blog</li>
              </Link>
              <Link className="text-sm sm:text-base" to="/trainings">
                <li>Trainings</li>
              </Link>
              <Link className="text-sm sm:text-base" to="faq">
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
          {/* Legal Section */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-medium">Legal</h4>
            <nav className="space-y-2">
              {["Partners", "Terms and Conditions", "Policy and Privacy"].map(
                (link) => (
                  <p
                    key={link}
                    className="text-sm sm:text-base hover:text-gray-200 cursor-pointer"
                  >
                    {link}
                  </p>
                )
              )}
            </nav>
          </div>
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-medium">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-sm sm:text-base">
              Get the latest news and updates
            </p>
            <div className="space-y-3">
              <input
                className="w-full py-2 px-4 bg-transparent border-2 border-gray-200 rounded-md text-sm sm:text-base placeholder-gray-300 focus:outline-none focus:border-white"
                type="email"
                placeholder="Email address"
              />
              <Button className="w-full py-2 px-6 bg-white text-sm sm:text-base rounded-md text-[#1978D4]  hover:bg-[#6babeb] hover:text-white duration-500">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm sm:text-base">
            <span className="mx-1">©</span>
            2024 Fitech. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
