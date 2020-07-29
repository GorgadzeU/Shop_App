import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import ShopNavigator from './navigation/shop-navigator';

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
