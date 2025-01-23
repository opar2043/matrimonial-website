// import React from "react";
// import { NavLink } from "react-router-dom";
// import Button from "@mui/material/Button";
// import useAuth from "../../Hooks/useAuth";
// const Navbar = () => {
//   const { user, logoutUser , setUser} = useAuth();

//   function handleLogOut(){
//     logoutUser()
//     setUser(null)
//   }

//   const links = (
//     <>
//       <NavLink to={"/"}>
//         <li>
//           <a>Home</a>
//         </li>
//       </NavLink>
//       <NavLink to={"biodata"}>
//         <li>
//           <a>Biodata</a>
//         </li>
//       </NavLink>
//       <NavLink to={"/about"}>
//         <li>
//           <a>About</a>
//         </li>
//       </NavLink>
//       <NavLink to={"/contact"}>
//         <li>
//           <a>Contact</a>
//         </li>
//       </NavLink>
//       {
//         user &&  <NavLink to={"/dashboard"}>
//         <li>
//           <a>Dashboard</a>
//         </li>
//       </NavLink>
//       }
//     </>
//   );

// return (
//   <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//       >
//         {links}
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">Find Spouse</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu gap-1 menu-horizontal px-1">{links}</ul>
//   </div>
//   <div className="navbar-end">
//     {!user ? (
//       <NavLink to={"/login"}>
//         <Button type="submit" variant="contained">
//           Log In
//         </Button>
//       </NavLink>
//     ) : (
//       <button
//         onClick={handleLogOut}
//         className="bg-gradient-to-r from-yellow-400  to-orange-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-br"
//       >
//         Log Out
//       </button>
//     )}

//     {/* Home Drop down */}
//     <div className="dropdown ml-3 dropdown-end">
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn btn-ghost btn-circle avatar"
//       >
//         <div className="w-12  rounded-full">
//           {
//             user ?<img
//             alt="Tailwind CSS Navbar component"
//             src={user?.photoURL}
//           /> :
//           <img
//           alt="Tailwind CSS Navbar component"
//           src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//         />
//           }
//         </div>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//       >
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge badge-primary">New</span>
//           </a>
//         </li>
//         <li>
//           <a>Settings</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
// )

// export default Navbar;


import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "../../Hooks/useAuth";
import { FaLock } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";
import { Email } from "@mui/icons-material";

const Navbar = () => {
  const { user, logoutUser, setUser } = useAuth();
  const navigate = useNavigate()
  function handleLogOut() {
    logoutUser();
    setUser(null);
    navigate('/')
  }

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? " bg-slate-900" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/biodata" className={({ isActive }) => (isActive ? " bg-slate-900" : "")}>
          Biodata
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? " bg-slate-900" : "")}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? " bg-slate-900" : "")}>
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? " bg-slate-900" : "")}>
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-gray-800 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center"> 
          <img src="https://i.ibb.co.com/zSqDs7b/logo.jpg" className="md:w-9 w-5 rounded-full" />
          <h2 className="text-2xl md:text-4xl font-bold ">Sha<span className="text-yellow-300">adi</span>.com</h2>
          </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {!user ? (
          <NavLink to="/login">
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#4CAF50", color: "#fff" }}
            >
             <BiLogIn className="mr-2"></BiLogIn> Log In
            </Button>
          </NavLink>
        ) : (
          <button
            onClick={handleLogOut}
            className="bg-gradient-to-r flex gap-1 items-center from-yellow-400 to-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
          >
           <FaLock></FaLock>  Log Out
          </button>
        )}
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                />
              ) : (
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Default Avatar"
                />
              )}
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  mt-3 p-2 shadow bg-white text-gray-800 rounded-box "
          >
            <li>
              {
                user ?  <a className="justify-between font-semibold gap-2">
                 <Email></Email> {user?.email}
                <span className="badge badge-primary">New</span>
              </a> :  <a className="justify-between">
                Profile
                <span className="badge badge-primary">New</span>
              </a>
              }
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

