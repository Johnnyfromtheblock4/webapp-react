import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, image, author } = movie;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{director}</p>
          <Link to={`/movie/${id}`} className="btn btn-primary">
            Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
