import React from 'react';
import '../App.css'; // Add styles for checkboxes and stars if needed
import { Bold } from 'lucide-react';
import { CiBellOn } from "react-icons/ci";
import { GrSync } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import  { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdStarBorder } from "react-icons/md";
import { BsMap } from "react-icons/bs";
import { MdOutlineGroup } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";


const Profile = () => (
    <div className="sidebar">
      <div className="profile items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVash85ImmN0bZoF8oAaSsMQ3BxoVO5nmIbEP_zcKDTVsmD3H" alt="Profile"
        />
        <p>Hey, ABCD</p>
      </div>
      <ul className="menu">
        <li className='flex items-center space-x-2'><HiOutlineClipboardDocumentList /><p>All Tasks</p></li>
        <li className="active flex items-center space-x-2"><CiCalendar/><p>Today</p></li>
        <li className='flex items-center space-x-2'><MdStarBorder /><p>Important</p></li>
        <li className='flex items-center space-x-2'><BsMap/><p>Planned</p></li>
        <li className='flex items-center space-x-2'><MdOutlineGroup/><p>Assigned to me</p></li>
      </ul>
      <div className='flex space-x-2 items-center h-20 mt-2 bg-auto pl-3'><FaPlus/><p>Add list</p></div>
      <div className="task-summary">
        <div className='mt-3 h-20 bg-auto items-center space-x-32 flex'>
          <div className='flex-row ml-3'><p>Today Tasks</p><p>11</p></div>
          <p className='text-white bg-gray-400 rounded-full '><BsInfoCircle /></p>
        </div>
        <div className="chart">
          <img
            src="https://res.cloudinary.com/dgyjutapc/image/upload/v1734071441/Screenshot_2024-12-13_115056_tx3pdy.png" // Replace with the logo URL
            alt="DoIt Logo"
            className="chat-logo mt-1"
          />
        </div>
      </div>
    </div>
  );

  export default Profile;