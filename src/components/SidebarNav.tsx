import React from "react";

const SidebarNav: React.FC = () => {
  return (
    <aside className="sidebar-nav">
      <div className="sidebar-logo">
        <img src="/images/logo-placeholder.png" alt="Crafty Delights Logo" />
        <h2>Crafty<br/>Delights</h2>
      </div>
      <nav className="sidebar-links">
        <a href="/">Home</a>
        <a href="/Shop">Shop</a>
        <a href="/Gallery">Gallery</a>
        <a href="/Blog">Blog</a>
        <a href="/Contact">Contact</a>
      </nav>
      <div className="sidebar-footer-mini">
        <small>&copy; {new Date().getFullYear()} Crafty Delights</small>
      </div>
    </aside>
  );
};

export default SidebarNav;