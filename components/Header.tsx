import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>Header</StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 1em;
  margin-bottom: 1em;
  background: ${({ theme }) => theme.colors.gray};;
`;

export default Header;
