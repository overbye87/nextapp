/* eslint-disable @typescript-eslint/ban-types */
import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import styled from '@emotion/styled';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      {...props}
    >
      { props.children }
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.red};
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.red};
  }
`;

export default CustomButton;
