import React from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {motion} from "framer-motion";

const Nav = () => {

    const {pathname} = useLocation()
    return (
        <StyledNav>
            <h1>
                <Link id={"logo"} to={"/"}>e-Learning</Link>
            </h1>
            <ul>
                <li>
                    <Link to={"/"}>About us</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}}
                          animate={{width: pathname === "/" ? "50%" : ""}}/>
                </li>
                <li>
                    <Link to={"/courses"}>Courses</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}}
                          animate={{width: pathname === "/courses" ? "50%" : ""}}/>
                </li>
                <li>
                    <Link to={"/contact"}>Contact us</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}}
                          animate={{width: pathname === "/contact" ? "50%" : ""}}/>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 10rem;
  background-color: #383e47;


  a {
    color: #fff;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: 'Silkscreen', sans-serif;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`
const Line = styled(motion.div)`
  position: absolute;
  top: 150%;
  left: 60%;
  background-color: #30bee1;
  height: 0.2rem;
`
export default Nav;