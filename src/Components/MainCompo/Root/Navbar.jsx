import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const { user, logoutUser , setUser} = useAuth();

  function handleLogOut(){
    logoutUser()
    setUser(null)
  }

  const links = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"biodata"}>
        <li>
          <a>Biodata</a>
        </li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>
          <a>About</a>
        </li>
      </NavLink>
      <NavLink to={"/contact"}>
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
      {
        user &&  <NavLink to={"/dashboard"}>
        <li>
          <a>Dashboard</a>
        </li>
      </NavLink>
      }
    </>
  );

  return (
    // <div className="navbar bg-base-100">
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

<div className="navbar bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
      >
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-semibold tracking-wide text-white hover:text-blue-200 transition duration-300">
      Find Spouse
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-6 menu-horizontal px-4">
      {links}
    </ul>
  </div>

  <div className="navbar-end flex items-center">
    {!user ? (
      <NavLink to="/login">
        <Button
          type="submit"
          variant="contained"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Log In
        </Button>
      </NavLink>
    ) : (
      <button
        onClick={handleLogOut}
        className="bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-gradient-to-br"
      >
        Log Out
      </button>
    )}

    <div className="dropdown ml-3 dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
          {user ? (
            <img
              alt="User Avatar"
              src={user?.photoURL}
              className="object-cover w-full h-full"
            />
          ) : (
            <img
              alt="Default Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge badge-primary">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
      </ul>
    </div>
  </div>
</div>


  );
};

export default Navbar;
