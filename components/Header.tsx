import React from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../store/store';
import CustomButton from './CustomButton';

const Header = () => {
  const user = useTypedSelector(({ main }) => main.user);
  return (
    <>
      <StyledHeader>
        <span>{'Header: '}{user ? 'LOGIN' : 'NOT LOGIN'}</span>
        {!user || <CustomButton>Log out</CustomButton>}
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-bottom: 1em;
  background: ${({ theme }) => theme.colors.gray};;
`;

export default Header;
