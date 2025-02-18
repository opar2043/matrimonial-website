import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="p-5 bg-gradient-to-br from-sky-100 to-white min-h-screen">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-6">User Profile</h2>
      {/* User Information Section */}
      <div className="mt-6 bg-white shadow-xl rounded-2xl px-8 py-14 border border-sky-400 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-8 items-center flex-col  md:flex-row">
          <div className="avatar">
            <div className="w-40 h-40 rounded-full border-4 border-sky-500 shadow-xl overflow-hidden">
              <img src={user.photoURL} alt="User Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FaUser className="text-sky-500" /> {user?.displayName || "User Name"}
            </p>
            <p className="text-lg text-gray-700 flex items-center gap-2">
              <FaEnvelope className="text-sky-500" /> {user?.email || "user@example.com"}
            </p>
            <p className="text-lg text-gray-700 flex items-center gap-2">
              <FaPhone className="text-sky-500" /> {user?.phoneNumber || "01814482832"}
            </p>
            <p className="text-lg text-gray-700 flex items-center gap-2">
              <FaMapMarkerAlt className="text-sky-500" /> {user?.location || "Location not set"}
            </p>
            <p className="text-lg text-gray-600">
              Account Created: {user?.metadata.creationTime || "Unknown"}
            </p>
            <p className={`text-lg font-semibold ${user?.emailVerified ? 'text-green-500' : 'text-red-500'}`}>
              {user?.emailVerified ? 'Verified' : 'Not Yet Verified'}
            </p>
          </div>
        </div>
        <div className="text-sky-800 font-medium text-center md:text-right">
          <p className="mb-3 text-gray-700">Reset Profile Information</p>
          <Link
            to={"/register"}
            className="bg-gradient-to-r from-sky-500 to-teal-400 text-white px-6 py-3 rounded-lg shadow-lg hover:from-sky-600 hover:to-teal-500 transition-all"
          >
            Click Here              
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
