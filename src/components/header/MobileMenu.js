import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const MobileMenu = ({ active }) => {
  return (
    <div
      className={
        active
          ? "topbar__mobile-menu mobile active"
          : "topbar__mobile-menu mobile"
      }
    >
      <nav className="mobile__nav d-center">
        <ul className="mobile__nav-list">
          <li className="mobile__list-item">
            <Link to="/" className="item--link">
              Home
            </Link>
          </li>
          <li className="mobile__list-item">
            <Link to="/" className="brand__link">
              Travel
            </Link>
          </li>
          <li className="mobile__list-item">
            <Link to="/" className="brand__link">
              Blog
            </Link>
          </li>
          <li className="mobile__list-item">
            <Link
              to={{
                pathname:
                  "https://github.com/BerkayAkgurgen/SearchCountriesApp",
              }}
              target="_blank"
              className="brand__link"
            >
              Visit on GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
