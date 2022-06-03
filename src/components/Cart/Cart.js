import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartList = useSelector((state) => state.cart.items);
  console.log('cartList',cartList);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartList.map((cart) => (
          <CartItem
            key={cart.title}
            item={{ title: cart.title, quantity: cart.quantity, total: cart.total, price: cart.price }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
