import React from "react";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search.."
      ></input>
      <button className="search__button">buscar comic</button>
    </div>
  );
};

export default Search;
