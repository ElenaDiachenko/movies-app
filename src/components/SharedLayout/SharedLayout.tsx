import { Suspense, FC } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';

import { Loader } from '../Loader/Loader';
import { MdDarkMode, MdLightMode, MdLogout, MdLogin } from 'react-icons/md';
import { AuthButton } from 'components/AuthButton/AuthButton';
import { Navigation } from 'components/Navigation/Navigation';
import {
  Container,
  HeaderWrap,
  Navmenu,
  Switch,
  LogOutText,
} from './SharedLayout.styled';

import { useStore } from 'stores/store';

interface IProps {
  toggleTheme: () => void;
  theme: string;
}

export const SharedLayout: FC<IProps> = ({ toggleTheme, theme }) => {
  const { onLogout, user } = useStore(
    state => ({
      onLogout: state.logoutUser,
      user: state.authUser,
    }),
    shallow
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container>
      <HeaderWrap>
        <Navmenu>
          <Switch
            onClick={toggleTheme}
            role="button"
            title="Toggles light & dark theme"
            aria-label="auto"
            aria-live="polite"
          >
            {theme === 'light' ? (
              <MdLightMode size={24} aria-hidden="true" />
            ) : (
              <MdDarkMode size={24} aria-hidden="true" />
            )}
          </Switch>
          <Navigation />
        </Navmenu>
        {user ? (
          <AuthButton onClick={onLogout}>
            <LogOutText>LogOut</LogOutText>
            <MdLogout size={22} aria-hidden="true" />
          </AuthButton>
        ) : pathname !== '/login' && pathname !== '/register' ? (
          <AuthButton onClick={() => navigate('/login')}>
            <LogOutText>LogIn</LogOutText>
            <MdLogin size={22} aria-hidden="true" />
          </AuthButton>
        ) : null}
      </HeaderWrap>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
