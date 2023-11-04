import React from 'react';
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
    return (
        <div className={"about__us"}>
            <AboutSection />
            <BenefitsSection />
            <FaqSection />
        </div>
    );
};

export default AboutUs;