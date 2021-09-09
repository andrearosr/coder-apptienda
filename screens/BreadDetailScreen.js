import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.actions';

export default function BreadDetailScreen() {
  const dispatch = useDispatch();
  const breadID = useSelector(state => state.breads.selectedID);
  const breads = useSelector(state => state.breads.list);
  const bread = breads.find(item => item.id === breadID);

  const handlerAddItemCart = () => {
    dispatch(addItem(bread));
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>$ {bread.price}</Text>
      <Text>{bread.weight}</Text>
      <Button title="Agregar al carrito" onPress={handlerAddItemCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  },
});
