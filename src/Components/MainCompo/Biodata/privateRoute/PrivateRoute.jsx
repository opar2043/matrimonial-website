import useAuth from '../../../Hooks/useAuth'
import Loading from '../../../Shared/Loading'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user , loading} = useAuth()
   if(loading){
    return <Loading></Loading>
   }
   if(user ){
    return children
   }
   return <Navigate to={'/'}></Navigate>
}

export default PrivateRoute