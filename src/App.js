import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/login"
import Register from "./components/Register/register"
import Countries from "./components/Countries/countries.jsx"
import Home from "./components/Home/home.jsx"
import PrivateRoute from './components/PrivateRoute.jsx';
import Confirm from './components/Confirm/confirm.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/countries" element={<PrivateRoute element={Countries} />} />
        <Route path="/home" element={<PrivateRoute element={Home} />} />
      </Routes>
    </Router>
  );
}

export default App;