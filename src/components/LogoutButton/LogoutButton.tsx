import { FC, ReactNode } from 'react';
import { StyledButton } from './LogoutButton.styled';

type LogoutProps = {
  onClick: () => void;
  children: ReactNode;
};

export const LogoutButton: FC<LogoutProps> = ({ onClick, children }) => {
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>;
};
