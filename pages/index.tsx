/* eslint-disable max-len */
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <>
      <StyledTitle>Home</StyledTitle>
      <p>Lorem, ipsum.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <Image
        src="/images/nextjs-logo.svg"
        height={244}
        width={344}
        alt="Image"
      />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellendus iste cumque sint molestiae. Quibusdam similique nihil facilis numquam corporis quaerat! Natus maiores sequi dolore nisi quasi accusantium quos quaerat?</p>
    </>
  );
};

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

export default Home;
