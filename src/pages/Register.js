import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { PhonebookContainer } from '../components/App/App.styled';

export default function Register() {
  return (
    <PhonebookContainer>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <h3>Create your account!😻</h3>
      <RegisterForm />
    </PhonebookContainer>
  );
}
