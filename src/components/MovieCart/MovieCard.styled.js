import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerCard = styled.div`
  display: flex;
  width: 100%;

  gap: 30px;
  margin-top: 30px;
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
  font-weight: 500;
  line-height: 1.33;
`;
export const DescriptionName = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.33;
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
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
