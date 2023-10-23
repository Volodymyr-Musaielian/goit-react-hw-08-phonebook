import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from '../LoginForm/LoginForm.module.css';

function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <div>
      <h1>Ragistration page</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name please"
            pattern="^[^\d]+$"
            title="The name must contain only letters, apostrophes, hyphens and indents"
            required
          />
        </label>

        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter email please"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
          />
        </label>

        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password 7 symbols"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
          />
        </label>

        <button type="submit" className={css.formBtn}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
