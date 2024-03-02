import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Logo from "../../images/logo.png"
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

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <img src={Logo}/>
            <Link to="/" className="title">
                <h1 className="text-h1">Instructors</h1>
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            </div>
            <ul className={menuOpen ? "open" : ""}>
               <li>
                   <Link to="/"> Home </Link>
               </li>
                <li>
                    <Link to="/gym"> Gym </Link>
                </li>
                <li>
                    <Link to="/instructors"> Instructors </Link>
                </li>
                <li>
                    <a href="http://localhost:8080"> Chat </a>
                </li>
                <li>
                    <Link to="/contact"> Contact </Link>
                </li>
                <li>
                    <Link onClick={logout}> Logout </Link>
                </li>
            </ul>
        </nav>
    );
    // return (
    //     <div className="navbar">
    //         <div className="leftSide" id={openLinks ? "open" : "close"}>
    //             <img src={Logo}/>
    //             <Link to="/">
    //                 <h1 className="text-h1">Instructors</h1>
    //             </Link>
    //         </div>
    //         <div className="rightSide">
    //             <Link to="/"> Home </Link>
    //             <Link to="/gym"> Gym </Link>
    //             <Link to="/instructors"> Instructors </Link>
    //             <a href="http://localhost:8080"> Chat </a>
    //             <Link to="/contact"> Contact </Link>
    //             <Link onClick={logout}> Logout </Link>
    //         </div>
    //     </div>
    // );
}

export default Navbar;