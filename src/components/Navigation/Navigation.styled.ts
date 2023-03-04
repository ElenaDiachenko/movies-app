import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  margin-right: 23px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.medium};
  box-shadow: ${p => p.theme.boxShadows.primary};
  transition: ${p => p.theme.transition};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.03);
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;

export const Menu = styled.nav<{ open: boolean }>`
  @media (max-width: 499px) {
    display: flex;
    flex-flow: column nowrap;

    padding: 16px;
    gap: 28px;
    background: ${p => p.theme.colors.bg};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;
    padding-top: 64px;
    transition: transform 0.3s ease-in-out;
  }
`;
