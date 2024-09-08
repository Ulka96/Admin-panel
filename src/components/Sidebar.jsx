// Sidebar.jsx
import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';

const Sidebar = ({ sidebarToggle, onMenuItemClick }) => {
  return (
    <div className={`${sidebarToggle ? 'hidden' : 'block'} w-64 bg-sky-950 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <hr />
      <ul className="text-white font-bold mt-3 cursor-pointer">
        <li
          className="mb-2 rounded hover:shadow hover:bg-yellow-500 py-2"
          onClick={() => onMenuItemClick('home')}
        >
          <FaHome className="w-6 h-6 inline-block mr-2 -mt-2" />
          Home
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-yellow-500 py-2"
          onClick={() => onMenuItemClick('users')}
        >
          <FaUsers className="w-6 h-6 inline-block mr-2 -mt-2" />
          Users
        </li>

        <li
          className="mb-2 rounded hover:shadow hover:bg-yellow-500 py-2"
          onClick={() => onMenuItemClick('products')}
        >
          <AiFillProduct className="w-6 h-6 inline-block mr-2 -mt-2" />
          Products
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
