import CartItem from '../../models/cart-item';
import { Provider } from 'react-redux';

const INITIAL_STATE = {
  cartItems: {},
  totalAmount: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const addedProduct = action.payload;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      if (state.cartItems[addedProduct.id]) {
        const updatedCartItem = new CartItem(
          state.cartItems[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.cartItems[addedProduct.id].sum + productPrice
        );
        return {
          ...state,
          cartItems: { ...state.cartItems, [addedProduct.id]: updatedCartItem },
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        const newCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );

        return {
          ...state,
          cartItems: { ...state.cartItems, [addedProduct.id]: newCartItem },
          totalAmount: state.totalAmount + productPrice,
        };
      }

    default:
      return state;
  }
};
