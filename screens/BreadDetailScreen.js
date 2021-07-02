import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BreadDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Bread Detail Screen</Text>
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
