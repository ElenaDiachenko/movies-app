import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
  gap: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.boxShadows.accent};
`;

export const MoviePoster = styled.img`
  width: auto;
  height: 400px;
  margin-bottom: ${p => p.theme.space[3]}px;
  object-fit: cover;
`;
export const MovieTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.heading};
`;
export const DescriptionName = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  letter-spacing: 0.5px;
`;
export const DescriptionTextItem = styled.li`
  font-size: 14px;
  letter-spacing: 0.5px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
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
    color: ${p => p.theme.colors.accent};
  }
`;
