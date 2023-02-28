import { Link } from '../AppBar/AppBar.styled';
import { NavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </NavContainer>
  );
};
