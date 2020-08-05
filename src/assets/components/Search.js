
// ****************************************************
// *--------------------- SEARCH ---------------------*
// ****************************************************

import React from "react";

const Search = () => {
  return (
    <div className="container">
      <div className="search">
        <input
          type="search"
          id="site-search"
          name="q"
          size="24"
          placeholder="Que recherchez-vous?"
          aria-label="Recherche"
        ></input>
        <button>Recherche</button>
      </div>
    </div>
  );
};
export default Search;