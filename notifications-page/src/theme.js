import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 900, 
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: 'hsl(1, 90%, 64%)',
      dark: 'hsl(219, 85%, 26%)',
      light: 'hsl(210, 60%, 98%)',
      grayishBlue: 'hsl(219, 14%, 63%)',
      darkBlue: 'hsl(224, 21%, 14%)',
      contrastText: 'hsl(0, 0%, 100%)',
    },
    
    text: {
      primary: 'hsl(219, 12%, 42%)',
      secondary: '#000',
      main: '#000'
    },
    background: {
      default: 'hsl(211, 68%, 94%)',
      paper: 'hsl(0, 0%, 100%)',
      blue: 'hsl(219, 85%, 26%)'

    },
    accentBackground: {
        blue: 'hsl(219, 85%, 26%)',
      },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    body1: {
      fontSize: 16,
      fontWeight: 500,
    },
    h1: {
      // Add your styles for h1
      fontSize: 20,
      fontWeight: 700,
     
    },
    // Add other variants like h2, h3, body2 as needed
  },
});

export default theme;
