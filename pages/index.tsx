/* eslint-disable no-alert */
import axios, { AxiosError } from 'axios';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';

interface IPerson {
  address: {street: string, suite: string, city: string, zipcode: string};
  company: {name: string, catchPhrase: string, bs: string};
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

type Props = {
  users: IPerson[];
}

const Home: NextPage<Props> = ({ users }) => {
  return (
    <MainLayout>
      <Head>
        <title>Next title</title>
        <meta name="description" content="Lorem ipsum dolor sit amet."/>
        <meta name="keywords" content="Lorem, ipsum, dolor, sit, amet"/>
        <meta charSet="utf-8"/>
      </Head>
      <Title>Home page</Title>
      <p>
        <Link href="/about"><a>About</a></Link>
      </p>
      <p>
        <Link href="/post/1"><a>Post 1</a></Link>
      </p>
      <ul>
        {
          users.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))
        }
      </ul>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  let users: IPerson[] = [];
  try {
    const result = await axios.get<IPerson[]>('https://jsonplaceholder.typicode.com/users/');
    users = result.data;
  } catch (error) {
    alert((error as AxiosError).message);
  }
  return { props: { users } };
};

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default Home;
