import * as React from 'react';
import { Fork } from 'Svgs/Fork';

export const Nav = () => (
  <header>
    <nav>
      <h2>Narmander.js</h2>
      <span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </span>
    </nav>
    <Fork />
  </header>
);
