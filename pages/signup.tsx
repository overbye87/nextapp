/* eslint-disable max-len */
import type { NextPage } from 'next';
import styled from '@emotion/styled';

import SignUpForm from '../src/components/SignUpForm';
import { signUpThunk } from '../src/store/main/authThunks';
import { useAppDispatch } from '../src/store/store';
import { ISignUp } from '../src/types/main';

const SignUp: NextPage = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: ISignUp) => {
    dispatch(signUpThunk(values));
  };

  return (
    <>
      <StyledTitle>Sign Up</StyledTitle>
      <SignUpForm onSubmit={handleSubmit}/>
    </>
  );
};

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
`;

export default SignUp;
