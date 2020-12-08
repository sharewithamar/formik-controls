import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer(props) {
  const initialValues = { email: '', description: '' };
  const validationSchema = Yup.object({
    email: Yup.string().required('Email Required').email('Invalid email'),
    description: Yup.string().required('Description Required'),
  });
  const onSubmit = (values) => console.log('Form data', values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="label"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <button type="submit"> Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
