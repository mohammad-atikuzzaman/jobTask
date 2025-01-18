import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { ImCommand } from "react-icons/im";
import { LuSearch } from "react-icons/lu";
import { MdMenuOpen } from "react-icons/md";
import { RiNotificationSnoozeFill, RiSettings3Fill } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { ChartBarIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex items-center gap-2">
        <button className="lg:hidden text-3xl mr-4">
          <MdMenuOpen />
        </button>
        <LuSearch className="text-xl" />
        <button className="flex items-center bg-gray-200 px-1 rounded-md font-semibold text-gray-700">
          <ImCommand />K
        </button>
      </div>
      <div className="flex items-center gap-3 lg:gap-6 text-xl text-gray-500">
        <img src="/ukFlag.png" alt="" width={23} />
        <RiNotificationSnoozeFill />
        <FaUserGroup />
        <button>
          <RiSettings3Fill />
        </button>
        <img
          src="/profile.png"
          alt=""
          width={25}
          className="border-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
