import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ name, image, rating, id, setClickedShow }) => {
  return (
    <>
      <Link
        to={`/showInfo/${id}`}
        className=" g-0 p-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      >
        <section className="showCard position-relative">
          <img src={image} alt={name} className="img-fluid w-100" />
          <h4>{name}</h4>
          <span className="position-absolute rating">{rating}</span>
        </section>
      </Link>
    </>
  );
};

export default Card;
