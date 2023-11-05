import React from 'react';
import homeIntro from "../img/home_intro.jpg"
import {About, Description, Image, Hide} from "../styles/styles";
import {motion} from "framer-motion";

const AboutSection = () => {
    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 1.2}}
    }
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} initial={"hidden"} animate={"show"}>Be educated so that</motion.h2>
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

export default AboutSection;