import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/presentation_10822537.png"
import "./style.css"

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo}/>
                <Link to="/">
                    <h1 className="text-h1">Instructors</h1>
                </Link>
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/gym"> Gym </Link>
                    <Link to="/instructors"> Instructors </Link>
                    <a href="http://localhost:8080"> Chat </a>
                    <Link to="/contact"> Contact </Link>
                    <Link onClick={logout}> Logout </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/gym"> Gym </Link>
                <Link to="/instructors"> Instructors </Link>
                <a href="http://localhost:8080"> Chat </a>
                <Link to="/contact"> Contact </Link>
                <Link onClick={logout}> Logout </Link>
            </div>
        // </div>
    );
}

export default Navbar;