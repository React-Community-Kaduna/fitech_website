import { useEffect, useState } from "react";
import axios from "axios";
import UserModal from "../Components/UserModal";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { toast, Toaster } from "react-hot-toast";
import { NavLink, Link } from "react-router-dom";
import Button from "../Components/Button";

import logo from "../assets/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

function AdminDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_DOMAIN + "/api/users"
        );
        // Sort users by status: pending first, then rejected, then approved
        const sortedUsers = response.data.sort((a, b) => {
          if (a.status === "pending" && b.status !== "pending") {
            return -1; // Move pending users to the top
          }
          if (a.status !== "pending" && b.status === "pending") {
            return 1; // Keep pending users at the top
          }
          if (a.status === "approved" && b.status !== "approved") {
            return 1; // Move approved users to the bottom
          }
          if (a.status !== "approved" && b.status === "approved") {
            return -1; // Move approved users to the bottom
          }
          return 0; // Keep order for users with the same status
        });
        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle approve/reject action
  const handleAction = async (userId, action) => {
    try {
      await axios.put(
        import.meta.env.VITE_SERVER_DOMAIN + `/api/users/${userId}`,
        { action },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Update and re-sort users after action
      setUsers(
        users
          .map((user) =>
            user._id === userId
              ? {
                  ...user,
                  status: action === "approve" ? "approved" : "rejected",
                }
              : user
          )
          .sort((a, b) => {
            if (a.status === "pending" && b.status !== "pending") {
              return -1;
            }
            if (a.status !== "pending" && b.status === "pending") {
              return 1;
            }
            if (a.status === "approved" && b.status !== "approved") {
              return 1;
            }
            if (a.status !== "approved" && b.status === "approved") {
              return -1;
            }
            return 0;
          })
      );

      toast.success(
        `Registration ${
          action === "approve" ? "approved" : "rejected"
        } successfully!`
      );
    } catch (error) {
      console.error(`Error updating user status:`, error);
      toast.error("Failed to update user status. Please try again.");
    }
  };

  // Handle user click to view details in modal
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true); // Open the modal
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar className="w-full fixed top-0 left-0 z-50 bg-[#e5e5e5]">
        <div className="md:flex items-center justify-between py-4 px-7 z-50">
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <Link to="/">
              <img className="w-[150px]" src={logo} alt="Community logo" />
            </Link>
          </div>
          <button
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen((e) => !e)}
          >
            {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </button>
          <div
            className={`md:flex md:items-center md:pb-5 pb-10 absolute md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-5 gap-5 transition-all duration-500 ease-in ${
              isMenuOpen ? "top-0 opacity-100 pt-14" : "top-[-550px]"
            }`}
          >
            {/* Menu items */}
            <ul className="md:flex md:items-center md:pb-5 pb-10 md:static bg-[#e5e5e5] md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 p-5 transition-all duration-500 ease-in">
              {navigation.map((item) => (
                <li className="md:ml-8 text-xl md:my-0 my-7">
                  <NavLink
                    className={({ isActive }) => {
                      return (
                        "px-3 py-2 z-50 rounded-md duration-500" +
                        (isActive
                          ? "bg-gray-900 text-green-900 border-2 border-green-950"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white")
                      );
                    }}
                    key={item.name}
                    to={item.href}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <span className="flex flex-col md:flex-row gap-5">
              <Link to="/registration">
                <Button className="bg-[#1E90FF] border-[#1E90FF] w-auto p-3 rounded-lg md:ml-8 hover:bg-gray-500 duration-500 text-[white]">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-none px-5 py-3 border-2 border-[#1E90FF] rounded-lg hover:bg-gray-500 hover:text-white duration-500">
                  Contact Us
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </NavBar>
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px] lg:mt-[150px] overflow-x-hidden">
        <div className="flex justify-end">
          <p className="float-end font-semibold">Welcome Community Manager</p>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-sm lg:text-4xl font-bold mb-4 text-center">
            Admin Dashboard
          </h1>
          <Toaster />
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 table-auto">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Full Name</th>
                  <th className="py-2 px-4 border-b text-left">Email</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                  <th className="py-2 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td
                      className="py-2 px-4 border-b text-blue-500 cursor-pointer"
                      onClick={() => handleUserClick(user)} // Open the modal on click
                    >
                      {user.fullname}
                    </td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.status}</td>
                    <td className="py-2 px-4 border-b">
                      {user.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleAction(user._id, "approve")}
                            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction(user._id, "reject")}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Render the modal */}
          {selectedUser && (
            <UserModal
              user={selectedUser}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AdminDashboard;
