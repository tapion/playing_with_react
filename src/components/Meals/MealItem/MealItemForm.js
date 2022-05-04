import { useRef } from 'react';
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
  const inputRef = useRef();
  //onAddItem

  const handlerSubmit = event => {
    event.preventDefault();
    const amount = inputRef.current.value;
    const amountInt = +amount;
    if(amount.trim().lenght === 0 || amountInt < 1 || amountInt > 5){
      return ;
    }

    props.onAddItem(amountInt);

  }

  return (
    <form className={classes.form} onSubmit={handlerSubmit}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{ id: `amount_${props.id}`, type: "number", min: 1, max: 5, step: 1, defaultValue: 1 }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
