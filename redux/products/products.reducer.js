import PRODUCTS from '../../data/dummy-data';

const INITIAL_STATE = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.id === 'u1'),
};

const productsReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default productsReducer;
