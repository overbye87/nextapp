import { NextPage } from 'next';
import Router from 'next/router';

const About: NextPage = () => {
  const handleClick = () => {
    Router.push('/');
  };

  return (
    <>
      <h1>About</h1>
      <button onClick={handleClick}>Back to home</button>
      <button onClick={() => { Router.push('/posts'); }}>posts</button>
    </>
  );
};

export default About;
