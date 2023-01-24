import React, { useState, useEffect, useContext } from "react";
// import Counter from "../card/playComponent/Counter";
import "./CastSection.scss";

const CastSection = ({ id }) => {
  const [fetchedCast, setFetchedCast] = useState([]);

  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`).then((data) =>
      data.json().then((data) => setFetchedCast(data))
    );
  }, []);

  return (
    <>
      <button
        className="view-toggle-btn my-2"
        onClick={() => setGridView(!gridView)}
      >
        Toggle view
      </button>
      {/* <Counter /> stari button */}
      {gridView && (
        <div className="cast-section">
          <div className="d-flex my-2">
            <h2 className="d-inline me-3">Cast: </h2>
          </div>
          <div className="cast-grid d-flex my-3">
            {fetchedCast.map((e) => (
              <>
                <div className="cast mx-1" key={e.person.id}>
                  <img src={e.person.image?.medium} alt="" />
                  <p>{e.person.name}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
      {!gridView && (
        <div className="cast-section-list">
          <ul>
            {fetchedCast.map((e) => (
              <li className="d-flex">
                <img className="my-1" src={e.person.image.medium} alt="" />
                <p className=" my-1 ms-1">{e.person.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CastSection;
