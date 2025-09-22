import styles from "../modules/Header.module.css";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img src="/imgs/logo.png" className={styles.logo} alt="Logo" />
          <h2 className={styles.title_style}>
            Booleanix: <span className="fst-italic">La tua videoteca</span>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
