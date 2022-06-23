import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../store/store';
import cookies from '../utils/cookies';

const Footer = () => {
  const user = useAppSelector(({ main }) => main.user);
  return (
    <StyledFooter>
      <div>
        {'Footer '}
        &#169;
        { 'Lorem '}
        {/* <br/>
        {user?.firstName} */}
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 1em;
  margin-top: 1em;
  background: ${({ theme }) => theme.colors.gray};;
`;

export default Footer;
