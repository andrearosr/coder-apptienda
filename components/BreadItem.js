import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchableComponent from './TouchableComponent';

const BreadItem = ({ item, onSelected }) => {
  return (
    <TouchableComponent onPress={() => onSelected(item)} style={styles.breadItem}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableComponent>
  );
}

const styles = StyleSheet.create({
  breadItem: {
    height: 150,
    backgroundColor: '#ccc',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
  },
  price: {
    fontFamily: 'open-sans',
  },
});

export default BreadItem;