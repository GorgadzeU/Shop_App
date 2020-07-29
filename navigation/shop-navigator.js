import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Colors from '../constants/Colors';

import ProductsOverviewScreen from '../screens/shop/products-overview-screen';
import ProductDetailScreen from '../screens/shop/product-detail-screen';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerTintColor: 'white',
    },
  }
);

export default createAppContainer(ProductsNavigator);
