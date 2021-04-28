import React from 'react';
import { data } from "../data/content";
import {
    Button
} from "@material-ui/core";

export default function aboutus_section() {
    const aboutData = data.about
    return (
        <div className="row  about">
            <div className="col-12 col-lg-4">
                <img src={aboutData.image} alt="image" className="img-fluid"/>
            </div>
            <div className="col-12 col-lg-8">
                <h2>{aboutData.title}</h2>
                <p>{aboutData.description}</p>
                <Button variant="contained" className="readmore">{aboutData.readmore}</Button>
            </div>
        </div>
    )
}
