import React from 'react';
import { data } from "../data/content";

export default function categories() {

    const categoryData = data.banner.subImages
    return (
        <div className="row category no-gutters">
            <div className="col-12">
                <div className="row no-gutters">
                    {categoryData.map((c, i) => 
                    <div className="col-12 col-lg-3">
                        <div className="card">
                            <img src={c.image} alt="title" className="img-fluid" key={i}/>
                            <div className="card-body">
                                <h5>
                                    {c.text}
                                </h5>
                            </div>
                        </div>
                        
                    </div>
                    )}
            </div>
            </div>
        </div>
    )
}
