import { useRef, useState } from "react";
import AnimationWrapper from "./PageAnimation";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";
import { GiPadlock } from "react-icons/gi";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let {
    userAuth: { access_token, fullname, email },
  } = useContext(UserContext);
  let ChangePasswordForm = useRef();
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

  const handleSubmit = (e) => {
    e.preventDefault();

    let form = new FormData(ChangePasswordForm.current);
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    let { currentPassword, newPassword } = formData;

    if (!currentPassword.length || !newPassword.length) {
      return toast.error("Fill in password fields");
    }

    if (
      !passwordRegex.test(currentPassword) ||
      !passwordRegex.test(newPassword)
    ) {
      return toast.error(
        "Password should be 6 - 20 characters long with a numeric, 1 lowercase and 1 uppercase letters "
      );
    }

    e.target.setAttribute("disabled", true);

    let loadingToast = toast.loading("Updating...");

    axios
      .post(
        import.meta.env.VITE_SERVER_DOMAIN + "/api/v1/user/change-password",
        formData,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )

      .then(() => {
        toast.dismiss(loadingToast);
        e.target.removeAttribute("disabled");
        ChangePasswordForm.current.reset(); // Clear the input fields
        return toast.success("Password Updated");
      })
      .catch(({ response }) => {
        toast.dismiss(loadingToast);
        e.target.removeAttribute("disabled");
        // return toast.error(response.data.error)

        if (response.data.error === "Incorrect current password") {
          return toast.error("Incorrect current password");
        }

        return toast.error(response.data.error || "An error occurred");
      });
  };
  return (
    <>
      <AnimationWrapper>
        <Toaster />
        <form ref={ChangePasswordForm}>
      
          <div className="w-full md:max-w-[400px] text-black bg-white shadow-lg rounded-lg p-6">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-700 border-b pb-2">
                Your Details
              </h4>
              <div className="mt-4">
                <p className="capitalize text-lg font-medium text-gray-800">
                  {fullname}
                </p>
                <p className="text-sm text-gray-600">{email}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-700 border-b pb-2">
                Change Password
              </h4>
              <div className="relative mt-6">
                <GiPadlock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  name="currentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Current Password"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <BiHide /> : <BiShowAlt />}
                </span>
              </div>

              <div className="relative mt-6">
                <GiPadlock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  name="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <BiHide /> : <BiShowAlt />}
                </span>
              </div>

              <div className="flex justify-center items-center mt-6">
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-500 text-white rounded-lg py-3 px-6 text-lg font-medium hover:bg-indigo-600 transition duration-300"
                  type="submit"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </form>
      </AnimationWrapper>
    </>
  );
};

export default Settings;
