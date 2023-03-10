import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Header, Link } from './AppBar.styled';
import { NavContainer } from '../AuthNav/AuthNav.styled';
import { BiBookHeart } from 'react-icons/bi';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <NavContainer>
        <Link to="/">
          <BiBookHeart style={{ width: 50, height: 50 }} />
          <p>LoveContacts</p>
        </Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </NavContainer>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
