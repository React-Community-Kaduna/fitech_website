
import Sidebar from "../Components/SideNav";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../App";

function AdminDashboard() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  let {userAuth:{access_token}} = useContext(UserContext)

  // Update the page title based on the current route
  useEffect(() => {
    const path = location.pathname.split("/")[2]; // Extracting the second segment (e.g., "training")
    const pageTitle = path
      ? path.charAt(0).toUpperCase() + path.slice(1)
      : "Admin-Dashboard"; // Capitalize
    setCurrentPage(pageTitle);
  }, [location]);

  if (!access_token) {
    return <Navigate to="/" />;
  }
  return (
    <div style={{ display: "flex", height: "100vh" }} className="bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Page Title */}
        <h4
          style={{
            padding: "15px 20px",
            backgroundColor: "",
            borderBottom: "",
            marginTop:'rem'
          }}
        >
          {currentPage}
        </h4>

        {/* Page Content */}
        <div style={{ flex: 1, padding: "px", backgroundColor: "" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
