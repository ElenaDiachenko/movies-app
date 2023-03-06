import { Formik, Form, FormikHelpers } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import {
  SubmitButton,
  ButtonStyledLink,
  Label,
  Input,
  Message,
  Title,
  Container,
  ButtonBox,
} from '../Form.styled';

import { validationSchema } from 'utils/schemas/LoginSchema';
import { useStore } from 'stores/store';

const initialValues = {
  email: '',
  password: '',
};

export type IFormLoginValues = {
  email: string;
  password: string;
};
export const LoginForm = () => {
  const { loading, error, login } = useStore(
    state => ({
      loading: state.loading,
      error: state.error,
      login: state.loginUser,
    }),
    shallow
  );
  const navigate = useNavigate();

  const handleSubmit = (
    value: IFormLoginValues,
    { resetForm, setSubmitting }: FormikHelpers<IFormLoginValues>
  ) => {
    setSubmitting(false);
    login(value);
    resetForm();
  };
  return (
    <Container>
      {error ?<Title>Something went wrong, try again later</Title>:null}
      <Title>Log In</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Label>
                Email adress
                <Input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
                <Message name="email" component="span" />
              </Label>

              <Label>
                Password
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <Message name="password" component="span" />
              </Label>
              <ButtonBox>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {!loading ? (
                    <span>Login</span>
                  ) : (
                    <TailSpin color="#fff" height={30} width={30} />
                  )}
                </SubmitButton>
                <ButtonStyledLink onClick={() => navigate('/register')}>
                  Register
                </ButtonStyledLink>
              </ButtonBox>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
