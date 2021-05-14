import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const MobileMenu = React.lazy(() => import("./MobileMenu"));

const Navbar = () => {
  const [active, setActive] = useState(false);

  const mobileToggle = () => {
    setActive(!active);
  };

  return (
    <div className="topbar">
      <div className="d-between container">
        <div className="topbar__desktop d-between">
          <div className="topbar__brand brand">
            <Link to="/" className="brand__link">
              <LazyLoad height={50} once>
                <img
                  width="50px"
                  src="./src/images/favicon&icon/favicon.png"
                  alt="icon"
                />
              </LazyLoad>
              <span className="brand-name">Q-TRAVEL</span>
            </Link>
          </div>
          <nav className="topbar__nav nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <Link to="/" className="brand__link">
                  Home
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="/" className="brand__link">
                  Travel
                </Link>
              </li>
              <li className="nav__list-item">
                <Link to="/" className="brand__link">
                  Blog
                </Link>
              </li>
              <li className="nav__list-item">
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
        <div
          onClick={mobileToggle}
          className={
            active
              ? "topbar__toggle d-center active"
              : "topbar__toggle d-center"
          }
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <>
          <Suspense fallback={<div>Daha sonra tekrar deneyin.</div>}>
            <MobileMenu active={active} />
          </Suspense>
        </>
      </div>
    </div>
  );
};

export default Navbar;
