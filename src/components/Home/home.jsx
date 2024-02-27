import React from 'react';
import styles from "./styles.module.css" 
import { Link, useNavigate } from "react-router-dom";


const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

const Home = () => {
  return (
    <div className={styles.main_container}>
    <nav className={styles.navbar}>
      <h1>Spring for instructors</h1>
      <div className={styles.buttons}>
      <Link to="/countries">
        <button type="button" className={styles.white_btn}>
          Państwa
        </button>
      </Link>
        <button type="button" className={styles.white_btn} onClick={logout}>
          Wyloguj
        </button>
      </div>
    </nav>
    <div className="grid-container">
      <div className="grid-item">Kafelek 1</div>
      <div className="grid-item">Kafelek 2</div>
      <div className="grid-item">Kafelek 3</div>
      <div className="grid-item">Kafelek 4</div>
      <div className="grid-item">Kafelek 5</div>
      <div className="grid-item">Kafelek 6</div>
    </div>
    </div>
  );
}

export default Home;