import React from "react";

function Search({handleSearch}) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search ..."
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
