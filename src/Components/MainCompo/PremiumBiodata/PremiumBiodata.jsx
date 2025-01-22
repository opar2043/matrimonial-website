import usePremiumBiodata from "../../Hooks/usePremiumBiodata"
import Cards from "../Biodata/Card"
import PremiumCard from "./PremiumCard";


const PremiumBiodata = () => {
    const [premiumbiodata,  refetch, isLoading] = usePremiumBiodata([]) || []
    console.log(premiumbiodata);
  return (
    <div>
        <h2>Our Premium Bio data  </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
         {
            premiumbiodata && premiumbiodata.map((bio,idx)=> {
                <PremiumCard key={idx} bio={bio}></PremiumCard>
            })
         }
      </div>
    </div>
  )
}

export default PremiumBiodata