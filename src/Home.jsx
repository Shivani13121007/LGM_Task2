import React from "react";
import { NavLink } from "react-router-dom";
import image from "./images/headerimg.svg"

const Home = () => {
    return (
        <>
            <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-auto">
                                    <h1>WE AT <strong className="span">LETSGROWMORE</strong> ENSURE THAT EVERYONE CONNECTED WITH US MUST GROW!</h1>
                                    <div className="mt-3">
                                        <NavLink className="btn_get_started" to="/getdata">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 mx-auto mt-3">
                                    <img src={image} className="img-fluid animated" alt="Header Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;