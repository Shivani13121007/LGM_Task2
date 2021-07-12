import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid navbar_bg">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light navbar_bg">
                            <NavLink className="navbar-brand " to="#">LetsGrowMore</NavLink >
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link a" activeClassName="menu_active" exact  to="/">Home <span className="sr-only">(current)</span></NavLink >
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link a" activeClassName="menu_active " exact  to="/getdata">GetData</NavLink >
                                    </li>
                                </ul>   
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;