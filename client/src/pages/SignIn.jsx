import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className="flex justify-between items-center container mx-auto h-screen">
      <img src="./phone.png" alt="" className=" w-[600px] hidden lg:block" />
      <div className=" flex flex-col  max-w-lg mx-auto flex-grow">
        <form className="flex flex-col  border-1 rounded-xl shadow-sm p-5 bg-gray-900 gap-10 text-center justify-center items-center">
          <img src="./logo.png" alt="" className="instaLogo  w-20" />
          <input
            type="text"
            placeholder="Enter email"
            className="input input-bordered w-full "
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-full "
          />
          <button className="btn btn-block bg-blue-600 px-3 py-2 rounded-md text-white font-bold">
            Log In
          </button>

          <p>
            Havs an account ?{" "}
            <Link to="/signUp" className="underline cursor-pointer">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
