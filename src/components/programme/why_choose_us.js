import { Button } from '@material-ui/core'
import {Link} from "react-router-dom"
import React from 'react'

export default function why_choose_us() {
    return (
        <div className="row no-gutters justify-content-center whyus section">
            <div className="col-12 col-lg-10">
                <div className="row">
                    <div className="col-12 col-lg-4">
                    <h3>Why Join</h3>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="col-12 col-lg-2">
                        <Link to="/register">
                        <Button variant="contained">REGISTER</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
