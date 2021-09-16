import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from '../../constants/colors';
import OrdersScreen from '../../screens/orders/OrdersScreen';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
  >
    <Stack.Screen
      name="Orders"
      component={OrdersScreen}
      options={{ title: 'Ordenes' }}
    />
  </Stack.Navigator>
);

export default OrdersNavigator;
