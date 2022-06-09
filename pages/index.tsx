/* eslint-disable max-len */
import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <>
      <StyledTitle>Home</StyledTitle>
      <p>Lorem, ipsum.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus iste cumque sint molestiae. Quibusdam similique nihil facilis numquam corporis quaerat! Natus maiores sequi dolore nisi quasi accusantium quos quaerat?</p>
    </>
  );
};

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export default Home;
