import React, { useState, useEffect, useContext } from "react";
import LazyLoad from "react-lazyload";
import { MdFavorite } from "react-icons/md";
import { SearchContext } from "../../../contextAPI/FormContext";

const CountryCards = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const { state } = useContext(SearchContext);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);
    return () => window.removeEventListener("resize", setWindowWidth);
  }, [windowWidth]);

  return (
    <main id="main">
      <div className="container">
        <div className="dp-cards">
          {state.error ? (
            <div className="notfound">Not Found! Please try again.</div>
          ) : (
            state.countries.map((country) => {
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
                  <a
                    target="_blank"
                    href={
                      country.cioc === "" ? "/404" : `country/${country.cioc}`
                    }
                  >
                    <footer className="card__footer">
                      <p>Go to detailed information.</p>
                    </footer>
                  </a>
                  <div title="Add Favorite" className="favorite-btn add">
                    <MdFavorite />
                    <span>Add To Travel List</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default CountryCards;
