import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserModal from "../Components/UserModal";
import { toast, Toaster } from "react-hot-toast";
import { UserContext } from "../App";

function Application() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Store selected user
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  let {
    userAuth: { access_token },
  } = useContext(UserContext);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_DOMAIN + "/api/register",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
       
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

  const handleApprove = async (userId) => {
    try {
      await axios.put(
        import.meta.env.VITE_SERVER_DOMAIN + `/api/register/${userId}`,
        { action: "approve" }, // Include action here
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      toast.success("Registration approved successfully!");
    } catch (error) {
      console.error("Error approving user:", error.response?.data || error);
      toast.error("Failed to approve user.");
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.put(
        import.meta.env.VITE_SERVER_DOMAIN + `/api/register/${userId}`,
        { action: "reject" }, // Include action here
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      toast.success("Registration rejected successfully!");
    } catch (error) {
      console.error("Error rejecting user:", error.response?.data || error);
      toast.error("Failed to reject user.");
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
      <main className="flex-1 w-full mt-4 overflow-x-hidden">
        <p className=" font-semibold pl-5">Applications</p>

        <div className="container mx-auto p-4">
          <Toaster />
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-200 border  table-auto">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">Email</th>
                  <th className="py-2 px-4 border-b text-left">Full Name</th>
                  <th className="py-2 px-4 border-b text-left">Phone Number</th>
                  <th className="py-2 px-4 border-b text-left">
                    Experience Level
                  </th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                  <th className="py-2 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="py-2 px-4 border-b ">{user.email}</td>
                    <td className="py-2 px-4 border-b">{user.fullname}</td>
                    <td className="py-2 px-4 border-b">{user.phone}</td>
                    <td className="py-2 px-4 border-b">{user.experience}</td>
                    <td
                      className={`py-2 px-4 border-b ${
                        user.status === "pending"
                          ? "bg-blue-500 text-white"
                          : user.status === "approved"
                          ? "bg-green-500 text-white"
                          : ""
                      }`}
                    >
                      {user.status}
                    </td>
                    <td
                      onClick={() => handleUserClick(user)}
                      className="py-2 px-4 border-b cursor-pointer  text-blue-600 "
                    >
                      View Details
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
              approve={handleApprove}
              reject={handleReject}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Application;
