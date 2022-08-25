import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled.div`
  top: 8px;
  left: 0;
  position: sticky;
  z-index: 15;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.sm};
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.none};
  line-height: ${p => p.theme.lineHeights.body};
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: ${p => p.theme.borders.none};
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
