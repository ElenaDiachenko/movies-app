import { Formik, Form, FormikHelpers } from 'formik';
import {
  Button,
  Label,
  Input,
  Message,
  Title,
  Container,
} from '../Form.styled';

import { validationSchema } from 'utils/schemas/LoginSchema';

const initialValues = {
  email: '',
  password: '',
};

type IFormLoginValues = {
  email: string;
  password: string;
};
export const LoginForm = () => {
  const handleSubmit = (
    value: IFormLoginValues,
    { resetForm, setSubmitting }: FormikHelpers<IFormLoginValues>
  ) => {
    setSubmitting(false);
    alert(JSON.stringify(value));
    resetForm();
  };
  return (
    <Container>
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
                  placeholder="Enter your email adress"
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
              <Button type="submit" disabled={isSubmitting}>
                LogIn
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};
