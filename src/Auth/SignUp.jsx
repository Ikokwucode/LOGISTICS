import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const changelocation = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <section className="formDiv grid place-content-center h-[85vh] w-[35vw] bg-lOrange rounded-xl font-Nunito">
      <form className=" h-[80vh] w-[20vw] flex flex-col space-y-2 gap-2">
        <div className="grid place-content-left text-black font-bold text-xl  ">
          SignUp as a User
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="name"
            className=" text-sm font-medium ml-2 text-black"
          >
            First Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300  focus:outline-gray-400 bg-transparent "
            placeholder="Enter your first name "
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="name"
            className=" text-sm font-medium ml-2 text-black"
          >
            Last Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300  focus:outline-gray-400 bg-transparent "
            placeholder="Enter your last name "
          />
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
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="password"
            className=" text-sm font-medium ml-2 text-black"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-gray-400 bg-transparent"
            placeholder="Confirm your password"
          />
        </div>
        <button
          onSubmit={changelocation}
          type="submit"
          className="w-full h-[8vh] px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-50 transition-opacity focus:outline-gray-400  focus:ring-offset-2 cursor-pointer"
        >
          Sign Up
        </button>
        <h1 className="or">or</h1>

        <button
          type="submit"
          className="w-full h-[8vh] px-4 py-2 flex items-center justify-center space-x-2 font-bold rounded-md bg-transparent text-black border-[1px] border-[black] hover:opacity-50 transition-opacity cursor-pointer"
        >
          <FcGoogle className="text-2xl" /> <span>SignUp with Google</span>{" "}
        </button>
      </form>
    </section>
  );
};

export default SignUp;
