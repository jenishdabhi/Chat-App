import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Martin Johnson");
  const [bio, setBio] = useState("Hi everyone,I'm using quickchat");

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className="min-h-screen border w-full bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdroup-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        <form className="flex flex-col gap-5 p-10 flex-1" onSubmit={handleSubmit}>
          <h3 className="text-lg">Profile Details</h3>
          <label
            htmlFor="avatar"
            className="flex item-center gap-3 cursor-pointer"
          >
            <input
              type="file"
              onChange={(e) => setSelectedImg(e.target.files[0])}
              id="avatar"
              accept=".png,.jpg,.jpeg"
              hidden
            />
            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : assets.avatar_icon
              }
              alt=""
              className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
            />
            Upload profile Image
          </label>
          <input onChange={(e) => {e.target.value}} value={name} placeholder="Your name" required="" class="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" type="text" />
          <textarea onChange={(e) => {e.target.value}} value={bio} placeholder="Write profile bio" required="" class="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500" rows="4">kuch nahi he</textarea>
          <button
            type="submit"
            class="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer"
          >
            Save
          </button>
        </form>
        <img
          src={assets.logo_icon}
          className="max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default ProfilePage;
