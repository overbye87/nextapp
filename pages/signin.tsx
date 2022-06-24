import type { NextPage } from 'next';
import { useRef } from 'react';
import styled from '@emotion/styled';

import SignInForm from '../src/components/SignInForm';
import { signInThunk } from '../src/store/main/authThunks';
import { useAppDispatch, useAppSelector } from '../src/store/store';
import { ISignIn } from '../src/types/main';

const SignIn: NextPage = () => {
  const user = useAppSelector(({ main }) => main.user);
  // const isServer = useRef(typeof window === 'undefined');
  // console.log(isServer);
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: ISignIn) => {
    dispatch(signInThunk(values));
  };

  return (
    <>
      <StyledTitle>Sign In</StyledTitle>
      {
        user
          ? <p>{'You are already sign in. Please log out first.'}</p>
          : <SignInForm onSubmit={handleSubmit}/>
      }
    </>
  );
};

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
`;

export default SignIn;
