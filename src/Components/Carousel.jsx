import React, { useState } from "react";
import { LucideQuote } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg from "../assets/fitech.png";
import Aisha from "../assets/Aisha.jpeg";
import Rufai from "../assets/RufaiUsman.jpeg";
import Goodness from "../assets/Goodness.jpeg";
import Wanjala from "../assets/Wanjala.jpg";
import bolaji from "../assets/Oluwatobi.png";
// import bolaji from "../assets/Oluwatobi.png"

const data = [
  {
    name: "Bashir Ibrahim Saleh",
    review:
      "Joining FiTech was a game-changer for me. Their comprehensive training program not only honed my web development skills but also provided invaluable career guidance. With their support, I built a strong portfolio and gained the confidence to ace my interviews. Thanks to FiTech, I landed my first job as a web developer, and I couldn't be more grateful for their mentorship and support.",
    description: "Corhot one graduate",
    img: cardImg,
  },
  {
    name: "Emmanuel",
    review:
      "The community has really been a great place to ask questions freely and get expert support and advice from members, I had my bug being busted within an hour, interestingly this was at around 11pm till past 12am.We have people who are passionate to volunteer their time to help you.",
    description: "Web3 Developer at Spillage",
    img: cardImg,
  },
  {
    name: "Bolaji Oluwatobi",
    review:
      "To be honest , I didnt expect it would be this amazing , interesting and interative. Please keep it up and Thankyou.",
    description: "Web3 Developer at Spillage",
    img: bolaji,
  },
  {
    name: "ADEYINKA",
    review:
      "Some of us are missing out of the classes cos were usually at work at the said times and we cant catch up. kindly help do something about this.",
    description: "Web3 Developer at Spillage",
    img: cardImg,
  },
  {
    name: "ONU GOODNESS AMADI",
    review:
      "So far it has been amazing, our tutors have been amazing, they take their time to explain things to us and they are you very friendly. lts my pleasure being part of this training.",
    description: "Web3 Developer at Spillage",
    img: Goodness,
  },
  {
    name: "Aisha Kabir Shittu",
    review:
      "So far our mentor Manodev teaches at the perfect pace ,we understand every step of the way and he ensures we all get along with what he's teaching.",
    img: Aisha,
  },
  {
    name: "Usman Rufai",
    review:
      "The class hasjust been supercalifragilisticexpialidocious. You need to see me doing smiling when I'm working cuz as a novice itjust seems like a magic coding and seeing the results. Overall the class has been so amazing and shout out to our mentors Mano.luka. and Divine. We hope to know better than you",
    img: Rufai,
  },
  {
    name: "Asma'u Abubakar",
    review: "We have learned a lot about web development ",
    img: cardImg,
  },
  {
    name: "Caleb Wanjala",
    review:
      "The sessions are interactive looking forward to grow my tech skills.",
    img: Wanjala,
  },
];

const Carousel = () => {
  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  };

  return (
    <div className="w-full md:w-3/4 m-auto">
      <div className="pb-5">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              className="shadow-3xl border-2 w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
              key={d.name}
            >
              <div className="shadow-lg flex flex-row-reverse h-full">
                <div className="w-[50%]">
                  <img
                    className="h-full w-full object-cover"
                    src={d.img}
                    alt=""
                  />
                </div>

                <div className="text-white bg-[#1E90FF] w-[50%] px-3 py-4 md:p-10 flex flex-col items-start justify-center relative">
                  <LucideQuote className="absolute text-gray-800 opacity-20 w-14 h-14 top-2 left-1" />
                  <blockquote className="relative z-10">
                    <p className="text-[10px] md:text-[16px] leading-relaxed italic">
                      {d.review}
                    </p>
                    <div>
                      <h4 className="text-[12px] md:text-[16px] mt-5">
                        {d.name}
                      </h4>
                      <p className="text-[10px] md:text-[16px]">
                        {d.description}
                      </p>
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