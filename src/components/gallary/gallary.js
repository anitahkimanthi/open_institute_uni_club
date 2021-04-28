import React from "react"
import {data} from "../data/content"

export default function gallary() {
    const gallary = data.gallary

    return (
        <div className="row no-gutters justify-content-center gallary">
            <div className="col-12 col-lg-10">
                <div className="row no-gutters ">
                    {gallary.map((image, i) => 
                    <div className="col-12 col-sm-6 col-md-3" key={i}>
                       <img src={image} alt="title" className="img-fluid"/>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
