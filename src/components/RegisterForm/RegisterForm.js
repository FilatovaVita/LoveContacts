import { Formik, ErrorMessage } from 'formik';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  AddButton,
  FormStyled,
  InputStyle,
} from '../ContactForm/ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Please Enter your name')
    .matches(
      /^[a-zA-Zа-яА-Я]+((['`_ -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  password: yup.string().required('Please Enter your password'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  // ),
  email: yup.string().email().required('Please Enter your Email'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    const registerValue = { name, email, password };
    dispatch(register(registerValue));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
        <label>Name</label>
        <InputStyle type="text" name="name" placeholder="Your Name" />
        <ErrorMessage name="name">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <label>Email</label>
        <InputStyle type="email" name="email" placeholder="Your Email" />
        <ErrorMessage name="email">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <label>Password</label>
        <InputStyle type="text" name="password" placeholder="Your Password" />
        <ErrorMessage name="password">
          {msg => <div style={{ color: 'red' }}>{msg}</div>}
        </ErrorMessage>

        <AddButton type="submit">Register</AddButton>
      </FormStyled>
    </Formik>
  );
};