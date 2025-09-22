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
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
