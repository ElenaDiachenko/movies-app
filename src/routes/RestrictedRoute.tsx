import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';

type RestrictedRouteProps = {
  component: ReactElement;
  redirectTo?: string;
};

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/movies',
}: RestrictedRouteProps) => {
  const authUser = useStore(state => state.authUser, shallow);

  return authUser ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
