import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa6";
import register from "../../../assets/Banner/login.avif";
const Login = () => {
  const { setUser, logInUser, googleSignIn } = useAuth();
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location?.state;

  function makeGoogle() {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: `Google Logged In`,
          text: "Succesfull",
          icon: "success",
        });
        setUser(user);
        navigate(from || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    //  const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;

    const passwordRegex = /^(?=.*[A-Z]).{7}$/;

    logInUser(email, pass)
      .then((userCredential) => {
        const userInfo = userCredential.user;
        console.log(userInfo);
        setUser(userInfo);
        Swal.fire({
          title: `Logged In!`,
          text: "Succesfull",
          icon: "success",
        });
        navigate(from || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });

    const userData = {
      // name,
      pass,
      email,
    };
    form.reset();
  }
  return (
    <div className="min-h-screen my-10 px-4 py-12 flex items-center justify-around bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please log in to your account
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            className="bg-gray-50"
            name="email"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            className="bg-gray-50"
            variant="outlined"
            name="pass"
          />

          {err && <p className="text-red-500 text-xs text-center">{err}</p>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all ease-in-out duration-300 transform hover:scale-105"
          >
            Log In
          </Button>

          <div className="text-center text-sm text-gray-500 my-4">OR</div>

          <div className="text-center">
            <button
              onClick={() => makeGoogle()}
              className="btn btn-outline w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-all py-2 rounded-lg flex justify-center items-center"
            >
              <FaGoogle className="mr-2" /> Google
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register here
          </NavLink>
        </p>
      </div>

      <div className="flex-shrink-0 hidden md:block">
        <img
          src={register}
          alt="Registration Illustration"
          className="w-full max-w-xs rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Login;
