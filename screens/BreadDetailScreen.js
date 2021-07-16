import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addItem } from '../store/actions/cart.action';

const BreadDetailScreen = () => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.breads.selected) || {};

  const handleAddItem = () => dispatch(addItem(item));

  return (
    <View style={styles.screen}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
      <Text>{item.weight}gr</Text>
      <Button title="AGREGAR AL CARRITO" onPress={handleAddItem} />
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
