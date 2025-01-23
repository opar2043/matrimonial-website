import { useEffect, useState } from "react";


const useBiodata = () => {
  const [biodata, setBiodata] = useState([]);

  useEffect(() => {
    fetch("https://make-marriege-server.vercel.app/biodata")
    //  fetch("biodata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBiodata(data);
      });
  }, []);

  return [biodata];
}

export default useBiodata