import React from 'react';
import { data } from "../data/content";
import {
    Button
} from "@material-ui/core";

export default function programme_section() {
    const programmeData = data.programme
    return (
        <div className="row programme">
            <div className="col-12 col-lg-8" >
                <h2>{programmeData.title}</h2>
                <p>{programmeData.description}</p>
                <Button variant="contained" className="readmore">{programmeData.readmore}</Button>
            </div>
             <div className="col-12 col-lg-4">
                <img src={programmeData.image} alt="image" className="img-fluid"/>
            </div>
        </div>
    )
}