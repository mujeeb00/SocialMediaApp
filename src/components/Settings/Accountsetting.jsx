import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AccountSetting = ({ inputs, title, handleSubmit }) => {
  const initialValues = {};
  inputs.forEach((input) => {
    initialValues[input.name] = input.value || '';
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
        'Password must contain at least one letter and one number'
      )
      .required('Password is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    // Add more fields and validation rules as needed
  });

  return (
    <div className="mainContainer rounded d-flex flex-column">
      <h4 className="text-light mb-4">{title.name}</h4>
      <p className="text-secondary">{title.description}</p>
      <div className="card-body">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="row">
            {inputs.map((input, index) => (
              <div className={input.colClass} key={index}>
                <label className="form-label label">{input.label}</label>
                {input.type === 'textarea' ? (
                  <Field
                    as="textarea"
                    className="form-control text-secondary bg-dark border-0"
                    rows={input.rows}
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                ) : (
                  <Field
                    type={input.type}
                    className="form-control bg-dark text-secondary border-0"
                    name={input.name}
                    placeholder={input.placeholder}
                  />
                )}
                <ErrorMessage name={input.name} component="small" className="text-danger" />
              </div>
            ))}
            <div className="col-12 d-flex justify-content-center align-items-center mt-4">
              <button type="submit" className="btn btn-sm btn-primary">
                Save changes
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AccountSetting;
