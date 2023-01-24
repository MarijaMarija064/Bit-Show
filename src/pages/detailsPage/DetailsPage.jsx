import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import CastSection from "../../components/castSection/CastSection";
import { applicationContext } from "../../contexts";
import "./DetailsPage.scss";

const DetailsPage = () => {
  const id = useParams().id;
  const allShows = useContext(applicationContext).allShows;
  const displayShow = allShows.find((e) => e.id == id);

  return (
    <main className="detailsPage container">
      <section className="sectionInfo row">
        <div className="col-4">
          <img
            className="img-fluid"
            src={displayShow?.image?.original}
            alt=""
          />
        </div>
        <article className="col-8">
          <h2>{displayShow?.name}</h2>
          {displayShow?.genres.map((e) => (
            <span className="genres my-3 p-1 me-2">{e}</span>
          ))}
          <p dangerouslySetInnerHTML={{ __html: displayShow?.summary }}></p>
        </article>
      </section>
      <section className="sectionCast">
        <div>
          <CastSection id={id} />
        </div>
      </section>
    </main>
  );
};

export default DetailsPage;
