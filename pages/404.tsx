import Link from 'next/link';
import { NextPage } from 'next/types';

const Error: NextPage = () => {
  return (
    <>
      <h1>Error 404</h1>
      <p>
        {'Page not found. '}
        <Link href="/"><a>Back to home.</a></Link>
      </p>
    </>
  );
};

export default Error;
