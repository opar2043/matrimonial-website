
import Banner from '../../Shared/Banner'
import PremiumBiodata from '../PremiumBiodata/PremiumBiodata'
import HowItWork from './HowItwork'
import SuccessCounter from './Success/SuccessCounter'
import Successstory from './Success/Successstory'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <SuccessCounter></SuccessCounter>
      <PremiumBiodata></PremiumBiodata>
      <Successstory></Successstory>
    </div>
  )
}

export default Home