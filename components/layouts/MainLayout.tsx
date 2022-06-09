import Head from 'next/head';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import Navigation from '../Navigation';

type Props = {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
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
          {children}
        </StyledMain>
        <Footer />
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  margin: 0 auto;
  padding: 4em;
  width: 500px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};;
`;
const StyledMain = styled.main`
  min-height: 550px;
`;

export default MainLayout;
