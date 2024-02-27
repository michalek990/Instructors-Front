import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/countries/all', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    })
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className={styles.main_container}>
    <nav className={styles.navbar}>
      <h1>Spring for instructors</h1>
      <div className={styles.buttons}>
      <Link to="/home">
        <button type="button" className={styles.white_btn}>
            Powrót
        </button>
      </Link>
        <button type="button" className={styles.white_btn} onClick={logout}>
          Wyloguj
        </button>
      </div>
    </nav>

    <div className={styles.text}>Państwa</div>
      <>
        <Table  striped bordered hover className={styles.cars}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nazwa</th>
            </tr>
          </thead>
          <tbody className="table-striped">
          {countries.map((country) => (
            <tr key={country.id}>
              <td>{country.id}</td>
              <td>{country.name}</td>
            </tr>
          ))}
          </tbody>
        </Table>
    </>
    </div>
  );
}

export default Home;
