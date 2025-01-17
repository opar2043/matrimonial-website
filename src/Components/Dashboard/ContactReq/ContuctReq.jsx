import React from "react";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import useContact from "../../Hooks/useContact";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const ContuctReq = () => {
  const [payments, fetch, ispending] = useContact() || [];
  const axiosSecure = useAxios();

  function handleDelete(id) {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/payments/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              fetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `This User Removed from Your Fvourate List`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          // .catch((err) => {
          //   console.log(err);
          // });
      }
    });
  }
  return (
    // <div>
    //   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    //     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    //       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //         <tr>
    //           <th scope="col" className="px-6 py-3">
    //             Name
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Occupatcion
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Email
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Mobile
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             age
    //           </th>
    //           <th scope="col" className="px-6 py-3">
    //             Action
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {payments &&
    //           payments.map((item, idx) => (
    //             <tr
    //               key={item._id}
    //               className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
    //             >
    //               <th
    //                 scope="row"
    //                 className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    //               >
    //                 <span className="mr-1">({idx + 1}) </span> {item.ownername}
    //               </th>
    //               <td className="px-6 py-4">
    //                 {item?.occupation || "Not Given"}
    //               </td>
    //               <td
    //                 className={`px-6 py-4 ${
    //                   item.status === "approved" ? "bg-green-200 rounded-lg" : "bg-blue-400 rounded-lg"
    //                 }`}
    //               >
    //                 <span>{item.status}</span>
    //               </td>
    //               <td className="px-6 py-4">
    //                 {item.status === "approved" ? item?.email : "Make Payment"}
    //               </td>
    //               <td className="px-6 py-4">
    //                 {item.status === "approved" ? item?.mobile : "Make Payment"}
    //               </td>
    //               <td className="px-6 py-4 flex gap-3 items-center ">
    //                 <button
    //                   onClick={() => handleDelete(item._id)}
    //                   className="btn btn-xs p-1 text-white rounded-xl  bg-red-500"
    //                 >
    //                   <FaTrash></FaTrash>
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <div className="p-6 bg-gray-100 min-h-screen">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Requests</h2>
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Occupation</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Mobile</th>
            <th scope="col" className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {ispending ? (
            <tr>
              <td colSpan="6" className="text-center py-4">
                <div className="flex items-center justify-center">
                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"></div>
                  <span className="ml-2 text-gray-600">Loading...</span>
                </div>
              </td>
            </tr>
          ) : payments && payments.length > 0 ? (
            payments.map((item, idx) => (
              <tr
                key={item._id}
                className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <span className="mr-1 font-semibold text-blue-600">
                    ({idx + 1})
                  </span>{" "}
                  {item.ownername}
                </th>
                <td className="px-6 py-4">{item?.occupation || "Not Given"}</td>
                <td >
                  <span  className={`px-5 py-1 text-center font-medium rounded-xl ${
                    item.status === "approved"
                      ? "text-green-800 bg-green-100"
                      : "text-blue-800 bg-blue-100"
                  }`}>
                  {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {item.status === "approved" ? (
                    <span className="text-gray-700">{item?.email}</span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Make Payment
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {item.status === "approved" ? (
                    <span className="text-gray-700">{item?.mobile}</span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Make Payment
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 flex justify-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2 text-white bg-red-500 hover:bg-red-600 rounded-full"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                No payment records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ContuctReq;
