import React from 'react';
import bg from "../../static/images/bg2.jpg"

export default function programme_page() {
    return (
        <div className="row no-gutters justify-content-center programmebanner">
            <img src={bg} alt="background" className="img-fluid "/>
            <div className="introduction col-10 col-lg-6">
                <h1>
                    Programmes
                </h1>
            </div>
        </div>
    )
}
