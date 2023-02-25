import { Suspense, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { Loader } from '../Loader/Loader';
import { MdDarkMode, MdLightMode, MdLogout } from 'react-icons/md';
import { LogoutButton } from 'components/LogoutButton/LogoutButton';
import {
  Container,
  HeaderWrap,
  Link,
  Switch,
  LogOutText,
} from './SharedLayout.styled';
import { Box } from '../Box';
import { useStore } from 'stores/store';

interface IProps {
  toggleTheme: () => void;
  theme: string;
}

export const SharedLayout: FC<IProps> = ({ toggleTheme, theme }) => {
  const { loading, error, onLogout, user } = useStore(
    state => ({
      loading: state.loading,
      error: state.error,
      onLogout: state.logoutUser,
      user: state.authUser,
    }),
    shallow
  );

  console.log(user, 'logout');

  return (
    <Container>
      <HeaderWrap>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Switch onClick={toggleTheme}>
            {theme === 'light' ? (
              <MdLightMode size={24} />
            ) : (
              <MdDarkMode size={24} />
            )}
          </Switch>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Box>
        {user ? (
          <LogoutButton onClick={onLogout}>
            <LogOutText>Logout</LogOutText>
            <MdLogout size={22} />
          </LogoutButton>
        ) : null}
      </HeaderWrap>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
