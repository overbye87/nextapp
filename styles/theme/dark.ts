import { createTheme } from '@mui/material/styles';

const colors = {
  gray: '#484848',
  red: '#f44336',
  black: '#121212',
  darkBlack: 'black',
  white: '#efefdf',
  darkWhite: '#afafaf',
};

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: colors.white,
          },
          '& .MuiInputLabel-root': {
            color: colors.darkWhite,
          },
          '& label.Mui-focused': {
            color: colors.white,
          },
          '& .MuiOutlinedInput-root': {
            color: colors.darkWhite,
            '& fieldset': {
              'border-color': colors.darkWhite,
            },
            '& :hover fieldset': {
              'border-color': colors.white,
            },
            '& .Mui-focused fieldset': {
              'border-color': colors.white,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.red,
          backgroundColor: colors.gray,

        },
      },
    },
  },
});

export default theme;
