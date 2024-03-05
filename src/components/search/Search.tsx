import React from "react";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="What do you want to watch?" />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
  );
};

export default Search;
