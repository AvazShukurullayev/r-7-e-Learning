import React from 'react';
import GlobalStyle from "../components/GlobalStyle";
import Nav from "../components/Nav";
import AboutUs from "../pages/AboutUs";
import Courses from "../pages/Courses";
import ContactUs from "../pages/ContactUs";
import {Switch, Route, useLocation} from "react-router-dom";
import CourseDetail from "../pages/CourseDetail";
import {AnimatePresence} from "framer-motion";
const App = () => {
    const location = useLocation()
    return (
        <div className={"app"}>
            <GlobalStyle />
            <Nav />
            <AnimatePresence mode={"wait"}>
                <Switch location={location} key={location.pathname}>
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
            </AnimatePresence>
        </div>
    );
};

export default App;