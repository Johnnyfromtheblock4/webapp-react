import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => setMovies(resp.data))
      .catch((err) => console.error(err));
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1>Booleanix</h1>
          <h2>Film di qualità</h2>
        </div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
