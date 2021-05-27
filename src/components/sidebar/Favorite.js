import React, { useContext, useEffect } from "react";
import { MdFavorite } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { SearchContext } from "../../contextAPI/FormContext";

const FavoriteBar = () => {
  const { state, dispatch } = useContext(SearchContext);

  const sidebarHandler = () => {
    dispatch({ type: "CHANGE_SIDEBAR_TOGGLE" });
  };

  return (
    <aside id="sidebar" className={state.sidebarToggle ? "anim-bar" : null}>
      <div
        className={state.sidebarToggle ? "favoritebar anim-bar" : "favoritebar"}
      >
        <h4 className="favoritebar__header">Travel List</h4>
        <div onClick={sidebarHandler} className="favoritebar__close">
          <AiFillCloseCircle />
        </div>
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
