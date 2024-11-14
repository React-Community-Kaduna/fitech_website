/* eslint-disable react/prop-types */


function UserModal({ user, isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 border-2 border-blue-600">
        <h2 className="text-xl font-semibold mb-4 border-b text-center  uppercase ">{user.fullname} Details</h2>
        
        <div className="space-y-4 shadow-sm  ">
          <p className="capitalize "><span className="font-semibold text-blue-500 capitalize">Full Name:</span> {user.fullname}</p>
          <p  className=""><span className="font-semibold text-blue-500">Email:</span> {user.email}</p>
          <p className=""><span className="font-semibold text-blue-500">Phone:</span> {user.phone}</p>
          <p className=""><span className="font-semibold text-blue-500">Gender:</span> {user.gender}</p>
          <p className="capitalize "><span className="font-semibold text-blue-500">Country:</span> {user.country}</p>
          <p className="capitalize "><span className="font-semibold text-blue-500">State:</span> {user.state}</p>
          <p className="capitalize "><span className="font-semibold text-blue-500">Experience:</span> {user.experience}</p>
          <p className="capitalize "><span className="font-semibold text-blue-500">Commitment:</span> {user.commitment}</p>
          <p className="capitalize "><span className="font-semibold text-blue-500">Preferred Time:</span> {user.preferredTime}</p>
          <p className="capitalize "><span className="font-semibold text-blue-500">Access:</span> {user.access}</p>
          <p className="capitalize "><span className="font-semibold text-blue-500">Comment:</span> {user.comment}</p>
        </div>
        <div className="mt-4 block mx-auto">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded block mx-auto" 
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
