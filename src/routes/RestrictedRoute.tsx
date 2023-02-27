import { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';

interface IProps {
  component: ReactElement;
  redirectTo?: string;
}

const RestrictedRoute: FC<IProps> = ({
  component: Component,
  redirectTo = '/movies',
}) => {
  const authUser = useStore(state => state.authUser, shallow);

  return authUser ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
