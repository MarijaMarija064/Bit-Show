import React, { useState, useEffect, useContext } from "react";
import { applicationContext } from "../../contexts";
import Card from "../../components/card/Card";
import Search from "../../components/search/Search";

const LandingPage = () => {
  const { allShows, setClickedShow } = useContext(applicationContext);
  const topShows = allShows
    .sort((a, b) => b.rating.average - a.rating.average)
    .slice(0, 50);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");

  function searchShows(query) {
    if (query) {
      const filteredData = topShows.filter((element) =>
        element.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredData);
    } else {
      setSearchResults([]);
    }
  }

  return (
    <main className="container mt-2">
      <Search setSearch={setSearch} search={search} searchShows={searchShows} />

      <div className="row">
        {!!searchResults.length &&
          searchResults.map((e) => (
            <Card
              name={e.name}
              image={e.image.medium}
              rating={e.rating.average}
              key={e.id}
              id={e.id}
              setClickedShow={setClickedShow}
            />
          ))}

        {!searchResults.length &&
          !search &&
          topShows.map((e) => (
            <Card
              name={e.name}
              image={e.image.medium}
              rating={e.rating.average}
              key={e.id}
              id={e.id}
              setClickedShow={setClickedShow}
            />
          ))}
      </div>
    </main>
  );
};

export default LandingPage;
