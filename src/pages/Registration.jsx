// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import NavBar, { NavBarContent } from "../Components/NavBar";
import Footer from "../Components/Footer";
import { NavLink, Link } from "react-router-dom";
import Button from "../Components/Button";
import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import bg from "../assets/back.jpeg";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { LucideArrowRightCircle, LucidePhone } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  // { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

function Registration() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [regPage, setRegPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [formData, setFormData] = useState({
    track: "",
    email: "",
    fullname: "",
    phone: "",
    gender: "",
    country: "",
    state: "",
    experience: "",
    commitment: "",
    access: "",
    preferredTime: "",
    comment: "",
  });
  const maxLength = 100;
  const handleChange = (e) => {
    const { name, value } = e.target;
    const maxLength = 100;

    // Check if the length of the value is within the character limit
    if (value.length <= maxLength) {
      setFormData({ ...formData, [name]: value });
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/api/register",
        formData
      );

      // Display success toast and reset the form
      toast.success(response.data.message);
      setFormData({
        track: "",
        email: "",
        fullname: "",
        phone: "",
        gender: "",
        country: "",
        state: "",
        experience: "",
        commitment: "",
        access: "",
        preferredTime: "",
        comment: "",
      });
    } catch (error) {
      // Display error toast
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar className="w-full fixed top-0 left-0 z-50 bg-[#e5e5e5]">
        <NavBarContent />
      </NavBar>

      <main
        className="flex-1 w-full mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden "
        style={{}}
      >
        <section
          className="flex justify-center items-center bg-[url('../assets/back.jpeg')] bg-cover bg-no-repeat w-full lg:h-[400px] sm:h-[150px] rounded-t-[3rem]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
          }}
        >
          <div className="w-full m-auto text-white text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-3xl font-bold text-[50px] ">
              Bootcamp 2.0 Registration
            </h2>
          </div>
        </section>
        <section className="mt-20 flex flex-col justify-center overflow-hidden  ">
          {/* Registration Form */}
          <div
            className=""
            style={{
              backgroundColor: "rgba(210, 233, 255, 0.4)",
              padding: "1rem",
              marginBottom: "0",
            }}
          >
            <Toaster />
            <form
              className="p-6 rounded-2xl shadow-lg w-full  md:max-w-[70%] mx-auto"
              onSubmit={handleSubmit}
              style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
            >

              {
                regPage === 1 &&
                <section className="">
                  <h2 className="text-[28px] font-[700]  ">Personal Information</h2>
                  <p className="text-[14px] font-[400] mb-6">
                    Fill out your personal information carefully for registration
                  </p>

                  {/* Track Dropdown */}
                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    Select Track
                  </label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]"
                  >
                    <option value="">Preferred Course</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science and Analysis</option>
                    <option value="UI/UX Design">Blockchain Development</option>
                  </select>

                  {/* Email Input */}
                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    Email
                  </label>
                  <div className="flex flex-row gap-2 items-center bg-white w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]">
                    <span className="text-[15px]">
                      <MdOutlineEmail />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className=" "
                      placeholder="user@example.com"
                      required
                    />
                  </div>

                  {/* Full Name Input */}

                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    Full Name
                  </label>
                  <div className="flex flex-row gap-2 items-center bg-white w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]">
                    <span className="text-[15px]">
                      <CiUser />
                    </span>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      className=""
                      placeholder="Your name here"
                      required
                    />
                  </div>

                  {/* Phone Number Input */}
                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    Phone Number
                  </label>

                  <div className="flex flex-row gap-2 items-center bg-white w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]">
                    <spam className="text-[17px]">
                      <LucidePhone size={14} />
                    </spam>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className=""
                      placeholder="Input phone number"
                      required
                    />
                  </div>

                  {/* Gender Dropdown */}
                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]"
                  >
                    <option value="">Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  {/* Country of Residence Input */}
                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]"
                    placeholder="Select Country"
                    required
                  />

                  {/* State of Residence Input */}
                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    State of Residence
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]"
                    placeholder="Select State of Residence"
                    required
                  />

                  {/* Experience Level Dropdown */}
                  <label className="block mb-2 font-[400] text-[13px] pl-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 lg:px-4 py-4 mb-4 border rounded-lg text-[13px]"
                  >
                    <option value="">Select experience level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>

                  <Button
                    className="flex flex-row items-center gap-x-2 rounded-lg h-12 my-8 px-8 border border-[#FF6F00] text-[#FF6F00] text-base"
                    onClick={() => setRegPage(2)}
                  >
                    Continue <LucideArrowRightCircle color="#FF6F00" strokeWidth="1" />
                  </Button>
                </section>
              }

              {/* OTHER INFORMATION */}
              {
                regPage === 2 &&
                <section className="space-y-6">
                  <div className="mb-12">
                    <h2 className="text-[28px] font-[700] flex flex-row items-center gap-x-4">
                      Other Information <h4 className="font-bold text-[#FF872B]">2 of 2</h4>
                    </h2>
                    <h4 className="text-sm">The information you provide in this section will guide us in reviewing your application more effectively.</h4>
                  </div>

                  {/* Commitment Radio Buttons */}
                  <div className="flex flex-col gap-y-4">
                    <h5 className="block mb-2 font-[500] text-gray-700">
                      Can you commit to spending at least 6 hours weekly?
                    </h5>
                    <div className="flex flex-col space-y-5 mb-4 text-sm">
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="commitment"
                          value="Yes"
                          checked={formData.commitment === "Yes"}
                          onChange={handleChange}
                        />{" "}
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="commitment"
                          value="No"
                          checked={formData.commitment === "No"}
                          onChange={handleChange}
                        />{" "}
                        No
                      </label>
                    </div>
                  </div>

                  {/* Access Radio Buttons */}
                  <div className="flex flex-col gap-y-4">
                    <h5 className="block mb-2 font-[500] text-gray-700">
                      Do you have access to a laptop and internet?
                    </h5>
                    <div className="flex flex-col space-y-5 mb-4 text-sm">
                      <label className="block">
                        <input
                          type="radio"
                          name="access"
                          value="Yes, I have both"
                          checked={formData.access === "Yes, I have both"}
                          onChange={handleChange}
                        />{" "}
                        Yes, I have both laptop and internet access
                      </label>
                      <label className="block">
                        <input
                          type="radio"
                          name="access"
                          value="Yes, but only laptop"
                          checked={formData.access === "Yes, but only laptop"}
                          onChange={handleChange}
                        />{" "}
                        Yes, but I have only just a laptop
                      </label>
                      <label className="block">
                        <input
                          type="radio"
                          name="access"
                          value="No access"
                          checked={formData.access === "No access"}
                          onChange={handleChange}
                        />{" "}
                        No, I don&lsquo;t have any
                      </label>
                    </div>
                  </div>

                  {/* Preferred Time Radio Buttons */}
                  <div className="flex flex-col gap-y-4">
                    <h5 className="block mb-2 text-gray-700 font-[500]">
                      Select your preferred time for classes
                    </h5>
                    <div className="flex flex-col space-y-5 mb-4 text-sm">
                      <label className="mr-4">
                        <input
                          type="radio"
                          name="preferredTime"
                          value="9:00AM - 12:00PM"
                          checked={formData.preferredTime === "9:00AM - 12:00PM"}
                          onChange={handleChange}
                        />{" "}
                        9:00AM - 12:00PM
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="preferredTime"
                          value="3:00PM - 6:00PM"
                          checked={formData.preferredTime === "3:00PM - 6:00PM"}
                          onChange={handleChange}
                        />{" "}
                        3:00PM - 6:00PM
                      </label>
                    </div>
                  </div>

                  {/* Additional Comment Textarea */}
                  <div className="flex flex-col gap-y-4">
                    <h5 className="block mb-2 text-gray-700 font-[500]">
                      Additional Comment (Optional)
                    </h5>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      className="w-full h-60 p-6 border rounded-lg"
                      placeholder="Your comments"
                      maxLength={maxLength}
                      style={{
                        overflowY: "auto",
                        resize: "none",
                        whiteSpace: "pre-wrap",
                      }}
                    />
                    <div className="text-right text-sm mb-4">
                      <span>{maxLength - formData.comment.length}</span> characters
                      remaining
                    </div>
                  </div>

                  <div className="flex flex-row gap-x-4">
                    <Button
                      type="button"
                      className="border border-black px-8 py-3 rounded-lg"
                      onClick={() => setRegPage(1)}
                    >
                      Back
                    </Button>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white p-2 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </section>
              }
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Registration;
