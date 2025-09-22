import React from "react";

const MovieCard = ({ movie }) => {
  const { title, image, author } = movie;
  return (
    <div className="col-12 col-md-6 col-lg-4" key={id}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="Movie" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <a href="#" className="btn btn-primary">
            Dettagli
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
