import React from 'react';
import { data } from "../data/content";
import {
    Button
} from "@material-ui/core";

export default function register_section() {
    const registerData = data.register
    return (
        <div className="row registration">
            <div className="col-12 col-lg-4">
                <img src={registerData.image} alt="title" className="img-fluid"/>
            </div>
            <div className="col-12 col-lg-8">
                <h2>{registerData.title}</h2>
                <p>{registerData.description}</p>
                <Button variant="contained" className="readmore">{registerData.readmore}</Button>
            </div>
        </div>
    )
}
