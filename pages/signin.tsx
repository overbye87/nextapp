/* eslint-disable max-len */
import type { NextPage } from 'next';
import styled from 'styled-components';
import SignInForm from '../components/SignInForm';
import { signInThunk } from '../store/main/authThunks';
import { useTypedDispatch } from '../store/store';
import { ISignIn } from '../types/main';

const initialValues: ISignIn = {
  email: 'admin@admin.ru',
  password: 'admin',
};

const SignIn: NextPage = () => {
  const dispatch = useTypedDispatch();
  const handleSubmit = async (values: ISignIn) => {
    dispatch(signInThunk(values));
  };

  return (
    <>
      <StyledTitle>Sign In</StyledTitle>
      <SignInForm initialValues={initialValues} onSubmit={handleSubmit}/>
    </>
  );
};

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export default SignIn;
