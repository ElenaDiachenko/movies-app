import { FC } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

import { StyledHamburger } from './Hamburger.styled';

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}
export const Hamburger: FC<Props> = ({ open, setOpen }) => {
  return (
    <StyledHamburger
      open={open}
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-label="Menu"
    >
      {open ? (
        <CgClose size={24} aria-hidden="true" />
      ) : (
        <GiHamburgerMenu size={24} aria-hidden="true" />
      )}
    </StyledHamburger>
  );
};
