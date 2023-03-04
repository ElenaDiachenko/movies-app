import styled from 'styled-components';

export const StyledHamburger = styled.button<{ open: boolean }>`
  display: none;
  @media screen and (max-width: 499px) {
    position: ${({ open }) => (open ? `absolute` : `static`)};
    top: ${({ open }) => open && `8px`};
    left: ${({ open }) => open && `3%`};

    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${p => p.theme.radii.sm};
    border: none;
    outline: transparent;
    background: ${p => p.theme.colors.bg};
    color: ${p => p.theme.colors.text};
    font-weight: ${p => p.theme.fontWeights.medium};
    transition: ${p => p.theme.transition};

    &:hover,
    :focus {
      color: ${p => p.theme.colors.accent};
      transform: scale(1.01);
      cursor: pointer;
    }
  }
`;
