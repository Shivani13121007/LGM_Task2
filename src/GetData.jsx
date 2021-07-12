import React from "react";
import Card from "./Card";

const GetData = () => {
    return (
        <>
            <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GetData;