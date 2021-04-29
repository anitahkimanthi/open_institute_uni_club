import React from "react"
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom";
import {data} from "../data/content"

export default function whyjoin() {
    const joinData = data.programme.join

    return (
        <div className="row no-gutters justify-content-center whyus section">
            <div className="col-12 col-lg-10">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-2">
                    <h3>{joinData.title}</h3>
                    </div>
                    <div className="col-12 col-lg-7">
                        <p>{joinData.description}</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <Link to="/register">
                        <Button variant="contained">REGISTER</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
