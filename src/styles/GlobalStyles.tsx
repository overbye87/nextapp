import { createStyles, makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      height: '100%',
      width: '100%',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  },
}));

const GlobalStyles = () => {
  return <Global styles={}></Global>;
};

export default GlobalStyles;
