import React from 'react';
import GlobalStyle from "../components/GlobalStyle";
import Nav from "../components/Nav";
import AboutUs from "../pages/AboutUs";
import Courses from "../pages/Courses";
import ContactUs from "../pages/ContactUs";
import {Switch, Route} from "react-router-dom";
import CourseDetail from "../pages/CourseDetail";

const App = () => {
    return (
        <div className={"app"}>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path={"/"} exact>
                    <AboutUs />
                </Route>
                <Route path={"/courses"} exact>
                    <Courses />
                </Route>
                <Route path={"/courses/:id"}>
                    <CourseDetail />
                </Route>
                <Route path={"/contact"}>
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
};

export default App;