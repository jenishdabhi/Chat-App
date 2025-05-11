import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ selecteduser, setSelectedUser }) => {
    const navigate = useNavigate()
  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${selecteduser ? 'max-md:hidden' : ''}`}>
      <div className="pb-5">
        <div className="flex justify-between item-center">
          <img className="max-w-40" src={assets.logo} />
          <div className="relative py-2 group">
                <img src={assets.menu_icon} alt="Menu" className="max-h-5 cursor-pointer"/>
                <div className="absolute top-full right-0 z-30 w-32 p-5 round-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block">
                    <p className="cursor-pointer text-sm" onClick={() => navigate('/profile')}>Edit Profile</p>
                    <hr className="my-2 border-t border-gray-500" />
                    <p className="cursor-pointer text-sm">Logout</p>
                </div>
          </div>
        </div>
      </div>

      <div className="bg-[#282142] rounded-full flex items-center gapl-2">
        <img src={assets.search_icon} alt="Search" className="w-3" />
        <input
          type="text"
          className="bg-transparent border-none outline-nor text-white text-xs placeholder - [#c8c8c8] flex-1"
          placeholder=" Search User..."
        />
      </div>

    </div>
  );
};

export default Sidebar;
