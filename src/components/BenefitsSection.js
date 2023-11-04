import React from 'react';
import benefitLab from "../img/benefit_lab.jpg"
import styled from "styled-components";
import {About, Description, Image} from "../styles/styles";

const BenefitsSection = () => {
    return (
        <Benefits>
            <Description>
                <h2>High-Quality Learning System</h2>
                <div className="benefit">
                    <h3>Online platform</h3>
                    <h3>High experienced and talented mentors</h3>
                    <h3>Fast learning system</h3>
                    <h3>Offline school for children</h3>
                </div>
            </Description>
            <Image>
                <img src={benefitLab} alt="woman is working on lab"/>
            </Image>
        </Benefits>
    );
};

const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
  }
  
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem;
    width: 70%;
    border-left: 4px solid #30bee1;
  }
`

export default BenefitsSection;