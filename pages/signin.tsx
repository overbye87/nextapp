import type { NextPage } from 'next';
import styled from 'styled-components';

import SignInForm from '../src/components/SignInForm';
import { signInThunk } from '../src/store/main/authThunks';
import { useAppDispatch, useAppSelector } from '../src/store/store';
import { ISignIn } from '../src/types/main';

const SignIn: NextPage = () => {
  const user = useAppSelector(({ main }) => main.user);
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
  color: ${({ theme }) => theme.colors.white};
`;

export default SignIn;
