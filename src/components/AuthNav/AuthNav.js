import { Link } from '../AppBar/AppBar.styled';
import { NavContainer } from './AuthNav.styled';
import { BiLogIn } from 'react-icons/bi';
import { RiHeartAddFill } from 'react-icons/ri';

export const AuthNav = () => {
  return (
    <NavContainer>
      <Link to="/register">
        <RiHeartAddFill style={{ width: 50, height: 50 }} />
        <p>Register</p>
      </Link>
      <Link to="/login">
        {' '}
        <BiLogIn style={{ width: 50, height: 50 }} />
        <p>Log In</p>
      </Link>
    </NavContainer>
  );
};
