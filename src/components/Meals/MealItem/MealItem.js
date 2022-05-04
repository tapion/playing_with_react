import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const itemCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const handlerAddItem = (amount) => {
    itemCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount,
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.descripcion}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddItem={handlerAddItem} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
