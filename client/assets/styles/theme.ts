import { DefaultTheme } from 'styled-components'
import { ORANGE, BEIGE } from 'Styles/colors';

interface Theme {
    readonly color: string;
    readonly primary: string;
    readonly secondary: string;
    readonly background: string;
  }
  
const LightTheme: DefaultTheme = {
  colors: {
    color: BEIGE,
    primary: ORANGE,
    secondary: 'magenta',
    background: BEIGE,
  },
}

export { LightTheme }