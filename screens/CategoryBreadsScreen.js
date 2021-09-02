import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { CATEGORIES } from '../data/categories';

export default function CategoryBreadsScreen({ navigation, route }) {
  const selectedCategory = CATEGORIES.find(cat => cat.id === route.params.categoryID);
  return (
    <View style={styles.container}>
      <Text>{selectedCategory.title}</Text>
      <Button title="GO TO DETAIL" onPress={() => navigation.navigate('Detail')} />
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
