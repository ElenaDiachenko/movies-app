import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  width: 90%;
  height: calc(100vh - 64px);

  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 680px;
  }
`;
export const Title = styled.h2`
  text-aligh: center;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  @media screen and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-top: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Message = styled(ErrorMessage)`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  border: 2px solid transparent;
  box-shadow: ${p => p.theme.boxShadows.primary};
  outline: transparent;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};

  &:focus {
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  width: 22%;
  height: 44px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: 1px solid transparent;
  border-radius: ${p => p.theme.radii.sm};
  transition: ${p => p.theme.transition};

  &:hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.accent};
    transform: scale(1.01);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;