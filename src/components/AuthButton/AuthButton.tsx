import { FC, ReactNode } from 'react';
import { StyledButton } from './AuthButton.styled';

type AuthProps = {
  onClick: () => void;
  children: ReactNode;
};

export const AuthButton: FC<AuthProps> = ({ onClick, children }) => {
  return (
    <StyledButton onClick={() => onClick()} type="button">
      {children}
    </StyledButton>
  );
};
