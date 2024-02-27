import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAcitve', data.isActive)
        window.location.href = '/home';
      } else {
        setError('Login failed. Please check your username and password.');
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.status === 400) {
        setError("Check your input data");
      }
      else if(error.response.data.statusCode === 409){
        setError(error.response.data.details);
      }
      else if(error.response.data.statusCode === 404)
        setError(error.response.data.details);
      else if(error.response.data.statusCode === 500)
        setError(error.response.data.details);
    }
  };

  return (
    <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Sing In</h1>
            <h3>Login</h3>
            <input
             type="text" 
             placeholder="Username" 
             value={username} 
             onChange={(e) => setUsername(e.target.value)} 
             required
             className={styles.input}
            />
            <h3>Hasło</h3>
            <input
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Login
            </button>
            <Link to="/register">
                Don't have an account yet? Sing Up
            </Link>
          </form>
        </div>

  );
}

export default Login;
