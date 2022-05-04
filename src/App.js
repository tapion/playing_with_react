import { useState } from 'react';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  return (
    <CartContextProvider>
      {isOpenModal && <Cart onClose={handleCloseModal} />}
      <Header onClick={handleOpenModal} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
