import footerLogo from "../assets/footer_logo.png";
import Button from "./Button";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const linksArray = [
  {
    url: "/about",
    text: "About"
  },
  {
    url: "/contact",
    text: "Contact"
  },
  {
    url: "/blog",
    text: "Blog"
  },
  {
    url: "/trainings",
    text: "Trainings"
  },
  {
    url: "/faq",
    text: "FAQ"
  },
]

function Footer() {
  return (
    <footer className="w-full md:h-[3/4] bg-[#1978D4] mt-10 flex flex-col justify-center px-2">
      <div className="py-16 md:px-12 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="md:min-h-[250px] md:w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-y-12 lg:gap-24 text-white">
          {/* Logo and About Section */}
          <div className="flex flex-col gap-y-8">
            <img
              className="w-32 lg:w-40 h-auto mb-3"
              src={footerLogo}
              alt="Community logo"
            />
            <div className="text-base md:text-lg leading-loose md:leading-loose text-pretty">
              Fitech is a vibrant tech community fostering connection, knowledge
              sharing, and mentorship since 2021. Join us to push the boundaries
              of what is possible.
            </div>
            {/* <div className="space-y-2 mt-4">
              <h4 className="text-base sm:text-lg font-medium">
                Connect with us
              </h4>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://youtube.com/@FitechCommunity/">
                    <FaYoutube className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Fitechcommunity">
                    <FaTwitter className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/9REgpp5r">
                    <FaDiscord className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/DvtUhe9dU0gLFkwnyCMJ8M">
                    <RiWhatsappFill className="text-2xl" />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>

          <section className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-y-12 lg:gap-y-0">
            <div className="space-y-2">
              <h4 className="lg:hidden text-base sm:text-lg font-medium">Connect with us</h4>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://youtube.com/@FitechCommunity/">
                    <FaYoutube className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Fitechcommunity">
                    <FaTwitter className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/9REgpp5r">
                    <FaDiscord className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/DvtUhe9dU0gLFkwnyCMJ8M">
                    <RiWhatsappFill className="text-2xl" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="md:px-6 space-y-4">
              <h4 className="lg:hidden text-base sm:text-lg font-medium">Quick Links</h4>
              <ul className="space-y-2 lg:space-y-0 lg:flex lg:flex-row justify-center items-center lg:gap-x-8">
                {
                  linksArray.map((eachLink, index) => (
                    <li key={index}>
                      <Link to={eachLink.url} className="text-base lg:text-lg hover:underline underline-offset-8">
                        {eachLink.text}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </section>

          {/* Legal Section */}
          {/* <div className="space-y-4">
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
          </div> */}

          {/* Newsletter Section */}
          <div className="space-y-4 hidden">
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
              <Button className="w-full py-2 px-6 bg-white text-sm sm:text-base rounded-md text-[#1978D4] hover:bg-[#6babeb] hover:text-white duration-500">
                Subscribe
              </Button>
            </div>
            {/* <SubscribeForm /> */}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-12 border-t border-gray-200/40">
        <p className="text-center text-white text-sm sm:text-base">
          <span className="mx-1">©</span>
          {new Date().getFullYear()} Fitech. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
