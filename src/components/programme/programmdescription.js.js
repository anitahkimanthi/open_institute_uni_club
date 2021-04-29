import React from 'react';
import { data } from "../data/content";

import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function video() {

    const programVideo = data.programme.subInfo
    return (
        <div className="row programmeVideo justify-content-center section">

             <div className="col-12 col-lg-6">
                <p>{programVideo.description}</p>
                <Link to="/programme-list">
                    <Button variant="contained" className="readmore" >View Programs</Button>
                </Link>
            </div>

             <div className="col-12 col-lg-6 video text-right">
                <div className="card">
                    <video src={programVideo.image} controls className="img-fluid" >
                        <source src="./videos/1.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
            
        </div>
    )
}
