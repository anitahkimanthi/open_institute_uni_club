import React from 'react';
import bg from "../../static/images/bg4.jpg"

export default function banner_section() {
    return (
        <div className="row no-gutters justify-content-center banner">
            <img src={bg} alt="background" className="img-fluid "/>
            <div className="introduction col-10 col-lg-6">
                
                <h1>
                    WELCOME TO OPCLUB
                </h1>
            </div>
        </div>
    )
}
