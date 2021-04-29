import React from 'react';
import {data} from "../data/content"

export default function programmCategories() {
    const activities = data.programme.activities

    return (
        <div className="row no-gutters justify-content-center section activities">
            <div className="col-12 ">
                <div className="row no-gutters ">
                    <div className="col-12">
                        <h3>Programme Activities</h3>
                        <br/>
                    </div>
                    {activities.map((item, i) => 
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={i}>
                        <ul className={item.class}>
                            {item.content.map((text, index) =>
                                <li key={index} className="list-unstyled"> 
                                    <span>{item.icon}</span> 
                                    <span className="text">{text} </span>
                                </li>
                            )}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}
