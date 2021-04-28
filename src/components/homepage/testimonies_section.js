import React from 'react'
import {data } from "../data/content"

export default function testimonies_section() {
    const testimony = data.testimonies
    return (
        <div className="row no-gutters  justify-content-center testimony">
            <div className="col-12 col-lg-10">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <img src={testimony.image} alt="image" className="img-fluid"/>
                    </div>
                    < div className="col-12 col-lg-8 description">
                        <h1>"</h1>
                        <p>{testimony.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
