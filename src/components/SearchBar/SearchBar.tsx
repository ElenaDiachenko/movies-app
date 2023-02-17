import { FC } from 'react';
import { Formik } from 'formik';
import { HiSearch } from 'react-icons/hi';
import { Container, SearchForm, Input, Button } from './SearchBar.styled';

export interface IFormValues {
  value: string;
}

const initialValues = {
  value: '',
};

interface SearchBarProps {
  onSubmit: (values: IFormValues) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = async (
    values: IFormValues,
    actions: { setSubmitting: (arg0: boolean) => void; resetForm: () => void }
  ) => {
    await onSubmit(values);

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => {
          return (
            <SearchForm>
              <Button type="submit" disabled={isSubmitting}>
                <HiSearch size={25} />
              </Button>

              <Input
                name="value"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
              />
            </SearchForm>
          );
        }}
      </Formik>
    </Container>
  );
};
