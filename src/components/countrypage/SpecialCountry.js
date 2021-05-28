import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Redirect,
} from "react-router-dom";
import LazyLoad from "react-lazyload";
import { FaFlag, FaPhoneAlt, FaMapMarkedAlt, FaSpinner } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { IoLanguage } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { CgShortcut } from "react-icons/cg";
import axios from "axios";
import CountryNotFound from "../error/CountryNotFound";

const SpecialCountry = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${id}`
      );
      const country = response.data;
      setCountry(country);
      setError(false);
      setTimeout(() => {
        setLoad(false);
      }, 300);
      setLoad(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      {(() => {
        if (error) {
          return (
            <Router>
              <LazyLoad>
                <Route component={CountryNotFound} />
              </LazyLoad>
              <Redirect to="/country/404" />
            </Router>
          );
        } else if (!error && !load) {
          return (
            <section className="country-wrapper">
              <div className="container country">
                <h4 className="country__name">{country.name}</h4>
                <div className="country__flag">
                  <LazyLoad height={200} once>
                    <img
                      src={country.flag}
                      alt="flag"
                      width="100%"
                      height="100%"
                    />
                  </LazyLoad>
                </div>
                <div className="country__infos">
                  <ul className="infos__list">
                    <li className="infos__list-item">
                      <FaFlag />-<span className="empty">&nbsp;</span>
                      <span title="Full Name" className="sub-info">
                        {country.altSpellings?.[2]}
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <FaPhoneAlt />-<span className="empty">&nbsp;</span>
                      <span title="Calling Code" className="sub-info">
                        {country.callingCodes?.[0]}
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <HiLocationMarker />-<span className="empty">&nbsp;</span>
                      <span title="Capital" className="sub-info">
                        {country.capital}
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <FaMapMarkedAlt />-<span className="empty">&nbsp;</span>
                      <span title="Area" className="sub-info">
                        {country.area} km2
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <BsFillPeopleFill />-<span className="empty">&nbsp;</span>
                      <span title="Population" className="sub-info">
                        {country.population}
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <IoLanguage />-<span className="empty">&nbsp;</span>
                      <span title="Languages" className="sub-info">
                        {country.languages?.[0].name}
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <BiTimeFive />-<span className="empty">&nbsp;</span>
                      <span title="Time Zones" className="sub-info">
                        {country.timezones?.[0]}
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <FaMoneyBillWave />-<span className="empty">&nbsp;</span>
                      <span title="Currencies" className="sub-info">
                        {country.currencies?.[0].name}
                      </span>
                    </li>
                    <li className="infos__list-item">
                      <CgShortcut />-<span className="empty">&nbsp;</span>
                      <span title="IOC Code" className="sub-info">
                        {country.cioc}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          );
        } else if (!error && load) {
          return (
            <div className="loading d-center">
              <FaSpinner icon="spinner" className="spinner" />
              <p className="load-text">Loading...</p>
            </div>
          );
        }
      })()}
    </>
  );
};

export default SpecialCountry;
