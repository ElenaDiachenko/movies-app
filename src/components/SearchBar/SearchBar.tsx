import { FC, ChangeEvent } from 'react';
import { Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = async (
    values: IFormValues,
    actions: { setSubmitting: (arg0: boolean) => void; resetForm: () => void }
  ) => {
    await onSubmit(values);

    actions.setSubmitting(false);

    // actions.resetForm();
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting, setFieldValue, handleChange }) => {
          handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setFieldValue('value', e.target.value);
            if (e.target.value === '') {
              setSearchParams({});
            }
          };
          return (
            <SearchForm>
              <Button type="submit" disabled={isSubmitting}>
                <HiSearch size={25} />
              </Button>

              <Input
                name="value"
                type="text"
                onChange={handleChange}
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
