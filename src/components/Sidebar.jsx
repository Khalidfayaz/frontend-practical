import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    'Home',
    'My Info',
    'People',
    'Team Management',
    'Project Setup',
    'Hiring',
    'Report'
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">CORE</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`nav-item ${item === 'People' ? 'active' : ''}`}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;