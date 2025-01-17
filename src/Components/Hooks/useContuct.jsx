
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useContuct = () => {
    const axiosSecure = useAxios();
    const { data: contuct, fetch, ispending} = useQuery({
      queryKey: ["contuct"],
      queryFn: async () => {
        const res = await axiosSecure.get('/contuct');
        return res.data;
      },
    });
    return [contuct, fetch, ispending];
}

export default useContuct