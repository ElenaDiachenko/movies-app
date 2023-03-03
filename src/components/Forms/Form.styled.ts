import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Container = styled.main`
  width: 90%;
  height: 100vh;

  margin: 0 auto;
  padding-bottom: 16px;
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
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 400px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 35%;
  height: 50px;

  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  border: 1px solid transparent;
  border-radius: ${p => p.theme.radii.sm};
  transition: ${p => p.theme.transition};

  &:hover,
  :focus {
    transform: scale(1.01);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 40px;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};

  &:hover,
  :focus {
    border: 1px solid ${p => p.theme.colors.accent};
  }
`;
export const ButtonStyledLink = styled(Button)`
  background-color: ${p => p.theme.colors.bg};
  box-shadow: ${p => p.theme.boxShadows.primary};
  color: ${p => p.theme.colors.text};
  &:hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
