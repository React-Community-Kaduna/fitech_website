import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg from "../assets/cardImg.jpeg";

let data = [
  {
    name: "Victor Peter",
    review:
      "Joining FiTech was a game-changer for me. Their comprehensive training program not only honed my web development skills but also provided invaluable career guidance. With their support, I built a strong portfolio and gained the confidence to ace my interviews. Thanks to FiTech, I landed my first job as a web developer, and I couldn't be more grateful for their mentorship and support.",
    description: "Web3 Developer at Spillage",
    img: cardImg,
  },
  {
    name: "John Doe",
    review:
      "Joining FiTech was a game-changer for me. Their comprehensive training program not only honed my web development skills but also provided invaluable career guidance. With their support, I built a strong portfolio and gained the confidence to ace my interviews. Thanks to FiTech, I landed my first job as a web developer, and I couldn't be more grateful for their mentorship and support.",
    description: "Web3 Developer at Spillage",
    img: cardImg,
  },
  {
    name: "John Obansa",
    review:
      "Joining FiTech was a game-changer for me. Their comprehensive training program not only honed my web development skills but also provided invaluable career guidance. With their support, I built a strong portfolio and gained the confidence to ace my interviews. Thanks to FiTech, I landed my first job as a web developer, and I couldn't be more grateful for their mentorship and support.",
    description: "Web3 Developer at Spillage",
    img: cardImg,
  },
  {
    name: "Daniel Ogbaji",
    review:
      "Joining FiTech was a game-changer for me. Their comprehensive training program not only honed my web development skills but also provided invaluable career guidance. With their support, I built a strong portfolio and gained the confidence to ace my interviews. Thanks to FiTech, I landed my first job as a web developer, and I couldn't be more grateful for their mentorship and support.",
    description: "Web3 Developer at Spillage",
    img: cardImg,
  },
  {
    name: "Ebube Onuora",
    review:
      "Joining FiTech was a game-changer for me. Their comprehensive training program not only honed my web development skills but also provided invaluable career guidance. With their support, I built a strong portfolio and gained the confidence to ace my interviews. Thanks to FiTech, I landed my first job as a web developer, and I couldn't be more grateful for their mentorship and support.",
    description: "Web3 Developer at Spillage",
    img: cardImg,
  },
];

const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlideCount = () => {
    if (windowWidth < 640) {
      return 1;
    } else if (windowWidth < 1024) {
      return 2;
    } else {
      return 4;
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: getSlideCount(),
    slidesToScroll: 1,
  };

  return (
    <div className="w-full md:w-4/4 m-auto">
      <div className="">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              className="w-full md:w-[300px] h-[300px] border-2 border-gray-200 p-3 rounded-lg"
              key={d.name}
            >
              <div className="w-[70px] h-[70px]">
                <img className="rounded-full" src={d.img} alt="" />
              </div>
              <p className="text-[10px] my-2">{d.review}</p>
              <div>
                <h4 className="text-[12px]">{d.name}</h4>
                <p className="text-[10px]">{d.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
