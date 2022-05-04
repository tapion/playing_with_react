import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultItemState = {
    items: [],
    totalAmount: 0,
};

const itemsReducer = (state, action) => {
    let totalAmount;
    switch(action.type){
        case 'ADD':
            totalAmount = state.totalAmount + (action.item.price * action.item.amount);
            const hasAlreadyItem = state.items.findIndex( item => item.id === action.item.id);
            let listItems;
            if(hasAlreadyItem >= 0){
                const itemFound = { 
                    ...state.items[hasAlreadyItem],
                    amount: state.items[hasAlreadyItem].amount + action.item.amount
                };
                listItems = [
                    ...state.items
                ];
                listItems[hasAlreadyItem] = itemFound;
            }else {
                listItems = [ ...state.items, action.item];
            }
            return {
                items: listItems,
                totalAmount,
            };
        case 'REMOVE':
            const indexItem = state.items.findIndex(item => item.id === action.id);
            const foundItem = state.items[indexItem];
            let updatedItems;
            totalAmount = state.totalAmount - foundItem.price;
            if(foundItem.amount === 1){
                updatedItems = state.items.filter(item => item.id !== action.id);
            }else {
                updatedItems = [...state.items];
                updatedItems[indexItem] = {
                    ...foundItem,
                    amount: foundItem.amount - 1,
                }
            }
            return {
                items: updatedItems,
                totalAmount,
            }
        default:
            return defaultItemState;
    }
}

const CartContextProvider = props => {
    const [ stateItems, dispatchItems] = useReducer(itemsReducer, defaultItemState);
    const addItem = (item) => {
        dispatchItems({type: 'ADD', item});
    };
    const removeItem = (id) => {
        dispatchItems({type: 'REMOVE', id});
    };

    const cartContext = {
        items: stateItems.items,
        totalAmount: stateItems.totalAmount,
        addItem,
        removeItem,
    }

  return <CartContext.Provider value={cartContext} >
      {props.children}
  </CartContext.Provider>
}

export default CartContextProvider;