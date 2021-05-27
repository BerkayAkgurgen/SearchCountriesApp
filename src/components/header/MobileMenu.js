import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { SearchContext } from "../../contextAPI/FormContext";

const MobileMenu = ({
  active,
  setActive,
}) => {
  const { dispatch } = useContext(SearchContext);

  const toggleMenu = () => {
    const menuItems = document.querySelectorAll(".menu-link");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        setActive(!active);
      });
    });
  };

  useEffect(() => {
    toggleMenu();
  }, [active]);

  const sidebarHandlerMobile = () => {
    dispatch({ type: "CHANGE_SIDEBAR_TOGGLE" });
  };

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
            <Link to="/" className="menu-link">
              Home
            </Link>
          </li>
          <li className="mobile__list-item">
            <a href="#form-section" className="menu-link">
              Go Search
            </a>
          </li>
          <li className="mobile__list-item">
            <a onClick={sidebarHandlerMobile} className="menu-link">
              Travel List
            </a>
          </li>
          <li className="mobile__list-item">
            <Link
              to={{
                pathname:
                  "https://github.com/BerkayAkgurgen/SearchCountriesApp",
              }}
              target="_blank"
              className="menu-link"
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
