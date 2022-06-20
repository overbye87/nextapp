/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ISignIn } from '../types/main';

const defaultValues = {
  email: 'admin@admin.ru',
  password: 'admin',
};

type Props = {
  initialValues?: ISignIn;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ISignIn) => void;
};

const SignInForm: React.FC<Props> = ({
  initialValues,
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues: initialValues || defaultValues,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        label="EMAIL"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        type="password"
        id="password"
        label="PASSWORD"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button
        type="submit"
        disabled={!formik.isValid || formik.isSubmitting}
      >
        SUBMIT
      </Button>
    </StyledForm>
  );
};

SignInForm.defaultProps = {
  initialValues: defaultValues,
} as Props;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 300px;
  margin: 0 auto;
`;

export default SignInForm;
