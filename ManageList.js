import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const [form, setForm] = useState({});
const [books, setBooks] = useState([]);
const [indexSelected, setIndexSelected] = useState(-1);

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    number: Yup.number().required('Number is required')
});

const handleChange = (event) => {
    event.preventDefault();
    setForm(
        {
            ...form,
            [event.target.name]: event.target.value
        }
    )
};

const handleSelect = (books, index) => {
    setForm();
    setIndexSelected()
}

const handleDelete = (index) => {
    const newBooks = JSON.parse(JSON.stringtify(books));
    newBooks.splice(index);
    setBooks();
}

const handleSubmit = () => {
    const newBooks = JSON.parse(JSON.stringtify(books));
    { indexSelected > -1 ? splice(indexSelected, 1, form) : newBooks.push(form)};
    setBooks();
    setForm();
    setIndexSelected();
}

const MyForm = () => (
    <div>
        <h1>Library</h1>
        <Formik
            initialValues={{ title: '', number: '' }}
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
                        name="title"
                        value={values.title}
                    />
                    <input
                        type="number"
                        name="number"
                        value={values.number}
                    />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
            <table>
                <tr>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Actions</th>
                </tr>
            </table>
        </Formik>
    </div>
);

export default MyForm;