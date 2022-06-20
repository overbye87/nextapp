import React from 'react';
import { useAppSelector } from '../store/store';

type Props = {
  children: React.ReactNode;
  protected: boolean;
}

const ProtectRoute: React.FC<Props> = (props) => {
  const user = useAppSelector(({ main }) => main.user);

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
