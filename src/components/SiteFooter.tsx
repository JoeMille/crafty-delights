import React from "react";

const SiteFooter: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-columns">
      <div>
        <h4>Crafty Delights</h4>
        <p>Handmade with heart.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="/Shop">Shop</a></li>
          <li><a href="/Gallery">Gallery</a></li>
          <li><a href="/Blog">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <p>hello@craftydelights.test</p>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Crafty Delights. All rights reserved.
    </div>
  </footer>
);

export default SiteFooter;