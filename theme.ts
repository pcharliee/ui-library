import { createTheme, ThemeOptions } from '@mui/material/styles';

// Light theme
const theme = createTheme({
  typography: {
    h5: {
      fontSize: 20,
      color: '#000087',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2', // Adjust as needed
    },
    secondary: {
      main: '#dc004e', // Adjust as needed
    },
  },
} as ThemeOptions);

export { theme };
