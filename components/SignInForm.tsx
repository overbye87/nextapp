import React from 'react';
import { FormikProps, useFormik } from 'formik';
import styled from 'styled-components';

import { ISignIn } from '../types/main';
import CustomTextField from './CustomTextField';
import CustomButton from './CustomButton';

type Props = {
  initialValues: ISignIn;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ISignIn) => void;
};

const Form: React.FC<Props> = (props) => {
  const formik: FormikProps<ISignIn> = useFormik<ISignIn>({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <CustomTextField
        id="email"
        label = "EMAIL"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <CustomTextField
        type="password"
        id="password"
        label = "PASSWORD"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <CustomButton
        type="submit"
        disabled = {!formik.isValid || formik.isSubmitting}
      >
        SUBMIT
      </CustomButton>
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

export default Form;
