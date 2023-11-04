import React from 'react';
import homeIntro from "../img/home_intro.jpg"
import styled from "styled-components";
const AboutSection = () => {
    return (
        <About>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Be educated so that</h2>
                    </div>
                    <div className="hide">
                        <h2>you can change</h2>
                    </div>
                    <div className="hide">
                        <h2>the world.</h2>
                    </div>
                </div>
                <p>
                    An educated mind can teach many. An educated mind is better than empty one.
                </p>
                <button>About us</button>
            </div>
            <div className="image">
                <img src={homeIntro} alt="man is reading a book"/>
            </div>
        </About>
    );
};

// Styled Components
const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`



export default AboutSection;