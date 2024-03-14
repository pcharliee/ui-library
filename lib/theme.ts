import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h5: {
      fontSize: 20,
      color: '#163d83',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#163d83', // Adjust as needed
    },
    secondary: {
      main: '#dc004e', // Adjust as needed
    },
  },
} as ThemeOptions);

export { theme };
