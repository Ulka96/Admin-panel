import React, { useEffect, useState } from 'react';

import { RiDeleteBin6Line } from "react-icons/ri";


const AdminUserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user');
      
      // Remove the deleted user from the state
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="my-8 mx-8 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border border-gray-300">#</th>
            <th className="py-2 px-4 border border-gray-300">Name</th>
            <th className="py-2 px-4 border border-gray-300">Surname</th>
            <th className="py-2 px-4 border border-gray-300">Username</th>
            <th className="py-2 px-4 border border-gray-300">Password</th>
            <th className="py-2 px-4 border border-gray-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">{user.name}</td>
              <td className="py-2 px-4 border border-gray-300">{user.surName}</td>
              <td className="py-2 px-4 border border-gray-300">{user.userName}</td>
              <td className="py-2 px-4 border border-gray-300">{user.password}</td>
              <td className="py-2 px-4 border border-gray-300">{user.email}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-black py-1 px-2 rounded hover:text-red-500"
                >
                  <RiDeleteBin6Line/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;
