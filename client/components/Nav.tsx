import * as React from 'react';
import { Fork } from 'Svgs/Fork';

export interface NavProps {
  compiler: string;
  framework: string;
}

export const Nav = (props: NavProps) => (
  <header>
    <nav>
      <h2>Narmander.js</h2>
      <span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </span>
      <Fork />
      <Fork />
      <Fork />
    </nav>
  </header>
);
