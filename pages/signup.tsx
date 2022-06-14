/* eslint-disable max-len */
import type { NextPage } from 'next';
import styled from 'styled-components';

const SignUp: NextPage = () => {
  return (
    <>
      <StyledTitle>Sign Up</StyledTitle>
      <p>Sign Up</p>
    </>
  );
};

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export default SignUp;
