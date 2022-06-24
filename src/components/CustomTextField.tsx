import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';
import styled from '@emotion/styled';

const CustomTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      {...props}
    />
  );
};

const StyledTextField = styled(TextField)`
  & .MuiInputLabel-root {
    color: ${(props) => props.theme.colors.red};
  }
  & label.Mui-focused {
    color: ${(props) => props.theme.colors.white};
  }
  & .MuiOutlinedInput-root {
    color: ${(props) => props.theme.colors.darkWhite};
    & fieldset {
      border-color: ${(props) => props.theme.colors.darkWhite};
    }
    &:hover fieldset {
      border-color: ${(props) => props.theme.colors.white};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => props.theme.colors.white};
    }
  }
`;

export default CustomTextField;
