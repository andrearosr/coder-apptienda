import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryBreadScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Category Bread Screen</Text>
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
