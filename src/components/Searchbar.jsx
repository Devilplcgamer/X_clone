import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm, category, setCategory }) => {
  return (
    <div className="search-bar d-flex align-items-center mb-3">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <select
        className="form-select ms-2 category-select"
        value={category || "All"}  
        onChange={(e) => setCategory(e.target.value || "All")}
      >
        <option value="All">All</option>
        <option value="Home">Home</option>
        <option value="Mentions">Mentions</option>
      </select>
    </div>
  );
};

export default SearchBar;
