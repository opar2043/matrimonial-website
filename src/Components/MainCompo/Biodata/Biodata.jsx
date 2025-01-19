import Card from "./Card";
import useBiodata from "../../Hooks/useBiodata";
import { useEffect, useState } from "react";

const Biodata = () => {
  const divisions = [
    "Dhaka",
    "Chittagong",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];
  //  const [biodata , setBiodata] = useBiodata() || []
  const [biodata, setBiodata] = useState([]);
  //  const [age , setAge] = useState('')
  const [gender, setGnder] = useState("");
  console.log(gender);
   const [division , setDivision] = useState('')
   console.log(division);
  useEffect(() => {
    fetch(`http://localhost:5000/biodata?division=${division}&gender=${gender}`)
      //  fetch("biodata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBiodata(data);
      });

  }, [division,gender]);

  function reset(){
    setDivision('')
    setGnder('')
  }

  return (
    <div className="my-10">
      <div className="flex justify-between gap-3">
        <div>
        <select
              onChange={(e) => setGnder(e.target.value)}
              name="biodataType"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
        </div>
        <div>
          <button className="btn" onClick={reset}>Reset All</button>
        </div>
        <div>
          <select
            onChange={(e) => setDivision(e.target.value)}
            name="permanentDivision"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="" disabled>
              Select Division
            </option>
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {biodata.map((bio) => (
          <Card key={bio.id} bio={bio}></Card>
        ))}
      </div>
    </div>
  );
};

export default Biodata;
