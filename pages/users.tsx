/* eslint-disable no-console */
/* eslint-disable no-alert */
import { AxiosError } from 'axios';
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next/types';
import { getAllUsers } from '../api/jsonplaceholder/api';
import { IUserJson } from '../interfaces/user';

type Props = {
  users: IUserJson[];
}

const Users: NextPage<Props> = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {
          users.map((person) => (
            <li key={person.name}>
              <Link href={`/user/${person.id}`}><a>{person.name}</a></Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      protected: true,
    },
  };
};

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  try {
    const users = await getAllUsers();
    return { props: { users } };
  } catch (error) {
    console.log((error as AxiosError).message);
  }
  return { props: { users: [] } };
};

export default Users;
