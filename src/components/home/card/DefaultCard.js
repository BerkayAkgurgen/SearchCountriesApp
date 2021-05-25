import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import DefCountries from "../../../CountryJSON/DefCountries";

const DefaultCard = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => window.removeEventListener("resize", setWindowWidth);
  }, [windowWidth]);

  return (
    <main id="main" className="def__countries">
      <div className="container">
        <header className="def__header">
        <h3 className="popular">Popular Countries</h3>
        </header>
        <div className="dp-cards">
          {DefCountries.map((country) => {
            return (
              <div className="countries__card card" key={country.name}>
                <div className="card__flag">
                  <LazyLoad
                    height={windowWidth >= 614 ? "210px" : '173px"'}
                    once
                  >
                    <img
                      width={windowWidth >= 614 ? "320px" : "100%"}
                      height={windowWidth >= 614 ? "210px" : '100%"'}
                      src={country.flag}
                      alt="flag"
                    />
                  </LazyLoad>
                </div>
                <div className="card__body">
                  <div className="card__body-name">
                    <h5>{country.name}</h5>
                  </div>
                  <div className="card__body-infos">
                    <span className="country-capital">
                      Capital: {country.capital}
                    </span>
                    <span className="country-currencies">
                      Currency: {country.currencies?.[0].name}
                    </span>
                    <span className="country-region">
                      Region: {country.region}
                    </span>
                  </div>
                </div>
                <a target="_blank" href={`country/${country.cioc}`}>
                  <footer className="card__footer">
                    <p>Go to detailed information.</p>
                  </footer>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default DefaultCard;
