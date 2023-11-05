import React, {useEffect, useState} from 'react';
import {Container} from "../styles/styles";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {courseState} from "../courseState"

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
            {course && (<Container>
                <Details>
                    <Header>
                        <h1>{course.title}</h1>
                        <img src={course.mainImg} alt={course.title}/>
                    </Header>
                </Details>
            </Container>)}
        </>

    );
};
const Details = styled.div``
const Header = styled.div``
export default CourseDetail;