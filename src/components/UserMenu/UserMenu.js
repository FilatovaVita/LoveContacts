import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { BiLogOut } from 'react-icons/bi';
import { LogOutButton, UserNavContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavContainer>
      <p>Welcome, {user.name}</p>
      <LogOutButton type="button" onClick={() => dispatch(logOut())}>
        <BiLogOut style={{ width: 50, height: 50 }} />
        Logout
      </LogOutButton>
    </UserNavContainer>
  );
};
