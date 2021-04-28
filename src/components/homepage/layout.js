import React from 'react';
import BannerSection from './banner_section';
import AboutSection from "./aboutus_section";
import ProgrammeSection from "./programme_section";
import RegisterSection from "./register_section";
import TestimonySection from "./testimonies_section";
import PartnerSection from "./partners_section";
import Categories from "./categories";

export default function layout() {
    return (
        <div className="row no-gutters justify-content-center homepage contentLayout">
            <div className="col-12">
                <BannerSection/>
            </div>
            <div className="col-12 col-lg-8 categories">
                <Categories/>
            </div>
            <div className="col-12 col-lg-10 col-xl-8 content">
                <AboutSection/>
                <hr/>
                <ProgrammeSection/>
                <hr/>
                <RegisterSection/>
            </div>
            <div className="col-12 col-lg-12 nopadding">
                <TestimonySection/>
            </div>
            <div className="col-12">
                <PartnerSection/>
            </div>
        </div>
    )
}
