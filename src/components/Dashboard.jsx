// Dashboard.jsx
import React from 'react';
import Navbar from './Navbar';
import AdminProductTable from './AdminProductTable';
import AdminUserTable from './AdminUserTable';

const Dashboard = ({ sidebarToggle, setSidebarToggle, selectedMenu }) => {
  const renderContent = () => {
    switch (selectedMenu) {
      case 'users':
        return <AdminUserTable />;
      case 'products':
        return <AdminProductTable />;
      default:
        return <div className="p-4">Welcome to the Admin Dashboard!</div>;
    }
  };

  return (
    <div className={`${sidebarToggle ? '' : 'ml-64'} w-full`}>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <div className="p-4">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
