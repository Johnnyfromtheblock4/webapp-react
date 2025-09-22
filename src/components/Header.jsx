import styles from "../modules/Header.module.css";

const Header = () => {
  return (
    <div>
      <header className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src="./imgs/logo.png" className={`${styles.title_style}`} />
            <h2 className={`${styles.title_style}`}>
              Booleanix: <span className="fst-italic">La tua videoteca</span>
            </h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
