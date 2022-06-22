/* eslint-disable no-console */
import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
import cookies from '../../utils/cookies';
import Footer from '../Footer';
import Header from '../Header';
import Navigation from '../Navigation';

type Props = {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = (props) => {
  useEffect(() => {
    cookies.isAuth.remove();
  }, []);
  return (
    <>
      <Head>
        <title>Layout title</title>
        <meta name="description" content="Lorem ipsum dolor sit amet."/>
        <meta name="keywords" content="Lorem, ipsum, dolor, sit, amet"/>
        <meta charSet="utf-8"/>
      </Head>
      <StyledSection>
        <Header />
        <Navigation />
        <StyledMain>
          {props.children}
        </StyledMain>
        <Footer />
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 4em;
  width: 900px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
`;
const StyledMain = styled.main`
  flex: 1;
`;

export default MainLayout;
