import { FaFemale, FaFileSignature, FaMale } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

const SuccessCounter = () => {
  return (
    <div className="bg-gradient-to-r from-violet-100 via-violet-200 to-violet-300 py-8 px-6 my-10">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Our Website Stats</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5  py-3 max-w-6xl mx-auto">
        {/* Total Bio Data */}
        <div className="flex flex-col items-center bg-white px-2 py-3 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
          <FaDatabase className="text-6xl text-pink-600 mb-4" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Total Bio Data</h2>
          <p className="text-3xl font-bold text-pink-500">100</p>
        </div>

        {/* Total Male Bio Data */}
        <div className="flex flex-col items-center bg-white px-2 py-3 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
          <FaMale className="text-6xl text-blue-500 mb-4" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Total Male Bio Data</h2>
          <p className="text-3xl font-bold text-pink-500">60</p>
        </div>

        {/* Total Female Bio Data */}
        <div className="flex flex-col items-center bg-white px-2 py-3 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
          <FaFemale className="text-6xl text-pink-500 mb-4" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Total Female Bio Data</h2>
          <p className="text-3xl font-bold text-pink-500">40</p>
        </div>

        {/* Marriages Completed */}
        <div className="flex flex-col items-center bg-white px-2 py-3 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
          <FaFileSignature className="text-6xl text-green-500 mb-4" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Marriages Completed</h2>
          <p className="text-3xl font-bold text-pink-500">44</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
