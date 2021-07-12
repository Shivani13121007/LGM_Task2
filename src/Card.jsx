import React, { useEffect, useState } from "react";

const Card = () => {

    const [users, setusers] = useState([]);
    const [loading, setloading] = useState(false);

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=1');
        const res_data = await response.json();
        // console.log(res_data.data);
        setusers(res_data.data);
        setloading(true);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {loading
                ?
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                                {
                                    users.map((curElem, index) => {
                                        return (

                                            <div className="col-md-4 col-10" key={index}>
                                                <div className=" py-2 card_container mt-5 text-center">
                                                    <div className="d-flex align-items-center flex-wrap justify-content-center ">
                                                        <img src={curElem.avatar} alt="Avatar" className="img-fluid" />
                                                        <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                                                            <h4 className="ml-3"> {curElem.first_name} {curElem.last_name} </h4>
                                                            <p className="ml-3">{curElem.email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="spinner_style">
                    <div className="spinner-grow" style={{ width: "5rem", height: "5rem", color: "#3498db" }} role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>}


        </>
    )
}
export default Card;