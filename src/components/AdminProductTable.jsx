import React, { useEffect, useState } from 'react';

import { RiDeleteBin6Line } from "react-icons/ri";

const AdminProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete product');

      // Remove the deleted product from the state
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="my-8 mx-8 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border border-gray-300">#</th>
            <th className="py-2 px-4 border border-gray-300">Title</th>
            <th className="py-2 px-4 border border-gray-300">Description</th>
            <th className="py-2 px-4 border border-gray-300">Cover Image</th>
            <th className="py-2 px-4 border border-gray-300">Price</th>
            <th className="py-2 px-4 border border-gray-300">Size</th>
            <th className="py-2 px-4 border border-gray-300">Color</th>
            <th className="py-2 px-4 border border-gray-300">Rating</th>
            <th className="py-2 px-4 border border-gray-300">Quantity</th>
            <th className="py-2 px-4 border border-gray-300">Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">{product.title}</td>
              <td className="py-2 px-4 border border-gray-300">{product.description}</td>
              <td className="py-2 px-4 border border-gray-300">
                <img src={product.coverImage} alt={product.title} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border border-gray-300">{product.price}</td>
              <td className="py-2 px-4 border border-gray-300">{product.size.join(', ')}</td>
              <td className="py-2 px-4 border border-gray-300">{product.color.join(', ')}</td>
              <td className="py-2 px-4 border border-gray-300">{product.rating}</td>
              <td className="py-2 px-4 border border-gray-300">{product.quantity}</td>
              <td className="py-2 px-4 border border-gray-300">{product.discount}%</td>
              <td className="py-2 px-4 border border-gray-300">
                <button 
                  onClick={() => handleDelete(product._id)} 
                  className=" hover:text-red-500">
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

export default AdminProductTable;
