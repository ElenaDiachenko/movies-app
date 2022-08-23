import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { HiSearch } from 'react-icons/hi';
import { SearchForm, Input, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ value: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => {
          // console.log(isSubmitting);
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
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
