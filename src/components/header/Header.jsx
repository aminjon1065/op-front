import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(true);
    function toggleMenu(event) {
        event.preventDefault()
        setMenuToggle(prevState => !menuToggle);
        document.body.classList.toggle('sb-sidenav-toggled')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
                <div className="container-fluid">
                    <button className="btn" id="sidebarToggle" onClick={toggleMenu}><i
                        className={`fas ${menuToggle ? 'fa-bars ' : 'fa-ellipsis-v'}`}></i></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#!">Action</a>
                                    <a className="dropdown-item" href="#!">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;