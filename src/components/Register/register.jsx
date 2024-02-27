import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, email, username, password }),
      });
      if (response.ok) {
        console.log('Registration successful');
        const data = await response.json();
        localStorage.setItem('userToken', data.token); 
        localStorage.setItem('isAcitve', data.isActive);
        window.location.href = '/'; 
      } else {
        setError('Login failed. Please check your username and password.');
      }
   };

      return (
        <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <h3>Firstname</h3>
                <input
                 type="text" 
                 placeholder="Firstname" 
                 value={firstname} 
                 onChange={(e) => setFirstname(e.target.value)} 
                 required
                 className={styles.input}
                />
                <h3>Lastname</h3>
                <input
                 type="text" 
                 placeholder="Lastname" 
                 value={lastname} 
                 onChange={(e) => setLastname(e.target.value)} 
                 required
                 className={styles.input}
                />
                <h3>Email</h3>
                <input
                 type="text" 
                 placeholder="Email" 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)} 
                 required
                 className={styles.input}
                />
                <h3>Login</h3>
                <input
                 type="text" 
                 placeholder="Username" 
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)} 
                 required
                 className={styles.input}
                />
                <h3>Password</h3>
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
                  Register
                </button>
                <Link to="/login">
                   If you have account already Sign in
                </Link>
              </form>
            </div>
    
      );
}

export default Register;