import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isBtnBump, setIsBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) return;
    setIsBtnBump(true);
    const timer = setTimeout(() => {
      setIsBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const totalItems = items.reduce((acc, item) => acc + item.amount, 0);
  const btnClasses = `${classes.button} ${isBtnBump ? classes.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}> {totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
