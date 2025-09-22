import React from "react";

const Homepage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Booleanix</h1>
          <h2>Film di qualità</h2>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="./public/imgs/movies_cover/the_godfather.jpg"
              className="card-img-top"
              alt="Movie"
            />
            <div className="card-body">
              <h5 className="card-title">Il Padrino</h5>
              <p className="card-text">
                Capolavoro di Francis Ford Coppolla sulle vicende della più
                famosa famiglia malavitosa americana: i Corleone.
              </p>
              <a href="#" className="btn btn-primary">
                Dettagli
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
