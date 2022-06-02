import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/authSlice';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const logIn = useSelector(state => state.auth.login);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logIn());
  }

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  }

  const passChangeHandler = event => {
    setPass(event.target.value);
  }
  return (
    !logIn && <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} onChange={emailChangeHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={pass} onChange={passChangeHandler} />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
