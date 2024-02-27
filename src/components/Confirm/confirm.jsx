import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from "react-router-dom";

function Confirm() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = new URL('http://localhost:8080/api/v1/auth/verify');
        url.searchParams.append('code', code); // 'code' to nazwa parametru oczekiwana przez backend
      
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          // Usunięto body, ponieważ nie jest potrzebne w żądaniu GET
        });
      
        if (response.ok) {
          const message = await response.text(); // Pobranie odpowiedzi tekstowej, ponieważ backend zwraca komunikat, a nie JSON
          alert(message); // Wyświetlenie komunikatu z backendu
          window.location.href = '/home';
        } else {
          const errorText = await response.text(); // Pobranie błędu jako tekst
          setError(errorText); // Ustawienie błędu
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred. Please try again.");
      }
  };

  return (
    <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Verify your account</h1>
            <h3>Code</h3>
            <input
             type="text" 
             placeholder="Code" 
             value={code} 
             onChange={(e) => setCode(e.target.value)} 
             required
             className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Verify
            </button>
          </form>
        </div>

  );
}

export default Confirm;
