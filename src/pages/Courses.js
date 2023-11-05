import React from 'react';
import {Container} from "../styles/styles";
import styled from "styled-components";
import {Link} from "react-router-dom";
import reactImg from "../img/react.jpg"
import jsImg from "../img/js.png"
import fullStackImg from "../img/full.jpg"

const Courses = () => {
    return (
        <Container>
            <StyledCourses>
                <Course>
                    <h2>Interactive <span>React and Redux</span></h2>
                    <div className="line"></div>
                    <Link to={"/courses/react"}>
                        <img src={reactImg} alt="interactive react and redux"/>
                    </Link>
                </Course>
                <Course>
                    <h2>Interactive <span>JavaScript</span></h2>
                    <div className="line"></div>
                    <Link to={"/courses/javascript"}>
                        <img src={jsImg} alt="interactive javascript"/>
                    </Link>
                </Course>
                <Course>
                    <h2>Interactive <span>Full Stack</span></h2>
                    <div className="line"></div>
                    <Link to={"/courses/soon"}>
                        <img src={fullStackImg} alt="interactive full stack"/>
                    </Link>
                </Course>
            </StyledCourses>
        </Container>
    );
};
const StyledCourses = styled.div`
  min-height: 100vh;
`
const Course = styled.div`
  h2 {
    padding: 3rem 0;
  }

  .line {
    height: 0.3rem;
    width: 100%;
    background-color: #ccc;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    height: 60vh;
    object-position: center;
    object-fit: cover;
  }
`
export default Courses;