import React, { useState } from "react";
import { LucideQuote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aisha from "../assets/Aisha Kabir.png";
import Rufai from "../assets/RufaiUsman.jpeg";
import Goodness from "../assets/Goodness.jpeg";
import Wanjala from "../assets/Wanjala.jpg";
import bolaji from "../assets/Oluwatobi.png";
import Tali from "../assets/Tali Nanzing.jpg";
import Jethro from "../assets/Jethro IRMIYA.jpg";
import Eniola from "../assets/Eniola atilola.jpeg";
import Fahad from "../assets/fahad sabiu.png";

const data = [
  {
    name: "IRMIYA JETHRO MBATA",
    review:
      "an amazing platform that enhances our abilities to learn and grow over time and space. am so excited to be part of this community.",
    description: "",
    img: Jethro,
  },
  {
    name: "Adetoro Islamiat Eniola",
    review:
      "Job Weldone to our mentors and sub mentors they are doing a great job.",
    description: "",
    img: Eniola,
  },
  {
    name: "Bolaji Oluwatobi",
    review:
      "To be honest , I didnt expect it would be this amazing , interesting and interative. Please keep it up and Thankyou.",
    description: "",
    img: bolaji,
  },
  {
    name: "Tali Nanzing",
    review:
      " FiTech has been an incredible experience for me so far. It's more than just a community—it's a solid support system for young developers like me who are stepping into the tech world. Currently, I'm part of their ongoing cohort on front-end development, and it's been nothing short of amazing. The program is well-structured, with experienced mentors guiding us every step of the way. They've made learning JavaScript feel so achievable, The mentorship and hands-on approach have been games changers for my learning journey",
    description: "",
    img: Tali,
  },
  {
    name: "ONU GOODNESS AMADI",
    review:
      "So far it has been amazing, our tutors have been amazing, they take their time to explain things to us and they are you very friendly. lts my pleasure being part of this training.",
    description: "",
    img: Goodness,
  },
  {
    name: "Aisha Kabir Shittu",
    review:
      "So far our mentor Manodev teaches at the perfect pace ,we understand every step of the way and he ensures we all get along with what he's teaching.",
    description: "",
    img: Aisha,
  },
  {
    name: "Usman Rufai",
    review:
      "The class hasjust been supercalifragilisticexpialidocious. You need to see me doing smiling when I'm working cuz as a novice itjust seems like a magic coding and seeing the results. Overall the class has been so amazing and shout out to our mentors Mano.luka. and Divine. We hope to know better than you",
    description: "",
    img: Rufai,
  },
  {
    name: "Caleb Wanjala",
    review:
      "The sessions are interactive looking forward to grow my tech skills.",
    description: "",
    img: Wanjala,
  },
];

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    className: "center",
    adaptiveHeight: true,
  };

  return (
    <div className="w-full md:w-3/4 mx-auto px-4 md:px-0">
      <div className="pb-5">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              className="shadow-3xl border-2 w-full h-auto rounded-lg overflow-hidden transition-transform duration-500 ease-in-out"
              key={d.name}
            >
              <div className="shadow-lg flex flex-col md:flex-row-reverse h-full">
                <div className="w-full md:w-[50%] h-[200px] md:h-[400px] lg:h-[500px]">
                  <img
                    className={`h-full w-full object-cover transition-transform duration-700 ${activeSlide === index ? "scale-100" : "scale-110"
                      }`}
                    src={d.img}
                    alt=""
                  />
                </div>

                <div className="text-white bg-[#1E90FF] w-full md:w-[50%] px-4 py-6 md:p-10 flex flex-col items-start justify-center relative min-h-[250px] md:min-h-[400px] lg:min-h-[500px]">
                  <blockquote
                    className={`relative z-10 transition-all duration-500 ${activeSlide === index
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                      }`}
                  >
                    <LucideQuote size={80}
                      className={`hidden lg:block [transform:rotateY(180deg)] absolute text-gray-800/40 -top-8 -left-8 transition-all duration-500 ${activeSlide === index
                        ? "translate-y-0 opacity-20"
                        : "-translate-y-full opacity-0"
                        }`}
                    />
                    <LucideQuote size={64}
                      className={`lg:hidden absolute [transform:rotateY(180deg)] text-gray-800/50 w-10 h-10 md:w-14 md:h-14 -top-5 -left-1 transition-all duration-500 ${activeSlide === index
                        ? "translate-y-0 opacity-20"
                        : "-translate-y-full opacity-0"
                        }`}
                    />
                    <p className="text-[14px] md:text-[16px] leading-loose text-left text-pretty font-bold lg:text-left italic max-h-[150px] md:max-h-[320px] overflow-y-auto md:overflow-auto pr-2">
                      {d.review}
                    </p>
                    <div
                      className={`transition-all duration-500 delay-200 mt-4 md:mt-5 ${activeSlide === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                        }`}
                    >
                      <h4 className="text-[14px] md:text-[16px] text-center lg:text-left font-semibold">
                        {d.name}
                      </h4>
                      {d.description && (
                        <p className="text-[12px] md:text-[16px] mt-1 text-gray-100">
                          {d.description}
                        </p>
                      )}
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
