import Button from '@mui/material/Button';
import React from 'react';
import styled from 'styled-components';
import { removeTokenFromHeaders } from '../api/main/axios';
import { setCurrentUser } from '../store/main/mainSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import cookies from '../utils/cookies';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(({ main }) => main.user);

  const handleLogOut = () => {
    cookies.token.remove();
    cookies.isAuth.remove();
    removeTokenFromHeaders();
    dispatch(setCurrentUser(null));
  };

  return (
    <>
      <StyledHeader>
        <span>{'Header: '}{user ? 'LOGIN' : 'NOT LOGIN'}</span>
        {!user || <Button onClick={handleLogOut}>Log out</Button>}
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-bottom: 1em;
  background: ${({ theme }) => theme.colors.gray};;
`;

export default Header;
