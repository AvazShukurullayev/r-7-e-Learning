import React from 'react';
import styled from "styled-components";
import {About} from "../styles/styles";
import Toggle from "./Toggle";
import {LayoutGroup} from "framer-motion";

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <LayoutGroup>
                <Toggle title={"Can I learn on your platform?"}>
                    <div className={"question"}>
                        <div className={"answer"}>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title={"How can I pay on your platform?"}>
                    <div className={"question"}>
                        <div className={"answer"}>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title={"What is your address?"}>
                    <div className={"question"}>
                        <div className={"answer"}>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title={"How many students study at your platform?"}>
                    <div className={"question"}>
                        <div className={"answer"}>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, nihil?</p>
                        </div>
                    </div>
                </Toggle>
            </LayoutGroup>
        </Faq>
    );
};
const Faq = styled(About)`
  display: block;

  h2 {
    margin-bottom: 2rem;
    font-weight: lighter;
  }

  .question {
    margin: 1rem;
    transition: all 0.25s linear;

    h4 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      cursor: pointer;
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