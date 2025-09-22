import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const DetailMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});

  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => setMovie(resp.data))
      .catch(() => navigate("/not-found", { replace: true }));
  };

  const goNextPage = () => {
    const page = parseInt(id) + 1;
    navigate("/movie/" + page);
  };

  const goPrevPage = () => {
    const page = parseInt(id) - 1;
    navigate("/movie/" + page);
  };

  useEffect(fetchMovie, [id]);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="detail-card d-flex">
              <div className="cover-image">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="text-details ms-3">
                <h1 className="title">{movie.title}</h1>
                <p className="abstract">{movie.abstract}</p>
                <p className="genre">{movie.genre}</p>
                <p className="year">
                  <em>{movie.release_year}</em>
                </p>
                <h4 className="director">{movie.director}</h4>

                <div className="buttons mt-3">
                  <button
                    className="prv-btn"
                    disabled={parseInt(id) === 1}
                    onClick={goPrevPage}
                  >
                    <i className="fa-solid fa-caret-left"></i>
                  </button>
                  <button className="succ-btn ms-2" onClick={goNextPage}>
                    <i className="fa-solid fa-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="reviews mt-4">
              <h2>Recensioni utenti:</h2>
              {movie.reviews && movie.reviews.length > 0 ? (
                movie.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              ) : (
                <h4>
                  <em>Non ci sono ancora recensioni per questo film</em>
                </h4>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="to-home-btn mt-3">
        <Link className="square-btn-to-home" to="/" title="Torna alla homepage">
          <i className="fas fa-house"></i>
        </Link>
      </div>
    </>
  );
};

export default DetailMovie;
