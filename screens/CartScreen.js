import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/actions/cart.actions';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  const handlerDeleteItem = (id) => dispatch(removeItem(id));

  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff'
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSansBold',
    padding: 8,
  },
});

export default CartScreen;