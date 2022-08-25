import React from 'react'
import PropTypes from 'prop-types';


function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* props */}
                    <a className="navbar-brand" href="/">{props.brand}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.about}</a>
                            </li>
                        </ul>
                        {/* to enable/disable dark mode */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            {/* text-dark when mode is light and vice-versa using ternary operator*/}
                            <label className={`form-check-label text-${props.mode === 'dark' ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}


// Some optional things -- propTypes

// set datatype validator
// Navbar.propTypes = {
//     brand : PropTypes.string, //if we give any other data type like number then gives warning
//     about : PropTypes.string //if we give any other data type like number then gives warning
// };


// to make it compulsory to give propTypes -- if we dont provide there values then it gives warning if there is no default propTypes
Navbar.propTypes = {
    brand: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};


// default values -- if we dont provide them in app.js
Navbar.defaultProps = {
    brand: "Default Brand",
    about: "About"
};


//NOTE -- best practice is to make default props so that if we dont give values then it inserts itself


export default Navbar;