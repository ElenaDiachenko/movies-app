import { ReactNode } from 'react';
import { StyledButton } from './AuthButton.styled';

type AuthProps = {
  onClick: () => void;
  children: ReactNode;
};

export const AuthButton = ({ onClick, children }: AuthProps) => {
  return (
    <StyledButton onClick={() => onClick()} type="button">
      {children}
    </StyledButton>
  );
};
