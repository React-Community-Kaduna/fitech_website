import { UserContext } from "../App";
import { useContext} from "react";
import logo from "../assets/logo.png";
import { removeFromSession } from "../Components/Sessions";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);

  console.log(access_token);
  const navigate = useNavigate(); 

  const signOutUser = () => {
    removeFromSession("user"); // Clear user session
    setUserAuth({ access_token: null }); // Reset user auth state
    navigate("/"); // Redirect to home page
  };

  return  (
    <>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <img src={logo} alt="Logo" className="mb-4" />
        <h3 className="text-lg font-bold">User Dashboard</h3>
        <p className="text-gray-600">Coming soon</p>
        <button className="bg-red-500 text-white py-3 px-4 rounded-lg mt-5" onClick={signOutUser}>Sign Out</button>
      </div>
    </>
  );
}

export default UserDashboard;
