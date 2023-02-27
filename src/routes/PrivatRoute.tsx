import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';

interface IProps {
  component: ReactElement;
  redirectTo: string;
}

const PrivateRoute: FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const authUser = useStore(state => state.authUser, shallow);

  return !authUser ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
