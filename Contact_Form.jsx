import { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

const MyForm = () => (
    <div>
        <h1>Contact Form</h1>
        <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.phone) {
                    errors.phone = 'Required';
                } else if (
                    !/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(values.phone)
                ) {
                    errors.phone = 'Invalid phone number';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
           {({values, handleSubmit}) => (
            < form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && errors.email}
                <input
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                />
                {errors.email && errors.phone}
                <button type="submit">
                    Submit
                </button>
            </form>
           )}
        </Formik>
    </div >
);

export default MyForm;