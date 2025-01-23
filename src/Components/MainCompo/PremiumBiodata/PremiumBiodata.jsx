import { useEffect, useState } from "react";
import PremiumCard from "./PremiumCard";



const PremiumBiodata = () => {

  const [premiumbiodata , setPremium] = useState([]);
  useEffect(()=>{
    fetch('https://make-marriege-server.vercel.app/premium-biodata')
    .then(data => data.json())
    .then(res => {
      console.log(res);
      setPremium(res.data)
    })
  },[])

  console.log(premiumbiodata);

  return (
        
    <div>
    </div>
  )
}

export default PremiumBiodata