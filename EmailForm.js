import React from 'react';
import { Formik } from 'formik';

const MyForm = () => {
    const [form, setForm] = useState({});
    const [state, setState] = useState({ description: "" });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        const isValid =
            form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sent successfully!" : "Please fill out all the fields!");
    }

    function handleFile(values) {
        console.log({ fileName: values.file.name });
    }

    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ name: '', email: '', phone: '', message: '', file: [] }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.phone) {
                        errors.phone = 'Required';
                    } else if (
                        !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(values.phone)
                    ) {
                        errors.phone = 'Invalid phone number';
                    }

                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <input
                            type="phone"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                        <textarea value={state.description} />
                        <input type="file" name="file" onChange={(event) => { setFieldValue("file", event.currentTarget.files[0]) }} />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div >
    )
};

export default MyForm;