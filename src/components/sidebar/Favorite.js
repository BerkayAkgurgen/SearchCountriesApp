import React from "react";
import { MdFavorite } from "react-icons/md";

const FavoriteBar = () => {
  return (
    <aside id="sidebar">
      <div className="favoritebar">
        <h4 className="favoritebar__header">Travel List</h4>
        <div className="favoritebar__countries">
          <div className="favority__country">
            <div className="favority__country-flag">
              <img
                src="https://restcountries.eu/data/tur.svg"
                alt="flag"
                width="250"
                height="166"
              />
            </div>
            <h4 className="favority__country-name">Turkey</h4>
            <a href="/" className="favority__country-button">
              Go to details
            </a>
            <div className="aside__favorite-btn">
              <MdFavorite />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FavoriteBar;
