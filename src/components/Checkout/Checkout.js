import { useContext, useState } from "react";
import useHttp from "../../hooks/use-http";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

const Checkout = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const cartCtx = useContext(CartContext);
  const { fetchOrGetData } = useHttp();
  const handlerSubmit = (event) => {
    event.preventDefault();
    const buildBody = {
      name,
      address,
      totalAmount: cartCtx.totalAmount,
      items: cartCtx.items,
    };
    const config = {
      url: "https://customhook-7d8ba-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      body: buildBody,
      headers: { "Content-Type": "application/json" },
    };
    fetchOrGetData(config, () => alert('Enviado exitosamente'));
  };

  const handlerChangeName = (event) => {
    setName(event.target.value);
  };
  const handlerChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={handlerChangeName}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handlerChangeAddress}
        />
        <button type="submit">Checkout</button>
        <div>
          <span>Order Summary Total: {cartCtx.totalAmount}</span>
          <ul>
            {cartCtx.items.map((itm) => {
              return (
                <li>
                  {itm.name}: ${itm.price}, amount {itm.amount}
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
