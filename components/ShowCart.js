import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors';

const ShowCart = ({ navigation }) => {
  const handleShowCart = () => navigation.push('Cart');

  return (
    <View>
      <Button title="Ver Carrito" onPress={handleShowCart} color={Colors.primary} />
    </View>
  )
}

export default ShowCart;