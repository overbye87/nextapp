import { createTheme } from '@mui/material/styles';
import emotionTheme from '../emotion/emotionTheme';

const { colors } = emotionTheme;

const muiTheme = createTheme({
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

export default muiTheme;
