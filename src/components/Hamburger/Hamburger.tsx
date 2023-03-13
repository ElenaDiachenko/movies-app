import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

import { StyledHamburger } from './Hamburger.styled';

type HamburgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Hamburger = ({ open, setOpen }: HamburgerProps) => {
  return (
    <StyledHamburger
      open={open}
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-label="Menu"
      title="Menu"
    >
      {open ? (
        <CgClose size={24} aria-hidden="true" />
      ) : (
        <GiHamburgerMenu size={24} aria-hidden="true" />
      )}
    </StyledHamburger>
  );
};
