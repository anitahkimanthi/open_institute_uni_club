import React from 'react';
import {Link, NavLink} from "react-router-dom"
import { data } from "../data/content";
import {Button} from "@material-ui/core"

export default function Programme_list() {
    const programList = data.programme.list
    const [active, setActive] = React.useState("Larry the Bird")

    // show active program list
    const seeContent = (link) =>{
        setActive(link)
    }

    const filteredContent = programList.programList.filter(p => p.title.toString() === active.toString())

    return (
        <div className="row no-gutters justify-content-center programList">

            
            <div className="col-12 col-lg-10 programdata">
                <div className="row justify-content-center progcontent">
                    <div className="col-12 heading">
                        <h3>{programList.title}</h3>
                    </div>
                    <hr/>
                    <div className="col-12 col-lg-4 col-xl-3 sidebarContent">
                    <table className=" table-borderless table-responsive-sm table-responsive-md">
                        <tbody>
                            {programList.programs.map((p, i) =>
                            <tr key={i}>
                                <NavLink to={`/programme-list/${p}}`} activeClassName="activeprogram">
                                    <td colSpan="2" onClick={() => seeContent(p)}>{p}</td>
                                </NavLink>
                            </tr>
                            )}
                        </tbody>
                        </table>
                    </div>

                    <div className="col-12  col-lg-8 col-xl-9 list-content">
                        {filteredContent && 
                        <div>
                        {filteredContent.map((p, i) =>
                            <div className="row"key={i}>
                                {p.cardContent.map((content, i) =>
                                <div className="col-12 col-md-6 col-lg-4 " key={i}>
                                    <div className="card">
                                    <img  src={content.images}   alt="title" className="img-fluid "/>  
                                    <div className="card-body">
                                        <h5 className="card-title">{content.subtitile}</h5>
                                        <p className="card-text">{content.content}</p>
                                        
                                        <Link to="/register">
                                        <Button variant="contained" className="readmore" >Quick Apply</Button>
                                        </Link>
                                    </div>
                                    </div>      
                                </div>
                                )}
                            </div>
                        )}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
