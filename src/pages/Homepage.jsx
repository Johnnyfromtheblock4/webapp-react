import axios from "axios";
import { useState, useEffect } from "react";

const Homepage = () => {
  // definisco le variabili di stato
  const [movies, setMovies] = useState([]);

  // funzione che recupera i film attraverso la chiamta ajax
  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => {
        setMovies(resp.data);
      })
      .catch((err) => console.log(err));
  };

  // utilizzo useEffect per recuperare la lista dei film
  useEffect(fetchMovies, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Booleanix</h1>
          <h2>Film di qualità</h2>
        </div>
        {movies.map((movie) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={movie.image} className="card-img-top" alt="Movie" />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.author}</p>
                  <a href="#" className="btn btn-primary">
                    Dettagli
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
