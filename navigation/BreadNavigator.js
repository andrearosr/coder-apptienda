import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';

const Stack = createStackNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="BreadCategory" component={CategoryBreadScreen} />
      <Stack.Screen name="DetailBread" component={BreadDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;