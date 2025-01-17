import { Link, useParams } from "react-router-dom";
import useBiodata from "../../Hooks/useBiodata";
import { FaHeart, FaPhone, FaBriefcase,  FaGenderless, FaMapLocation } from "react-icons/fa6";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const ViewData = () => {
  const { id } = useParams();
  const [biodata] = useBiodata() || [];
  const axiosSecure = useAxios()

  const data = biodata.find((bio) => bio._id === id);

  const {
    name = "N/A",
    image ,
    age = "N/A",
    father = "N/A",
    mother = "N/A",
    partnerAge = "N/A",
    partnerHeight = "N/A",
    mobile = "N/A",
    gender = "N/A",
    date = "N/A",
    height = "N/A",
    weight = "N/A",
    occupation = "N/A",
    race = "N/A",
    division = "N/A",
    presentdivision = "N/A",
    partnerWeight = "N/A",
  } = data || {};


  function addFav(item){
     console.log(item);

     axiosSecure.post('/favourate',item)
    .then(res => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} Add to Your Fav.. List`,
                showConfirmButton: false,
                timer: 1000,
              });
            }
          })
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 py-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Image Section */}
        <img
          className="w-full h-64 object-cover"
          src={image || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
          alt={`${name}'s photo`}
        />

        {/* Content Section */}
        <div className="p-6 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              <FaBriefcase /> {occupation}
            </span>
            <span className="flex items-center gap-2 bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              <FaMapLocation></FaMapLocation> {presentdivision}
            </span>
            <span className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              <FaGenderless /> {gender}
            </span>
          </div>

          {/* Detailed Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-semibold">Father's Name:</span> {father}
            </p>
            <p>
              <span className="font-semibold">Mother's Name:</span> {mother}
            </p>
            <p>
              <span className="font-semibold">Date of Birth:</span> {date}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {age}
            </p>
            <p>
              <span className="font-semibold">Height:</span> {height}
            </p>
            <p>
              <span className="font-semibold">Weight:</span> {weight}
            </p>
            <p>
              <span className="font-semibold">Tone:</span> {race}
            </p>
            <p>
              <span className="font-semibold">Partner's Age:</span>{" "}
              {partnerAge}
            </p>
            <p>
              <span className="font-semibold">Expected Partner's Divison:</span>{" "}
              {division}
            </p>
            <p>
              <span className="font-semibold">Expected Partner's Height:</span>{" "}
              {partnerHeight}
            </p>
            <p>
              <span className="font-semibold">Expected Partner's Weight:</span>{" "}
              {partnerWeight}
            </p>
            <p>
              <span className="font-semibold">Mobile:</span> {mobile}
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 flex gap-4">
         <button className="w-full" onClick={()=> addContuct(data)}>
         <Link to={`/checkout/${id}`}   className="w-full px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center gap-2 text-lg">
            Contact <FaPhone />
         </Link>
          </button>
          <button onClick={()=> addFav(data)} className="w-full px-4 py-3 text-pink-600 border border-pink-600 hover:bg-pink-100 rounded-lg flex items-center justify-center gap-2 text-lg">
            Add to Favorites <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
