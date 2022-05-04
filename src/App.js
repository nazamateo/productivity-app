import { Link, Outlet } from "react-router-dom";
import styles from "./Sass/App.module.scss";
import earthvideo from "../src/Assets/Videos/earthvideo.mp4";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showNav, setShowNav] = useState(true);

  function handleClickShowForm() {
    setShowForm(true);
  }

  function handleClickHideForm() {
    setShowForm(false);
    setShowNav(true);
  }
  function handleHideNav() {
    setShowNav(false);
  }
  return (
    <>
      <div className={styles.main}>
        {showForm && (
          <video id={styles.bgvideo} loop autoPlay>
            <source src={earthvideo}></source>
          </video>
        )}

        <nav className={styles.header}>
          <Link
            onClick={handleClickHideForm}
            className={styles.link}
            to="/home"
          >
            Logo
          </Link>
          <div className={styles.linkscontainer}>
            <Link
              onClick={handleClickHideForm}
              className={styles.link}
              to="/home"
            >
              Home
            </Link>
            <Link
              onClick={handleClickHideForm}
              className={styles.link}
              to="/about"
            >
              About
            </Link>
            <Link
              onClick={handleClickHideForm}
              className={styles.link}
              to="/testimonials"
            >
              Testimonials
            </Link>
            <Link
              onClick={handleClickHideForm}
              className={styles.link}
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className={styles.link}
              to="/productivity"
              func={handleHideNav}
            >
              <button id={styles.free} onClick={handleClickShowForm}>
                Try Now!
              </button>
            </Link>
            <Link to="/welcome" />
          </div>
        </nav>
        <div className={styles.outlets}>
          <Outlet />
        </div>
        {!showForm && <div className={styles.footer}>footer</div>}
      </div>
    </>
  );
}

export default App;
