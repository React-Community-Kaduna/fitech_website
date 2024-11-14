

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";


function AdminSignIn() {
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the admin code to the backend for verification
      const response = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/api/admin/verifyAdmin", { adminCode });

      if (response.data.success) {
        // If the admin code is correct, redirect to the admin dashboard
        navigate("/adminDashboard");
      } else {
        setError("Invalid admin code. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
    <NavBar/>
    <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Admin Sign In</h1>
        
        {/* Display error message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div>
          <label htmlFor="adminCode" className="block text-sm mb-2">
            Enter Admin Code
          </label>
          <input
            type="password"
            id="adminCode"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Sign In
        </button>
      </form>
    </div>
    </main>

      <Footer/>
    </div>
    
  );
}

export default AdminSignIn;


