import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import { shallow } from 'zustand/shallow';
import {
  Container,
  Button,
  Label,
  Input,
  Message,
  Title,
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
  const navigate = useNavigate();
  const { loading, error, register, user } = useStore(
    state => ({
      loading: state.loading,
      error: state.error,
      register: state.registerUser,
      user: state.authUser,
    }),
    shallow
  );

  console.log(user, 'register');
  const handleSubmit = (
    value: IFormRegisterValues,
    { resetForm, setSubmitting }: FormikHelpers<IFormRegisterValues>
  ) => {
    setSubmitting(false);
    alert(JSON.stringify(value));
    register(value);
    resetForm();
  };
  return (
    <Container>
      <Title>Sign Up</Title>
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
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your username"
                />
                <Message name="name" component="span" />
              </Label>
              <Label>
                Email adress
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email adress"
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
              <Button type="submit" disabled={isSubmitting}>
                SignUp
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
