import axios from "axios"

const axiosMine = axios.create({
    baseURL: 'https://make-marriege-server.vercel.app'
})

const usePublic = () => {
   return axiosMine
}

export default usePublic