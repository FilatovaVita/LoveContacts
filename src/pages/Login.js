import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { PhonebookContainer } from '../components/App/App.styled';

export default function Login() {
  return (
    <PhonebookContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </PhonebookContainer>
  );
}
