import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ShopNavigator from '../shop';
import CartNavigator from '../cart';
import OrdersNavigator from '../orders';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { ...styles.shadow, ...styles.tabBar },
    }}
    initialRouteName="Shop"
  >
    <BottomTabs.Screen
      name="ShopTab"
      component={ShopNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-home" size={24} color="black" />
            <Text>Tienda</Text>
          </View>
        )
      }}
    />
    <BottomTabs.Screen
      name="CartTab"
      component={CartNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-cart" size={24} color="black" />
            <Text>Carrito</Text>
          </View>
        )
      }}
    />
    <BottomTabs.Screen
      name="OrdersTab"
      component={OrdersNavigator}
      options={{
        tabBarIcon: () => (
          <View style={styles.item}>
            <Ionicons name="md-list" size={24} color="black" />
            <Text>Ordenes</Text>
          </View>
        )
      }}
    />
  </BottomTabs.Navigator>
)


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabNavigator;

