import Link from 'next/link';

type Props = {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <h1>Navigation</h1>
      </nav>
      <main>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
