import React, { useState, useEffect, allShows } from "react";

const Search = ({ searchShows, setSearch, search }) => {
  return (
    <>
      <input
        className="p-1"
        type="text"
        placeholder="Search shows"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          searchShows(event.target.value);
        }}
      />
    </>
  );
};

export default Search;
