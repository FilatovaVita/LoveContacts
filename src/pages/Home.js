import { HelloMassege, HeroLink } from '../components/App/App.styled';
import { RiHeartAddFill, RiUserHeartLine } from 'react-icons/ri';
import { BiLogIn } from 'react-icons/bi';

export default function Home() {
  return (
    <HelloMassege>
      <h1>
        Welcome to LoveContacts{' '}
        <RiUserHeartLine style={{ width: 50, height: 50 }} />
        Save your favorite contact here!
      </h1>
      <div>
        <h2>To use the application, first </h2>
        <HeroLink to="/register">
          <RiHeartAddFill style={{ width: 50, height: 50 }} />
          <p>Register</p>
        </HeroLink>
        <h2>or</h2>
        <HeroLink to="/login">
          <BiLogIn style={{ width: 50, height: 50 }} />
          <p>Log In</p>
        </HeroLink>
      </div>
    </HelloMassege>
  );
}
