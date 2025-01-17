import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useContact = () => {
    const axiosSecure = useAxios();
    const { data: payments, fetch, ispending} = useQuery({
      queryKey: ["payments"],
      queryFn: async () => {
        const res = await axiosSecure.get("/payments");
        return res.data;
      },
    });
    return [payments, fetch, ispending];
}

export default useContact