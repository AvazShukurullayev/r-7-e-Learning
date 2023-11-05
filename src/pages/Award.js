import React from 'react';
import styled from "styled-components";

const Award = ({award}) => {
    return (
        <StyledAward>
            <h3>{award.title}</h3>
            <div className="line"></div>
            <p>{award.description}</p>
        </StyledAward>
    );
};

const StyledAward = styled.div`
  width: calc(100% / 3 - 15px);
  h3 {
    font-size: 1.7rem;
  }
  .line {
    width: 100%;
    height: 0.3rem;
    background-color: #30bee1;
    margin-top: 1rem;
  }
`

export default Award;