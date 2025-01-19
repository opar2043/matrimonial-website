import React from "react";
import { FaTasks } from "react-icons/fa";
import { NavLink, Outlet, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUser from "../Hooks/useUser";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const {user} = useAuth();
  const [users , refetch ,isLoading] = useUser();
  if(isLoading){
    return <Loading></Loading>
  }

  const CurrenUser = users.find(u => u.email == user?.email);
  // console.log(CurrenUser);

  const isAdmin = CurrenUser?.admin == 'admin' ;
  console.log(isAdmin);
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-sky-700 to-sky-500 text-white md:w-1/5 w-full p-6">
        <h2 className="text-2xl font-bold text-center mb-8">Dashboard</h2>
        <ul className="flex flex-col gap-2">
          {isAdmin ? (
            <>
              <NavLink to="/dashboard/adminhome">
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Admin Home
                </li>
              </NavLink>
              <NavLink to="/dashboard/manageuser">
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Manage User
                </li>
              </NavLink>
              <NavLink to="/approved-premium">
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Approved Premium
                </li>
              </NavLink>
              <NavLink to="/dashboard/admincontact">
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Approved Contact
                </li>
              </NavLink>
              <NavLink to="/logout">
                <li className="hover:bg-red-600 px-4 py-2 rounded-lg transition">
                  Log Out
                </li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to='/dashboard/create'>
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Create Biodata
                </li>
              </NavLink>
              <NavLink to={`/dashboard/mybio`}>
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  View Biodata
                </li>
              </NavLink>
              <NavLink to='/dashboard/contact'>
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Contact Request
                </li>
              </NavLink>
              <NavLink to='/dashboard/favourate'>
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Favorite Bio
                </li>
              </NavLink>
              <NavLink to='/dashboard/gotmarried'>
                <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
                  Married Exprience
                </li>
              </NavLink>
              <NavLink to="/logout">
                <li className="hover:bg-red-600 px-4 py-2 rounded-lg transition">
                  Log Out
                </li>
              </NavLink>
            </>
          )}

          <hr className="border-white/50 my-4" />
          <NavLink to="/">
            <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
              Home
            </li>
          </NavLink>
          <NavLink to="/biodata">
            <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
              Biodata
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
              About
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:bg-sky-600 px-4 py-2 rounded-lg transition">
              Contact
            </li>
          </NavLink>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <div className="bg-gradient-to-b from-sky-700 to-sky-500 text-white rounded-lg shadow-md p-3 text-center">
          <h2 className="text-xl md:text-3xl font-bold flex gap-2 items-center justify-center"><FaTasks></FaTasks> Dashboard</h2>
        </div>
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
