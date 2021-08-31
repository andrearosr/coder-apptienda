import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <Button title="GO TO PRODUCTS" onPress={() => navigation.navigate('Products')} />
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
});
