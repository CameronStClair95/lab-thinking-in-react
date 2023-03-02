// import React from 'react';

function SearchBar(props) {
  return (
    <div>
        <label htmlFor="=">
            Search for Product:

        <input type="text" onChange={(e) => props.handleSearch(e.target.value)} />

        </label>
    </div>
  );
}

export default SearchBar;
