/* eslint-disable @typescript-eslint/ban-types */
import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import styled from 'styled-components';

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
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.red};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

export default CustomButton;
