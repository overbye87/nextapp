import type { NextPage } from 'next';
import styled from 'styled-components';

import SignInForm from '../components/SignInForm';
import { signInThunk } from '../store/main/authThunks';
import { useTypedDispatch, useTypedSelector } from '../store/store';
import { ISignIn } from '../types/main';

const SignIn: NextPage = () => {
  const user = useTypedSelector(({ main }) => main.user);
  const dispatch = useTypedDispatch();
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
  color: ${({ theme }) => theme.colors.white};
`;

export default SignIn;
