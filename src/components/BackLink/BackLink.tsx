import { ReactNode } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

type BackLinkProps = {
  to: string;
  children: ReactNode;
};

export const BackLink = ({ to, children }: BackLinkProps) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="20" />
      {children}
    </StyledLink>
  );
};
