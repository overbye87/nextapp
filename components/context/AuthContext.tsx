import React, { createContext } from 'react';
import { useTypedSelector } from '../../store/store';
import { IUser } from '../../types/main';

const authContext = createContext<IUser | null>(null);
const { Provider } = authContext;

type Props = {
  children: React.ReactNode;
}

const AuthContext: React.FC<Props> = ({ children }) => {
  const user = useTypedSelector(({ main }) => main.user);
  return (
    <Provider
      value={user}
    >
      {children}
    </Provider>
  );
};

export default AuthContext;
