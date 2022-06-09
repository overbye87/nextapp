import Link from 'next/link';
import styled from 'styled-components';

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <Link href={'/'}><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/users"><a>Users</a></Link>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding-left: 1em;
  margin-bottom: 1em;
  display: flex;
  gap: 1em;
  // background: ${({ theme }) => theme.colors.gray};
  a {
    padding: 0.5em 1em;
    border-radius: 0.5em;
    background-color: ${({ theme }) => theme.colors.darkBlack};
  }
`;

export default Navigation;
