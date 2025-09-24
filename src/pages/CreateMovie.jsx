import axios from "axios";
import { useState, useEffect } from "react";

const CreateMovie = () => {
  // creo variabile di stato
  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    image: null,
    abstract: "",
  });

  const setFieldValue = (e) => {
    const { name, value } = e.target; //recupeo i valori delle proprietà name e value del campo input
    if (name === "image")
      setFormData({ ...formData, image: e.target.files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Aggiungi una recensione</h2>
        </div>
        <div className="col-12">
          <form>
            <div className="row">
              <div className="col-12 col-md-6">
                <label htmlFor="" className="form-label">
                  Name
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
              <div className="col-12 col-md-6">
                <label htmlFor="" className="form-label">
                  Voto
                </label>
                <input
                  name="vote"
                  id="vote"
                  type="text"
                  className="form-control"
                  value={formData.vote}
                  placeholder="Inserisci Voto da 1 a 10"
                  required
                  onChange={setFieldValue}
                />
              </div>
              <div className="col-12 mt-2">
                <label htmlFor="" className="form-label">
                  Commento
                </label>
                <textarea
                  name="abstract"
                  id="abstract"
                  className="form-control"
                  value={formData.abstract}
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
