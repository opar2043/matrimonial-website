import { Face, Favorite } from "@mui/icons-material";

const ChoosingPartner = () => {
    return (
<section className="bg-white text-gray-900 py-16 my-12 rounded-lg shadow-lg">
  <div className="max-w-screen-xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10 text-pink-500">
      Choosing Your Perfect Partner
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Column: Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co.com/rFkdKRw/coupleHd.jpg" // Replace with a relevant image or illustration
          alt="Choosing Partner"
          className="rounded-lg shadow-xl w-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Column: Description */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold mb-6 text-pink-500">
          Find a Partner Who Shares Your Values
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Choosing a partner is one of the most important decisions in life. We believe that compatibility goes beyond appearance. It’s about shared values, mutual respect, and life goals. Our platform offers detailed profiles to help you connect with people who align with your values and aspirations.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you are seeking someone with similar professional ambitions, cultural background, or personal interests, we help you find a meaningful connection that can lead to a lifelong partnership.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#"
            className="inline-block bg-pink-600 hover:bg-pink-500 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
          >
            <Favorite></Favorite>
          </a>
          <a
            href="#"
            className="inline-block bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
          >
            <Face></Face>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    );
  };
  
  export default ChoosingPartner;
  