import { useCallback } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const emailValidation = useCallback((email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }, []);
  const {
    value: email,
    handlerChange: handlerEmailInput,
    handlerBlur: handlerOnBlurEmail,
    hasError: isAnInvalidEmail,
    reset: resetEmail,
  } = useInput(emailValidation);
  const nameValidation = useCallback((value) => {
    return value.trim() !== "";
  }, []);
  const {
    value: name,
    handlerChange: handlerNameInput,
    handlerBlur: handlerOnBlurName,
    hasError: isAnInvalidName,
    reset: resetName,
  } = useInput(nameValidation);

  const {
    value: lasName,
    handlerChange: handlerLastNameInput,
    handlerBlur: handlerOnBlurLastName,
    hasError: isAnInvalidLastName,
    reset: resetLastName,
  } = useInput(nameValidation);

  const nameCSSClass = isAnInvalidName
    ? "form-control invalid"
    : "form-control";

  const lastNameCSSClass = isAnInvalidLastName
    ? "form-control invalid"
    : "form-control";

  const emailCSSClass = isAnInvalidEmail
    ? "form-control invalid"
    : "form-control";

  const handlerSubmit = (event) => {
    event.preventDafault();
    resetName();
    resetLastName();
    resetEmail();
  };
  return (
    <form onSubmit={handlerSubmit}>
      <div className="control-group">
        <div className={nameCSSClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handlerNameInput}
            onBlur={handlerOnBlurName}
          />
          {isAnInvalidName && <p>Invalid First Name</p>}
        </div>
        <div className={lastNameCSSClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lasName}
            onChange={handlerLastNameInput}
            onBlur={handlerOnBlurLastName}
          />
          {isAnInvalidLastName && <p>Invalid Last Name</p>}
        </div>
      </div>
      <div className={emailCSSClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onBlur={handlerOnBlurEmail}
          onChange={handlerEmailInput}
        />
        {isAnInvalidEmail && <p>Invalid Email</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
