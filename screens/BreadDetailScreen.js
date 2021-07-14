import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const BreadDetailScreen = () => {
  const item = useSelector(state => state.breads.selected) || {};

  return (
    <View style={styles.screen}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
      <Text>{item.weight}gr</Text>
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
