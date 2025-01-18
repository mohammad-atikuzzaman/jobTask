import { useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import {
  FaCartFlatbed,
  FaFile,
  FaFileInvoiceDollar,
  FaFolderClosed,
  FaHouseUser,
} from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import {
  IoBagCheck,
  IoCalendar,
  IoChatboxEllipses,
  IoSpeedometerOutline,
} from "react-icons/io5";
import { LuChartNoAxesCombined, LuNotepadText } from "react-icons/lu";
import { MdAirplaneTicket, MdMail, MdTour } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import { TbHanger2Filled } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 sticky top-0 h-screen">
      <div className="text-2xl font-bold text-green-600 p-5">LOGO</div>
      <nav className="flex-1 px-2 space-y-4 overflow-y-auto custom-scrollbar">
        <h3 className="text-gray-400 text-sm uppercase">Overview</h3>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2 text-green-600 font-semibold bg-emerald-100 px-2 py-1 rounded-md">
            <IoSpeedometerOutline className="h-5 w-5" />
            <span>App</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <IoBagCheck className="h-5 w-5" />
            <span>E-commerce</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <LuChartNoAxesCombined className="h-5 w-5" />
            <span>Analytics</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <RiBankFill className="h-5 w-5" />
            <span>App</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <MdAirplaneTicket className="h-5 w-5" />
            <span>Booking</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <FaFile className="h-5 w-5" />
            <span>App</span>
          </li>
        </ul>
        <h3 className="text-gray-400 text-sm uppercase">Management</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <div className="flex space-x-2 items-center">
              <FaHouseUser className="h-5 w-5" />
              <span>User</span>
            </div>
            <IoIosArrowForward />
          </li>
          <li className="flex items-center justify-between text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <div className="flex space-x-2 items-center">
              <TbHanger2Filled className="h-5 w-5" />
              <span>Product</span>
            </div>
            <IoIosArrowForward />
          </li>
          <li className="flex items-center justify-between text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <div className="flex items-center space-x-2">
              <FaCartFlatbed className="h-5 w-5" />
              <span>Order</span>
            </div>
            <IoIosArrowForward/>
          </li>
          <li className="flex items-center justify-between text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <div className="flex items-center space-x-2">
              <FaFileInvoiceDollar className="h-5 w-5" />
              <span>Invoice</span>
            </div>
            <IoIosArrowForward/>
          </li>
          <li className="flex items-center justify-between text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <div className="flex items-center space-x-2">
              <LuNotepadText className="h-5 w-5" />
              <span>Blog</span>
            </div>
            <IoIosArrowForward/>
          </li>
          <li className="flex items-center justify-between text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <div className="flex items-center space-x-2">
              <FaMailBulk className="h-5 w-5" />
              <span>Job</span>
            </div>
            <IoIosArrowForward/>
          </li>
          <li className="flex items-center justify-between text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <div className="flex items-center space-x-2">
              <MdTour className="h-5 w-5" />
              <span>Tour</span>
            </div>
            <IoIosArrowForward/>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <FaFolderClosed className="h-5 w-5" />
            <span>File Manager</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <MdMail className="h-5 w-5" />
            <span>Tour</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <IoChatboxEllipses className="h-5 w-5" />
            <span>Chat</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-500 font-semibold bg-white px-2 py-1 rounded-md">
            <IoCalendar className="h-5 w-5" />
            <span>Calender</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
