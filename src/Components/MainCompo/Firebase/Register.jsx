import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import { BiRegistered } from "react-icons/bi";
import register from "../../../assets/Banner/register-2.avif";

const Register = () => {
  const { setUser, createUser, userProfileUpdate } = useAuth();
  const axiosSecure = useAxios();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.pass.value;
    const photo = form.photo.value;

    createUser(email, pass)
      .then((userCredential) => {
        const userInfo = userCredential.user;
        console.log(userInfo);
        userProfileUpdate(name, photo)
          .then(() => {
            setUser(userInfo);
            Swal.fire({
              title: `Good job! ${name}`,
              text: "You Have Create An Account",
              icon: "success",
            });
          })
          .catch((error) => {
            setUser(null);
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
      userRole: "User",
      admin: "Not-admin",
      status: "Pending",
    };

    axiosSecure.post("/users", userData).then((res) => {
      console.log(res.data);
    });

    console.log(userData);
  }

  return (
    <div>
      {/* <div className="min-h-screen my-10 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-red-200 via-red-400 to-orange-400 py-8 ">
        <div>
          <img src={register} alt="" className="w-1/2 rounded-lg" />
        </div>
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            Register Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Please Create an account
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              className="bg-gray-50"
              name="name"
            />
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
              variant="outlined"
              className="bg-gray-50"
              name="pass"
            />
            <TextField
              fullWidth
              label="Photo"
              type="url"
              variant="outlined"
              className="bg-gray-50"
              name="photo"
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              disableElevation
              className="bg-blue-600 hover:bg-blue-700 font-bold hover:text-white text-black py-3 rounded-lg transition-all"
            >
              <BiRegistered className="mr-3"></BiRegistered> Register
            </Button>
          </form>
          <p className="text-center text-gray-600 mt-6 text-sm">
            All-Ready have an account?{" "}
            <NavLink to={"/login"} className="text-blue-600 hover:underline">
              Login here
            </NavLink>
          </p>
        </div>
      </div> */}

      <div className="min-h-screen my-10 flex flex-col md:flex-row items-center justify-around bg-gradient-to-br from-red-200 via-red-400 to-orange-400 py-12 px-6">
        <div className="flex mb-6 md:mb-0 justify-center items-center">
          <img
            src={register}
            alt="Registration Illustration"
            className="w-1/2 rounded-xl shadow-lg"
          />
        </div>
        <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Create Your Account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Join us today and start your journey.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              className="bg-gray-50"
              name="name"
            />
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
              variant="outlined"
              className="bg-gray-50"
              name="pass"
            />
            <TextField
              fullWidth
              label="Profile Photo URL"
              type="url"
              variant="outlined"
              className="bg-gray-50"
              name="photo"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all ease-in-out duration-300 transform hover:scale-105"
            >
              <BiRegistered className="mr-3" /> Register
            </Button>
          </form>
          <p className="text-center text-gray-600 mt-6 text-sm">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
