import { useSelector } from 'react-redux';
import {
  getUserName,
  getIsLoggedIn,
  getIsRefreshingUser,
} from '../../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshingUser);
  const user = useSelector(getUserName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
