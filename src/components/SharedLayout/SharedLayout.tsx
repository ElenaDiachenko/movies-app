import { Suspense, FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { Loader } from '../Loader/Loader';
import { MdDarkMode, MdLightMode, MdLogout, MdLogin } from 'react-icons/md';
import { AuthButton } from 'components/AuthButton/AuthButton';
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
  const navigate = useNavigate();
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
          <AuthButton onClick={onLogout}>
            <LogOutText>Logout</LogOutText>
            <MdLogout size={22} />
          </AuthButton>
        ) : (
          <AuthButton onClick={() => navigate('/login')}>
            <LogOutText>LogIn</LogOutText>
            <MdLogin size={22} />
          </AuthButton>
        )}
      </HeaderWrap>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
