import axios from "axios";
import { useState, useEffect } from "react";

const CreateMovie = () => {
  const [movies, setMovies] = useState([]); // lista film
  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: "",
    movie_id: "",
  });

  // fetch film dal backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((resp) => setMovies(resp.data))
      .catch((err) => console.error("Errore caricamento film:", err));
  }, []);

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.movie_id) {
      alert("Seleziona un film!");
      return;
    }

    axios
      .post(`http://localhost:3000/api/movies/${formData.movie_id}/reviews`, {
        name: formData.name,
        vote: formData.vote,
        text: formData.text,
      })
      .then(() => {
        alert("Recensione aggiunta con successo!");
        setFormData({ name: "", vote: "", text: "", movie_id: "" });
      })
      .catch((err) => console.error("Errore inserimento recensione:", err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Aggiungi una recensione</h2>
        </div>
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* SELECT FILM */}
              <div className="col-12 mb-3">
                <label htmlFor="movie_id" className="form-label">
                  Seleziona Film
                </label>
                <select
                  id="movie_id"
                  name="movie_id"
                  className="form-select"
                  value={formData.movie_id}
                  onChange={setFieldValue}
                  required
                >
                  <option value="">-- scegli un film --</option>
                  {movies.map((movie) => (
                    <option key={movie.id} value={movie.id}>
                      {movie.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* NAME */}
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control"
                  value={formData.name}
                  placeholder="Inserisci Nome"
                  required
                  onChange={setFieldValue}
                />
              </div>

              {/* VOTE */}
              <div className="col-12 col-md-6">
                <label htmlFor="vote" className="form-label">
                  Voto
                </label>
                <input
                  name="vote"
                  id="vote"
                  type="number"
                  min="1"
                  max="5"
                  className="form-control"
                  value={formData.vote}
                  placeholder="Inserisci Voto da 1 a 5"
                  required
                  onChange={setFieldValue}
                />
              </div>

              {/* TEXT */}
              <div className="col-12 mt-2">
                <label htmlFor="text" className="form-label">
                  Commento
                </label>
                <textarea
                  name="text"
                  id="text"
                  className="form-control"
                  value={formData.text}
                  placeholder="Inserisci Commento"
                  required
                  onChange={setFieldValue}
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-warning mt-2" type="submit">
                  Aggiungi Recensione
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
