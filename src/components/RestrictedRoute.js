import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
