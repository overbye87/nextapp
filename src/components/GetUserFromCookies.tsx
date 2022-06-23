import React, { useEffect } from 'react';
import { addTokenToHeaders } from '../api/main/axios';
import { checkThunk } from '../store/main/authThunks';
import { useAppDispatch, useAppSelector } from '../store/store';
import cookies from '../utils/cookies';

const GetUserFromCookies: React.FC = () => {
  const user = useAppSelector(({ main }) => main.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = cookies.token.get();
    if (!user && token) {
      addTokenToHeaders(token);
      dispatch(checkThunk());
    }
  }, [dispatch, user]);

  return null;
};

export default GetUserFromCookies;
