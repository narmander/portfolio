import * as React from 'react';

export interface IconProps {
    compiler: string;
    framework: string;
  }
  
  export const Icon = (props: IconProps) => (
    <header>
      <nav>
        <h2>Narmander.js</h2>
        <span>
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </span>
      </nav>
    </header>
  );