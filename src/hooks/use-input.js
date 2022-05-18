import { useState } from "react";

const useInput = (validation) => {
  const [value, setvalue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [hasChange, setHasChange] = useState(false);

  console.log('hasChange',hasChange);
  console.log('isValid',isValid);
  const hasError = !isValid && hasChange;

  const handlerChange = (event) => {
    setvalue(event.target.value);
    setHasChange(true);
    if (validation(event.target.value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handlerBlur = () => {
    setHasChange(true);
    if (!validation(value)) setIsValid(false);
  }

  const reset = () => {
    setHasChange(false);
    setvalue('');
  }

  return {
      value,
      handlerChange,
      handlerBlur,
      hasError,
      reset,
  }
};

export default useInput;
