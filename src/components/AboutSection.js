import React from 'react';
import homeIntro from "../img/home_intro.jpg"
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Be educated so that</h2>
                    </Hide>
                    <Hide>
                        <h2>you <span>can change</span></h2>
                    </Hide>
                    <Hide>
                        <h2>the world.</h2>
                    </Hide>
                </div>
                <p>
                    An educated mind can teach many. An educated mind is better than empty one.
                </p>
                <button>About us</button>
            </Description>
            <Image>
                <img src={homeIntro} alt="man is reading a book"/>
            </Image>
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
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`
const Hide = styled.div`
  overflow: hidden;
`
const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    object-position: top center;
  }
`
export default AboutSection;