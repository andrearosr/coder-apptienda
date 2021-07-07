import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BreadDetailScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Text>{route.params.item.name}</Text>
      <Text>{route.params.item.description}</Text>
      <Text>${route.params.item.price}</Text>
      <Text>{route.params.item.weight}gr</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BreadDetailScreen;
