/* eslint-disable max-len */
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';

type Props = {
  header: string;
  p1: string;
}

const About: NextPage<Props> = ({ header, p1 }) => {
  const handleClick = () => {
    Router.push('/');
  };

  return (
    <>
      <h1>{header}</h1>
      <p>{p1}</p>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Image"
      />
      <p>{p1}</p>
      <button onClick={handleClick}>Back to home</button>
      <button onClick={() => { Router.push('/users'); }}>Users</button>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const header = 'About';
  const p1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum rem distinctio id harum tempore debitis, officia tempora, expedita quam ipsum praesentium temporibus, aliquid quibusdam est velit placeat ullam atque!';
  return {
    props: { header, p1 },
  };
};

export default About;
