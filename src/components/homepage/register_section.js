import React from 'react';
import { data } from "../data/content";
import {
    Button
} from "@material-ui/core";

export default function register_section(props) {
    const registerData = data.register
    const {handleClickOpen} = props

    return (
        <div className="row no-gutters registration">
            <div className="col-12 col-md-4">
                <img src={registerData.image} alt="title" className="img-fluid"/>
            </div>
            <div className="col-12 col-md-8">
                <br/>
                <h2>{registerData.title}</h2>
                <p>{registerData.description}</p>
                <Button variant="contained" className="readmore" onClick={() =>handleClickOpen(registerData)}>{registerData.readmore}</Button>
            </div>
        </div>
    )
}
