import  { useEffect, useRef } from "react";
import bg from "../assets/hero_bg_about.png";
import cardImg1 from "../assets/faith.png";
import cardImg2 from "../assets/mayowa.png";
import cardImg3 from "../assets/george.png";
import cardImg4 from "../assets/ndi.png";
import cardImg5 from "../assets/oseh.png";
import cardImg6 from "../assets/ebube.png";
import cardImg7 from "../assets/victor.png";
import cardImg8 from "../assets/love.png";

const data = [
  {
    name: "Faith M. Roberts",
    description: "Founder and Community Lead",
    img: cardImg1,
  },
  {
    name: "Mayowa Obisesan",
    description: "Lead Developer",
    img: cardImg2,
  },
  {
    name: "Steven George",
    description: "Community Manager",
    img: cardImg3,
  },
  {
    name: "Ndifreke Ekanem",
    description: "Project Manager",
    img: cardImg4,
  },
  {
    name: "Divine Omoiyobe",
    description: "Content Lead",
    img: cardImg5,
  },
  {
    name: "Ebube E. Onuora",
    description: "Backend Lead",
    img: cardImg6,
  },
  {
    name: "Victor Peter",
    description: "Frontend Lead",
    img: cardImg7,
  },
  {
    name: "Love U. Faruna",
    description: "Design Lead",
    img: cardImg8,
  },
];

function Members() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="w-full bg-[#e5e5e5] relative">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Background Image"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="flex flex-col justify-center text-center">
        <div
          className="w-auto font-medium text-[18px] sm:text-[24px] md:text-[28px] lg:text-[26px] sm:px-6 md:px-8 lg:px-[20px] lg:py-[5px] rounded-full block mx-auto"
          style={{
            border: "1px solid rgba(255, 135, 43, 1)",
            color: "rgba(30, 144, 255, 1)",
            padding: "10px 20px",
          }}
        >
          Meet Our Team
        </div>
        <p className="font-[700] text-[16px] mt-5 px-2">
          Meet the passionate professionals driving our success and innovation
        </p>
      </div>

      {/* teams section */}
      <div className="w-full bg-[#e5e5e5] z-1000">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
          {data.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="w-full h-[411px] p-3 shadow-lg bg-[#e5e5e5] rounded-lg flex flex-col translate-y-10 transition-all duration-500 opacity-0"
              style={{
                border: "2px solid rgba(255, 207, 170, 1)",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-[319px] w-full object-cover rounded-lg"
              />
              <div className="flex-grow flex flex-col justify-end">
                <h2 className="text-[20px]">{member.name}</h2>
                <p className="text-gray-500 -mt-3 text-[14px]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}

export default Members;