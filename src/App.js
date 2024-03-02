import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/login"
import Register from "./components/Register/register"
import Instructors from "./components/Intructors/instructors.jsx"
import Home from "./components/Home/home.jsx"
import PrivateRoute from './components/PrivateRoute.jsx';
import PublicRoute from './components/PulblicRoute'
import Confirm from './components/Confirm/confirm.jsx';
import Navbar from './components/Navbar/navbar.jsx';
import Gym from "./components/Gym/gym";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/register" element={<PublicRoute element={Register} />} />
        <Route path="/confirm" element={<PublicRoute element={Confirm} />} />
        <Route path="/instructors" element={<PrivateRoute element={Instructors} />} />
        <Route path="/" element={<PrivateRoute element={Home} />} />
          <Route path="/contact" element={<PrivateRoute element={Contact} />} />
          <Route path="/gym" element={<PrivateRoute element={Gym} />} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;