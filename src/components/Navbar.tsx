import React from "react";

const Navbar: React.FC = () => {
    return (
    <nav className="navbar-react">
        <div className="nav-brand">
            <h2>Crafty Delights</h2>
        </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Shop">Shop</a></li>
        <li><a href="/Gallery">Gallery</a></li>
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;