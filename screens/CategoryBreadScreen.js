import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryBreadScreen = ({ navigation, styles }) => {
  return (
    <View style={[styles.screen, styles]}>
      <Text>Category Bread Screen</Text>
      <Button
        title="Ir a Detalle"
        onPress={() => {
          navigation.navigate('DetailBread')
        }}
      />
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

export default CategoryBreadScreen;
