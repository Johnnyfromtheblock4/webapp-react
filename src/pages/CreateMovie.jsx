import axios from "axios";
import { useState, useEffect } from "react";

const CreateMovie = () => {
  // creo variabile di stato
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    image: null,
    abstract: "",
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Aggiungi nuovo film</h2>
        </div>
        <div className="col-12">
          <form>
            <div className="row">
              <div className="col-12 col-md-4">
                <label htmlFor="" className="form-label">
                  Titolo
                </label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  className="form-control"
                  placeholder="Inserisci Titolo"
                />
              </div>
              <div className="col-12 col-md-4">
                <label htmlFor="" className="form-label">
                  Regista
                </label>
                <input
                  name="director"
                  id="director"
                  type="text"
                  className="form-control"
                  placeholder="Inserisci Regista"
                />
              </div>
              <div className="col-12 col-md-4">
                <label htmlFor="" className="form-label">
                  Immagine
                </label>
                <input
                  name="image"
                  id="image"
                  type="file"
                  className="form-control"
                  placeholder="Inserisci Immagine"
                />
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="" className="form-label">
                  Plot
                </label>
                <textarea
                  name="abstract"
                  id="abstract"
                  className="form-control"
                  placeholder="Inserisci Plot"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-warning mt-2" type="submit">
                  Aggiungi Film
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
