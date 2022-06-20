import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>Footer &#169; Lorem </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 1em;
  margin-top: 1em;
  background: ${({ theme }) => theme.colors.gray};;
`;

export default Footer;
