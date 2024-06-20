import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // let nameFormat = /^[A-Za-z]+$/;
  // let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [nameerror, setnameError] = useState("hidden");
  const [passworderror, setpasswordError] = useState("hidden");
  const navigate = useNavigate();

  const changelocation = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className="formDiv grid place-content-center h-[75vh] w-[35vw] bg-lOrange rounded-xl font-Nunito">
      <form className=" h-[60vh] w-[20vw] flex flex-col space-y-4 gap-2">
        <div className="grid place-content-left text-black font-bold text-xl ">
          Login as a User
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="name"
            className=" text-sm font-medium ml-2 text-black"
          >
            Name or Email
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300  focus:outline-gray-400 bg-transparent "
            placeholder="Enter your name or email"
          />
          <small className={`text-[red] ${nameerror}`}>
            please enter a valid name or email
          </small>
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="password"
            className=" text-sm font-medium ml-2 text-black"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-gray-400 bg-transparent"
            placeholder="Enter your password"
          />
          <small className={`text-[red] ${passworderror}`}>
            please enter a valid password
          </small>
        </div>
        <button
          type="submit"
          className="w-full h-[8vh] px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-50 transition-opacity
            focus:ring-offset-2 cursor-pointer"
          onClick={changelocation}
        >
          Login
        </button>
        <h1 className=" or">or</h1>

        <button
          type="submit"
          className="w-full h-[8vh] px-4 py-2 flex items-center justify-center space-x-2 rounded-md bg-transparent text-black border-[1px] border-[black] font-medium hover:opacity-50 transition-opacity cursor-pointer"
        >
          <FcGoogle className="text-2xl" /> <span>Login with Google</span>{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
