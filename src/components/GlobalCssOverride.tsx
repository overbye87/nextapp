import GlobalStyles from '@mui/material/GlobalStyles';
import React from 'react';
import { globalStyles } from '../styles/global.css';

const GlobalCssOverride = () => {
  return (
    <>
      <GlobalStyles styles={globalStyles} />
    </>
  );
};

export default GlobalCssOverride;
