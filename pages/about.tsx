/* eslint-disable max-len */
import Button from '@mui/material/Button';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Router from 'next/router';
import { useAppSelector } from '../src/store/store';

type Props = {
  header: string;
  p1: string;
  protected: boolean;
}

const About: NextPage<Props> = ({ header, p1 }) => {
  const user = useAppSelector(({ main }) => main.user);

  return (
    <>
      <h1>{header}</h1>
      <h2>{user?.login}</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>{p1}</p>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Image"
      />
      <p>{p1}</p>
      <p>
        <Button onClick={() => { Router.push('/'); }}>Back to home</Button>
      </p>
      <p>
        <Button onClick={() => { Router.push('/users'); }}>Users</Button>
      </p>
    </>
  );
};

export const getServerSideProps = async () => {
  const header = 'About';
  const p1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum rem distinctio id harum tempore debitis, officia tempora, expedita quam ipsum praesentium temporibus, aliquid quibusdam est velit placeat ullam atque!';
  return {
    props: { header, p1, protected: true },
  };
};

export default About;
