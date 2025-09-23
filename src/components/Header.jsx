import styles from "../modules/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-12  d-flex justify-content-around align-items-center">
          <img src="/imgs/logo.png" className={styles.logo} alt="Logo" />
          <h2 className={styles.title_style}>
            Booleanix: <span className="fst-italic">La tua videoteca</span>
          </h2>
          <Link className="btn btn-light" to="/movies/create">
            Aggiungi un nuovo film
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
