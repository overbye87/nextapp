import React from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../store/store';

const Header = () => {
  const user = useTypedSelector(({ main }) => main.user);
  return (
    <>
      <StyledHeader>Header: {user ? 'LOGIN' : 'NOT LOGIN'}</StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  padding: 1em;
  margin-bottom: 1em;
  background: ${({ theme }) => theme.colors.gray};;
`;

export default Header;
