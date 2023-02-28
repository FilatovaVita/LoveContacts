import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { NavContainer } from '../AuthNav/AuthNav.styled';
import { DelButton } from '../ContactItem/ContactItem.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <NavContainer>
      <p>Welcome, {user.name}</p>
      <DelButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </DelButton>
    </NavContainer>
  );
};
