import * as React from 'react';
import styled from "styled-components";
import { Fork } from 'Svgs/Fork';

const ForkHeaderStyled = styled.h2`
  height: 50px;
`;


export const Nav = () => (
  <header>
    <nav>
      <ForkHeaderStyled>Narmander.js</ForkHeaderStyled>
      <span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
        <span>BBro</span>
        <span>BBro</span>
      </span>
    </nav>
    <Fork />
  </header>
);
