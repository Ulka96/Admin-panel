import React from 'react'

// React icons
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";




const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
     
     <div className='my-2 mb-4'>
        <h1 className='text-white text-2xl font-bold'>Admin Dashboard</h1>
     </div>

     <hr />
     <ul className='text-white font-bold mt-3 cursor-pointer'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <a href="" className='px-3'>
            <FaHome className='w-6 h-6 inline-block mr-2 -mt-2' />
            </a>
            Home
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <a href="" className='px-3'>
            <FaUsers className='w-6 h-6 inline-block mr-2 -mt-2' />
            </a>
            Users
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <a href="" className='px-3'>
            <AiFillProduct className='w-6 h-6 inline-block mr-2 -mt-2' />
            </a>
            Products
        </li>
        
     </ul>



    </div>
  )
}

export default Sidebar