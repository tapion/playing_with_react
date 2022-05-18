import { useState, useCallback } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const nameValidation = useCallback((value) => {
    return value.trim() !== "";
  },[]);
  const {
    value: name,
    handlerChange: handlerNameInput,
    handlerBlur: handlerOnBlurName,
    hasError: isAnInvalidName,
    reset: resetName,
  } = useInput(nameValidation);
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [isValidName, setIsValidName] = useState(false);
  const [isValidCorrectEmail, setIsValidCorrectEmail] = useState(false);
  const [hasChangeForm, setHasChangeForm] = useState(false);

  // const isAnInvalidName = !isValidName && hasChangeForm;
  const isAnInvalidEmail = !isValidCorrectEmail && hasChangeForm;
  const nameCSSClass = isAnInvalidName
    ? "form-control invalid"
    : "form-control";
  const emailCSSClass = isAnInvalidEmail
    ? "form-control invalid"
    : "form-control";

  // const handlerNameInput = (event) => {
  //   setName(event.target.value);
  //   setHasChangeForm(true);
  //   if (event.target.value.trim() !== "") {
  //     setIsValidName(true);
  //   } else {
  //     setIsValidName(false);
  //   }
  // };

  // const handlerOnBlurName = () => {
  //   setHasChangeForm(true);
  //   if (name.trim() === "") setIsValidName(false);
  // };

  const isValidEmail = (email) => {
    setIsValidCorrectEmail(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    );
  };

  const handlerChangeEmail = (event) => {
    setEmail(event.target.value);
    isValidEmail(event.target.value);
  };

  const handlerOnBlurEmail = () => {
    isValidEmail(email);
    setHasChangeForm(true);
  };

  const handlerSubmitForm = (event) => {
    event.preventDefault();
    resetName();
    setEmail("");
    setHasChangeForm(false);
  };

  return (
    <form onSubmit={handlerSubmitForm}>
      <div className={nameCSSClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handlerNameInput}
          onBlur={handlerOnBlurName}
          value={name}
        />
        {isAnInvalidName && <p>Name is not valid</p>}
      </div>
      <div className={emailCSSClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={handlerChangeEmail}
          onBlur={handlerOnBlurEmail}
          value={email}
        />
        {isAnInvalidEmail && <p>Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
