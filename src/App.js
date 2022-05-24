import { useState } from 'react';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from './store/CartContextProvider';
import Checkout from './components/Checkout/Checkout';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenCheckout, setIsOpenCheckout] = useState(false);
  const handleCloseCheckout = () => setIsOpenCheckout(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  return (
    <CartContextProvider>
      {isOpenModal && <Cart onClose={handleCloseModal} onOrder={setIsOpenCheckout} />}
      {isOpenCheckout && <Checkout onClose={handleCloseCheckout} />}
      <Header onClick={handleOpenModal} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
