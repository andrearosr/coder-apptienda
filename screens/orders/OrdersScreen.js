import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OrdersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Orders</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default OrdersScreen;