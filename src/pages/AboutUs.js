import React from 'react';
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";

const AboutUs = () => {
    return (
        <div className={"about__us"}>
            <AboutSection />
            <BenefitsSection />
        </div>
    );
};

export default AboutUs;