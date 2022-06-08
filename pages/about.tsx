import { NextPage } from 'next';
import Router from 'next/router';
import MainLayout from '../layouts/MainLayout';

const About: NextPage = () => {
  const handleClick = () => {
    Router.push('/');
  };

  return (
    <MainLayout>
      <h1>About</h1>
      <button onClick={handleClick}>Back to home</button>
      <button onClick={() => { Router.push('/posts'); }}>posts</button>
    </MainLayout>
  );
};

export default About;
