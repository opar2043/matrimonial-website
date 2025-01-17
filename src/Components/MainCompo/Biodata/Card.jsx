// import { Button, Card, Image, Text } from "@chakra-ui/react"

import { Link } from "react-router-dom";

// const Demo = () => {
//   return (
//     <Card.Root maxW="sm" overflow="hidden">
//       <Image
//         src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//         alt="Green double couch with wooden legs"
//       />
//       <Card.Body gap="2">
//         <Card.Title>Living room Sofa</Card.Title>
//         <Card.Description>
//           This sofa is perfect for modern tropical spaces, baroque inspired
//           spaces.
//         </Card.Description>
//         <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
//           $450
//         </Text>
//       </Card.Body>
//       <Card.Footer gap="2">
//         <Button variant="solid">Buy now</Button>
//         <Button variant="ghost">Add to cart</Button>
//       </Card.Footer>
//     </Card.Root>
//   )
// }

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
