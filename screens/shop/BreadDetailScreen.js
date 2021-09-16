import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { addItem } from '../../store/actions/cart.actions';
import { COLORS } from '../../constants/colors';

export default function BreadDetailScreen({ navigation }) {
  const dispatch = useDispatch();
  const breadID = useSelector(state => state.breads.selectedID);
  const breads = useSelector(state => state.breads.list);
  const bread = breads.find(item => item.id === breadID);

  const handlerAddItemCart = () => {
    dispatch(addItem(bread));
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text>{bread.description}</Text>
        <Text>$ {bread.price}</Text>
        <Text>{bread.weight}</Text>
      </View>
      <Button
        title="Agregar al carrito"
        icon={<Ionicons name="add" size={24} color="white" />}
        color={COLORS.primary}
        onPress={handlerAddItemCart}
      />
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
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  },
});
