import React, {useEffect, useState} from 'react';
import {Container} from "../styles/styles";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {courseState} from "../courseState"
import Award from "./Award";
import {pageAnimation} from "../animation";
import {motion} from "framer-motion";

const CourseDetail = () => {
    const history = useHistory()
    const url = history.location.pathname
    const [courses, setCourses] = useState(courseState())
    const [course, setCourse] = useState(null)

    useEffect(() => {
        const currentCourse = courses.filter(c => c.url === url)
        setCourse(currentCourse[0])
    }, [courses, url]);
    return (
        <>
            {course && (
                <Details variants={pageAnimation} initial={"hidden"} animate={"show"} exit={"exit"}>
                    <Header>
                        <h2>{course.title}</h2>
                        <img src={course.mainImg} alt={course.title}/>
                        <Container>
                            <Awards>
                                {course && course.awards.map((award, index) => (<Award award={award} key={index}/>))}
                            </Awards>
                        </Container>
                        <img src={course.secondaryImg} alt={course.title}/>
                    </Header>
                </Details>
            )}
        </>

    );
};
const Details = styled(motion.div)``
const Header = styled.div`
  color: #fff;
  padding-top: 10vh;

  h2 {
    text-align: center;
    padding: 1rem 0;
  }

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
    object-position: center;
  }
`
const Awards = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 2rem 0;
`
export default CourseDetail;