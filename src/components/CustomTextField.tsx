import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';
import styled from 'styled-components';

const CustomTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      {...props}
    />
  );
};

const StyledTextField = styled(TextField)`
  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.red};
  }
  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.white};
  }
  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.colors.darkWhite};
    & fieldset {
      border-color: ${({ theme }) => theme.colors.darkWhite};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.white};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default CustomTextField;
