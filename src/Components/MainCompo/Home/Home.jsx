import { useState } from "react";
import usePremiumBiodata from "../../Hooks/usePremiumBiodata";
import Banner from "../../Shared/Banner";
import PremiumBiodata from "../PremiumBiodata/PremiumBiodata";
import PremiumCard from "../PremiumBiodata/PremiumCard";
import HowItWork from "./HowItwork";
import SuccessCounter from "./Success/SuccessCounter";
import Successstory from "./Success/Successstory";
import Cards from "../Biodata/Card";

const Home = () => {
  const [premiumbiodata, refetch, isLoading] = usePremiumBiodata([]) || [];
  const [bioidata , setBiodata] = useState([])

  // const sortData = [...premiumbiodata].sort((a, b) => a.age - b.age);
  // setBiodata(sortData);

  console.log(premiumbiodata);
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <SuccessCounter></SuccessCounter>

      <div>
        <div>
          <h2 className="md:text-4xl text-green-500 text-xl text-center font-bold ">
            Our Premium Member{" "}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {premiumbiodata &&
            premiumbiodata.slice(0,6).map((prem, idx) => (
              // <PremiumCard prem={prem} key={idx}></PremiumCard>
              <Cards key={idx} bio={prem}></Cards>
            ))}
        </div>
      </div>
      {/* <PremiumBiodata premiumbiodata={premiumbiodata}></PremiumBiodata> */}
      <Successstory></Successstory>
    </div>
  );
};

export default Home;
