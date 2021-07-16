import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ShowCart from '../components/ShowCart';

import { addItem } from '../store/actions/cart.action';

const BreadDetailScreen = ({ navigation }) => {
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
      <ShowCart navigation={navigation} />
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
