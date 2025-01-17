
import Card from './Card'
import useBiodata from '../../Hooks/useBiodata'

const Biodata = () => {

   const [biodata] = useBiodata() || []
  

   

  return (
    <div className='my-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>

     
      {
      biodata.map(bio => <Card key={bio.id} bio={bio}></Card>
      )
      }
    </div>
    </div>
  )
}

export default Biodata