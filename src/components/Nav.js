import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link id={"logo"} to={"/"} >e-Learning</Link>
            </h1>
            <ul>
                <li><Link to={"/"}>About us</Link></li>
                <li><Link to={"/courses"}>Courses</Link></li>
                <li><Link to={"/contact"}>Contact us</Link></li>
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

export default Nav;