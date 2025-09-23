import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const DetailMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [totalMovies, setTotalMovies] = useState(0);

  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((resp) => setMovie(resp.data))
      .catch(() => navigate("/not-found", { replace: true }));
  };

  const fetchTotalMovies = () => {
    axios
      .get(`http://localhost:3000/api/movies`)
      .then((resp) => setTotalMovies(resp.data.length))
      .catch((err) => console.error("Errore nel fetch totale:", err));
  };

  const goNextPage = () => {
    const currentId = parseInt(id);
    let nextId = currentId + 1;
    if (nextId > totalMovies) {
      nextId = 1;
    }
    navigate("/movie/" + nextId);
  };

  const goPrevPage = () => {
    const currentId = parseInt(id);
    let prevId = currentId - 1;
    if (prevId < 1) {
      prevId = totalMovies;
    }
    navigate("/movie/" + prevId);
  };

  useEffect(() => {
    fetchMovie();
    fetchTotalMovies();
  }, [id]);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="detail-card">
              <div className="cover-image">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="text-details">
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
                  <button
                    className="succ-btn ms-2"
                    disabled={parseInt(id) === totalMovies && totalMovies > 0}
                    onClick={goNextPage}
                  >
                    <i className="fa-solid fa-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 reviews mt-4">
            <h2 className="my-2">Recensioni utenti:</h2>
            {movie.reviews && movie.reviews.length > 0 ? (
              movie.reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))
            ) : (
              <p>Nessuna recensione disponibile</p>
            )}
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
