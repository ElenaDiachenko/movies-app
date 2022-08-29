import styled from 'styled-components';

export const ButtonLoad = styled.button`
  max-width: 150px;
  margin: ${p => p.theme.space[5]}px auto;
  padding: 8px 16px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.accent};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: ${p => p.theme.colors.white};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
