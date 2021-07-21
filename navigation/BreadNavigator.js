import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import CartScreen from '../screens/CartScreen';
import Colors from '../constants/colors';

const BreadStack = createStackNavigator();

const BreadNavigator = () => (
  <BreadStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
    <BreadStack.Screen
      name="Home"
      component={CategoriesScreen}
      options={{ title: 'Mi Pan' }}
    />
    <BreadStack.Screen
      name="BreadCategory"
      component={CategoryBreadScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <BreadStack.Screen
      name="DetailBread"
      component={BreadDetailScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <BreadStack.Screen
      name="Cart"
      component={CartScreen}
      options={{ title: 'Carrito' }}
    />
  </BreadStack.Navigator>
);

export default BreadNavigator;