import React from 'react';
import benefitLab from "../img/benefit_lab.jpg"

const BenefitsSection = () => {
    return (
        <div className={"benefits__section"}>
            <div className="description">
                <h2>High quality learning system</h2>
                <div className="benefit">
                    <h3>Online platform</h3>
                    <h3>High experienced and talented mentors</h3>
                    <h3>Fast learning system</h3>
                    <h3>Offline school for children</h3>
                </div>
            </div>
            <div className="image">
                <img src={benefitLab} alt="woman is working on lab"/>
            </div>
        </div>
    );
};

export default BenefitsSection;