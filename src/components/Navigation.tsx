import Link from 'next/link';
import styled from '@emotion/styled';

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <Link href={'/'}><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/users"><a>Users</a></Link>
      <Link href="/signin"><a>SignIn</a></Link>
      <Link href="/signup"><a>SignUp</a></Link>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  // padding-left: 0.5em;
  margin-bottom: 1em;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  // background: ${(props) => props.theme.colors.gray};
  a {
    padding: 0.2em 1em;
    border-radius: 0.1em;
    background-color: ${(props) => props.theme.colors.darkBlack};
  }
`;

export default Navigation;
