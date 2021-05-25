import React, { createContext, useReducer } from "react";

export const SearchContext = createContext();

const SearchState = {
  countries: [],
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_COUNTRY":
      return {
        ...state,
        countries: action.payload,
        error: false,
      };
    case "NOT_FOUND":
      return {
        ...state,
        countries: [],
        error: true,
      };
  }
};

export const CountryProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, SearchState);
  const value = { state, dispatch };

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};
