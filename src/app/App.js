import React from 'react';
import GlobalStyle from "../components/GlobalStyle";
import AboutUs from "../pages/AboutUs";
import Nav from "../components/Nav";

const App = () => {
    return (
        <div className={"app"}>
            <GlobalStyle />
            <Nav />
            <AboutUs/>
        </div>
    );
};

export default App;