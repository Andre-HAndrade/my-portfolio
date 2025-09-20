import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f0f0f0', // A light gray for primary text and elements
    },
    secondary: {
      main: '#b0b0b0', // A slightly darker gray for secondary text
    },
    background: {
      default: '#0a0a0a', // A very dark gray, almost black
      paper: '#1a1a1a',   // A dark gray for card-like elements
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h3: {
        fontSize: '2rem',
        fontWeight: 500,
    }
  },
});

theme = responsiveFontSizes(theme);

export { theme };
