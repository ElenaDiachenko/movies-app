import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerCard = styled.div`
  display: flex;
  width: 100%;
  gap: ${p => p.theme.space[4]}px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.medium};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.03);
  }
  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }
`;
