import React from 'react';
import BannerSection from './programmebanner';
import ProgrammeDescr from "./programmdescription.js";
import ProgrammeCategories from "./programcategories";
import ProgrammeActivities from "./programme_activities";
import WhyChoosseUs from "./whyjoin";

export default function layout() {
    return (
        <div className="row no-gutters justify-content-center programmepage">
            <div className="col-12">
                <BannerSection/>
            </div>
            <div className="col-12 ol-lg-10 col-xl-8 programmeDescr">
                <ProgrammeDescr/>
            </div>

            <div className="col-12 programmecontent">
                <div className="row no-gutters justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                        <ProgrammeCategories/>
                        <hr/>
                        <ProgrammeActivities/>
                    </div>
                </div>
                
            </div>
            <div className="col-12 col-lg-12 nopadding">
                <WhyChoosseUs/>
            </div>
        </div>
    )
}
