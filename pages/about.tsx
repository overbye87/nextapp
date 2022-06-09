/* eslint-disable max-len */
import { NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';

const About: NextPage = () => {
  const handleClick = () => {
    Router.push('/');
  };

  return (
    <>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum rem distinctio id harum tempore debitis, officia tempora, expedita quam ipsum praesentium temporibus, aliquid quibusdam est velit placeat ullam atque!</p>
      <Image src="/public/images/profile.jpg"
        height={144}
        width={144}
        alt="Image"
      />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit necessitatibus ex ullam facere, eius nesciunt reprehenderit.</p>
      <button onClick={handleClick}>Back to home</button>
      <button onClick={() => { Router.push('/users'); }}>Users</button>
    </>
  );
};

export default About;
