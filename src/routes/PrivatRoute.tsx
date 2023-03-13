import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';

type PrivateRouteProps = {
  component: ReactElement;
  redirectTo: string;
};

const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
}: PrivateRouteProps) => {
  const authUser = useStore(state => state.authUser, shallow);

  return !authUser ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
