import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-wrapper">
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search medicines, healthcare products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;