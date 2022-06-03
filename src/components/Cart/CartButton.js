import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartSlice';

const CartButton = (props) => {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const toggleCartList = () => {
    console.log('hola')
    dispatch(cartActions.toggleCartList());
  }
  const totalItem = items.reduce((acc, item) => { return acc + item.quantity }, 0);
  return (
    <button className={classes.button} onClick={toggleCartList}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
