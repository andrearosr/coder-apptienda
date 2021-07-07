import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import Colors from '../constants/colors';

const Stack = createStackNavigator();

const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
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
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{ title: 'Mi Pan' }}
      />
      <Stack.Screen
        name="BreadCategory"
        component={CategoryBreadScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="DetailBread"
        component={BreadDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BreadNavigator;