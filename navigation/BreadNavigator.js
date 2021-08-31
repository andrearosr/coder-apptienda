import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadsScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={ROUTES.HOME} options={{ title: 'Categorías' }} component={CategoriesScreen} />
      <Stack.Screen name="Products" component={CategoryBreadScreen} />
      <Stack.Screen name="Detail" component={BreadDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;
