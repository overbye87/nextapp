import { createTheme } from '@mui/material/styles';
import emotionTheme from '../emotion/emotionTheme';

const muiTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: emotionTheme.colors.white,
          },
          '& .MuiInputLabel-root': {
            color: emotionTheme.colors.darkWhite,
          },
          '& label.Mui-focused': {
            color: emotionTheme.colors.white,
          },
          '& .MuiOutlinedInput-root': {
            color: emotionTheme.colors.darkWhite,
            '& fieldset': {
              'border-color': emotionTheme.colors.darkWhite,
            },
            '& :hover fieldset': {
              'border-color': emotionTheme.colors.white,
            },
            '& .Mui-focused fieldset': {
              'border-color': emotionTheme.colors.white,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: emotionTheme.colors.red,
          backgroundColor: emotionTheme.colors.gray,

        },
      },
    },
  },
}, emotionTheme);

export default muiTheme;
