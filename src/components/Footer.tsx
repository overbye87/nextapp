import React from 'react';
import styled from '@emotion/styled';
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
  background: ${(props) => props.theme.colors.gray};
`;

export default Footer;
