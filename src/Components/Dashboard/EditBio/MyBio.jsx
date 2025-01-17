import React from 'react'
import useAuth from '../../Hooks/useAuth'
import useBiodata from '../../Hooks/useBiodata';
import { Link } from 'react-router-dom';

const MyBio = () => {
    const {user} = useAuth();
    const [biodata] = useBiodata([]) || [];
    const favourate = biodata.filter(bio => bio?.email == user?.email);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Occupatcion
                </th>
                <th scope="col" className="px-6 py-3">
                   Division
                </th>
                <th scope="col" className="px-6 py-3">
                    age
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
              favourate && favourate.map((item,idx )=> <tr key={item._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span className='mr-1'>({idx+1}) </span>   {item.name} 
                </th>
                <td className="px-6 py-4">
                    {item?.occupation}
                </td>
                <td className="px-6 py-4">
                    {item.division}
                </td>
                <td className="px-6 py-4">
                   {item.age}
                </td>
                <td className="px-6 py-4 flex gap-3 items-center ">
                    <Link  to={`/dashboard/edit/${item._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><button>
                    Edit
                        </button></Link>
                </td>
            </tr>)
            }
            
        </tbody>
    </table>
</div>

  )
}

export default MyBio