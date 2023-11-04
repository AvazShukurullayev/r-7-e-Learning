import React from 'react';
import styled from "styled-components";
import {About} from "../styles/styles";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className={"question"}>
                <h4>Can I learn on your platform?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className={"question"}>
                <h4>How can I pay on your platform?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className={"question"}>
                <h4>What is your address?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className={"question"}>
                <h4>How many students study at your platform?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    );
};
const Faq = styled(About)`
  display: block;

  h2 {
    margin-bottom: 2rem;
  }

  .question {
    margin: 1rem;

    h4 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
  }

  .faq-line {
    width: 100%;
    height: 2px;
    background-color: #fff;
  }

  p {
    padding: 1rem 0;
  }
`
export default FaqSection;