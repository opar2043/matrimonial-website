// import { Button, Card, Image, Text } from "@chakra-ui/react"

import { Link } from "react-router-dom";

const Cards = ({ bio }) => {
  const { gender, image, division, occupation, age , _id } = bio;

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div>
          <img src={image} alt="Profile" className="w-full h-48 object-cover" />
        </div>
        <div className="flex flex-col gap-2 p-4 ">
          <p className=" font-bold my-2 text-pink-700 capitalize">
            <span className="bg-pink-200  rounded-xl py-1 px-4"> {occupation}</span>
          </p>
          <p className="text-sm font-semibold text-gray-600">gender: {gender}</p>
          <p className="text-sm font-semibold text-gray-600">Age: {age}</p>
          <p className="text-sm font-semibold text-gray-600">Division: {division}</p>
        </div>
        <div className="p-4 bg-pink-100 flex justify-center">
          <Link to={`/dashboard/view/${_id}`}>
          <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 hover:bg-pink-600 hover:shadow-lg">
              View Profile
            </button>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Cards;
