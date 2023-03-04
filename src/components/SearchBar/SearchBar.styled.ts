import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled.div`
  width: 100%;
  margin: ${p => p.theme.space[4]}px auto;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: auto;
  border-radius: ${p => p.theme.radii.sm};

  overflow: hidden;
  box-shadow: ${p => p.theme.boxShadows.primary};
  transition: ${p => p.theme.transition};
`;
export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.none};
  line-height: ${p => p.theme.lineHeights.body};
  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.text};
  outline: transparent;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  transition: ${p => p.theme.transition};
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 38px;
  border: ${p => p.theme.borders.none};
  opacity: 0.8;
  transition: ${p => p.theme.transition};
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
