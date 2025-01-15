import { Button, TextField } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { setUser, logInUser } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    //  const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const photo = form.photo.value;

    logInUser(email, pass)
      .then((userCredential) => {
        const userInfo = userCredential.user;
        console.log(userInfo);
        setUser(userInfo);
        Swal.fire({
          title: `Logged In! ${name}`,
          text: "Succesfull",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: `Sorry! ${name}`,
          text: "Something Happen Wrong",
          icon: "error",
        });
      });

    const userData = {
      name,
      photo,
      pass,
      email,
    };

    console.log(userData);
  }
  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please log in to your account
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* <TextField
            fullWidth
            label="Name"
            variant="outlined"
            className="bg-gray-50"
          /> */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            className="bg-gray-50"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            className="bg-gray-50"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all"
          >
            Log In
          </Button>
        </form>
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don't have an account?{" "}
          <NavLink to={"/register"} className="text-blue-600 hover:underline">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
