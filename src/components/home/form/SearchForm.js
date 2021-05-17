import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchForm = () => {
  return (
    <div className="section__search search">
      <form className="search__form">
        <input
          tabIndex="1"
          type="text"
          className="search__form-input"
          placeholder="e.g Turkey, Germany..."
        />
        <button
          type="submit"
          aria-label="search"
          className="search__form-button"
        >
          <BiSearchAlt />
        </button>
      </form>
      <div className="search__filter filter">
        <select tabIndex="2" name="filter-search" className="filter-search">
          <option hidden value="Searched By:">
            Search by:
          </option>
          <option value="name">Name</option>
          <option value="region">Region</option>
        </select>
      </div>
    </div>
  );
};

export default SearchForm;
