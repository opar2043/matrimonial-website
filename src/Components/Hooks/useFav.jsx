import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useFav = () => {
  const axiosSecure = useAxios();
  const { data: favourate, fetch, ispending} = useQuery({
    queryKey: ["favourate"],
    queryFn: async () => {
      const res = await axiosSecure.get("/favourate");
      return res.data;
    },
  });
  return [favourate, fetch, ispending];
};

export default useFav;
