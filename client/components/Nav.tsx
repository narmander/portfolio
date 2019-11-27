import * as React from "react";
import styled from "styled-components";
import { Fork } from "Svgs/Fork";
const image = require('../assets/images/webpack-icon.jpg');

const NavStyled = styled.h2`
  height: 5px;
  color: orangered;
  font-family: Comic Sans MS;
`;

export const Nav = () => (
  <header>
    <nav>
      <NavStyled>Narmander.js</NavStyled>
      <span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </span>
    </nav>
    <img src={image} width="100" height="100" />
    <Fork />
  </header>
);
