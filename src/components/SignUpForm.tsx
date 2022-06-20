import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormikProps, useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { ISignUp } from '../types/main';

const defaultValues = {
  email: 'admin@admin.ru',
  password: 'admin',
  firstName: 'Jacob',
  lastName: 'Astrowsky',
  login: 'Kukuruzo',
};

type Props = {
  initialValues?: ISignUp;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ISignUp) => void;
};

const SignUpForm: React.FC<Props> = ({
  initialValues = defaultValues,
  onSubmit,
}) => {
  const formik: FormikProps<ISignUp> = useFormik<ISignUp>({
    initialValues,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        label = "EMAIL"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        type="password"
        id="password"
        label = "PASSWORD"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        id="firstName"
        label = "FIRST NAME"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        id="lastName"
        label = "LAST NAME"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        id="login"
        label = "LOGIN"
        value={formik.values.login}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button
        type="submit"
        disabled = {!formik.isValid || formik.isSubmitting}
      >
        SUBMIT
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 300px;
  margin: 0 auto;
`;

export default SignUpForm;
