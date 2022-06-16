/* eslint-disable no-console */
/* eslint-disable no-alert */
import { AxiosError } from 'axios';
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next/types';
import { getAllUsers } from '../api/jsonplaceholder/api';
import { IUserJson } from '../interfaces/user';

type Props = {
  users: IUserJson[];
  protected: boolean;
}

const Users: NextPage<Props> = (props) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {
          props.users.map((person) => (
            <li key={person.name}>
              <Link href={`/user/${person.id}`}><a>{person.name}</a></Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const users = await getAllUsers();
    return { props: { users, protected: true } };
  } catch (error) {
    console.log((error as AxiosError).message);
  }
  return { props: { users: [], protected: true } };
};

export default Users;
