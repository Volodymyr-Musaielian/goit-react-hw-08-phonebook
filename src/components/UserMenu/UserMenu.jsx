import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';
import avatar from './avatar.png';
import { useAuth } from '../hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  //   const avatar = defaultAvatar;

  return (
    <div className={css.container}>
      <img src={avatar} alt="User" width="32" className={css.avatar} />
      <span className={css.name}>Welcome,{user.name}</span>
      <button
        type="button"
        className={css.btnLogOut}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
