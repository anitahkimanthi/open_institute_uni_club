import React from 'react';
import Banner_Section from './banner_section';
import About_Section from "./aboutus_section";
import Programme_Section from "./programme_section";
import Register_Section from "./register_section";
import Testimony_section from "./testimonies_section";
import Partner_Section from "./partners_section";

export default function layout() {
    return (
        <div>
            <Banner_Section/>
            <About_Section/>
            <Programme_Section/>
            <Register_Section/>
            <Partner_Section/>
            <Testimony_section/>
        </div>
    )
}
