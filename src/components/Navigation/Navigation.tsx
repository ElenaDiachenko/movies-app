import { useState } from 'react';
import { useStore } from 'stores/store';
import { shallow } from 'zustand/shallow';

import { Hamburger } from 'components/Hamburger/Hamburger';
import { Menu, Link } from './Navigation.styled';

export const Navigation = () => {
  const { user } = useStore(
    state => ({
      user: state.authUser,
    }),
    shallow
  );
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <Menu open={open} role="navigation" aria-label="primary">
        <Link to="/" onClick={() => close()}>
          Home
        </Link>
        {user ? (
          <>
            <Link to="/movies" onClick={() => close()}>
              Movies
            </Link>
            <Link to="/account" onClick={() => close()}>
              Account
            </Link>
          </>
        ) : null}
      </Menu>
      {user ? <Hamburger open={open} setOpen={setOpen} /> : null}
    </>
  );
};
