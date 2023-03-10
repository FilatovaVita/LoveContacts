import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { PhonebookContainer } from '../components/App/App.styled';

export default function Login() {
  return (
    <PhonebookContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h3>Sign in to your account 👋</h3>
      <LoginForm />
    </PhonebookContainer>
  );
}
