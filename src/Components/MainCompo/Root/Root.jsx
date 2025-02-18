
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Root = () => {
  return (
    <div className='w-full  mx-auto max-w-8xl'>
      <Navbar></Navbar>
      <div className='w-11/12 mx-auto'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root