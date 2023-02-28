import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  AddButton,
  FormStyled,
  InputStyle,
} from '../ContactForm/ContactForm.styled';
import { logIn } from '../../redux/auth/operations';

const schema = yup.object().shape({
  password: yup.string().required('Please Enter your password'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  // ),
  email: yup.string().email().required('Please Enter your Email'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    const loginValue = { email, password };
    dispatch(logIn(loginValue));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyled>
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

        <AddButton type="submit">Log In</AddButton>
      </FormStyled>
    </Formik>
  );
};
