/* eslint-disable react/prop-types */

function UserModal({ user, isOpen, onClose, approve, reject }) {
  if (!isOpen) return null; // Return nothing if modal is closed

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <h2 className="text-xl font-semibold mb-4 border-b text-center  uppercase ">
          {user.fullname} Details
        </h2>

        <div className="mb-4">
          <p className="capitalize ">
            <span className="font-semibold text-blue-500 capitalize">
              Full Name:
            </span>{" "}
            {user.fullname}
          </p>
          <p className="">
            <span className="font-semibold text-blue-500">Email:</span>{" "}
            {user.email}
          </p>
          <p className="">
            <span className="font-semibold text-blue-500">Phone:</span>{" "}
            {user.phone}
          </p>
          <p className="">
            <span className="font-semibold text-blue-500">Gender:</span>{" "}
            {user.gender}
          </p>
          <p className="capitalize ">
            <span className="font-semibold text-blue-500">Country:</span>{" "}
            {user.country}
          </p>
          <p className="capitalize ">
            <span className="font-semibold text-blue-500">State:</span>{" "}
            {user.state}
          </p>
          <p className="capitalize ">
            <span className="font-semibold text-blue-500">Experience:</span>{" "}
            {user.experience}
          </p>
          <p className="capitalize ">
            <span className="font-semibold text-blue-500">Commitment:</span>{" "}
            {user.commitment}
          </p>
          <p className="capitalize ">
            <span className="font-semibold text-blue-500">Preferred Time:</span>{" "}
            {user.preferredTime}
          </p>
          <p className="capitalize ">
            <span className="font-semibold text-blue-500">Access:</span>{" "}
            {user.access}
          </p>
          <p className="capitalize ">
            <span className="font-semibold text-blue-500">Comment:</span>{" "}
            {user.comment}
          </p>
        </div>

        <div className="flex justify-between">
          {/* Conditionally render Approve and Reject buttons if status is not 'approved' */}
          {user.status !== "approved" && (
            <>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => approve(user._id)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => reject(user._id)}
              >
                Reject
              </button>
            </>
          )}
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
