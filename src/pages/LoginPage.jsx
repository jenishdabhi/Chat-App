import React, { useState } from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  return (
    <div className="min-h-screen border w-full bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      <img src={assets.logo_big} className="w-[min(30vw,250px)]" />
      <form className="border-2 bg-white/8 text-white  border-gray-500 p-6 flec flex-col gap-6 rounded-lg shadow-lg">
        <h2 className="fonte-medium text-2xl flex justify-between items-center">
          {currState}
          <img src={assets.arrow_icon} alt="" className=" w-5 cursor-pointer" />
        </h2>
        {currState === "Sign Up" &&
          !isDataSubmitted(
            <input
              type="text"
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              placeholder="Full Name"
              required
            />
          )}

        {!isDataSubmitted && (
          <>
            <input
              onClick={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2"
            />
            <input
              onClick={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-indigo-500"
            />
          </>
        )}

        {currState === "Sign Up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className="p-2 border border-gray-500 ronded-md focus:outline-none focus:ring-indigo-500"
            placeholder="provide a short bio..."
            required
          />
        )}

        {
          <button
            type="submit"
            className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
          >
            {currState === "Sign Up" ? "Create Account" : "Login Now"}
            <input type="checkbox" />
            <p>Agree to the terms of use and privacy policy.</p>
          </button>
        }

        <div className="flex flex-col gap-2 "></div>
      </form>
    </div>
  );
};

export default LoginPage;
