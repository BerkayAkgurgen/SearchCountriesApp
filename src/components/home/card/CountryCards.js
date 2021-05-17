import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

const CountryCards = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => window.removeEventListener("resize", setWindowWidth);
  }, [windowWidth]);

  return (
    <main id="main">
      {loading ? (
        <>
          <div className="load-animate">
            <div className="info">Loading</div>
            <div className="dot up delay-one"></div>
            <div className="dot up delay-two"></div>
            <div className="dot up delay-three"></div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="dp-cards">
              <div className="countries__card card">
                <div className="card__flag">
                  <LazyLoad
                    height={windowWidth >= 614 ? "210px" : '173px"'}
                    once
                  >
                    <img
                      width={windowWidth >= 614 ? "320px" : "100%"}
                      height={windowWidth >= 614 ? "210px" : '100%"'}
                      src="https://restcountries.eu/data/afg.svg"
                      alt="flag"
                    />
                  </LazyLoad>
                </div>
                <div className="card__body">
                  <div className="card__body-name">
                    <h5>Lorem</h5>
                  </div>
                  <div className="card__body-infos">
                    <span className="country-capital">Capital: Lorem</span>
                    <span className="country-currencies">Currency: Lorem</span>
                    <span className="country-region">Region: Lorem</span>
                  </div>
                </div>
                <footer className="card__footer">
                  <a href="#!">Go to detailed information.</a>
                </footer>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default CountryCards;
