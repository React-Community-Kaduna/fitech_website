import bg from "../assets/hero_bg_about.png";
import cardImg1 from "../assets/faith.png";
import cardImg2 from "../assets/mayowa.png";
import cardImg3 from "../assets/george.png";
import cardImg4 from "../assets/ndi.png";
import cardImg5 from "../assets/oseh.png";
import cardImg6 from "../assets/ebube.png";
import cardImg7 from "../assets/victor.png";
import cardImg8 from "../assets/love.png";

let data = [
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
  return (
    <section className="">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Background Image"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="flex flex-col justify-center text-center">
        <button
          className="font-medium text-[18px] sm:text-[24px] md:text-[28px] lg:text-[30px] px-4 sm:px-6 md:px-8 lg:px-[20px] lg:py-[5px] rounded-full w-[90%] sm:w-[70%] md:w-[40%] lg:w-[18%] block mx-auto"
          style={{ border: "1px solid rgba(255, 135, 43, 1)", color:"rgba(30, 144, 255, 1)" }}
        >
          Meet Our Team
        </button>
        <p className="font-[700] text-[16px] mt-5 ">
          Meet the passionate professionals driving our success and innovation
        </p>
      </div>

      {/* teams section */}
      <div className="container mx-auto pt-[3.5rem] bg-white relative z-1000">
        <div className="flex flex-wrap justify-center gap-6">
          {data.map((member, index) => (
            <div
              key={index}
              className="w-[302px] md:w-[300px] h-[411px] p-3 bg-white rounded-lg flex flex-col  "
              style={{
                border: "2px solid rgba(255, 207, 170, 1)",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-[319px] w-[282px] object-cover mb-1"
              />
              <h2 className="font-[500] text-[20px]">{member.name}</h2>
              <p className="text-gray-500 font-[400] text-[14px]">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;
