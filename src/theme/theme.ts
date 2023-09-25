// theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      main: string;
    };
    cusred: {
      main: string;
    };
    loader: {
      main: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      main: string;
    };
    cusred?: {
      main: string;
    };
    loader?: {
      main: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Your primary color
    },
    secondary: {
      main: '#fff', // Your secondary color
    },
    custom: {
      main: '#E3D026', // Your custom color
    },
    cusred: {
      main: '#FF0000', // Your cusred color
    },
    loader:{
      main:'#FF69B4'
    }
  },
  typography: {
    // Customize typography here
  },
});

export default theme;
