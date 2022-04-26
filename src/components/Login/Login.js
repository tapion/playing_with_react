import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  switch(action.type){
    case 'LOAD_EMAIL':
      return {
        value: action.val,
        isValid: action.val.includes('@'),
      };
    case 'VALIDATE_EMAIL':
      return {
        value: state.value,
        isValid: state.value.includes('@'),
      };
    default:
      return {
        value: '',
        isValid: false,
      }
  }
}

const passReducer = (state, action) => {
  switch(action.type){
    case 'LOAD_PASS':
      return {
        value: action.val,
        isValid: action.val.trim().length > 6,
      };
    case 'VALIDATE_PASS':
      return {
        value: state.value,
        isValid: state.value.includes('@'),
      };
    default:
      return {
        value: '',
        isValid: false,
      }
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [ emailState, emailDispatch ] = useReducer(emailReducer,{
    value: '',
    isValid: null,
  });
  const [ passState, passDispatch ] = useReducer(passReducer,{
    value: '',
    isValid: null,
  });

  // useEffect(()=>{
  //   const timer = setTimeout(() => {
  //     console.log('inside useEffect')
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     clearInterval(timer);
  //     console.log('Cleaner');
  //   };
  // }, [enteredEmail, enteredPassword]);


  const emailChangeHandler = (event) => {
    emailDispatch({
      type: 'LOAD_EMAIL',
      val: event.target.value,
    });
    // setEnteredEmail(event.target.value);

    setFormIsValid(
      emailState.isValid && passState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    passDispatch({
      type: 'LOAD_PASS',
      val: event.target.value,
    });
    // setEnteredPassword(event.target.value);

    setFormIsValid(
      passState.isValid && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    emailDispatch({
      type: 'VALIDATE_EMAIL',
    });
  };

  const validatePasswordHandler = () => {
    emailDispatch({
      type: 'VALIDATE_PASS',
    });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
