import { useStore } from 'stores/store';
import { shallow } from 'zustand/shallow';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { user } = useStore(
    state => ({
      user: state.authUser,
    }),
    shallow
  );

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/movies">Movies</Link>
          <Link to="/account">Account</Link>
        </>
      ) : null}
    </nav>
  );
};
