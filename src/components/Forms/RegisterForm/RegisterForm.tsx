import { useNavigate } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import { shallow } from 'zustand/shallow';
import {
  Container,
  SubmitButton,
  ButtonStyledLink,
  Label,
  Input,
  Message,
  Title,
  ButtonBox,
} from '../Form.styled';
import { validationSchema } from 'utils/schemas/RegisterSchema';
import { useStore } from 'stores/store';

export type IFormRegisterValues = {
  name: string;
  email: string;
  password: string;
};

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const { register, loading, error } = useStore(
    state => ({
      loading: state.loading,
      error: state.error,
      register: state.registerUser,
    }),
    shallow
  );
  const navigate = useNavigate();

  const handleSubmit = (
    value: IFormRegisterValues,
    { resetForm, setSubmitting }: FormikHelpers<IFormRegisterValues>
  ) => {
    setSubmitting(false);
    register(value);
    resetForm();
  };
  return (
    <Container>
      {error ? <Title>Something went wrong, try again later</Title> : null}
      <Title>Register</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Label>
                Name
                <Input type="text" name="name" placeholder="Enter your name" />
                <Message name="name" component="span" />
              </Label>
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
                  placeholder="Enter your password (min 6 symbol)"
                />
                <Message name="password" component="span" />
              </Label>
              <ButtonBox>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {!loading ? (
                    <span>Register</span>
                  ) : (
                    <TailSpin color="#fff" height={30} width={30} />
                  )}
                </SubmitButton>
                <ButtonStyledLink onClick={() => navigate('/login')}>
                  Log In
                </ButtonStyledLink>
              </ButtonBox>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
