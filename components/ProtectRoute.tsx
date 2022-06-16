import React, { useEffect, useState } from 'react';
import { addTokenToHeaders } from '../api/main/axios';
import { checkThunk } from '../store/main/authThunks';
import { useAppDispatch, useAppSelector } from '../store/store';
import cookies from '../utils/cookies';

type Props = {
  children: React.ReactNode;
  protected: boolean;
}

const ProtectRoute: React.FC<Props> = (props) => {
  const [firstLoading, setFirstLoading] = useState(true);
  const user = useAppSelector(({ main }) => main.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = cookies.token.get();
    if (token) {
      addTokenToHeaders(token);
      dispatch(checkThunk());
    }
    setFirstLoading(false);
  }, [dispatch]);

  if (props.protected && !user) {
    return (
      <p>PROTECTED ROUTE - Please authorise first!</p>
    );
  }
  return (
    <>
      {props.children}
    </>
  );
};

export default ProtectRoute;
