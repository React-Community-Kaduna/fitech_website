import { useEffect, useState } from "react";
import axios from "axios";
import UserModal from "../Components/UserModal";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { toast, Toaster } from "react-hot-toast";

function AdminDashboard() {
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
        `Registration ${action === "approve" ? "approved" : "rejected"} successfully!`
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
      <NavBar />
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






